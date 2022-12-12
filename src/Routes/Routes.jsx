import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import APropos from '../pages/A-Propos/A-porpos';
import Logement from '../pages/Logement/index';
import Erreur from '../pages/Erreur/Erreur';
// import Layout from '../layout/Layout';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
// Function that contain all the routes, the Home page, the about page, the logement page and the error page
function PagesRoutes() {
    return (
        <Router>
            {/* <Layout> */}
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path='/logement:id' element={<Logement />} />
                    <Route path='*' element={<Erreur />} />
                </Routes>
                <Footer />
            {/* </Layout> */}
        </Router>
    );
}
export default PagesRoutes