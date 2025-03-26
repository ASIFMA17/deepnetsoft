import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import AddIteam from './components/AddIteam';
import Footer from './components/Footer';
// IMPORT TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

      <Router>

        <Navbar />

        <Routes>

          <Route path='/' element={<Menu />} />
          <Route path='/addIteam' element={<AddIteam />} />

        </Routes>

        <Footer />

      </Router>

      <ToastContainer theme="dark"/>

    </>
  );
}

export default App;
