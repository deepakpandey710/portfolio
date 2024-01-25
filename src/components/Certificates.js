import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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

export const Certifcates = () => {
    const Certificates = [
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
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Certificates</h2>
                                    <br />

                                    <Row>
                                        {
                                            Certificates.map((certificate, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...certificate}
                                                    />
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
