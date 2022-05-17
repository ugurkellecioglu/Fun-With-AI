import "./App.scss"
import { Container, Prompt, Response } from "./Components"
import { AppContext, AppProvider } from "./context/AppContext"
import { ClipLoader } from "react-spinners"
import React, { useContext } from "react"

function App() {
  const { loading } = useContext(AppContext)
  return (
    <React.Fragment>
      {loading && (
        <div className="loadingWrapper">
          <div className="loading">
            <ClipLoader loading={loading} />
          </div>
        </div>
      )}
      <div className="App">
        <Container>
          <h1>Fun with AI</h1>
          <Prompt />
          <Response />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default App
