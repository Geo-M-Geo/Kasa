import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import APropos from '../pages/A-Propos/A-porpos';
import Logement from '../pages/Logement/Logement';
import Erreur from '../pages/Erreur/Erreur';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

/*Function that contain all the routes, the Home page, the about page, the logement page and the error page.
     Outside the routes there is the header and footer that are include whatever route is chosen. */
function PagesRoutes() {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path='*' element={<Erreur />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
};

export default PagesRoutes