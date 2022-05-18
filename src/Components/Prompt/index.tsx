import React, { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Button from "../Button"
import Container from "../Container"
import Engines from "../Engines"
import Presets from "../Presets"
import TextArea from "../TextArea"
import styles from "./prompt.module.scss"
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
    <div className={styles.prompt}>
      <TextArea
        placeholder="Write a poem about a dog wearing skis"
        rows={3}
        value={prompt}
        handleChange={handleChange}
      />
      <Button
        className={"submit-btn"}
        disabled={prompt.length === 0}
        text="Submit"
        handleClick={handleSubmit}
      />
      <Container
        stylesProps={{
          height: "100%",
          minHeight: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Engines />
        <Presets />
      </Container>
    </div>
  )
}

export default Prompt
