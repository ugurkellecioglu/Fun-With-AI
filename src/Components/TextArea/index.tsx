import styles from "./textarea.module.scss"

interface TextAreaProps {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  placeholder?: string
  rows?: number
  [rest: string]: any
}

const TextArea = ({
  handleChange,
  value,
  placeholder,
  rows,
  ...rest
}: TextAreaProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Enter Prompt</p>
      <textarea
        value={value}
        onChange={handleChange}
        className={styles.textarea}
        rows={rows || 3}
        placeholder={placeholder || "..."}
        {...rest}
      />
    </div>
  )
}

export default TextArea
