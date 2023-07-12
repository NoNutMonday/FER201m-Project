import { useDispatch } from "react-redux";
import Footer from "./commons/Footer";
import Header from "./commons/Header";
import { useQuery } from "react-query";
import { setMotels } from "../../../core/redux/motel";
import { setAccounts } from "../../../core/redux/auth";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./authenticator/Login";
import Register from "./authenticator/Register";
import Forgot from "./authenticator/Forgot";
import ChangePass from "./authenticator/ChangePass";
import Profiles from "./authenticator/Profile";
import Reviews from "./review/Reviews";
import ReviewDetail from "./review/ReviewDetail";
import Motel from "./motel/Motel";
import MotelDetail from "./motel/MotelDetail";
import Wishlist from "./motel/Wishlist";
import { Toaster } from "react-hot-toast";
import Dashboard from "../admin/Dashboard";
import MotelList from "../admin/MotelList";
import UserList from "../admin/UserList";


export default function UserLayout() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />

                {/* Authenication */}
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='forgot' element={<Forgot />} />
                <Route path='changePass' element={<ChangePass />} />
                <Route path='profile' element={<Profiles />} />
                {/* Authenication */}

                {/* Review */}
                <Route path='review' element={<Reviews />} />
                <Route path='review/:id' element={<ReviewDetail />} />
                {/* Review */}

                {/* Motel */}
                <Route path='motel' element={<Motel />} />
                <Route path='motel/:id' element={<MotelDetail />} />
                <Route path='wishlist' element={<Wishlist />} />
                {/* Motel */}

                
            </Routes>

            <Footer />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}
