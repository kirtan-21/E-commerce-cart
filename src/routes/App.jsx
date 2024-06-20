import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


function App() {




  return (
    <>
      <Header></Header>
      <Outlet/>
      
      
    </>
  )
}

export default App
