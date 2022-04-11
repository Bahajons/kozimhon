import About from "./About"
import Clent from "./Clent"
import Contact from "./Contact"
import Faq from "./Faq"
import Footer from "./Footer"
import Header from "./Header"
import Modul from "./Modul"
import Section1 from "./Section1"
import Sheet from "./Sheet"

const Home = () => {
  return (
    <>
      <Header />
      <Section1 />
      <About />
      <Sheet />
      <Clent />
      <Modul />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
export default Home;