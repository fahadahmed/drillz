import React, { ReactNode, FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  height: 100vh;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  background: #efefef;
`;

const AuthenticatedContainer = styled.div`
  display: grid;
  height: 100vh;
  font-family: sans-serif;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto;
`;

type Props = {
  children: ReactNode;
  authenticated?: boolean;
};

const AppContainer: FC<Props> = ({ children, authenticated }) => {
  if (authenticated) {
    return (
      <AuthenticatedContainer>
        <div>Sidebar</div>
        <div>{children}</div>
      </AuthenticatedContainer>
    );
  }
  return <Container>{children}</Container>;
};

export default AppContainer;
