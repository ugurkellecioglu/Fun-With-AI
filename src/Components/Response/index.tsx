import styles from "./response.module.scss"

interface ResponseProps {
  prompt: string
  response: string
}
const Response = ({ prompt, response }: ResponseProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.prompt}>
          <span className={styles.subtitle}>Prompt:</span>
          <span className={styles.text}>{prompt}</span>
        </div>
        <div className={styles.response}>
          <span className={styles.subtitle}>Response:</span>
          <span className={styles.text}>{response}</span>
        </div>
      </div>
    </div>
  )
}

export default Response
