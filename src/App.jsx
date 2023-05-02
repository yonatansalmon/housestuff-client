import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Budget from './components/Budget';
import SupermarketList from './components/SupermarketList';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<SupermarketList />} />
        <Route path='/budget' element={<Budget />} />
      </Routes>
    </Layout>
  );
}

export default App;
