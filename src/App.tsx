import "./App.scss"
import { Container, Prompt, Response } from "./Components"

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Hello World</h1>
        <Prompt />
        <Response />
      </Container>
    </div>
  )
}

export default App
