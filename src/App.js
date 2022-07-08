import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './shared/components/header/Header';
import Home from './pages/homepage/Home';
import ProjectContainer from './pages/project/ProjectContainer';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/project' element={<ProjectContainer/>}></Route>
          <Route path='/skills' element={<Skills/>}> </Route>


      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
