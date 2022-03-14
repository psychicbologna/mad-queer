import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import LandingPage from '../routes/LandingPage/LandingPage';
import ResourcePage from '../routes/ResourcePage/ResourcePage';
import AboutPage from "../routes/AboutPage/AboutPage";
import ConnectPage from "../routes/ConnectPage/ConnectPage";
import FeedbackPage from "../routes/FeedbackPage/FeedbackPage";
import ReflectionsPage from "../routes/ReflectionsPage/ReflectionsPage";
import PageNotFound from "../routes/PageNotFound/PageNotFound";

//TODO Dark mode, Print mode
//TODO Redesign logo, create illustrations and assets for key resources via SVG. <https://parceljs.org/languages/svg/>
// import ThemeContext from "./ThemeContext";

const App = () => {
    // const theme = useState("darkblue");
    return (
        <StrictMode>
            <div className='text-white bg-slate-700 h-screen w-screen'>
                <header>
                    <Header />
                </header>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/reflections" element={< ReflectionsPage />} />
                    <Route path="/connect" element={<ConnectPage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <div className="Footer">
                    Footer here
                </div>
            </div>
        </StrictMode>
    );
};

export default App;