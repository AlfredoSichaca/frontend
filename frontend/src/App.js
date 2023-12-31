import './App.css';
import LoginButton from './components/LoginButton';
import Logout from './components/Logout';
import Profile from './components/Profile';

import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const {isAuthenticated, isLoading} = useAuth0();

  console.log(isAuthenticated);

  if (isLoading) return <h1>Cargando...</h1>

  return (
    <div className="App">
      <h1>Application</h1>
      {isAuthenticated ? <Logout/> :<LoginButton/>}
    <Profile/>
    </div>
  );
}

export default App;
