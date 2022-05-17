import styles from "./response.module.scss"
const Response = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.prompt}>
          <span className={styles.subtitle}>Prompt:</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            laudantium!
          </span>
        </div>
        <div className={styles.response}>
          <span className={styles.subtitle}>Response:</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, omnis quidem modi tempore similique cumque voluptate,
            animi ut odio praesentium, molestias libero? Consectetur dolor vero
            error cupiditate corrupti molestiae dolore, unde alias et dicta
            neque. Omnis qui harum, eius dolore consequatur corrupti eveniet,
            voluptates veritatis quis nostrum, et eum fugit.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Response
