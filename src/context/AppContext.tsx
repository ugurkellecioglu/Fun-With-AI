import React, { useState } from "react"

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
}

export const AppContext = React.createContext<AppContextI>(defaultState)

export const AppProvider = ({ children }: AppContextProps) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [prompt, setPrompt] = useState("")

  const handleSearch = () => {
    setLoading(true)
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((json) => {
          setData(json.choices)
          setLoading(false)
        })
      } else {
        setError(true)
        setLoading(false)
      }
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
