import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/user/home/Home";
import Login from "./components/layouts/user/authenticator/Login";
import Register from "./components/layouts/user/authenticator/Register";
import Forgot from "./components/layouts/user/authenticator/Forgot";
import Reviews from "./components/layouts/user/review/Reviews";
import ChangePass from "./components/layouts/user/authenticator/ChangePass";

export default function Router(){
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            {/* Authenication */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/changePass' element={<ChangePass />} />
            <Route path='/profiles' />
            {/* Authenication */}
            <Route path='/review' element={<Reviews />} />



        </Routes>
    )
}