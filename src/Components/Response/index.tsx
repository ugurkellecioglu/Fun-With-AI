import styles from "./response.module.scss"
import Moment from "react-moment"

interface ResponseProps {
  prompt: string
  response: string
  date: string
}
const Response = ({ prompt, response, date }: ResponseProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.date}>
          <small>
            <Moment from={date}>{date}</Moment>
          </small>
        </div>
        <div className={styles.prompt}>
          <div className={styles.wrap}>
            <span className={styles.subtitle}>Prompt:</span>
          </div>
          <div>
            <span className={styles.text}>{prompt}</span>
          </div>
        </div>
        <div className={styles.response}>
          <div className={styles.wrap}>
            <span className={styles.subtitle}>Response:</span>
          </div>
          <span className={styles.text}>{response}</span>
        </div>
      </div>
    </div>
  )
}

export default Response
