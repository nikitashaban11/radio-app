import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Station } from './pages/Station';
import { NoMatch } from './pages/NoMatch';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Fallback } from './components/Fallback';

function App() {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/station/:stationId' element={<Station />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
