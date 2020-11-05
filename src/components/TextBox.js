import { Container, Typography, styled } from "@material-ui/core";
import "../styles/text.css";
import large from "./test.jpg";
import { textAlign, sizing } from "@material-ui/system";
import React from "react";
import Image from "react-bootstrap/Image";
import p from "./p.jpeg";

function TextBox() {
  return (
    <div>
      <TextContainer maxWidth="md" width={1 / 3}>
        <Spacer />
        <Title variant="h2" component="h1">
          Suning's surprise run and the dominance of HuanFeng
        </Title>
        <Spacer />
        <Body variant="p2" className="text">
          Heading into worlds, Damwon Gaming was widely considered to be one of
          the best teams alongside LPL powerhouse Top Esports. So, it’s only
          fitting that Damwon is getting the chance to prove themselves to be
          number one this Saturday. However, to the surprise of many, including
          ourselves, competing with Damwon for the title will not be Top
          Esports, but rather LPL’s 4th seed underdogs, Suning Esports.
          <Spacer />
          <Spacer />
          This begs the questions: how did Suning, a team that virtually no one
          considered as contenders, end up in the finals against a dominant
          Damwon team? At TheXP, we used both quantitative and qualitative
          methods to reach an answer, which can be neatly summarized with one
          name: HuanFeng.
          <Spacer />
          <Spacer />
          <SpacerLine />
          <Spacer />
          <Spacer />
          <Bold variant="p2">The dominance of HuanFeng</Bold>
          <Spacer />
          Our analysis shows that Suning's bot laner, HuanFeng, is possibly the
          highest performing player in the entire Worlds tournament. Much of
          Suning’s success can be attributed to HuanFeng’s consistent brilliance
          throughout the event. Below, we show a scatter chart plotting creep
          score and damage per minute for every carry on Damwon and Suning.
        </Body>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </TextContainer>
      <div className="image-container">
        <img src={p} className="image" />
      </div>
      <TextContainer maxWidth="md" width={1 / 3}>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Body variant="p2" className="text">
          We believe that using CSPM and DPM together is a good way to gauge the
          influence a player has on a game. At its core, CSPM is a good
          indicator of how well a player is doing during laning phase. DPM on
          the other hand, measures how well a player does during fights against
          the opposition. We’re able to see that HuanFeng is substantially
          outperforming every player in both metrics, which indicates that he is
          dominating early game laning as well as mid-to-late game skirmishes.
          <Spacer />
          <Spacer />
          <Spacer />
          As well as impressing through data, HuanFeng certainly passes the eye
          test as well. Take a look at this clip:
        </Body>
        <Spacer />

        <iframe
          className="vid"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wl-dxnHSQuI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Body variant="p2" className="text">
          It's painfully obvious just how influential HuanFeng is to Suning's
          success. If Suning are to stand any chance against Damwon come this
          Saturday, HuanFeng MUST perform. Although we believe Damwon will
          ultimately win the final, we will definitely be keeping an eye on
          HuanFeng. If he plays as well as he did against Top Esports, we
          genuinely believe that Suning will have a good chance at victory.
        </Body>
        <Spacer />
      </TextContainer>
    </div>
  );
}

const Spacer = styled(Container)({
  height: "15px"
});

const SpacerLine = styled(Container)({
  height: "15px",
  borderBottom: "1px double grey"
});

const TextContainer = styled(Container)({});

const Title = styled(Typography)({
  color: "black"
});

const Body = styled(Typography)({
  color: "black",
  fontSize: "15pt"
});

const Bold = styled(Typography)({
  color: "black",
  fontWeight: "bold",
  fontSize: "1em"
});
export default TextBox;
