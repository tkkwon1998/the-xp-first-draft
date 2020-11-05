import {
  Container,
  ButtonGroup,
  Button,
  styled,
  IconButton,
  Typography
} from "@material-ui/core";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { style, width } from "@material-ui/system";

function PostLike() {
    var url = "https://thexp.herokuapp.com/Articles"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PATCH", url, false); // false for synchronous request
    xmlHttp.setRequestHeader('content-type', 'application/json');
    var data = { 'title': 'Sample Article', 'reaction': '1' }
    xmlHttp.send(JSON.stringify(data));
    console.log(xmlHttp.responseText);
}

function PostNeutral() {
    var url = "https://thexp.herokuapp.com/Articles"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PATCH", url, false); // false for synchronous request
    xmlHttp.setRequestHeader('content-type', 'application/json');
    var data = { 'title': 'Sample Article', 'reaction': '0' }
    xmlHttp.send(JSON.stringify(data));
    console.log(xmlHttp.responseText);
}

function PostDislike() {
    var url = "https://thexp.herokuapp.com/Articles"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PATCH", url, false); // false for synchronous request
    xmlHttp.setRequestHeader('content-type', 'application/json');
    var data = { 'title': 'Sample Article', 'reaction': '-1' }
    xmlHttp.send(JSON.stringify(data));
    console.log(xmlHttp.responseText);
}

function RatingMenu() {
  return (
    <ContainerMenu maxWidth="false">
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="outlined primary button group"
      >
        <IconButton onClick={PostLike}>
          <SentimentSatisfiedAltIcon color="primary" />
        </IconButton>
        <IconButton onClick={PostNeutral}>
          <SentimentSatisfiedIcon color="action" />
        </IconButton>
        <IconButton onClick={PostDislike}>
          <SentimentVeryDissatisfiedIcon color="secondary" />
        </IconButton>
      </ButtonGroup>
    </ContainerMenu>
  );
}

const ContainerMenu = styled(Container)({
  background: "lightblue",
  textAlign: "center"
});

export default RatingMenu;
