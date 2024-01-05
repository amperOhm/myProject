// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Link,
import AppHome from './components/AppHome';
import AppFrontPage from './components/AppFrontPage';
import Header from './components/Header';
import Nav from './components/Nav';
import ActionForm1 from './components/Form/ActionForm1';
import ActionForm2 from './components/Form/ActionForm2';
import ActionForm3 from './components/Form/ActionForm3';
import PageSize from './components/PageSize';
import Sticky from './components/Sticky';
import Sticky2 from './components/Sticky2';
import Footer from './components/Footer';
import Table from './components/Table';
import ColorPalette from './components/ColorPalette';
import PickGame from './components/PickGame';

function App() {

  return (
    <div className="App">



      <BrowserRouter>
        <Header />
        <Nav />
        {/* <ul style={{ textAlign: 'left' }}>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/AppHome">AppHome</Link>
          </li>
        </ul> */}
        <Routes>
          <Route index element={<AppFrontPage />} path="/" />
          <Route element={<AppHome />} path="/AppHome" />

          {/* Form */}
          <Route element={<ActionForm1 />} path="/ActionForm1" />
          <Route element={<ActionForm2 />} path="/ActionForm2" />
          <Route element={<ActionForm3 />} path="/ActionForm3" />

          {/* page */}
          <Route element={<PageSize />} path="/PageSize" />
          <Route element={<Sticky />} path="/Sticky" />
          <Route element={<Sticky2 />} path="/Sticky2" />
          <Route element={<Table />} path="/Table" />
          <Route element={<ColorPalette />} path="/ColorPalette" />
          <Route element={<PickGame />} path="/PickGame" />


        </Routes>
      </BrowserRouter>

      <Footer />
      {/* <footer style={{ backgroundColor: '#D5E1DF', padding: '5px', zIndex: '99999' }} className="shape-ex3">
        <p>© 2023 AmperOhm</p>
      </footer> */}
    </div>
  );
}

export default App;
