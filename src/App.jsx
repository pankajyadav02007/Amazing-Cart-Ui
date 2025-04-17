import { Route, Routes } from "react-router"

import HomePage from "./pages/auth/Home"
import LoginPage from "./pages/auth/Login"
import ForgotPasswordPage from "./pages/auth/ForgotPassword"
import ResetPasswordPage from "./pages/auth/ResetPassword"
import NotFoundPage from "./pages/NotFound"
import Navbar from "./components/Navbar"



function App() {

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/forgot_password" element={<ForgotPasswordPage/>}/>
    <Route path="/reset_password" element={<ResetPasswordPage/>}/>
    <Route path="*" element={<NotFoundPage/>} />
   </Routes>
   </>
  )
}

export default App
