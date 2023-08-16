import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout.js'
import Home from './components/home.js'

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
    </Routes>
   </>
  );
}

export default App;
