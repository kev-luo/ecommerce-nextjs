import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  margin-bottom: 12px;
  font-size: 24px;
`

export const Button = styled.button`
  font-size: 24px;
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  padding: 10px;
  margin-bottom: 24px;
  transition: all 200ms linear;
  &:hover {
    background: grey;
    cursor: pointer;
  }
`