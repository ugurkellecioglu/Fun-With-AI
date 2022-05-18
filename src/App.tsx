import "./App.scss"
import {
  Container,
  Engines,
  Footer,
  Intro,
  Presets,
  Prompt,
  Responses,
} from "./Components"
import { AppContext } from "./context/AppContext"
import { ClipLoader } from "react-spinners"
import React, { useCallback, useContext, useEffect } from "react"

function App() {
  const { setLoading, loading, setData } = useContext(AppContext)
  const fetchData = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setData(JSON.parse(localStorage.getItem("data") || "[]"))
      setLoading(false)
    }, 1000)
  }, [setData, setLoading])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <React.Fragment>
      <Intro />
      {loading && (
        <div className="loadingWrapper">
          <div className="loading">
            <ClipLoader loading={loading} />
          </div>
        </div>
      )}
      <div className="App">
        <Container
          stylesProps={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)" }}
        >
          <h1>Fun with AI</h1>
          <Container
            stylesProps={{
              height: "100%",
              minHeight: "100%",
              width: "80%",
            }}
          >
            <Prompt />
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
            <Responses />
          </Container>
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default App
