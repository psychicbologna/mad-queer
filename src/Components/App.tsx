import { StrictMode, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './layout'
import {
  LandingPage,
  ResourcesPage,
  AboutPage,
  ConnectPage,
  ReflectionsPage,
  FeedbackPage,
  PageNotFound
} from '../routes'

//TODO Dark mode, Print mode
//TODO Redesign logo, create illustrations and assets for key resources via SVG. <https://parceljs.org/languages/svg/>
// import ThemeContext from "./ThemeContext";

const App = () => {
  // const theme = useState("darkblue");
  const [title, setTitle] = useState('')

  useEffect(() => {}, [])

  return (
    <StrictMode>
      <div className="App">
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reflections" element={<ReflectionsPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </StrictMode>
  )
}

export default App
