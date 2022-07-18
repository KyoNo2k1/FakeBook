import React from "react";
import { Paper, CircularProgress } from "@mui/material";

import useStyles from "./styles";

function CircularProgressWaiting() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.circularProgress}>
      <CircularProgress
        className={classes.circularProgressIcon}
        color="secondary"
      />
    </Paper>
  );
}

export default CircularProgressWaiting;
