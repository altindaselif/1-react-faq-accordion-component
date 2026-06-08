import { useState } from "react";
import QuestionItem from "./QuestionItem";
import styles from "./QuestionList.module.css";

function QuestionList({ messages }) {
  const [activeId, setActiveId] = useState(1);

  return (
    <ul className={styles.questionList}>
      {messages.map((message) => (
        <QuestionItem
          key={message.id}
          message={message}
          isActive={message.id === activeId}
          onToggle={() => setActiveId(message.id)}
        />
      ))}
    </ul>
  );
}

export default QuestionList;
