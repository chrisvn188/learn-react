import Button from './components/Button.jsx'

function App() {
  return (
    <>
      <header className="text-center p-4 bg-slate-950 text-slate-100 font-bold text-xl uppercase tracking-wide">
        Hello world
      </header>
      <main>
        <Button variant="contained">like and subscribe</Button>
        <Button variant="outlined">learn more</Button>
        <Button variant="text">view demo</Button>
      </main>
    </>
  )
}

export default App
