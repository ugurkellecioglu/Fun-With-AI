import { useContext } from "react"
import Select from "react-select"
import { AppContext } from "../../context/AppContext"

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
      prompt: `I am a highly intelligent question answering bot. \n `,
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
      prompt: "Correct this to standard English: \n ",
    },
    engine: "text-davinci-002",
  },
  {
    value: "Movie to Emoji",
    label: "Movie to Emoji",
    reqPayloadInterface: {
      prompt: "Convert movie titles into emoji.\n ",
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["\n"],
    },
    engine: "text-davinci-002",
  },
]
const Presets = () => {
  const { reqPayload, prompt, setReqPayload, setEngine } =
    useContext(AppContext)
  const handleChange = (e: any) => {
    setReqPayload(e?.reqPayloadInterface)
    setEngine(e?.engine)
  }
  return (
    <>
      <p>Select a Preset</p>
      <Select onChange={handleChange} options={options} />
    </>
  )
}

export default Presets
