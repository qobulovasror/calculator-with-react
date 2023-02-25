function OtherFun({issue, setIssue, setAgo}) {
  const clearHandler = ()=>{
      if(issue!==""){
        setIssue("");
        setAgo("")
      }
  }
  const root = ()=>{
    if(issue.toString().length>0){
      issue.toString().split("").forEach(element => {
        if(!isNaN(element) || element==="+" || element==="-" || element==="+" || element==="/" || element==="."){
          if(!isNaN(issue.toString()[issue.toString().length-1])){
            // eslint-disable-next-line no-eval
            let res = eval(issue);
            if(res>0)
              setIssue(Math.sqrt(res));
          }
        }
      });
    }
  }
  const eraser = ()=>{
    if(issue.toString().length>0){
      setIssue(issue.toString().slice(0,issue.toString().length-1));
      setAgo("")
    }
  }
  return (
    <>
      <div className="row">
        <button onClick={clearHandler}>C</button>
        <button onClick={root}>√ </button>
        <button onClick={eraser}>{"<="}</button>
      </div>
    </>
  );
}

export default OtherFun;
