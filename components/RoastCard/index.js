import Image from "next/image";
import { styled } from "styled-components";
import defaultPic from "@/public/default.jpg";

export default function RoastCard({ name, roaster, score }) {
  const rating =
    score.length === 0
      ? 0
      : Math.floor(score.reduce((acc, curr) => acc + curr, 0) / score.length);

  return (
    <StyDiv>
      <StyImage
        src={defaultPic}
        width={123}
        height={160}
        alt="Coffee-Package"
      ></StyImage>
      <StyDivText>
        <StyP>{name}</StyP>
        <StyP>{roaster}</StyP>
        <StyP>Bewertung: {rating}/100</StyP>
        <StyP>{score.length} Bewertungen</StyP>
      </StyDivText>
    </StyDiv>
  );
}

const StyDiv = styled.div`
  display: flex;
  flex-flow: row no wrap;
  margin: 20px;
  width: 280px;
  height: 160px;
  border-radius: 8px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
`;

const StyDivText = styled.div`
  display: grid;
  flex-flow: column wrap;
  line-gap: none;
`;

const StyP = styled.p`
  margin: 0px;
`;

const StyImage = styled(Image)`
  border-radius: 8px 0px 0px 8px;
  height: auto;
  width: auto;
`;
