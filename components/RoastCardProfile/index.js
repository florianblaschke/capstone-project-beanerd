import defaultPic from "@/public/default.jpg";
import styled from "styled-components";
import {
  StyDiv,
  StyImage,
  StyDivText,
  StyHTwo,
  StyP,
  StyRating,
  StyNumberRating,
  StyLink,
} from "../RoastCard";

export default function RoastCardProfile({
  name,
  roaster,
  score,
  onDelete,
  id,
}) {
  return (
    <StyDiv>
      <StyLinkProfile href={`/login/profile/${id}`}>
        <StyImage
          priority={false}
          src={defaultPic}
          width={100}
          height={""}
          alt="Coffee-Package"
        ></StyImage>
        <StyDivText>
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
      </StyLinkProfile>
      <StyDelete onClick={onDelete}>Löschen</StyDelete>
    </StyDiv>
  );
}

const StyDelete = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: white;
  border: none;
  height: 8%;
  font-weight: 400;
  font-size: 10px;
`;

const StyLinkProfile = styled(StyLink)`
  display: flex;
  width: 100%;
`;
