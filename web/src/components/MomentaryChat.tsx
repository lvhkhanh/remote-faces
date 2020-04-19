import React, { useState } from "react";

import "./MomentaryChat.css";
import { useMomentaryChat } from "../hooks/useMomentaryChat";

type ChatList = ReturnType<typeof useMomentaryChat>["chatList"];
type ReplyChat = ReturnType<typeof useMomentaryChat>["replyChat"];

const reactions = ["👍", "❤️", "😁", "😎", "🤣", "Send a PR!"];

const ReactionButton: React.FC<{
  text: string;
  onClick: (text: string) => void;
}> = ({ text, onClick }) => (
  <button type="button" onClick={() => onClick(text)}>
    <span aria-label="Reaction">{text}</span>
  </button>
);

const MomentaryChatContent = React.memo<{
  chatList: ChatList;
  replyChat: ReplyChat;
}>(({ chatList, replyChat }) => (
  <ul className="MomentaryChat-list">
    {chatList.map((item) => {
      const reply = (text: string) => replyChat(text, item.replyTo);
      return (
        <li key={item.key}>
          {item.nickname} - {item.text} {JSON.stringify(item.replies)}
          {reactions.map((text) => (
            <ReactionButton key={text} text={text} onClick={reply} />
          ))}
        </li>
      );
    })}
  </ul>
));

type Props = {
  roomId: string;
  userId: string;
  nickname: string;
};

const MomentaryChat: React.FC<Props> = ({ roomId, userId, nickname }) => {
  const { chatList, sendChat, replyChat } = useMomentaryChat(
    roomId,
    userId,
    nickname
  );

  const [text, setText] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text) {
      sendChat(text);
      setText("");
    }
  };

  return (
    <div className="MomentaryChat-container">
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" disabled={!text}>
          Send
        </button>
      </form>
      <MomentaryChatContent chatList={chatList} replyChat={replyChat} />
    </div>
  );
};

export default React.memo(MomentaryChat);
