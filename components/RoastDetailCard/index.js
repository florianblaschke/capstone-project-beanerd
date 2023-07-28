import defaultPic from "@/public/default.jpg";
import { styled } from "styled-components";
import Image from "next/image";

export default function RoastDetailCard({
  name,
  roaster,
  arabica,
  robusta,
  level,
  provenance,
  score,
}) {
  return (
    <StyDiv>
      <StyImage
        src={defaultPic}
        width={""}
        height={""}
        alt="Coffee-Package"
      ></StyImage>
      <StyDivText>
        <StyHTwo>{name}</StyHTwo>
        <StyP>{roaster}</StyP>
        <StyHTwo>Arabica / Robusta</StyHTwo>
        <StyP>
          {arabica} / {robusta}
        </StyP>
        <StyHTwo>Röstgrad</StyHTwo>
        <StyP>{level}</StyP>
        <StyHTwo>Herkunft</StyHTwo>
        <StyP>{provenance}</StyP>
        <StyRating>
          Bewertung:{" "}
          {score.length > 0
            ? Math.floor(
                score.reduce((acc, curr) => acc + curr, 0) / score.length
              )
            : 0}
          /100
        </StyRating>
        <StyNumberRating>
          {score.length} {score.length === 1 ? "Bewertung" : "Bewertungen"}
        </StyNumberRating>
      </StyDivText>
    </StyDiv>
  );
}

const StyDiv = styled.div`
  padding: 2px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
`;
const StyDivText = styled.section`
  padding: 12px;
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const StyHTwo = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin: 24px 0px -10px 0px;
  text-align: center;
`;
const StyP = styled.p`
  font-size: 12px;
  font-weight: 200;
  text-align: center;
`;

const StyRating = styled.p`
  font-size: 12px;
  font-size: 100;
  margin: 40px 0px 5px 0px;
  text-align: center;
`;

const StyNumberRating = styled.p`
  font-size: 8px;
  font-size: 100;
  margin: 0px 0px 24px 0px;
`;

const StyImage = styled(Image)`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: 80% 80%;
`;
