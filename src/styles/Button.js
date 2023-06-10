import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: linear-gradient(254deg, #fa641e 0%, #ff881f 100%) 0% 0% no-repeat
    padding-box padding-box transparent;
  color: #ffffff;
  padding: ${(props) => props.padding || "6px 24px"};
  border-radius: 32px;
  text-decoration: none;
  box-shadow: 0px 5px 10px #fa641ead;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "14px"};
  text-align: center;
`;
