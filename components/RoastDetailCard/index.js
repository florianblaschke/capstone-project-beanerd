import defaultPic from "@/public/default.jpg";
import EditForm from "../EditForm";
import { useRouter } from "next/router";
import {
  StyledDiv,
  StyledSectionVariant,
  StyledImageDetailVariant,
  StyledHeading,
  StyledParagraph,
  StyledRating,
  StyledNumberRating,
  StyledDivButtonWrapper,
  StyledButton,
} from "@/public/lib/styled-components";

export default function RoastDetailCard({
  onSubmit,
  name,
  roaster,
  arabica,
  robusta,
  level,
  provenance,
  score,
  edit,
  setEdit,
  session,
  onFavorite,
}) {
  const router = useRouter();

  return (
    <StyledDiv>
      <StyledImageDetailVariant
        priority={true}
        src={defaultPic}
        width={""}
        height={""}
        alt="Coffee-Package"
      />
      {!edit && (
        <StyledSectionVariant>
          <StyledHeading>{name}</StyledHeading>
          <StyledParagraph>{roaster}</StyledParagraph>
          <StyledHeading>Arabica / Robusta</StyledHeading>
          <StyledParagraph>
            {arabica} / {robusta}
          </StyledParagraph>
          <StyledHeading>Röstgrad</StyledHeading>
          <StyledParagraph>{level}</StyledParagraph>
          <StyledHeading>Herkunft</StyledHeading>
          <StyledParagraph>{provenance}</StyledParagraph>
          <StyledRating>
            Bewertung:{" "}
            {score.length > 0
              ? Math.floor(
                  score.reduce((acc, curr) => acc + curr, 0) / score.length
                )
              : 0}
            /100
          </StyledRating>
          <StyledNumberRating>
            {score.length} {score.length === 1 ? "Bewertung" : "Bewertungen"}
          </StyledNumberRating>
        </StyledSectionVariant>
      )}
      {edit && (
        <EditForm
          onSubmit={onSubmit}
          name={name}
          roaster={roaster}
          provenance={provenance}
          arabica={arabica}
          robusta={robusta}
          level={level}
        />
      )}
      <StyledDivButtonWrapper>
        <StyledButton onClick={() => router.push("/")}>Zurück</StyledButton>
        {session && (
          <StyledButton onClick={onFavorite}>Favorisieren</StyledButton>
        )}
        <StyledButton onClick={() => setEdit(!edit)}>
          {edit ? "Abbrechen" : "Bearbeiten"}
        </StyledButton>
      </StyledDivButtonWrapper>
    </StyledDiv>
  );
}
