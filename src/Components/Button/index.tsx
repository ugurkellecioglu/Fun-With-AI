import styles from "./button.module.scss"
interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  stylesProps?: Object
  text: string
  [x: string]: any
}
const Button = ({ handleClick, text, stylesProps, ...x }: ButtonProps) => {
  return (
    <button
      {...x}
      style={stylesProps}
      onClick={handleClick}
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default Button
