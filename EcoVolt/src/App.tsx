import { Route, Routes } from 'react-router-dom'
import Header from './components/ui/Header'
import HomePage from './pages/public/HomePage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App