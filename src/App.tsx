import { Route, Routes } from 'react-router';
import Age from './features/Age';
import Home from './features/Home';
import Layout from './features/Layout';
import ArchiveBot from './features/ArchiveBot';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='age' element={<Age />} />
        <Route path='archive-bot' element={<ArchiveBot />} />
      </Route>
    </Routes>
  );
}

export default App;
