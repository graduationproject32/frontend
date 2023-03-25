import { useState, useEffect } from "react";
import classes from "./Interview.module.scss";
import Question from "../components/Question";
import { useReducer } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { ScaleLoader } from "react-spinners";
import { HashLoader } from "react-spinners";
import "react-circular-progressbar/dist/styles.css";
import { useStopwatch } from "react-timer-hook";
import { useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
// import axios from "axios";
const Interview = () => {
  //simulate http request, for now
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        setIsLoading(false);
        navigate("result");
      }, 1000);
  }, [isLoading, navigate]);
  const { minutes, seconds, start, pause } = useStopwatch({ autoStart: false });
  //this should be prefetched from the backend API
  const questions = {
    topic: "Software engineering",
    questionList: [
      {
        slug: "design-patterns-and-software-engineering",
        title: "Design Patterns and Software Engineering",
        body: "Design patterns have become an essential part of software engineering. Can you explain what design patterns are and why they are important in software development? Also, could you provide an example of a design pattern that you have used in your work and describe how it was implemented?",
      },
      {
        slug: "agile-methodologies",
        title: "Agile Methodologies",
        body: "Agile methodologies are a popular approach to software development. Can you describe what agile is and how it differs from traditional, waterfall-style development processes? What are the benefits and drawbacks of using an agile approach?",
      },
      {
        slug: "test-driven-development",
        title: "Test-Driven Development",
        body: "Test-Driven Development (TDD) is a popular development methodology. Can you explain what TDD is and why it is important? Also, could you provide an example of a project where you used TDD?",
      },
      {
        slug: "code-refactoring",
        title: "Code Refactoring",
        body: "Code refactoring is an important aspect of software development. Can you explain what code refactoring is and why it is important? Also, could you provide an example of a project where you have performed code refactoring?",
      },
    ],
  };

  const initialState = {
    answers: [],
    currentQuestion: 0,
    started: false,
    isInterviewOver: false,
  };
  const reducer = (state, action) => {
    if (action.type === "saveAnswer") {
      const isDone =
        state.currentQuestion === questions.questionList.length - 1;
      if (isDone) pause();
      return {
        ...state,
        answers: [
          ...state.answers,
          { slug: action.payload.slug, answer: action.payload.answer },
        ],
        isInterviewOver: isDone,
      };
    }
    if (action.type === "nextQuestion") {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    }
    if (action.type === "startRecording") {
      if (!state.started) start();
      return {
        ...state,
        started: true,
      };
    }
  };
  // const mutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await axios.post(
  //       "https://voice-interview-5572f-default-rtdb.europe-west1.firebasedatabase.app/",
  //       state.answers
  //     );
  //     if (response.data) return response.data;
  //   },
  // });
  const handleInterviewSubmit = () => {
    console.log(state.answers);
    setIsLoading(true);
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <main className={`${classes.main}  main d-flex flex-grow-1`}>
        <div className={`container-fluid p-lg-0 d-flex justify-content-center`}>
          <div
            className={`${classes.card} height100  d-flex align-items-center justify-content-center flex-column`}
          >
            <div className="row width100">
              <div
                className={`col d-flex justify-content-around align-items-center ${classes.innerTopCard}`}
              >
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    pathColor: "#ffca8b",
                  })}
                  className={classes.progressCircle}
                  value={
                    ((state.currentQuestion + 1) /
                      questions.questionList.length) *
                    100
                  }
                >
                  <h3 className="mb-0">
                    {Math.round(
                      ((state.currentQuestion + 1) /
                        questions.questionList.length) *
                        100
                    )}
                  </h3>
                  <p className="body mb-0">Completed</p>
                </CircularProgressbarWithChildren>
                <div>
                  <h3>
                    Question <br></br>{" "}
                    {`${state.currentQuestion + 1} out of ${
                      questions.questionList.length
                    }`}
                  </h3>
                  <p className={`body ${classes.topic}`}>
                    {questions.topic}
                    <br></br>voice interview
                  </p>
                </div>
              </div>
              <div
                className={`col d-flex justify-content-around align-items-center ${classes.innerTopCard}`}
              >
                {state.started && !state.isInterviewOver && (
                  <div className="d-flex">
                    <ScaleLoader
                      color="#ffca8b"
                      width={10}
                      height={50}
                      radius={4}
                      margin={5}
                    ></ScaleLoader>
                    <ScaleLoader
                      cssOverride={{
                        transform: "scale(-1, 1)",
                      }}
                      color="#89e9ef"
                      width={10}
                      radius={4}
                      height={50}
                      margin={5}
                    ></ScaleLoader>
                  </div>
                )}
                <div>
                  <h2 className="mb-0">
                    {state.started ? `${minutes}:${seconds}` : "0:0"}
                  </h2>
                  <p className="body">Time elapsed</p>
                </div>
              </div>
            </div>
            <div className={`width100`}>
              <Question
                question={questions.questionList[state.currentQuestion]}
                isInterviewOver={state.isInterviewOver}
                dispatch={dispatch}
                className={classes.innerCard}
              ></Question>
              {state.isInterviewOver && (
                <button
                  onClick={handleInterviewSubmit}
                  style={{
                    width: "150px",
                    height: "75px",
                    border: "0",
                    marginTop: "50px",
                    borderRadius: "50px",
                  }}
                  className="btn btn-primary ms-auto me-auto d-flex justify-content-center align-items-center"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* I'll make this spinner global in root.js later*/}
      {isLoading && (
        <div className="fullScreenLoader">
          <HashLoader size={80} speedMultiplier={1.5} color="#36d7b7" />
        </div>
      )}
    </>
  );
};

export default Interview;
