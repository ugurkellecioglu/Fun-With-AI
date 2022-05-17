import React, { useEffect, useState } from "react"

//create appContext

interface AppContextProps {
  children: React.ReactNode
}

interface AppContextI {
  setData: Function
  data: Array<any>
  loading: boolean
  setLoading: Function
  error: boolean
  setError: Function
  handleSearch: Function
  prompt: string
  setPrompt: Function
  setEngine: Function
  engine: string
  setReqPayload: Function
  reqPayload: reqPayloadInterface
}
interface reqPayloadInterface {
  prompt: string
  temperature: number
  max_tokens: number
  top_p: number
  frequency_penalty: number
  presence_penalty: number
}
const defaultState: AppContextI = {
  setData: (data: any) => {},
  data: [],
  loading: false,
  setLoading: (loading: boolean) => {},
  error: false,
  setError: (error: boolean) => {},
  handleSearch: (prompt: string) => {},
  prompt: "",
  setPrompt: (prompt: string) => {},
  setEngine: (engine: string) => {},
  engine: "",
  setReqPayload: (reqPayload: reqPayloadInterface) => {},
  reqPayload: {
    prompt: "",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  },
}

export const AppContext = React.createContext<AppContextI>(defaultState)

export const AppProvider = ({ children }: AppContextProps) => {
  interface choiceI {
    finish_reason: string
    index: number
    logprobs?: any
    text: string
    prompt: string
  }

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [prompt, setPrompt] = useState("")

  const [engine, setEngine] = useState("text-curie-001")
  const [reqPayload, setReqPayload] = useState({
    prompt: "",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  } as reqPayloadInterface)
  const handleSearch = () => {
    setLoading(true)
    fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...reqPayload,
        prompt: reqPayload.prompt + prompt,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((json) => {
            setData(json.choices)
            setLoading(false)
            setError(false)
            const data = json.choices
              .map((choice: choiceI) => {
                return {
                  ...choice,
                  prompt: prompt,
                  date: new Date(),
                }
              })
              .concat(JSON.parse(localStorage.getItem("data") || "[]"))
            setData(data)
            localStorage.setItem("data", JSON.stringify(data))
          })
        } else {
          setError(true)
          setLoading(false)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <AppContext.Provider
      value={{
        setData,
        data,
        loading,
        setLoading,
        error,
        setError,
        handleSearch,
        prompt,
        setPrompt,
        setEngine,
        engine,
        setReqPayload,
        reqPayload,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
