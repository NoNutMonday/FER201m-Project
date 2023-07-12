import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import AdminNavbar from "./Navbars/AdminNavbar.js";
import DashboardFooter from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import FixedPlugin from "./FixedPlugin/FixedPlugin.js";

import sidebarImage from "../../../assets/img/sidebar-3.jpg";
import dashboardRoutes from './dashboar-router';

import Dashboard from './Dashboard';
import UserList from './UserList';
import MotelList from './MotelList';
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Login from "./Login.js";

export default function AdminLayout() {
    const [image, setImage] = useState(sidebarImage);
    const [color, setColor] = useState("black");
    const [hasImage, setHasImage] = useState(true);
    const location = useLocation();
    const mainPanel = useRef(null);

    // useEffect(() => {
    //     document.documentElement.scrollTop = 0;
    //     document.scrollingElement.scrollTop = 0;
    //     mainPanel.current.scrollTop = 0;
    //     if (
    //         window.innerWidth < 993 &&
    //         document.documentElement.className.indexOf("nav-open") !== -1
    //     ) {
    //         document.documentElement.classList.toggle("nav-open");
    //         var element = document.getElementById("bodyClick");
    //         element.parentNode.removeChild(element);
    //     }
    // }, [location]);

    const token = useSelector(state => state.auth.token)

    console.log(token)

    return (

        token ? (


            token?.role === 1 ? (
                <>
                    <div className="wrapper">
                        <Sidebar color={color} image={hasImage ? image : ""} routes={dashboardRoutes} />
                        <div className="main-panel" ref={mainPanel}>
                            <AdminNavbar />
                            <div className="content">
                                <Routes>
                                    <Route path='/admin/'>
                                        <Route path='' element={<Dashboard />} />
                                        <Route path='dashboard' element={<Dashboard />} />
                                        <Route path='motel' element={<MotelList />} />
                                        <Route path='user' element={<UserList />} />
                                    </Route>
                                </Routes>
                            </div>
                            <DashboardFooter />
                        </div>
                    </div>
                    <FixedPlugin
                        hasImage={hasImage}
                        setHasImage={() => setHasImage(!hasImage)}
                        color={color}
                        setColor={(color) => setColor(color)}
                        image={image}
                        setImage={(image) => setImage(image)}
                    />

                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                </>

            ) : (
                <div className="text-center"> access Denied</div>
            )

        ) : (
            <Login />
        )
    )
}


