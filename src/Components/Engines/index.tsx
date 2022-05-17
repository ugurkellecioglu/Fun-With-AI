import { useContext } from "react"
import Select from "react-select"
import { AppContext } from "../../context/AppContext"

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
const Engines = () => {
  const { setEngine, engine } = useContext(AppContext)
  const findEngine = options.find((option: any) => option.value === engine)
  return (
    <>
      <p>Select Engine</p>
      <Select
        defaultValue={findEngine}
        value={findEngine}
        onChange={(e) => setEngine(e?.value)}
        options={options}
      />
    </>
  )
}

export default Engines
