import Button from './components/Button.jsx'
import Menu from './components/Menu.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'

function App() {
  return (
    <>
      <Menu></Menu>
      <PersonalInfo></PersonalInfo>
      <Button variant="contained" icon="👹">
        like and subscribe
      </Button>
    </>
  )
}

export default App
