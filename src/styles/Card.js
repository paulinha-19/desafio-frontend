import styled from "styled-components";
import { Box } from "@mui/material";

export const CardContent = styled.div`
  padding: 40px;
  text-align: ${(props) => props.textAlign || "center"};
`;
export const Title = styled.p`
  text-align: ${(props) => props.textAlign || "center"};
  font-size: 24px;
  font-weight: ${(props) => props.fontWeight || 600};
  color: #333333;
`;

export const Subtitle = styled.p`
  font-size: ${(props) => props.fontSize || 15};
  font-weight: ${(props) => props.fontWeight || 300};
  color: ${(props) => props.textcolor || "#666666"};
`;

export const CardContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 382px;
  height: ${(props) => props.height || "400px"};
`;
