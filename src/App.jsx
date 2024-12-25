import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Place Order/Placeorder'
import Footer from './component/footer/Footer'
import LoginPop from './component/LoginPopUp/LoginPop'
function App() {
     const [showLogin, setShowLogin] = useState(false)
  return (
  <>
  {showLogin?<LoginPop setShowLogin={setShowLogin} />:<></>}
  <div className='app'>
   <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/order' element ={<Placeorder/>}/>
    </Routes>
  </div>
  <Footer/>
  </>
  )
}

export default App
