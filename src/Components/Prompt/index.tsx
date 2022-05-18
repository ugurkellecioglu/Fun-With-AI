import React, { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Button from "../Button"
import TextArea from "../TextArea"

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
