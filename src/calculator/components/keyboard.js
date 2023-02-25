import MathFun from "./mathFun";
import Numbers from "./numbers";
import OtherFun from "./otherFun";

function Keyboard({issue, setIssue, ago, setAgo}) {
  return (
    <>
      <div className="keyboard row">
        <div className="column">
            <OtherFun
              issue={issue}
              setIssue={setIssue}
              setAgo={setAgo}
            />
            <Numbers 
              issue={issue}
              setIssue={setIssue}
            />
        </div>
        <MathFun 
          issue={issue}
          setIssue={setIssue}
          ago={ago}
          setAgo={setAgo}
        />
      </div>
    </>
  );
}

export default Keyboard;
