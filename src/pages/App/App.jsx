import { LearnProvider } from '../../context/LearnProvider'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import Layout from '../../components/Layout'
import LandingPage from '../Landing'
import LearnHtml from '../LearnHtml'
import LearnCss from '../LearnCss'
import LearnJavascript from '../LearnJavascript'
import LearnReact from '../LearnReact'
import LearnSQL from '../LearnSQL'

import './App.css'

const AppRoutes = () => {
  let  routes = [
    {path: '/', element: <LandingPage />},
    {path: '/html', element: <LearnHtml />},
    {path: '/css', element: <LearnCss />},
    {path: '/javascript', element: <LearnJavascript />},
    {path: '/react', element: <LearnReact />},
    {path: '/sql', element: <LearnSQL />},
  ];  

  return useRoutes(routes)
}

function App() {
  return (
    <>
      <LearnProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes/>
          </Layout>  
        </BrowserRouter>  
      </LearnProvider>
    </>
  )
}

export default App
