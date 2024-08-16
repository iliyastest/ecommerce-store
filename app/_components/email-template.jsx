import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ body }) => (
  <Html>
    <Head />
    <Preview>
      The Ecommerce Platform For Your Digital Products - Search now for your
      future
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dovg7kwzy/image/upload/v1722964540/telechargement_ffde4a3741.jpg"
          width="420"
          height="300"
          alt="hiring"
          style={logo}
        />
        <Text style={paragraph}>Hi {body.email},</Text>
        <Text style={paragraph}>
          Thank you for purchasing on Tech Ecommerce. Click on the button below
          to download all digital content.
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href="https://res.cloudinary.com/dovg7kwzy/image/upload/v1722964540/telechargement_ffde4a3741.jpg"
          >
            Download
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Tech team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Please Hire Me</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
