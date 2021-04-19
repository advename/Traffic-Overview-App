import React from "react";
import * as S from "./style";

import { Heading } from "../../components/Heading";

export function About() {
  return (
    <S.Main>
      <Heading level={1}>About page</Heading>
      <p>
        This is a small project example of using React with Typescript and
        styled components
      </p>
    </S.Main>
  );
}
