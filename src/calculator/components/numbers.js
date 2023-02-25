function Numbers({issue, setIssue}) {
  const numHandler = (e)=>{
    if(issue.toString().length<21)
      if(issue.toString()==="0"){
        setIssue(e.target.innerText)
      }else
        setIssue(issue + e.target.innerText)
  }
  const minusHandler = ()=>{
      setIssue(-1* Number(issue))
  }
  const floatNum = ()=>{
    let str = issue.toString();
    if(str.length>0){
      if(!isNaN(str[str.length-1]))
        setIssue(issue + '.');
      else
        setIssue(issue + '0.')
    }
  }
  return (
    <>
      <div className="nums column">
        <div className="row">
          <button onClick={numHandler}>7</button>
          <button onClick={numHandler}>8</button>
          <button onClick={numHandler}>9</button>
        </div>
        <div className="row">
          <button onClick={numHandler}>4</button>
          <button onClick={numHandler}>5</button>
          <button onClick={numHandler}>6</button>
        </div>
        <div className="row">
          <button onClick={numHandler}>1</button>
          <button onClick={numHandler}>2</button>
          <button onClick={numHandler}>3</button>
        </div>
        <div className="row">
          <button onClick={minusHandler}>+/-</button>
          <button onClick={numHandler}>0</button>
          <button onClick={floatNum}>.</button>
        </div>
      </div>
    </>
  );
}

export default Numbers;
