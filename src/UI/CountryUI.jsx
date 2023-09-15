import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  box-shadow: #00000042 0 0 10px 1px;
  flex-direction: column;
  background-color: var(--colorHeader);
  color: var(--colorText);
  border-radius: 7px;
  width: 100%;
  min-height: 200px;
  max-height: 700px;
  &:hover {
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  height: fit-contents;
  width: 100%;
`;
const TextDiv = styled.div`
  padding: 10px;
`;

const TextComponenta = styled.p`
  font-size: 20px;
  background-color: var(--colorHeader);
  color: var(--colorText);
  padding: 10px 15px;
  margin: 0px;
  font-family: sans-serif;
`;
const HeadingTextComponenta = styled(TextComponenta)`
  font-size: 25px;
  font-weight: 700;
`;
export default function CountryUi({
  onclick,
  image,
  title,
  population,
  region,
  capital,
  imageAlt,
}) {
  return (
    <CardContainer onClick={onclick}>
      <ImageContainer>
        <img src={image} alt={imageAlt} />
      </ImageContainer>
      <TextDiv>
        <HeadingTextComponenta>{title}</HeadingTextComponenta>
        <TextComponenta>
          {" "}
          <b>Population: </b>
          {population}
        </TextComponenta>
        <TextComponenta>
          <b>Region: </b>
          {region}
        </TextComponenta>
        <TextComponenta>
          <b>Capital: </b>
          {capital}
        </TextComponenta>
      </TextDiv>
    </CardContainer>
  );
}
