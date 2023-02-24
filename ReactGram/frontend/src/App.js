import './App.css';
//Pages
import Home from './pages/Home/Home';
//router
import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
