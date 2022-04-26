import './App.css';
import TopGarageInfo from '../TopGarageInfo/topGarageInfo';
import NavBar from '../NavBar/navBar';
import Header from '../Header/header';
import HeaderAside from '../HeaderAside/headerAside';
import SectionServices from '../SectionServices/sectionServices';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className="App">
      <TopGarageInfo />
      <NavBar />
      <Header />
      <HeaderAside />
      <SectionServices />
      <Footer />
    </div>
  );
}

export default App;