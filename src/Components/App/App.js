import './App.css';
import NavBar from '../NavBar/navBar';
import Header from '../Header/header';
import HeaderAside from '../HeaderAside/headerAside';
import SectionServices from '../SectionServices/sectionServices';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <HeaderAside />
      <SectionServices />
      <Footer />
    </div>
  );
}

export default App;
