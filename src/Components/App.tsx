import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import LandingPage from './LandingPage';
import ResourcePage from './Resource/ResourcePage';
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
                    {/* TODO pseudo all these bitches */}
                    {/* <Route path="/about" element={AboutPage} /> */}
                    {/* <Route path="/reflections" element={BlogPage} /> */}
                    {/* <Route path="/connect" element={ConnectPage} /> */}
                    {/* <Route path="/feedback" element={FeedbackPage} /> */}
                    {/* <Route path='*' element={PageNotFound} /> */}
                </Routes>
            </div>
        </StrictMode>
    );
};

export default App;