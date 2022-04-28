import './App.css';
import TopGarageInfo from '../TopGarageInfo/topGarageInfo';
import NavBar from '../NavBar/navBar';
import Header from '../Header/header';
import HeaderAside from '../HeaderAside/headerAside';
import SectionServices from '../SectionServices/sectionServices';
import AboutUs from '../AboutUs/aboutUs';
import ContactUs from '../ContactUs/contactUs';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className="App container">
      <TopGarageInfo />
      <NavBar />
      <Header />
      <HeaderAside />
      <SectionServices />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
