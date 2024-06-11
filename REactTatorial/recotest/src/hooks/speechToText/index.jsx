import React from "react";

import { useState, useEffect, useRef } from "react";

const useSpeechToText = (options) => {
    const [Listing, isListing] = useState(false);
    const [Transcript, setTranscript] = useState(" ");
    const recogRef = useRef(null);



    useEffect(() => {
        if (!("webkitSpeechRecognition" in window)) {
            console.error("this Browser does not supported ");
            return;
        }
        recogRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        const recognition = recogRef.current;
        recognition.interimResults = options.interimResults || true;
        recognition.lang = options.lang || "en-US";
        recognition.continuous = options.continuous || false;

        if ("webkitSpeechGrammerList" in window) {

            var grammarList = new window.webkitSpeechGrammerList() ;
            
            
            // Populate the grammar list with words or phrases you want to recognize,
            // including punctuation marks to denote the end of sentences.
            grammarList.addFromString('hello.', 1);
            grammarList.addFromString('goodbye.', 1);
            grammarList.addFromString('how are you?', 1);
            grammarList.addFromString('what\'s the weather like today?', 1);
            //grammarList.addFromString("\b(?:\w+\s+)*(?:how|what|why|where|who|whois|when)\s*[?!]", 1);
            // Add more phrases with punctuation as needed

            // Set the grammar list for recognition
            recognition.grammars = grammarList;
        }

        recognition.onresult=(event)=>{
            let text='';
            //console.log(event.results)
            for(let i=0;i<event.results.length;i++){
                text+=event.results[i][0].transcript;
                let words=text.split(" ");
            if((words.length%5===0) &&(words.length>=5)){     
                text+="."   
                console.log(words);
                console.log(text);
            }}
            console.log("transcription : ",Transcript)
            setTranscript(text);
        }
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
          };

        recognition.onend=()=>{
            isListing(false);
        }

        return()=>{
            recognition.stop();
        }
    }, [])

    const startListing=()=>{
        if(recogRef.current.start && !Listing){
            recogRef.current.start();
            isListing(true);
        }
    }
    const stopListing=()=>{
        if(recogRef.current.start && Listing){
            recogRef.current.stop();
            isListing(false);
        }
    }

    return {
        Transcript,
        Listing,
        startListing,
        stopListing,
        setTranscript
    }
}

export default useSpeechToText;