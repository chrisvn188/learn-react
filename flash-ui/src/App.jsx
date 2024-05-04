import CardDetails from './components/CardDetails.jsx'
import FAQs from './components/Faqs.jsx'
import Menu from './components/Menu.jsx'
import OrderSummary from './components/OrderSummary.jsx'

function App() {
  return (
    <div className="app">
      <Menu />
      <OrderSummary />
      <CardDetails />
      <FAQs />
    </div>
  )
}

export default App
