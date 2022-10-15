import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import 'bootswatch/dist/superhero/bootstrap.min.css'
import Entrance from './components/Entrance';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<Entrance/>}/>
          <Route path='/list' element={<MessageList />} />
          <Route path='/messageform/:_id' element={<MessageForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
