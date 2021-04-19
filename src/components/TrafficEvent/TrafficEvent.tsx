import React from "react";

import { Heading } from "../../components/Heading";
import * as S from "./style";

export interface Props {
  id: string;
  title: string;
  area: string;
  latestUpdate: string;
  description: string;
  severity: "Unknown" | "Minor" | "Moderate" | "Major";
}

export function TrafficEvent(props: Props) {
  return (
    <S.EventBox severity={props.severity}>
      <Heading level={3}>{props.title}</Heading>
      <Heading level={4}>{props.area}</Heading>
      <p>{props.description}</p>
      <Heading level={4}>{props.latestUpdate}</Heading>
    </S.EventBox>
  );
}
