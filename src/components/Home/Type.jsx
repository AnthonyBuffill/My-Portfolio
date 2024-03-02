import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Passionate CSS Enthusiast",
              "M_E_R_N Javascript Stack",
              "Effective Problem Solver",
              "Ambitious Learner"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type