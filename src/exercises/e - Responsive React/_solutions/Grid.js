import { Grid } from '@material-ui/core/Grid';

export default function MyComp() {
  return (
    <Grid container>
      <Grid item xs={12} sm={4} style={{ border: '1px solid black' }} />
      <Grid item xs={12} sm={4} style={{ border: '1px solid black' }} />
      <Grid item xs={12} sm={4} style={{ border: '1px solid black' }} />
    </Grid>
  );
}
