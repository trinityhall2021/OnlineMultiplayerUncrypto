import React, { Fragment } from "react";
import styled from "styled-components";

import "tabler-react/dist/Tabler.css";
import { Grid, Card } from "tabler-react";

const Section = styled.h1`
  font-family: "Cutive Mono", monospace;
  font-size: 32px;
  text-align: center;
`;

const WordText = styled.h1`
  font-family: "Cutive Mono", monospace;
  font-size: 40px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const GiveClue = (props) => {
  let codecard = "";
  for (let i = 0; i < 3; i++) {
    codecard += props.codeCard[i];
    codecard += " ";
  }
  let placeholders = [
    `Hint for ${props.codeWords[0]}`,
    `Hint for ${props.codeWords[1]}`,
    `Hint for ${props.codeWords[2]}`,
  ];
  return (
    <Fragment>
      <Section className="mt-0 mb-2">GIVE CLUE</Section>
      <Grid.Row className="px-5 mx-5">
        <Grid.Col>
          <Card className="px-3 py-3 h-100 mt-auto mb-auto">
            <input
              class="form-control"
              type="text"
              placeholder={placeholders[0]}
            ></input>
            <input
              class="form-control"
              type="text"
              placeholder={placeholders[1]}
            ></input>
            <input
              class="form-control"
              type="text"
              placeholder={placeholders[2]}
            ></input>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Card className="px-3 py-3 h-100">
            <WordText>{codecard}</WordText>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Fragment>
  );
};

export default GiveClue;
