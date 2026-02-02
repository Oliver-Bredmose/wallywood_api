import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home/home'
import { MainLayout } from './layout/MainLayout'
import { Posters } from './pages/Poster/Poster'
import { Login } from './pages/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<div>About</div>} />
            <Route path='/posters' element={<Posters />} />
            <Route path='/contact' element={<div>Contact</div>} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App