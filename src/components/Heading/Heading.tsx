import React from "react";

import * as S from "./style";

export interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export function Heading(props: Props) {
  /**
   * Unfortunately, `h${props.level}` evaluates as "string" type and not as
   * an JSX.IntrinsicElements type (a | h1 | h2 | ... | div | br).
   *
   * Therefore, the `as "h1"` part is required to "mark" it as a valid JSX.IntrinsicElements type.
   *
   * Nevertheless, the "h1" is only used to staisfy typescript, but the actual element is
   * our variable h elements (aka: h + level).
   * Background: https://stackoverflow.com/a/67155403/3673659
   */
  return <S.Heading as={`h${props.level}` as "h1"}>{props.children}</S.Heading>;
}
