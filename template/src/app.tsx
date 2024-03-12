import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import './scss/global.scss';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Building from "./pages/building/building";
import Location from "./pages/location/location";

const App: React.FC = () => {
    const routes = [
      { path: "/", component: Home },
      { path: "/building", component: Building },
      { path: "/location", component: Location },
    ];

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.component />}
                            />
                        );
                    })}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
