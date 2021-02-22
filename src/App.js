import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact name="Sam" email="sam@sam.com" phone="888-888-8888" />
        <Contact name="Dani" email="dani@dani.com" phone="777-777-7777" />
      </div>
    </div>
  );
}

export default App;
