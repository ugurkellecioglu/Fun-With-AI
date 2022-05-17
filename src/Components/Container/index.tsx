import styles from "./container.module.scss"

interface ContainerProps {
  children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Container
