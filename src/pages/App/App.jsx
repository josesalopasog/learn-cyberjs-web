import { LearnProvider } from '../../context/LearnProvider'
import { BrowserRouter } from "react-router-dom";

import Header from '../../components/Header'

import './App.css'

function App() {


  return (
    <>
      <LearnProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>  
      </LearnProvider>
    </>
  )
}

export default App
