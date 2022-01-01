import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  border: 1px solid #000;
  padding: 12px;
  color: #000000;
  font-size: 20px;
  margin: 12px;
`;

export const Button = styled.button`
  border: none;
  background: #000;
  padding: 12px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin: 12px;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

export const Pane = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  border: 2px solid #999;
`;

export const PaneHeader = styled.div`
  border-bottom: 2px solid #999;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PaneContent = styled.div`
  padding: 16px;
`;
