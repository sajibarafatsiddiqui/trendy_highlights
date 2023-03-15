import { Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';
import Details from 'routes/Details';


const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="details" element={<Details />} />
  </Routes>
);