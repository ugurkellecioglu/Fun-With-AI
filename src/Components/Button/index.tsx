import styles from "./button.module.scss"
interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  stylesProps?: Object
}
const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      Submit
    </button>
  )
}

export default Button
