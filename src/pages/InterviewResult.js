import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import InterviewResultQuestion from "../components/InterviewResultQuestion";
import "./InterviewResult.scss";

const InterviewResult = () => {
  const results = {
    score: 3,
    topic: "Software engineering",
    totalQuestions: 4,
    questions: [
      {
        title: "Design Patterns and Software Engineering",
        body: "Design patterns have become an essential part of software engineering. Can you explain what design patterns are and why they are important in software development? Also, could you provide an example of a design pattern that you have used in your work and describe how it was implemented?",
        modelAnswer:
          "Design patterns are reusable solutions to common problems in software design. They help to improve the quality, reliability, and maintainability of software by providing proven approaches to solving common design problems. An example of a design pattern is the Singleton pattern, which ensures that only one instance of a class can be created and provides a global point of access to that instance. This pattern was used in my work to ensure that there was only one instance of a particular database connection object throughout the application, which helped to improve performance and reduce errors.",
        userAnswer:
          "Design patterns are decorative patterns used in the graphical user interface (GUI) of software applications. They are important because they enhance the aesthetic appeal of the software and make it more visually appealing to users. An example of a design pattern is the floral pattern, which can be used to decorate the background of a software application to make it look more beautiful.",
        score: 0.3,
      },
      {
        title: "Agile Software Development",
        body: "Agile software development is a popular methodology for software development projects. Can you explain what Agile development is and why it has become so popular? Additionally, could you provide an example of how Agile development has been used in a project you worked on?",
        modelAnswer:
          "Agile development is an iterative and incremental approach to software development that emphasizes flexibility, collaboration, and customer satisfaction. It involves breaking a project down into smaller, manageable chunks and delivering functional software in short time frames. Agile has become popular because it allows teams to respond quickly to changing requirements and produce high-quality software that meets customer needs. An example of Agile development in my work is when we used Scrum methodology to develop a new website for a client. We divided the project into two-week sprints and delivered a working website incrementally. This approach allowed us to make adjustments based on client feedback and deliver a high-quality website within the deadline.",
        userAnswer:
          "Agile development is a waterfall model for software development that involves a lot of meetings and paperwork. It has become popular because it allows managers to micro-manage their teams and track their progress closely. An example of Agile development in my work is when we had daily meetings to track progress and discuss any issues that arose.",
        score: 0.6,
      },
      {
        title: "Test-Driven Development",
        body: "Test-Driven Development (TDD) is a popular development methodology. Can you explain what TDD is and why it is important? Also, could you provide an example of a project where you used TDD?",
        modelAnswer:
          "Test-Driven Development (TDD) is a software development methodology where developers write tests before they write any code. This approach ensures that the code is testable and leads to better software quality. TDD is important because it helps to reduce the number of bugs in the code, improves software design, and makes it easier to maintain and extend the codebase. An example of a project where I used TDD is when we developed a new feature for our e-commerce website. We wrote unit tests for each function and ensured that they passed before we moved on to the next function. This approach helped us to catch and fix bugs early on in the development process, and also ensured that our code was more modular and easier to maintain.",
        userAnswer:
          "Test-Driven Development (TDD) is a software development methodology where developers write tests after they write the code. It is important because it helps to ensure that the code is functioning properly and meets the requirements. An example of a project where I used TDD is when we developed a new feature for our website. We wrote tests for each function after we had written the code, and then made any necessary adjustments to ensure that the code passed the tests.",
        score: 0.8,
      },
      {
        title: "Code Refactoring",
        body: "Code refactoring is an important aspect of software development. Can you explain what code refactoring is and why it is important? Also, could you provide an example of a project where you have performed code refactoring?",
        modelAnswer:
          "Code refactoring is the process of restructuring existing code without changing its external behavior. It is important because it helps to improve code quality, maintainability, and scalability. Refactoring can also make code easier to understand, which can reduce the risk of introducing new bugs. An example of a project where I performed code refactoring is when I was working on a legacy codebase that had become difficult to maintain. I refactored the code to remove duplication, improve readability, and make it easier to add new features. This helped to reduce the time and effort required to maintain the codebase, and also made it easier for other developers to work on the code.",
        userAnswer:
          "Code refactoring is the process of rewriting code from scratch. It is important because it helps to ensure that the code is up-to-date and meets current requirements. An example of a project where I performed code refactoring is when I was working on a legacy codebase that was no longer meeting our needs. I rewrote the code from scratch to bring it up-to-date and ensure that it met our current requirements.",
        score: 0.5,
      },
    ],
  };
  return (
    <main className={`main interviewResult d-flex flex-grow-1`}>
      <div className={`container p-lg-0`}>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
          }}
          className="text-center"
        >
          Interview Result
        </h1>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "100px",
          }}
        >
          <div>
            <h2 className="mb-0">Score</h2>
            <p
              style={{
                color: "rgba(0,0,0, 0.6)",
                fontSize: "16px",
              }}
              className="body mb-0"
            >
              {results.topic}
            </p>
          </div>
          <div
            style={{
              marginTop: "30px",
            }}
            className={`row g-0 interviewResultCard`}
          >
            <div
              style={{
                borderRight: "1px solid #ddd",
              }}
              className="col d-flex justify-content-center"
            >
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  pathColor: "#ffca8b",
                })}
                strokeWidth={4}
                value={Math.round(
                  (results.score / results.totalQuestions) * 100
                )}
                className="interviewResultCircle"
              >
                <h2 className="mb-0">
                  {Math.round((results.score / results.totalQuestions) * 100)}%
                </h2>
              </CircularProgressbarWithChildren>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <div>
                <h2>
                  You scored {results.score} out of {results.totalQuestions}{" "}
                  questions.
                </h2>
                <p
                  style={{
                    maxWidth: "440px",
                    margin: 0,
                  }}
                  className="body"
                >
                  For a more detailed comparison between your answers and the
                  model answer, check the results below.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="interviewComparison">
          <h2
            style={{
              marginBottom: "30px",
            }}
          >
            See how you did
          </h2>
          {results.questions.map((question, index) => {
            return (
              <InterviewResultQuestion
                //I'll change this to id later
                key={question.title}
                question={question}
                index={index + 1}
              ></InterviewResultQuestion>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default InterviewResult;
