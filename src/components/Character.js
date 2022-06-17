// Write your Character component here
import Details from "./Details";
import { useState } from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  background-color: #968759af;
  color: white;
  border-radius: 0.5em;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 40%;
  margin: 0.2rem;
  border: 2px double #5b552ff4;
  font-size: 1.4rem;
  text-shadow: 1px 1px 5px #ddd;
`;

const CharacterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 1.2rem;
`;

const ButtonDiv = styled.div`
  display: block;
  align-self: right;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  border: 1.5px solid #5e3902f4;
  background-color: #9b6109f4;
`;

const Character = (props) => {
  const { character } = props;

  const [isOn, setIsOn] = useState(false);
  const detailsOn = () => {
    return setIsOn(!isOn);
  };

  return (
    <StyledCharacter>
      <CharacterDiv>
        <h3>{character.name}</h3>
        <h3>{character.birth_year}</h3>
      </CharacterDiv>
      <ButtonDiv>
        <button onClick={() => detailsOn()}>details </button>
      </ButtonDiv>
      {isOn && <Details details={character} />}
    </StyledCharacter>
  );
};

export default Character;
