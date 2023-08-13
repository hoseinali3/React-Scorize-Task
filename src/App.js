
import './App.css';

import Header from './Components/Header/Header';

import { useRoutes } from 'react-router-dom';

import routes from './Routes'

function App() {

const router = useRoutes(routes)

  return (
    <div>
     <Header/>

   {router}
     
   
    </div>
  );
}

export default App;
