import styles from "./QuestionItem.module.css";

function QuestionItem({ message, isActive, onToggle }) {
  return (
    <li
      className={`${styles.questionContainer} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.questionTitleContainer}>
        <button
          type="button"
          className={styles.questionToggleButton}
          aria-expanded={isActive}
          aria-label="Toggle answer"
          onClick={onToggle}
        >
          <h2 className={styles.questionTitle}>{message.question}</h2>
          <div className={styles.questionButtonContainer}>
            <img
              className={styles.buttonPlusIcon}
              src="/images/icon-plus.svg"
              alt=""
            />
            <img
              className={styles.buttonMinusIcon}
              src="/images/icon-minus.svg"
              alt=""
            />
          </div>
        </button>
      </div>
      <p className={styles.answer}>{message.answer}</p>
    </li>
  );
}

export default QuestionItem;
