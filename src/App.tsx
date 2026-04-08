import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PracticeAreas from './pages/PracticeAreas';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
