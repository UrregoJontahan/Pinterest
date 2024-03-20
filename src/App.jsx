import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ButtonCreate } from './Button'
import { Header } from './Header'
import { Logo } from './Logo/Logo'
import { Search } from './Search'
import { UploadsImages } from './UploadsImages';
import { ListImages } from './LIst';
import { SaveUrl } from './SaveUrl';
import { Provider } from './Provider';
import { useState } from 'react';
import { Pin } from './Pin';
import { Main } from './Main/Index';

function App() {

  const [selectedImage, setSelectedImage] = useState(true)

  const showDetails = (image) =>{
    setSelectedImage(image)
  }
  
  return (
    <>
    <Provider>
    <BrowserRouter>
        <Header>
          <Logo/>
          <Main/>
          <ButtonCreate/>
          <Search/>
        </Header>
        <Routes>
          <Route path='' element={<ListImages showDetails={showDetails}/>}/>
          <Route path='/uploads-img' element={<UploadsImages/>}/>
          <Route path='/save-url' element={<SaveUrl/>} />
          <Route path='page-pin/:id' element={<Pin selectedImage={selectedImage}/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
