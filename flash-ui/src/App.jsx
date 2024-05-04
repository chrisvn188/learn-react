import Button from './components/Button.jsx'
import Menu from './components/Menu.jsx'

function App() {
  return (
    <>
      <Menu></Menu>
      <Button variant="contained" icon="👹">
        like and subscribe
      </Button>
      <Button variant="outlined" icon="🤡">
        learn more
      </Button>
      <Button variant="text" icon="👿">
        view demo
      </Button>
    </>
  )
}

export default App
