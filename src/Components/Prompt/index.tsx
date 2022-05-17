import React, { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import Button from "../Button"
import TextArea from "../TextArea"

interface dataInterface {
  prompt: string
  temperature: number
  max_tokens: number
  top_p: number
  frequency_penalty: number
  presence_penalty: number
}

const data = {
  prompt: "",
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
} as dataInterface

const Prompt = () => {
  const { prompt, setPrompt, handleSearch } = useContext(AppContext)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSearch(prompt)
  }

  return (
    <div>
      <TextArea value={prompt} handleChange={handleChange} />
      <Button handleClick={handleSubmit} />
    </div>
  )
}

export default Prompt
