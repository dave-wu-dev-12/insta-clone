import React from "react";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./Signup.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80vw",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Signup({
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
  modalSubmit,
  modalType,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <form style={modalStyle} className={classes.paper}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPX3Ej-uhPxVXSoJZKSJ98Th53RSsKbit3ew&usqp=CAU"
        alt="logo"
        className="signUp__image"
      />
      {modalType == "signup" && (
        <Input
          placeholder="Enter username"
          className="signup__username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}

      <Input
        placeholder="Enter email"
        className="signup__email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Enter password"
        className="signup__password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" onClick={modalSubmit} className="signup__text">
        Submit
      </Button>
    </form>
  );
}

export default Signup;
