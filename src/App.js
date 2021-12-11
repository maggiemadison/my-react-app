import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage, 
  UncontrolledFormPage,
  UserProfilePage 
} from './pages';

import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import './App.css';

function App() {
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [hideMessage, setHideMessage] = useState(false);
  
  // const increment = () => setNumberOfClicks(numberOfClicks + 1);
    return (
      <div className="App">
        <Router>
        <NavBar />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterButtonPage />} />
            <Route path="/people-list" element={<PeopleListPage />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="forms" element={<FormsNavBar />} >
                <Route path="forms/controlled-form" element={<ControlledFormPage />} />
                <Route path="forms/uncontrolled-form" element={<UncontrolledFormPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </div>
        </Router>
      </div>
  );   
}

export default App;
