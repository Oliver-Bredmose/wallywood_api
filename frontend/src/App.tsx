import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home/home'
import { MainLayout } from './layout/MainLayout'
import { Posters } from './pages/Poster/Poster'
import { Login } from './pages/Login/Login'
import { DetailsView } from './pages/DetailsView/DetailsView' // Ændret her
import { About } from './pages/About/About'
import { Kontakt } from './pages/Kontakt/Kontakt'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posters' element={<Posters />} />
            <Route path='/details/:slug' element={<DetailsView />} /> {/* Ændret her */}
            <Route path='/contact' element={<Kontakt />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App