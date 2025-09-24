import Navbar from "../Components/navbar";
import "../Styles/About.css";
import { FaReact, FaReacteurope } from "react-icons/fa";
import { SiReactrouter, SiJsonwebtokens } from "react-icons/si";

const About = () => {
  return (
    <div className="container card about-page">
      <Navbar />
      <h2>About This Application</h2>
      <p>
        This application is built as a React assignment to demonstrate routing,
        authentication, and CRUD operations using modern React practices.
      </p>

      <div>
        <strong>Technologies Used:</strong>
        <br /> <br />
        <ul>
          <li>
            <FaReact className="list-icon" /> React (Functional Components +
            Hooks)
          </li>
          <li>
            <SiReactrouter className="list-icon" /> React Router DOM for
            navigation
          </li>
          <li>
            <FaReacteurope className="list-icon" /> Fetch API for data
            operations
          </li>
          <li>
            <SiJsonwebtokens className="list-icon" /> JSONPlaceholder as a mock
            backend
          </li>
        </ul>
      </div>

      <p>
        <strong>Author:</strong> Dhanalakshmi <br />
        <strong>Contact:</strong> 6374378545 <br />
        <a href="mailto:kavithabalaji1029@gmail.com">
          kavithabalaji1029@gmail.com
        </a>
      </p>
    </div>
  );
};

export default About;
