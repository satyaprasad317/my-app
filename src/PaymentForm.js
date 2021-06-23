import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Field Mapping as per channels
      </Typography>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            required
            id="cardNumbers"
            label="Serial no"
            defaultValue="123"
            fullWidth
            autoComplete="cc-number"
            disabled
          />
        </Grid>

        <Grid item style={{ marginTop: "25px" }}>
          <ArrowRightAltIcon />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Serial no"
            defaultValue="123"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            required
            id="cardName"
            label="Product name"
            defaultValue="xyzzs"
            fullWidth
            autoComplete="cc-name"
            disabled
          />
        </Grid>

        <Grid item style={{ marginTop: "25px" }}>
          <ArrowRightAltIcon />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            defaultValue="xyzzs"
            label="name"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            required
            id="cardName"
            label="place"
            defaultValue="bnglr"
            fullWidth
            autoComplete="cc-name"
            disabled
          />
        </Grid>

        <Grid item style={{ marginTop: "25px" }}>
          <ArrowRightAltIcon />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="City"
            defaultValue="bnglr"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
