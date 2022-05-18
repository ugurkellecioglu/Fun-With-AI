import { useContext } from "react"
import Select, { StylesConfig } from "react-select"
import { AppContext } from "../../context/AppContext"
import styles from "./engines.module.scss"
const options = [
  {
    value: "text-davinci-002",
    label: "Text Davinci 2",
  },
  {
    value: "text-curie-001",
    label: "Text Curie 1",
  },
  {
    value: "text-babbage-001",
    label: "Text Babbage 1",
  },
  {
    value: "text-ada-001",
    label: "Text Ada 1",
  },
]
const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    minWidth: "220px",
    maxWidth: "220px",
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
    "&:hover": {
      border: "none",
      boxShadow: "none",
    },
  }),
}
const Engines = () => {
  const { setEngine, engine, setLoading } = useContext(AppContext)
  const findEngine = options.find((option: any) => option.value === engine)
  const handleChange = (e: any) => {
    setLoading(true)
    setEngine(e.value)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }
  return (
    <div className="engines">
      <p className={styles.title}>Select Engine</p>
      <Select
        defaultValue={findEngine}
        value={findEngine}
        onChange={(e) => handleChange(e)}
        options={options}
        styles={selectStyle}
      />
    </div>
  )
}

export default Engines
