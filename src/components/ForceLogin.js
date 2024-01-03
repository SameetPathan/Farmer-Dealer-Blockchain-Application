import {React,useState,useEffect} from 'react'
import Loader from './Loader'
import '../Typewriter.css';

function ForceLogin() {

  const [text, setText] = useState("");
  const messages = ["Welcome To Farmer Dealer Direct Help App", "Explore Our use full Services", "A Secure Blockchain Communication"];

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
  <Loader></Loader>
    <div className="home-page">
   
       <div className="typewriter-text my-div" style={{marginTop:"150px"}}>
        {text}
      </div>
    </div>
        
  </>
  )
}

export default ForceLogin