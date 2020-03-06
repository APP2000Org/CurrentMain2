import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//Lagd av Sondre Reiholdtsen StudNr: 225274

//getModalStyle er en funksjon som sÃ¸rger for at alt inni taggen Modal blir opprettet i midten av skjermen
//getModalStyle is not a pure function, we roll the style only on the first render


const onMouseOut = event => {
  const el = event.target;
  el.style.color = "white";
};
const onMouseOver = event => {
  const el = event.target;
  el.style.color = "grey";
};

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

//Stil innstillinger til <Modal>
const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 280,
    backgroundColor: "White",
    borderRadius: "25px",
    boxShadow: theme.shadows[5],
    marginRight: "50%",
    padding: theme.spacing(2, 4, 3)
  }
}));

//Stil innstillinger til

const login = {
  fontSize: "20px",
  color: "white"
};

/*Funksjonen SimpleModal vil rendre alt innhold i diven og Modal taggen 
 nÃ¥r man trykker pÃ¥ en spesifik tekst (Login) som vil lyse blÃ¥ onMouseHover
*/
export default function NyBruker() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  //SÃ¸rger for Ã¥ ikke vise innholdet i diven inntil useState blir true
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        style={login}
        className={classes.title}
        onClick={handleOpen} //SÃ¸rger for at React.useState blir true
        onMouseEnter={onMouseOver} //Highlighter teksten blÃ¥
        onMouseLeave={onMouseOut} //Endrer tekstfargen tilbake til det den orginalt var
      >
        Login
      </Typography>
      <Modal
        aria-labelledby="simple-modal-title" //Font
        aria-describedby="simple-modal-description" //Font
        open={open} //Returner true nÃ¥r modal blir Ã¥pnet og kombinert med at setopen er true vil innholdet vises
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Brukernavn:" />
            <TextField id="standard-basic" label="Passord:" />
          </form>
          <br />
          <div className="Buttons">
            <Button onClick={handleClose} color="primary">
              Login
            </Button>
            <Popup
              modal
              trigger={
                <Button onClick={handleClose} color="primary">
                  Ny Bruker
                </Button>
              }
            >
              <div style={modalStyle} className={classes.paper}>
                <div>
                  <TextField id="standard-basic" label="Epost:" />
                  <TextField id="standard-basic" label="Brukernavn:" />
                  <TextField id="standard-basic" label="Passord:" />
                  <TextField id="standard-basic" label="Fornavn:" />
                  <TextField id="standard-basic" label="Etternavn:" />
                  <TextField id="standard-basic" label="Bynavn:" />
                  <TextField id="standard-basic" label="FÃ¸dselsdato:" />
                </div>
                <br />
                <Button onClick={handleClose} color="primary">
                  Bekreft bruker!
                </Button>
              </div>
            </Popup>
          </div>
        </div>
      </Modal>
    </div>
  );
}
