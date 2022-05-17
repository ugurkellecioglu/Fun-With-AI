import "./App.scss"
import { Container, Prompt, Response } from "./Components"
import { AppProvider } from "./context/AppContext"

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Container>
          <h1>Hello World</h1>
          <Prompt />
          <Response />
        </Container>
      </div>
    </AppProvider>
  )
}

export default App
