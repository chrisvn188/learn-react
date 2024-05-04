import CardDetails from './components/CardDetails.jsx'
import FAQs from './components/Faqs.jsx'
import Menu from './components/Menu.jsx'
import OrderSummary from './components/OrderSummary.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'

function App() {
  return (
    <div className="app">
      <Menu />
      <OrderSummary />
      <CardDetails />
      <FAQs />
      <VideoPlayer />
    </div>
  )
}

export default App
