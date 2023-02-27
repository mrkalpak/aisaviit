import { isDOMComponent } from 'react-dom/test-utils';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import Footer from './component/Footer';





const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Footer className="header-content"/>
    </div>
  )
}

export default App
