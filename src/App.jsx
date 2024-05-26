import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import Authservice from "./appwrite/auth"
import {login, logout} from './store/authslice'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Outlet } from "react-router-dom"

function App() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    Authservice.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400
    "><div className="w-full block">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </div>
      </div>
  ) : null
}

export default App