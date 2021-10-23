import './App.css';
import LeftSide from './components/LeftSide';
import ContentSide from './components/ContentSide';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex gap-10 p-10">
        <LeftSide/>
        <ContentSide/>
      </div>
    </Router>
  );
}
