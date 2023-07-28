import Image from "next/image";
import { styled } from "styled-components";
import defaultPic from "@/public/default.jpg";
import Link from "next/link";

export default function RoastCard({ name, roaster, score, id }) {
  return (
    <StyLink href={`/${id}`}>
      <StyDiv>
        <StyImage
          src={defaultPic}
          width={123}
          height={160}
          alt="Coffee-Package"
        ></StyImage>
        <StyDivText class={roboto.className}>
          <StyHTwo>{name}</StyHTwo>
          <StyP>{roaster}</StyP>
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
    </StyLink>
  );
}
const StyDiv = styled.div`
  display: flex;
  flex-flow: row no wrap;
  justify-content: center;
  width: 280px;
  height: 160px;
  border-radius: 8px;
  border: 0.5px solid #000;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
`;
const StyDivText = styled.section`
  padding: 12px;
  display: flex;
  width: 66%;
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
  border-radius: 8px 0px 0px 8px;
  height: auto;
  width: auto;
`;

const StyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;