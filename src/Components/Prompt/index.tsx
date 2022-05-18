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
      <TextArea
        placeholder="Write a poem about a dog wearing skis"
        rows={3}
        value={prompt}
        handleChange={handleChange}
      />
      <Button
        disabled={prompt.length === 0}
        text="Submit"
        handleClick={handleSubmit}
      />
    </div>
  )
}

export default Prompt
