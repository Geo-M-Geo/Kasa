import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import APropos from '../pages/A-Propos/index';
import Logement from '../pages/Logement/index';
import Erreur from '../pages/Erreur/index';
import Layout from '../layout/Layout';
// Function that contain all the routes, the Home page, the about page, the logement page and the error page
function PagesRoutes() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path='/logement:id' element={<Logement />} />
                    <Route path='*' element={<Erreur />} />
                </Routes>
            </Layout>
        </Router>
    );
}
export default PagesRoutes