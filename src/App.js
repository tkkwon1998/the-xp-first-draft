import React from "react";
import { Container, styled } from "@material-ui/core";
import TextBox from "./components/TextBox";
import Menu from "./components/Menu";
import RatingMenu from "./components/RatingMenu";
import { textAlign, height } from "@material-ui/system";

function App() {
  return (
    <div>
      <Menu />
      <TextBox />
      <Container1>Did you like this article?</Container1>
      <RatingMenu />
    </div>
  );
}

const Container1 = styled(Container)({
  textAlign: "center",
  fontWeight: "bold",
  height: "100px"
});

export default App;
