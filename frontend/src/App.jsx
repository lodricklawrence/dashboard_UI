import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import MyNavbar from './components/Navbar/Navbar'
import Authentication from './pages/authentication'
import Database  from './pages/database'
import  Functions  from './pages/functions'
import  Hosting  from './pages/hosting'
import  MachineLearning from './pages/machineLearning'
import  Storage  from './pages/storage'
function App() {


  return (
      <Router>
        <Routes>
          <Route path='/' element={<MyNavbar/>}>
            <Route path='authentication' element={<Authentication/>}/>
            <Route path='database' element={<Database/>}/>
            <Route path='storage' element={<Storage/>}/>
            <Route path='hosting' element={<Hosting/>}/>
            <Route path='functions' element={<Functions/>}/>
            <Route path='machine_learning' element={<MachineLearning/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
