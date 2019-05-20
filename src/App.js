import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Channel from './Channel';
import { firebase, db } from './firebase';
import { Router, Redirect } from '@reach/router';

function App() {
  const user = useAuth(); 
  
  return user ? (
    <div className="App">
      <Nav user={user}/>
      <Router>
        <Channel path='channel/:channelId' user={user}/>
        <Redirect from='/' to='channel/leprik'/>
      </Router>
    </div>
  ) : (
   <Login/>
  );
};

function Login() {
  const [authError, setAuthError] = useState(null);

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
    await firebase.auth().signInWithPopup(provider);
    } catch(error) {
      setAuthError(error);
    }
  };
  return (
  <div className="Login">
      <h1>Chatik</h1>
      <button onClick={handleSignIn}>Залогинься через гугол </button>
      {authError && (
        <div>
          <p>Чёто не зарегалось нефига(</p>
          <p><i>{authError.message}</i></p>
          <p>Попробуй ещё раз может прокнет</p>
        </div>
      )}
    </div>
  )
};



function useAuth() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const user = {
          displayName: firebaseUser.displayName,
          photoUrl: firebaseUser.photoURL,
          uid: firebaseUser.uid
        } 
        setUser(user);
        db.collection('users').doc(user.uid).set(user, { merge: true })
      } else {
      setUser(null); 
      }             
    });
    
  }, []);
  return user;
};

export default App;