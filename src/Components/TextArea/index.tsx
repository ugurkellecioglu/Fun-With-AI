import styles from "./textarea.module.scss"

interface TextAreaProps {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
}

const TextArea = ({ handleChange, value }: TextAreaProps) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        value={value}
        onChange={handleChange}
        className={styles.textarea}
        placeholder="Enter your name"
      />
    </div>
  )
}

export default TextArea
