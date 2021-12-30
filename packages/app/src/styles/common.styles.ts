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
