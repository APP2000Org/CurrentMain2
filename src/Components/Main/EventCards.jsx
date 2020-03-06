import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NyEvent from "./NyEvent";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PeopleIcon from "@material-ui/icons/People";

const useStyles2 = makeStyles(theme => ({
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function EventCards() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img
          src={
            "https://cdn.cnn.com/cnnnext/dam/assets/181219070243-01-lion-king-1994-large-169.jpg"
          }
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hakuna Matatta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Hakuna-matata" (pronounced [hɑˈkunɑ mɑˈtɑtɑ]) is a Swahili language
            phrase from East Africa, meaning "no trouble" or "no problems".
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          {/* NyEvent kommer fra NyEvent.jsx*/}
        <NyEvent />
        <Button size="small" color="primary">
          Learn More
        </Button>
        <CustomizedBadges />
      </CardActions>
    </Card>
  );
 function CustomizedBadges() {
    const classes = useStyles2();
    return (
        <div className={classes.root}>
          <IconButton onClick={"numberpluss"} aria-label="cart">
            <StyledBadge badgeContent={1} color="secondary">
              <PeopleIcon style={{ fontSize: 27 }} color="primary" />
            </StyledBadge>
          </IconButton>
        </div>
    );
  }
}
