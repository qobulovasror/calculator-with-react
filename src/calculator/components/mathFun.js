function MathFun({issue, setIssue, ago, setAgo}) {
  const numHandler = (e)=>{
    let newIssue = issue.toString();
    if(newIssue.length<21)
      if(!isNaN(newIssue[newIssue.length-1])){
        setIssue(issue + e.target.innerText)
      }
  }
  const result = ()=>{
    issue.toString().split("").forEach(element => {
      if(!isNaN(element) || element==="+" || element==="-" || element==="+" || element==="/" || element==="."){
        if(!isNaN(issue.toString()[issue.toString().length-1])){
          setAgo(issue);
          // eslint-disable-next-line no-eval
          setIssue(eval(issue));
        }
      }
    });
  }
  return (
    <>
      <div className="funs column">
        <button onClick={numHandler}>/</button>
        <button onClick={numHandler}>*</button>
        <button onClick={numHandler}>-</button>
        <button onClick={numHandler}>+</button>
        <button onClick={result} className="equal">=</button>
      </div>
    </>
  );
}

export default MathFun;
