import styles from "./textarea.module.scss"

interface TextAreaProps {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
}

const TextArea = ({ handleChange, value }: TextAreaProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Enter Prompt</p>
      <textarea
        value={value}
        onChange={handleChange}
        className={styles.textarea}
        placeholder="Write a poem about a dog wearing skis"
      />
    </div>
  )
}

export default TextArea
