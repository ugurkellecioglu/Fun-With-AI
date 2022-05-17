import styles from "./input.module.scss"
const Input = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your name"
      />
    </div>
  )
}

export default Input
