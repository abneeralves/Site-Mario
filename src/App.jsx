import react from 'react'
import './App.css'
import Fundo from './Components/Fundo/Fundo' 
import Header from './Components/Header/Header'
import Main from './Components/Main/ConteudoPrincipal'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Fundo />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
