import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Home from "../component/Home";
import Modul from "../component/Modul";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer /> </>} />
          <Route path="/modul" element={
            <>
              <Header />
              <Modul />
              <Contact />
              <Footer />
            </>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Router;