import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import invoicinator from "../assets/projects/invoicinator.png";
import aQuickword from "../assets/projects/aQuickword.png";
import OnlyLaughs from "../assets/projects/OnlyLaughs.png";
import Scheduler from "../assets/projects/Scheduler.png";
import SpeedQuiz from "../assets/projects/SpeedQuiz.png";
import textEditor from "../assets/projects/textEditor.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath= {textEditor}
              isBlog= {false}
              title= "Jammin Text Editor"
              description="This is a text editor application that you can use to write syntax both online and offline should you choose to download it onto your local device....  Just another devlopers playground"
              ghLink= "https://github.com/AnthonyBuffill/jammin-text-editor"
              demoLink= "https://jammin-text-editor-0ae8787efa04.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpeedQuiz}
              isBlog={false}
              title="Speedy Sports Quiz"
              description="Have you got what it takes to beat this quiz?  heres what you're up against: 25 seconds, 7 questions, and some anxiety inducing stylings to make you feel the pressure...good luck."
              ghLink= "https://github.com/AnthonyBuffill/sports-quiz"
              demoLink= "https://anthonybuffill.github.io/sports-quiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aQuickword}
              isBlog={false}
              title="A Quick Word"
              description="This application leverages Mongo DB, NODE, Express, Mongoose and JAVASCRIPT to created a database for a social media experience. It uses CRUD operations to manage and maintain a database comprised of users, and their unique thoughts."
              ghLink= "https://github.com/AnthonyBuffill/aquickword"
              demoLink= "https://drive.google.com/file/d/1KfhO3YRbhaX99oHSSkl2tACPIFlU2R4I/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoicinator}
              isBlog={false}
              title="Invoicinator"
              description="Welcome to INVOICINATOR, the ultimate powerhouse for businesses to flex their invoicing muscles and dominate the professional landscape! It's time to terminate the tedious process of manual invoicing and embrace the future of dynamic, automated invoice creation."
              ghLink= "https://github.com/AnthonyBuffill/invoicinator"
              demoLink= "https://invoicinator-e5b9fce169c1.herokuapp.com/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scheduler}
              isBlog={false}
              title="Workday Planner"
              description="For this task I was asked to create a planner that changed colors consistent with time blocks that are in the past, present, and future. I adjusted some color content tto make it a bit more pleasant but this app is linked to dayjs time formats so if you are viewing this during the hours of 5:01 pm to 8:59 pm you will most likely experience a pale blue hue to all time blocks on this planner. Once you are in the window of 9 am to 5 pm if the time block hour is still ahead it will appear green while if you are in a current hour it will show as red while the hours of the past will have the previously stated pale blue hue."
              ghLink= "https://github.com/AnthonyBuffill/workday-planner"
              demoLink= "https://anthonybuffill.github.io/workday-planner/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnlyLaughs}
              isBlog={false}
              title="Only Laughs"
              description=" Welcome to ONLY LAUGHS! This website is a fun user friendly experience created to provide a spark of fun to your day. The source code contains fully functional generator buttons, links to different pages, two API keys, TailwindCSS styles, as well as a save button which will be explained more in depth simply by visiting the landing page and playing around with the interface"
              ghLink="https://github.com/AnthonyBuffill/only-laughs"
              demoLink="https://anthonybuffill.github.io/only-laughs/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects