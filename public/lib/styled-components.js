import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

// Styled Button

export const StyledButton = styled.button`
  width: 33%;
  border-radius: 4px;
  background-color: white;
  border: solid black 0.5px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const StyledButtonCenterVariant = styled(StyledButton)`
  align-self: center;
  margin: 24px;
  padding: 8px;
  width: 33%;
  border-radius: 4px;
  background-color: white;
  border: solid black 0.5px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const StyledGridButton = styled(StyledButton)`
  width: inherit;
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
  background-color: white;
  font-size: 12px;
  font-weight: 200;
  padding: 16px;
`;

// Styled Div

export const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  padding: 2px;
  border-radius: 8px;
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
  justify-items: center;
  align-items: center;
`;

export const StyledDivCardVariant = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 160px;
  border-radius: 8px;
  border: 0.5px solid #000;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
`;

export const StyledDivButtonWrapper = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`;

// Styled Footer

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 6vh;
  background-color: white;
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

export const StyledGridForm = styled.form`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: repeat(4, 1fr) 32px;
  align-items: center;
`;

// Styled Image

export const StyledImage = styled(Image)`
  height: auto;
  width: auto;
  border-radius: 8px 0px 0px 8px;
`;

export const StyledImageDetailVariant = styled(Image)`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: 80% 80%;
`;

export const StyledImageMarginTop = styled(Image)`
  margin-top: 32px;
`;

//Styled Inputs

export const StyledInput = styled.input`
  border-radius: 8px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 284px;
  height: 30px;
  margin: 8px;
`;

export const StyledInputVariant = styled(StyledInput)`
  width: 80%;
  height: 30px;
`;

export const StyledInputGridVariant = styled(StyledInput)`
  width: 20vw;
`;

export const StyledSlider = styled.input`
  width: 60vw;
  margin: 8px;
  align-self: center;
`;

export const StyledInputRating = styled.input`
  font-size: 12px;
  margin: 40px 0px 5px 0px;
  text-align: center;
`;

//Styled Labels

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  width: 63px;
  height: 14px;
  margin: 8px;
`;

export const StyledLabelVariant = styled(StyledLabel)`
  width: 40px;
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
  border: solid black 0.5px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 12px;
`;

export const StyledLinkVariant = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledLinkProfile = styled(StyledLinkVariant)`
  display: flex;
  width: 100%;
`;

// Styled Main

export const StyledMain = styled.main`
  margin-bottom: 24px;
  height: inherit;
  position: relative;
`;

// Styled Headings

export const StyledHeading = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin: 24px 0px -10px 0px;
  text-align: center;
`;

// Styled  Paragraphs

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 200;
  text-align: center;
`;

export const StyledRating = styled.p`
  font-size: 12px;
  font-size: 100;
  margin: 40px 0px 5px 0px;
  text-align: center;
`;

export const StyledNumberRating = styled.p`
  font-size: 8px;
  font-size: 100;
  margin: 0px 0px 24px 0px;
`;

// Styled Section

export const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 66%;
  font-weight: 300;
  padding: 12px;
`;

export const StyledSectionVariant = styled(StyledSection)`
  width: 100%;
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
  border: 0.5px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 8px;
  width: 80%;
  background-color: white;
  text-align: center;
`;

// Styled Table

export const StyledTable = styled.table`
  text-align: center;
  border-radius: 8px;
  line-height: 16px;
  border: solid black 0.5px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;
  width: 100%;
`;

// Styled Ul and Li

export const StyledList = styled.ul`
  list-style: none;
  padding: 0px 32px 0px 32px;
`;

export const StyledItem = styled.li`
  margin: 12px 0px 12px 0px;
`;
