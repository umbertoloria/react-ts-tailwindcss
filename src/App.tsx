import './App.css';
import LeftSide from './components/LeftSide';
import ContentSide from './components/ContentSide';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <LeftSide />
        <ContentSide />
      </Router>
    </div>
  );
}
