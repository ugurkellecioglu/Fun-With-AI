import "./App.scss"
import { Container, Footer, Prompt, Response } from "./Components"
import { AppContext } from "./context/AppContext"
import { ClipLoader } from "react-spinners"
import React, { useContext, useEffect } from "react"

function App() {
  const { setLoading, loading, setData, data } = useContext(AppContext)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setData(JSON.parse(localStorage.getItem("data") || "[]"))
      setLoading(false)
    }, 1000)
  }, [])

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
          {data &&
            data.map((item) => {
              return (
                <Response
                  key={item.index}
                  prompt={item.prompt}
                  response={item.text}
                  date={item.date}
                />
              )
            })}
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default App
