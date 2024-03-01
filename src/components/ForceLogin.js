import {React,useState,useEffect} from 'react'
import Loader from './Loader'
import '../Typewriter.css';
import { FaLeaf, FaCompass, FaLock } from 'react-icons/fa';

function ForceLogin() {
  const [text, setText] = useState('');
  const messages = [
    'Welcome To Farmer Dealer Direct Help App',
    'Explore Our Useful Services',
    'A Secure Blockchain Communication',
  ];

  useEffect(() => {
    let i = 0;
    let timer = setInterval(() => {
      setText(messages[i]);
      i = (i + 1) % messages.length;
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Loader />
      <div
        className="home-page"
        style={{
          background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)), url(your-background-image-url) center/cover fixed',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="typewriter-text my-div">
          {text}
          <br />
          <span style={{ fontSize: '2em', marginTop: '20px' }}>
            <FaLeaf style={{ marginRight: '10px' }} />
            <FaCompass style={{ marginRight: '10px' }} />
            <FaLock style={{ marginRight: '10px' }} />
          </span>
        </div>
      </div>
    </>
  );
}

export default ForceLogin;