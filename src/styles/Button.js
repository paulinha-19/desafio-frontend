import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#fff"};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  text-decoration: none;
  box-shadow: ${(props) => props.boxShadow || "none"};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  border: ${(props) => props.border || "transparent"};
`;
