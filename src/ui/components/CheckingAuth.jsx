import React from "react";
import { Grid } from "@mui/material";
import { Blocks } from "react-loader-spinner";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: "4" }}
    >
      <Grid container direction="row" justifyContent="center">
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
        />
      </Grid>
    </Grid>
  );
};
