import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Response from "../Response"
import styles from "./responses.module.scss"
const Responses = () => {
  const { data } = useContext(AppContext)
  const responses = data.map((item) => (
    <Response
      key={item.index}
      prompt={item.prompt}
      response={item.text}
      date={item.date}
    />
  ))

  if (responses.length > 0)
    return (
      <div className={`${styles.responses} responses`}>
        <h1 className={`${styles.title} responses-title`}>Responses</h1>
        {responses}
      </div>
    )
  return (
    <div className={styles.noResponses}>
      <h3>There is no data to show yet.</h3>
    </div>
  )
}
export default Responses
