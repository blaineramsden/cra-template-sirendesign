import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import './scss/global.scss';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const App: React.FC = () => {
    const routes = [
      { path: "/", component: Home },      
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
