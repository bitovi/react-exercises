/*
In this exercise you will use the Grid component in material ui to
create three rectangles (border: '1px solid black') which will be

1. side-by-side when the screen is above 960px
2. "stacked" on top of each other when the width is beneath that cutoff

How would you change it so that when the grid gets below 600px, we don't render
the grid at all?
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container>
      <Grid
        item
        sm={12}
        md={4}
        style={{ border: '1px solid black', height: '60px' }}
      ></Grid>
      <Grid
        item
        sm={12}
        md={4}
        style={{ border: '1px solid black', height: '60px' }}
      ></Grid>
      <Grid
        item
        sm={12}
        md={4}
        style={{ border: '1px solid black', height: '60px' }}
      ></Grid>
    </Grid>
  );
}

export default App;
