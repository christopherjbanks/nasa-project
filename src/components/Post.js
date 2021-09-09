import React from "react";
import styled from "styled-components";

//copyright: "Martin Pugh"
// date: "2007-04-19"
// explanation: "Centaurus is one of the most striking constellations in the southern sky. The Milky Way flows through this celestial expanse whose wonders also include the closest star system to the Sun, Alpha Centauri, and the largest globular star cluster in our galaxy, Omega Centauri (aka NGC 5139). This sharp telescopic view of Omega Centauri shows off the central regions of the cluster of about 10 million stars. Omega Cen itself is about 15,000 light-years away and 150 light-years in diameter - the largest of 150 or so known globular star clusters that roam the halo of our galaxy. Though most star clusters consist of stars with the same age and composition, the enigmatic Omega Cen exhibits the presence of different stellar populations with a spread of ages and chemical abundances. In fact, Omega Cen may be the remnant core of a small galaxy merging with the Milky Way."
// hdurl: "https://apod.nasa.gov/apod/image/0704/OMC-Ver1.jpg"
// media_type: "image"
// service_version: "v1"
// title: "NGC 5139: Omega Centauri"
// url: "https://apod.nasa.gov/apod/image/0704/OMC-Ver1_c720.jpg"

const Post = ({ pic }) => {
  return (
    <Container>
      <Image src={pic.url} alt="NASA image of the day" />
      <HeaderInfo>
        <h4>{pic.date}</h4>
        <h4>{pic.copyright}</h4>
      </HeaderInfo>
      <p>{pic.explanation}</p>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: auto;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  color: #565656;
`;

const Image = styled.img`
  max-width: 460px;
  height: auto;
  margin-bottom: 10px;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;