function Display({ issue, setIssue, ago}) {
  const result = (e) => {
    if (e.key === "Enter")
      issue
        .toString()
        .split("")
        .forEach((element) => {
          if (
            !isNaN(element) ||
            element === "+" ||
            element === "-" ||
            element === "+" ||
            element === "/" ||
            element === "."
          ) {
            if (!isNaN(issue.toString()[issue.toString().length - 1])) {
              // eslint-disable-next-line no-eval
              setIssue(eval(issue));
            }
          }
        });
  };
  const inputChanget = (e) => {
    setIssue(e.target.value);
  };
  return (
    <>
      <div className="ago">{ago}</div>
      <input
        type="text"
        placeholder="0"
        value={issue}
        onChange={inputChanget}
        onKeyDown={result}
      />
    </>
  );
}

export default Display;
