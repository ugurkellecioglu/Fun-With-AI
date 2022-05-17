import styles from "./response.module.scss"
const Response = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.prompt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          laudantium!
        </div>
        <div className={styles.response}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          omnis quidem modi tempore similique cumque voluptate, animi ut odio
          praesentium, molestias libero? Consectetur dolor vero error cupiditate
          corrupti molestiae dolore, unde alias et dicta neque. Omnis qui harum,
          eius dolore consequatur corrupti eveniet, voluptates veritatis quis
          nostrum, et eum fugit.
        </div>
      </div>
    </div>
  )
}

export default Response
