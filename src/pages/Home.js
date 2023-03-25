import styles from "./Home.module.scss";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <main className={styles.home}>
      <section className={`${styles.header} d-flex`}>
        <div
          className={`container ${styles.container} p-lg-0 d-flex justify-content-center align-items-center`}
        >
          <div className="text-center">
            <h1>Cause your resume should be your least concern</h1>
            <p className="body">
              Resume.ai - The perfect tool for job seekers looking to get hired.
              Our AI-powered web application uses advanced methods to screen and
              score resumes, ensuring that you stand out from the competition.
              breeze through the application process, knowing you have the best
              chance of getting the job you want.
            </p>
            <Link className="redirect" to="/upload">
              Upload your Resume
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className={`container ${styles.container}`}>
          <h2>Your AI resume assistant</h2>
          <p className="body text-center">
            Struggling to write your resume? Don't worry, we got you covered
            with all the features you could need to land your dream job.
          </p>
          <Carousel></Carousel>
        </div>
      </section>
      <section className={styles.model}>
        <div className="container">
          <div className={`${styles["model-intro"]} text-center`}>
            <h2>What our model can do</h2>
            <p className="body">
              Some of the metrics you can expect our model to evaluate and help
              you improve
            </p>
          </div>
          <div className={`row ${styles.row}`}>
            <div className={`col ${styles.col}`}>
              <div className="d-flex">
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={faFont}
                ></FontAwesomeIcon>
                <div className={styles.feature_description}>
                  <h3>Typos</h3>
                  <p className="body">
                    Typos in a resume can be a major red flag for employers. Not
                    only do typos make a resume look sloppy and unprofessional,
                    but they can also make it difficult for employers to
                    understand the information presented. Taking the time to
                    proofread and correct typos in a resume can make the
                    difference between getting an interview and being
                    overlooked.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col ${styles.col}`}>
              <div className="d-flex">
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={faFont}
                ></FontAwesomeIcon>
                <div className={styles.feature_description}>
                  <h3>Typos</h3>
                  <p className="body">
                    Typos in a resume can be a major red flag for employers. Not
                    only do typos make a resume look sloppy and unprofessional,
                    but they can also make it difficult for employers to
                    understand the information presented. Taking the time to
                    proofread and correct typos in a resume can make the
                    difference between getting an interview and being
                    overlooked.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <div className={`col ${styles.col}`}>
              <div className="d-flex">
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={faFont}
                ></FontAwesomeIcon>
                <div className={styles.feature_description}>
                  <h3>Typos</h3>
                  <p className="body">
                    Typos in a resume can be a major red flag for employers. Not
                    only do typos make a resume look sloppy and unprofessional,
                    but they can also make it difficult for employers to
                    understand the information presented. Taking the time to
                    proofread and correct typos in a resume can make the
                    difference between getting an interview and being
                    overlooked.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col ${styles.col}`}>
              <div className="d-flex">
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={faFont}
                ></FontAwesomeIcon>
                <div className={styles.feature_description}>
                  <h3>Typos</h3>
                  <p className="body">
                    Typos in a resume can be a major red flag for employers. Not
                    only do typos make a resume look sloppy and unprofessional,
                    but they can also make it difficult for employers to
                    understand the information presented. Taking the time to
                    proofread and correct typos in a resume can make the
                    difference between getting an interview and being
                    overlooked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["pre-footer"]}>
        <div className="container">
          <div className="text-center">
            <h1>Ready to get started?</h1>
            <p className="body">Start using Resume.ai today!</p>
            <Link className="redirect" to={user ? "/upload" : "/auth/register"}>
              {user ? "Upload your resume" : "Sign Up"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
