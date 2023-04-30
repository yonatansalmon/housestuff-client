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
        <Route exact path='/' element={<Home />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/supermarket-list' element={<SupermarketList />} />
      </Routes>
    </Layout>
  );
}

export default App;
