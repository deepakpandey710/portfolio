import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import codePro1 from "../assets/img/leet_Resize.png"
import codePro2 from "../assets/img/codePro2.png"
import codePro3 from "../assets/img/codePro3.png"
import codePro4 from "../assets/img/codePro4.png"



import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { CodingProfilesCard } from "./CodingProfilesCard";

export const CodingProfiles = () => {
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
                  <h2>Coding Profiles</h2>
                    <br/>                  
                        <Row>{
                          Profiles.map((profile,index)=>{
                            return(
                              // <ProjectCard key={index} {...profile}/>
                              <CodingProfilesCard key={index} {...profile}/>

                            )
                          })
                          }
                        </Row>
                      
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
