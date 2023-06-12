import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import styled from "styled-components";
import pigzFooter from "../../assets/footer/pigz-footer.png";
import googlePlay from "../../assets/footer/google-play.png";
import appStore from "../../assets/footer/app-store.png";
import faleConosco from "../../assets/footer/fale-conosco.png";
import linkedin from "../../assets/footer/linkedin.png";
import instagram from "../../assets/footer/instagram.png";
import facebook from "../../assets/footer/facebook.png";
import youtube from "../../assets/footer/youtube.png";
import orangeFooter from "../../assets/footer/orange-footer.png";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 30px 0;
  border-bottom: 5px solid #ff671f;
  margin-top: 40px;
`;

const FooterMain = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(153, 153, 153);
`;

const ContentFooter = styled(Grid)`
  gap: 2;
  padding-left: 10%;
  @media (max-width: 900px) {
    padding-left: 16px;
  }
`;

const FooterEnd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10%;
  @media (max-width: 900px) {
    padding: 0 16px;
  }
`;

const ContentFoooterEnd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
`;

const CopyRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1124px) {
    margin-left: 26px;
  }
  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextFooter = styled(Typography)`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.textcolor || "#676767"};
  font-size: ${(props) => props.fontSize};
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

const LinkFooter = styled.a`
  text-decoration: none;
  color: #666666;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <ContentFooter container maxWidth="xl">
          <Grid item xs={12} sm={12} md={4}>
            <Columns>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <img src={pigzFooter} alt="pigz footer" />
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="11px"
                  fontWeight="400"
                  sx={{ marginTop: 1 }}
                >
                  Tudo que você precisa.
                </TextFooter>
              </Box>
              <Box>
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="16px"
                  fontWeight="600"
                  style={{ margin: "55px 0 16px" }}
                >
                  Baixe o App
                </TextFooter>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <LinkFooter
                    href="https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt_BR&gl=US"
                    target="_blank"
                  >
                    <img src={googlePlay} />
                  </LinkFooter>

                  <LinkFooter
                    href="https://apps.apple.com/br/app/pigz/id1526557835"
                    target="_blank"
                    sx={{ marginLeft: 1 }}
                  >
                    <img src={appStore} />
                  </LinkFooter>
                </Box>
              </Box>
            </Columns>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Columns>
              <Box
                sx={{
                  gap: 2,
                  "@media (max-width: 900px)": {
                    marginTop: "65px",
                  },
                }}
              >
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="16px"
                  fontWeight="600"
                >
                  Pigz
                </TextFooter>
              </Box>
              <LinkFooter
                href="https://pigz.com.br"
                target="_blank"
                style={{ marginTop: "15px" }}
              >
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="14px"
                  fontWeight="400"
                  textcolor="#666666"
                >
                  Sobre o Pigz
                </TextFooter>
              </LinkFooter>
              <LinkFooter
                href="https://pigz.com.br"
                target="_blank"
                style={{ marginTop: "15px" }}
              >
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="14px"
                  fontWeight="400"
                  textcolor="#666666"
                >
                  Portal do Parceiro{" "}
                </TextFooter>
              </LinkFooter>
              <LinkFooter
                href="https://pigz.com.br"
                target="_blank"
                style={{ marginTop: "15px" }}
              >
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="14px"
                  fontWeight="400"
                  textcolor="#666666"
                >
                  Quero ser um Pigz Partner{" "}
                </TextFooter>
              </LinkFooter>
            </Columns>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Columns>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  "@media (max-width: 900px)": {
                    marginTop: "65px",
                  },
                }}
              >
                <img src={faleConosco} alt="icone fale conosco" />
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="16px"
                  fontWeight="600"
                >
                  Fale conosco
                </TextFooter>
              </Box>
              <LinkFooter
                href="mailto: falecom@pigz.com.br"
                target="_blank"
                style={{ marginTop: "15px" }}
              >
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="14px"
                  fontWeight="400"
                >
                  falecom@pigz.com.br
                </TextFooter>
              </LinkFooter>
              <LinkFooter
                href="https://wa.me/+559531983939"
                target="_blank"
                style={{ marginTop: "15px" }}
              >
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="14px"
                  fontWeight="400"
                >
                  (95) 3224-2603
                </TextFooter>
              </LinkFooter>
              <TextFooter
                component="p"
                variant="p"
                fontSize="16px"
                fontWeight="600"
                style={{ marginTop: "15px" }}
              >
                Pigz nas redes
              </TextFooter>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <LinkFooter
                  href="https://www.linkedin.com/company/pigz/"
                  target="_blank"
                  style={{ marginTop: "15px" }}
                >
                  <img src={linkedin} alt="icone linkedin" />
                </LinkFooter>
                <LinkFooter
                  href="https://www.instagram.com/pigzapp/"
                  target="_blank"
                  style={{ marginTop: "15px" }}
                >
                  <img src={instagram} alt="icone instagram" />
                </LinkFooter>
                <LinkFooter
                  href="https://www.facebook.com/pigzapp"
                  target="_blank"
                  style={{ marginTop: "15px" }}
                >
                  <img src={facebook} alt="icone facebook" />
                </LinkFooter>
                <LinkFooter
                  href="https://www.youtube.com/channel/UCzcyfplxkv_KmCHeRqNMTPw"
                  target="_blank"
                  style={{ marginTop: "15px" }}
                >
                  <img src={youtube} alt="icone youtube" />
                </LinkFooter>
              </Box>
            </Columns>
          </Grid>
        </ContentFooter>
      </FooterMain>
      <FooterEnd>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <ContentFoooterEnd>
              <TextFooter
                component="p"
                variant="p"
                fontSize="13px"
                fontWeight="400"
                textcolor="#666666"
              >
                Nossos termos
              </TextFooter>
              <TextFooter
                component="p"
                variant="p"
                fontSize="13px"
                fontWeight="400"
                textcolor="#666666"
                style={{ marginLeft: "25px" }}
              >
                Privacidade
              </TextFooter>
              <TextFooter
                component="span"
                variant="span"
                fontSize="13px"
                fontWeight="400"
                style={{ marginLeft: "25px" }}
                textcolor="#666666"
              >
                Ajuda
              </TextFooter>
            </ContentFoooterEnd>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <ContentFoooterEnd>
              <CopyRight>
                <TextFooter
                  component="p"
                  variant="p"
                  fontSize="13px"
                  fontWeight="400"
                  textcolor="#666666"
                  style={{ marginRight: "20px" }}
                >
                  © Copyright 2021 • Pigz • Todos os direitos reservados Orange
                  Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
                </TextFooter>
                <img src={orangeFooter} alt="orange footer" />
              </CopyRight>
            </ContentFoooterEnd>
          </Grid>
        </Grid>
      </FooterEnd>
    </FooterWrapper>
  );
};
