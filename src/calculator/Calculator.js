import {useState} from 'react';
import Display from "./components/disply";
import Keyboard from "./components/keyboard";

import './assets/style.css';

function Calculator() {
    const [issue, setIssue] = useState(""); 
    const [ago, setAgo] = useState(""); 
    const [darkLight, setDarkLight] = useState("container dark")
    const displyMody = ()=>{
        if(darkLight==="container dark")
            setDarkLight("container light")
        else
            setDarkLight("container dark")

    }
    return ( 
        <>
            <div className={darkLight}>
                <div className="box column">
                    <div className="row header between">
                        <h3>Calculator</h3>
                        <button 
                            className="displyMode" 
                            onClick={displyMody}
                        >Dark/Light</button>
                    </div>
                    <Display 
                        issue={issue}
                        setIssue={setIssue}
                        ago={ago}
                    />
                    <Keyboard
                        issue={issue}
                        setIssue={setIssue}
                        ago={ago}
                        setAgo={setAgo}
                    />
                </div>
            </div>
        </>
     );
}

export default Calculator;