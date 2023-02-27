import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project2.png";
import projImg2 from "../assets/img/project1.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cert1 from "../assets/img/cert1.png"
import cert2 from "../assets/img/cert2.png"
import cert3 from "../assets/img/cert3.png"
import cert4 from "../assets/img/cert4.png"
import cert5 from "../assets/img/cert5.png"
import cert6 from "../assets/img/cert6.png"
import cert7 from "../assets/img/cert7.png"
import cert8 from "../assets/img/cert8.png"
import cert9 from "../assets/img/cert9.png"
import cert10 from "../assets/img/cert10.png"
import cert11 from "../assets/img/cert11.png"
import cert12 from "../assets/img/cert12.png"
import codePro1 from "../assets/img/codePro1.png"
import codePro2 from "../assets/img/codePro2.png"
import codePro3 from "../assets/img/codePro3.png"
import codePro4 from "../assets/img/codePro4.png"



import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { CodingProfilesCard } from "./CodingProfilesCard";

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce webapp",
      description: "Built using React, Node, MongoDb, Redux, Express",
      imgUrl: projImg1,
    },
    {
      title: "Group-Chat website",
      description: "Built using React, Node, Websocket",
      imgUrl: projImg2,
    },
    {
      title: "Arcade Ping-pong game",
      description: "Built using Python",
      imgUrl: projImg3,
    },
    {
      title: "Seller Dashboard",
      description: "Built using React, Node, MongoDb, Express",
      imgUrl: projImg4,
    },
    {
      title: "Moodie Foodie",
      description: "Built using HTML, CSS, javascript, Machine Learning, Python",
      imgUrl: projImg5,
    },
    {
      title: "Travel Website",
      description: "Built using HTML, CSS.",
      imgUrl: projImg6,
    },
  ];

  const Certificates=[
    {
      title: "Alison Certificate",
      description: "Python programming",
      imgUrl: cert1,
    },
    {
      title: "ISRO certificate",
      description: "Geoprocessing with python",
      imgUrl: cert2,
    },
    {
      title: "Codekaze certificate",
      description: "Scored 144/144, Global Rank- 3107 among 200000 candidates",
      imgUrl: cert3,
    },
    {
      title: "NPTEL",
      description: "Introduction to industry 4.0 and industrial internet of things",
      imgUrl: cert10,
    },
    {
      title: "NPTEL",
      description: "Enhancing soft skills and Personality",
      imgUrl: cert11,
    },
    {
      title: "NPTEL",
      description: "Speaking Effectively",
      imgUrl: cert9,
    },
    {
      title: "AWS",
      description: "AWS machine learning",
      imgUrl: cert4,
    },
    {
      title: "Geeks for Geeks",
      description: "JOB-A-THON 10, Scored 100%",
      imgUrl: cert5,
    },
    {
      title: "Microsoft",
      description: "AI classroom Series",
      imgUrl: cert6,
    },
    {
      title: "SOLACE",
      description: "Developer Practitioner",
      imgUrl: cert7,
    },
    {
      title: "SOLACE",
      description: "Solutioons consultant",
      imgUrl: cert8,
    },
    {
      title: "Geeks for Geeks",
      description: "Python facts for C++ developers",
      imgUrl: cert12,
    },
    
  ];

  const Profiles=[
    {
      title: "LEETCODE",
      description: "Knight(Rating: 1880+) Solved 700+ problems",
      Link: "https://leetcode.com/pandeydeepak710/",
      imgUrl: codePro1,
    },
    {
      title: "GeeksforGeeks",
      description: "Batch Rank-1, College Rank-5, Score-460+",
      Link: "https://auth.geeksforgeeks.org/user/pandeydeepak710/practice",
      imgUrl: codePro2,
    },
    {
      title: "HackerRank",
      description: "5 star rating",
      Link:"https://www.hackerrank.com/pandeydeepak710",
      imgUrl: codePro3,
    },
    {
      title: "CodeStudio",
      description: "Level 5 (Champion)",
      Link:"https://www.codingninjas.com/codestudio/profile/57954126-93ce-42df-a60d-ae44767d43bf",
      imgUrl: codePro4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects | Certificates | Coding Profiles</h2>
                  <br/><br/>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certificates</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Profiles</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            Certificates.map((certificate,index)=>{
                              return(
                                <ProjectCard
                                key={index}
                                {...certificate}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>{
                          Profiles.map((profile,index)=>{
                            return(
                              // <ProjectCard key={index} {...profile}/>
                              <CodingProfilesCard key={index} {...profile}/>

                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
