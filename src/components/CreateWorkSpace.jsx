import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Grid, Typography, Divider, Stack, Button} from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: "#F8F4F3" }}>
      <Typography variant="body2">
        Want to use Slack with a different team?
        <Button sx={{ marginLeft: 3 }} variant="outlined">Create Another Workspace</Button>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function CreateWorkSpace() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}