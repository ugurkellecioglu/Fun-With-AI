import styles from "./container.module.scss"

interface ContainerProps {
  children: React.ReactNode
  stylesProps?: Object
}
const Container = ({ children, stylesProps }: ContainerProps) => {
  return (
    <div style={stylesProps} className={styles.wrapper}>
      {children}
    </div>
  )
}

export default Container
