import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LinkTo } from './LinkTo'
import { Header } from './Header'
import { Logo } from './Logo/Logo'
import { Search } from './Search'
import { UploadsImages } from './UploadsImages';
import { ListImages } from './LIstImages';
import { SaveUrl } from './SaveUrl';
import { Provider } from './Provider';
import { Pin } from './Pin';

function App() {
  
  return (
    <>
    <Provider>
    <BrowserRouter>
        <Header>
          <Logo/>
          <LinkTo route={'/'} buttonText={"Inicio"}/>
          <LinkTo route={'/uploads-img'} buttonText={"Crear"}/>
          <Search/>
        </Header>
        <Routes>
          <Route path='' element={<ListImages/>}/>
          <Route path='/uploads-img' element={<UploadsImages/>}/>
          <Route path='/save-url' element={<SaveUrl/>} />
          <Route path='page-pin/:id' element={<Pin/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
