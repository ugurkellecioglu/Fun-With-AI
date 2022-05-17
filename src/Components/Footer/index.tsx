import styles from "./footer.module.scss"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ugurkellecioglu/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ugurkellecioglu/"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
