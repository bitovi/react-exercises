/* In this exercise you will use the Grid component in material ui to 
create three rectangles (border: '1px solid black') which will be side-by-side 
when the screen is above 600px, but will "stack" when the width is beneath that*/
import React from 'react';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={4}
        style={{ border: '1px solid black', height: '60px' }}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={4}
        style={{ border: '1px solid black', height: '60px' }}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={4}
        style={{ border: '1px solid black', height: '60px' }}
      ></Grid>
    </Grid>
  );
}

export default App;
