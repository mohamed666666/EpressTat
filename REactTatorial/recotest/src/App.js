import './App.css';
import { useEffect, useState } from 'react';
import useSpeechToText from './hooks/speechToText';
function App() {
  const [Textinput,setTextinput]=useState(" ");
  const [container,setContainer]=useState("");
  const[n,setn]=useState(6);
  const{Transcript,Listing, startListing,stopListing,setTranscript}=useSpeechToText({continuous:true});

  const  startstoplistning=()=>{
    Listing ? stopvoiceInput():startListing();
  }
  const stopvoiceInput=()=>{
        setTextinput(preval=>preval+(  Transcript.length? (preval.length? " ":"") + Transcript: ""))
        stopListing()
  }

  useEffect(()=>{
    
    let words=Transcript.split(" ");
    if((words.length%n===0) &&(words.length>=n)){
      //console.log("transcription ",Transcript)
      setContainer((words.slice((words.length - n), words.length)).join(' '))
      
    }
    
    console.log("container :",container)

  },[Transcript])


  return (
   
      <div>
        <div className='button-cont'>
          <button style={{"width":"100px", "height":"80px" ,"margin-left":" 400px" }}
          onClick={()=>{startstoplistning()}} >
          {Listing && <p>speak</p>}
          </button>
        </div>
       <textarea
       className='transcript-page'
       value={Transcript}
       //onChange={(e)=>{setTextinput(e.target.value)}}
       
       />

      </div>
  );
}

export default App;
