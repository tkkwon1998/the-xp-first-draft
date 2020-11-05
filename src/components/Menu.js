import {
  Container,
  ButtonGroup,
  Button,
  styled,
  Typography,
  IconButton
} from "@material-ui/core";
import logo from "./logo.png";
import "../styles/Menu.css";
import { height } from "@material-ui/system";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";

function Menu() {
  return (
    <div className="top-bar">
      <a href="index.html">
        <img src={logo} className="logo"></img>
      </a>
      <ButtonGroup className="buttons">
        <IconButton className="share-button">
          <a href="https://twitter.com/TheXP_media">
            <TwitterIcon color="primary" />
          </a>
        </IconButton>
        <IconButton className="share-button">
          <FacebookIcon color="primary" />
        </IconButton>
        <IconButton className="share-button">
          <RedditIcon color="primary" />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

const ContainerMenu = styled(Container)({
  background: "white",
  textAlign: "left",
  borderBottom: "1px solid black"
});

export default Menu;
