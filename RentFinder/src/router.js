import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/user/home/Home";
import Login from "./components/layouts/user/authenticator/Login";
import Register from "./components/layouts/user/authenticator/Register";
import Forgot from "./components/layouts/user/authenticator/Forgot";
import Reviews from "./components/layouts/user/review/Reviews";
import ChangePass from "./components/layouts/user/authenticator/ChangePass";
import Motel from "./components/layouts/user/motel/Motel";
import MotelDetail from "./components/layouts/user/motel/MotelDetail";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { setMotels } from "./core/redux/motel";
import Profiles from "./components/layouts/user/authenticator/Profile";
import ReviewDetail from "./components/layouts/user/review/ReviewDetail";
import { setAccounts } from "./core/redux/auth";
import Wishlist from "./components/layouts/user/motel/Wishlist";

export default function Router() {
    const dispatch = useDispatch()

    const motel = useQuery(
        ['motel']
        , () => fetch(`http://localhost:9999/motels`)
            .then(res => res.json())
            .then(data => {
                dispatch(setMotels({ motels: data }))
            })
    )

    const account = useQuery(
        ['accounts']
        , () => fetch(`http://localhost:9999/accounts`)
            .then(res => res.json())
            .then(data => {
                dispatch(setAccounts({ accounts: data }))
            })
    )

    return (
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
    )
}