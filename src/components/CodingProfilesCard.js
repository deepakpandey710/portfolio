import { Col } from "react-bootstrap";

export const CodingProfilesCard = ({ title, description, Link,imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/><br/>
          <a className="profile" href={Link}><span>Click here to view profile</span></a>
        </div>
      </div>
    </Col>
  )
}
