import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Signup from "../detail/Signup";
import Login from "../detail/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const RouteConfig = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/createuser" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </Router>

    )
}

export default RouteConfig