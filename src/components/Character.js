// Write your Character component here
import Details from "./Details";
import { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

const StyledCharacter = styled.div`
  background-color: #968759af;
  color: white;
  border-radius: 0.5em;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 40%;
  margin: 0.4rem;
  border: 2px double #5b552ff4;
  font-size: 1.4rem;
  text-shadow: 1px 1px 5px #ddd;
`;

const CharacterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 1.1rem 1.2rem;
`;

const ButtonDiv = styled.div`
  display: block;
  align-self: right;
  margin-bottom: 0.5rem;
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
        <Button onClick={() => detailsOn()} class="btn-secondary btn-sm btn-info">
          Details
        </Button>
      </ButtonDiv>
      {isOn && <Details details={character} />}
    </StyledCharacter>
  );
};

export default Character;
