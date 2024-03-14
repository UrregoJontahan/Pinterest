import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ButtonCreate } from './Button'
import { Header } from './Header'
import { Logo } from './Logo/Logo'
import { Search } from './Search'
import { UploadsImages } from './UploadsImages';
import { ListImages } from './LIst';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header>
          <Logo/>
          <ButtonCreate/>
          <Search/>
        </Header>
        <Routes>
          <Route path='' element={<ListImages/>}/>
          <Route path='/uploads-img' element={<UploadsImages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App