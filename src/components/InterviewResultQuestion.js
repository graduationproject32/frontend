import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import Accordion from "react-bootstrap/Accordion";
const InterviewResultQuestion = ({ question, index }) => {
  let scoreStyle;
  if (question.score < 0.5) {
    scoreStyle = "text-danger";
  } else if (question.score >= 0.5 && question.score < 0.8) {
    scoreStyle = "text-warning";
  } else {
    scoreStyle = "text-success";
  }
  return (
    <>
      <div
        style={{
          marginBottom: "50px",
        }}
        className={`interviewResultCard`}
      >
        <div className="row g-0 p-0">
          <div className="col d-flex align-items-center">
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                Question {index}
              </h4>
              <h3>{question.title}</h3>
              <p
                className="body"
                style={{
                  paddingTop: "10px",
                  margin: "0",
                }}
              >
                {question.body}
              </p>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h3>Score</h3>
            <h3 className={scoreStyle}>{question.score}</h3>
          </div>
        </div>
        <hr className="m-0"></hr>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div
                style={{
                  color: "#0d6efd",
                  paddingLeft: "30px",
                }}
              >
                Compare your answer to model answer
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ReactDiffViewer
                oldValue={question.userAnswer}
                newValue={question.modelAnswer}
                useDarkTheme={false}
                compareMethod={DiffMethod.WORDS}
                leftTitle={"Your answer"}
                rightTitle={"Model answer"}
                splitView={true}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default InterviewResultQuestion;
