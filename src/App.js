// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/about';
import Clients from './components/Clients/clients';
import Contacts from './components/Contacts/contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/services';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='about/*' element={<About />} />
            <Route path='services/*' element={<Services />} />
            <Route path='clients/*' element={<Clients clientsPage={props.state.clientsPage} dispatch={props.dispatch} store={props.store}/>} />
            <Route path='contacts/*' element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
