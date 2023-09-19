import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

// Styled Button

export const StyledButton = styled.button`
  width: 33%;
  max-height: 48px;
  background-color: white;
  border: solid black 0.75px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 10px;
  font-weight: 500;
  font-family: system-ui;
  min-width: fit-content;
`;

export const StyledButtonFavorite = styled(StyledButton)`
  position: absolute;
  bottom: 32px;
  left: 107.5px;
  width: 160px;
`;

export const StyledButtonCenterVariant = styled(StyledButton)`
  align-self: center;
  margin: 24px;
  padding: 8px;
  width: 33%;
  border: solid black 0.5px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const StyledGridButton = styled(StyledButton)`
  grid-column: 1 / 3;
  width: 50%;
`;

export const StyledGridButtonSpan = styled(StyledGridButton)`
  grid-column: 1 / 3;
`;

export const StyledDelete = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: white;
  border: none;
  height: 8%;
  font-weight: 400;
  font-size: 10px;
`;

export const StyledButtonBorderless = styled.button`
  border: none;
  font-size: 12px;
  font-weight: 200;
  padding: 16px;
  background: transparent;
`;

export const StyledButtonBack = styled(StyledButtonBorderless)`
  position: fixed;
  top: 7px;
  left: 16px;
  padding: 0px;
`;

export const StyledLogOutButton = styled(StyledButtonBorderless)`
  padding: 4px;
`;

// Styled Div

export const StyledSectionWrapper = styled.div`
  height: 200vh;
  position: sticky;
  background-color: white;
`;

export const StyledDivSearch = styled.div`
  height: inherit;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  padding: 2px;
  border-radius: 8px;
  margin-top: ${(props) => (props.$session ? "0px" : "32px")};
`;

export const StyledDivInheritVariant = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: inherit;
`;

export const StyledDivGridVariant = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 0.2fr;
  justify-items: start;
  align-items: center;
`;

export const StyledDivCardVariant = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 240px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
`;

export const StyledDivButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  gap: 16px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const StyledDivButtonWrapperVariant = styled(StyledDivButtonWrapper)`
  flex-flow: row wrap;
  gap: 0px;
  justify-content: center;
  text-align: center;
  margin-top: 24px;
  margin-bottom: -16px;
  background-color: white;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 10vh;
  background-color: white;
`;

export const StyledFavDiv = styled.div`
  position: absolute;
  top: -24px;
  right: 64px;
  width: 10px;
`;

export const StyledSimpleDiv = styled.div`
  padding: 8px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 300;
`;

export const StyledPlaceholder = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
`;

//Styled Forms

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  padding: 20px;
  height: auto;
`;

export const StyledFormRating = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const StyledGridForm = styled.form`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: repeat(4, 1fr) 32px;
  align-items: center;
`;

export const StyledGridFormEdit = styled(StyledGridForm)`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 40px);
  justify-items: center;
`;

// Styled i

export const StyledBackArrow = styled.i`
  border: solid black;
  border-width: 0 1.75px 1.75px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

// Styled Image

export const StyledImage = styled(Image)`
  height: auto;
  width: auto;
`;

export const StyledSVG = styled(Image)`
  height: 100px;
  width: 90px;
`;

export const StyledImageDetailVariant = styled(Image)`
  width: 100%;
  height: 240px;
  object-fit: contain;
  object-position: 50% 50%;
  margin-top: -40px;
`;

export const StyledImageMarginTop = styled(Image)`
  margin-top: 32px;
`;

export const StyledImageBackground = styled(Image)`
  position: absolute;
  top: 16px;
  right: 40px;
  opacity: 0.1;
  z-index: -1;
`;

// Styled Header

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 4vh;
  z-index: 1;
  background-color: white;
  opacity: 0.7;
  border-radius: 0px 0px 0px 8px;
`;

// Styled Headings

export const StyledHeading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0px -10px 20px;
  border-left: solid 3px rgb(119, 88, 88);
  padding-left: 8px;
`;

export const StyledHeadingSection = styled.h2`
  position: relative;
  top: 8px;
  margin: 16px;
  padding-top: 8px;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledHeadingHome = styled.h1`
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 8px;
  margin-top: 16px;
