import styled, { css } from "styled-components";
import { device } from "./Breakpoints";

export const Title = styled.p`
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.textColor || "#000"};
`;

export const Subtitle = styled.p`
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.textColor || "#000"};
  width: 100%;
`;

export const TextContainer = styled.div`
  @media ${device.sm} {
  }
  @media ${device.xs} {
  }
`;
