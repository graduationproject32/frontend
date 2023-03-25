import "./Question.scss";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import { faMicrophoneLinesSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactMediaRecorder } from "react-media-recorder";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Question = ({ isInterviewOver, question, dispatch }) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const { status, startRecording, stopRecording, clearBlobUrl } =
    useReactMediaRecorder({
      blobPropertyBag: {
        type: "audio/mpeg",
      },
      onStart: () => {
        dispatch({
          type: "startRecording",
        });
      },
      onStop: (blobUrl, blob) => {
        clearBlobUrl();
        setIsAnswered(true);
        // const reader = new FileReader();
        // reader.readAsDataURL(blob);
        // reader.onloadend = function () {
        //   const base64data = reader.result;

        // };
        dispatch({
          type: "saveAnswer",
          payload: {
            slug: question.slug,
            answer: blob,
          },
        });
      },
    });

  const handleNextQuestion = () => {
    if (isAnswered) {
      dispatch({
        type: "nextQuestion",
      });
      setIsAnswered(false);
    } else {
      console.log("not allowed");
    }
  };
  return (
    <>
      <div className="question innerCard d-flex justify-content-center">
        <div className="questionText">
          <h2 className="questionTitle">{question.title}</h2>
          <p className="body">{question.body}</p>
        </div>
        {!isInterviewOver && (
          <div onClick={handleNextQuestion}>
            <FontAwesomeIcon
              color={isAnswered ? "blue" : "gray"}
              className="nextQuestion"
              icon={faChevronRight}
            ></FontAwesomeIcon>
          </div>
        )}
      </div>
      {!isInterviewOver && (
        <div className="question-record d-flex justify-content-center">
          {(status === "idle" || status === "acquiring_media") &&
            !isAnswered && (
              <button onClick={startRecording} className="mic">
                <FontAwesomeIcon
                  size={"2x"}
                  className={"micIcon"}
                  icon={faMicrophoneLines}
                ></FontAwesomeIcon>
              </button>
            )}
          {(status === "recording" || isAnswered) && (
            <button
              disabled={status !== "recording"}
              onClick={stopRecording}
              className="mic"
            >
              <FontAwesomeIcon
                size={"2x"}
                className={"micIcon"}
                icon={faMicrophoneLinesSlash}
              ></FontAwesomeIcon>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Question;
