import styles from "./textarea.module.scss"
const TextArea = () => {
  return (
    <div className={styles.wrapper}>
      <textarea className={styles.textarea} placeholder="Enter your name" />
    </div>
  )
}

export default TextArea
