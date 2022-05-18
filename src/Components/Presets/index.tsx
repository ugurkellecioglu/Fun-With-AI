import { useContext } from "react"
import Select, { StylesConfig } from "react-select"
import { AppContext } from "../../context/AppContext"
import styles from "./presets.module.scss"
const options = [
  {
    value: "Q&A",
    label: "Q&A",
    reqPayloadInterface: {
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      prompt: `I am a highly intelligent question answering bot: `,
    },
    engine: "text-davinci-002",
  },
  {
    value: "Grammar correction",
    label: "Grammar correction",
    reqPayloadInterface: {
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      prompt: "Correct this to standard English: ",
    },
    engine: "text-davinci-002",
  },
  {
    value: "Movie to Emoji",
    label: "Movie to Emoji",
    reqPayloadInterface: {
      prompt: "Convert movie titles into emoji: ",
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    },
    engine: "text-davinci-002",
  },
]

const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
    "&:hover": {
      border: "none",
      boxShadow: "none",
    },
  }),
}
const Presets = () => {
  const { setReqPayload, setEngine, setLoading } = useContext(AppContext)
  const handleChange = (e: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
    setReqPayload(e?.reqPayloadInterface)
    setEngine(e?.engine)
  }
  return (
    <div className={`${styles.wrapper} preset`}>
      <p className={styles.title}>Select a Preset</p>
      <Select styles={selectStyle} onChange={handleChange} options={options} />
    </div>
  )
}

export default Presets
