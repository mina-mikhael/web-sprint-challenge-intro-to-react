import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  font-size: 1.2rem;
  align-self: center;
  background-color: #968759aa;
  border-top: 2px solid #968759ff;
`;

const Details = (props) => {
  const { details } = props;
  console.log(details);

  return (
    <StyledDiv>
      <p>Height: {details.height}</p>
      <p>Mass: {details.mass}</p>
      <p>hair color: {details.hair_color}</p>
      <p>Skin color: {details.skin_color}</p>
    </StyledDiv>
  );
};

export default Details;
