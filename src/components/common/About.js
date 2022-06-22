import React from "react";
import { FaGithub } from "react-icons/fa";

export default function About() {

	return (
    <section className="section about-section">
      <h1 className="section-title">About Us</h1>

      <p className='paragraph'>
        Meet our team!  We are 8.4-NW Pursuit fellows that created the YouTube
        clone project for module 3. For more information about us, please click
        on the GitHub link.
      </p>
      <div className="imgRow">
        <div className="imgColumn">
          <a
            href="https://github.com/JimmyAyivor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://avatars.githubusercontent.com/u/12377575?v=4"
              alt="github"

            />
            Click here <FaGithub />
          </a>
        </div>

        <div className="imgColumn">
          <a
            href="https://github.com/MichaelKleemoff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://avatars.githubusercontent.com/u/96216513?v=4"
              alt="github"

            />
            Click here <FaGithub />
          </a>
        </div>

        <div className="imgColumn">
          <a
            href="https://github.com/ctay47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://avatars.githubusercontent.com/u/96319372?v=4"
              alt="github"

            />
            Click here <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
