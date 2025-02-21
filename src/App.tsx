import { BrowserRouter } from 'react-router-dom'
import Navbar from '@components/navbar/index'
import RoutesIndex from './routes/Index'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
