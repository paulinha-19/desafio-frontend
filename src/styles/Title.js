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

export const TitleResponsive = styled(Title)`
  padding: 40px;
  margin: 0 auto;
  color: #333333;
  @media ${device.sm} {
    max-width: 334px;
  }
`;

export const SubtitleResponsive = styled(Subtitle)`
  max-width: 600px;
  color: #333333;
  margin: 0 auto;
  @media ${device.sm} {
    max-width: 286px;
  }
`;
