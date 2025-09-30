import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle.js";
import dashboard from "../../Assets/Projects/Dashboard.png";
import ToD0 from "../../Assets/Projects/todo-list.png";
import foodapp from "../../Assets/Projects/food-website.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="cyan">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={ToD0}
              isBlog={false}
              title="To-D0 List Backend"
              description="A full-stack To-Do List application built with Express.js and Node.js.
                          Implements CRUD functionality (Create, Read, Update, Delete) for task management.
                          Backend API handles task storage and operations efficiently.
                          Clean, responsive front-end UI connected seamlessly with the backend.                          
                          A great example of integrating Express.js with dynamic front-end features."
              ghLink="https://github.com/rajprajapati1111/to-do-using-express"
            />
          </Col>

          <Col md={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Food App"
              description="A modern and visually appetizing food website landing page designed for a burger brand.
                          Features a bold hero section with a high-quality burger image to grab attention.
                          Clear call-to-action buttons encourage quick ordering and customer engagement.
                          Stylish navigation bar with a minimal yet functional layout.
                          Perfectly balanced typography and color scheme to highlight promotions and offers."
              ghLink="https://github.com/rajprajapati1111/food-app"
              demoLink="https://food-mqx7f63nn-rajprajapati1111s-projects.vercel.app/"
            />
          </Col>

          <Col md={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="M-[AD]min Dashboard"
              description="I'm developing a sleek and efficient Admin-Dashboard for my portfolio, utilizing Next.js and MongoDB. This project showcases advanced features such as user management, data analytics, and real-time updates, all within a responsive and intuitive interface. With a focus on performance and scalability, this dashboard demonstrates my ability to create powerful and user-friendly admin tools. Currently under construction"
              ghLink="https://github.com/rajprajapati1111/Dashboard-Using-React-js"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
