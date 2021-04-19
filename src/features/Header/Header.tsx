import React from "react";

import * as S from "./style";

export function Header() {
  return (
    <S.Container>
      <S.Logo>YMCA</S.Logo>
      <S.LinksContainer>
        <S.Link exact to="/" size="small">
          Home
        </S.Link>
        <S.Link to="/about" size="small">
          About
        </S.Link>
      </S.LinksContainer>
    </S.Container>
  );
}
