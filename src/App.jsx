
import './App.css'
import BasketProvider from './context/BasketContext'
import Home from './pages/Home'

function App() {

  return (
    <>
            <BasketProvider >
            <Home/>
            </BasketProvider>

    </>
  )
}

export default App