`;
//Styled Inputs

export const StyledInput = styled.input`
  border: 0.75px solid #000;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  width: 284px;
  height: 30px;
  margin: 8px;
`;

export const StyledInputVariant = styled(StyledInput)`
  width: 80%;
  height: 30px;
`;

export const StyledInputGridVariant = styled(StyledInput)`
  width: 27vw;
`;

export const StyledSlider = styled.input`
  background: transparent;
  width: 60vw;
  margin: 8px;
  align-self: center;
`;

export const StyledInputRating = styled.input`
  font-size: 12px;
  margin: 0px 0px 5px 0px;
  align-self: center;
`;

//Styled Labels

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  width: 63px;
  height: 14px;
  margin: 8px;
  text-align: center;
`;

export const StyledLabelGrid = styled(StyledLabel)`
  text-align: left;
`;

export const StyledLabelEdit = styled(StyledLabel)`
  grid-column: 1 / 3;
`;

export const StyledLabelVariant = styled(StyledLabel)`
  width: 40px;
  text-align: left;
`;

export const StyledSliderLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  height: 14px;
  margin: 8.5px;
  align-self: center;
`;

// Styled Link

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid black 1px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  background-color: white;
  font-weight: 400;
  font-size: 12px;
  filter: ${(props) => (props.$active ? "invert(1)" : "")};
`;

export const StyledLinkVariant = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
`;

export const StyledLinkProfile = styled(StyledLinkVariant)`
  display: flex;
  width: 100%;
`;

export const StyledLinkSmooth = styled(StyledLink)`
  padding: 8px;
  height: 40px;
  width: 6rem;
  margin: 8px;
`;

// Styled Main

export const StyledMain = styled.main`
  margin-top: ${(props) => (props.$sessionActive ? "32px" : "0px")};
  margin-bottom: 24px;
  height: inherit;
  position: relative;
  background: transparent;
`;

// Styled  Paragraphs

export const StyledParagraph = styled.p`
  font-size: 12px;
  text-align: center;
  margin-left: 20px;
  margin-top: 10px;
  border-left: solid 3px rgb(119, 88, 88);
  padding-left: 8px;
`;

export const StyledParagraphNoBorder = styled(StyledParagraph)`
  border: none;
  margin-left: 0px;
  padding-left: 0px;
`;

export const StyledRating = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 40px 0px 5px 20px;
  border-left: solid 1.5px rgb(189, 163, 148);
  padding-left: 8px;
`;

export const StyledRatingLessMargin = styled(StyledRating)`
  margin: 24px 0px 5px 20px;
`;

export const StyledNumberRating = styled.p`
  font-size: 8px;
  font-weight: 300;
  margin: -5px 0px 24px 20px;
  border-left: solid 1.5px rgb(189, 163, 148);
  padding-left: 8px;
`;

export const StyledGreeting = styled.p`
  margin: 0px 8px 0px 0px;
  font-weight: 200;
  font-size: 12px;
  padding: 4px;
`;

export const StyledSectionWriting = styled(StyledParagraph)`
  text-align: left;
`;

// Styled Section

export const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 66%;
  font-weight: 300;
  padding: 12px;
`;

export const StyledSectionVariant = styled(StyledSection)`
  width: 100%;
`;

export const StyledSectionOver = styled.section`
  position: relative;
  margin-top: -100vh;
  background-color: white;
  height: inherit;
  min-height: 100vh;
  border-radius: 8px 8px 0px 0px;
`;

export const StyledSectionUnder = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: white;
`;

export const StyledSectionNoWidthVariant = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 16px;
`;

// Styled Select

export const StyledSelect = styled.select`
  border-radius: 8px;
  border: 0.75px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 8px;
  width: 80%;
  height: 30px;
  background-color: white;
  text-align: center;
`;

export const StyledSelectEdit = styled(StyledSelect)`
  grid-column: 1 / 3;
  height: 30px;
  width: 60vw;
`;

// Styled Table

export const StyledTable = styled.table`
  text-align: center;
  line-height: 16px;
  font-size: 0.75rem;
  width: 100%;
`;

// Styled Ul and Li

export const StyledList = styled.ul`
  list-style: none;
  padding: 16px;
  margin-bottom: 48px;
`;

export const StyledItem = styled.li`
  margin: 12px 0px 12px 0px;
`;
