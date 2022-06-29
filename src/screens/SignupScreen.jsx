import React from 'react'
import { Grid, Typography, TextField, Stack, Button, Link } from '@mui/material';

const SignupScreen = () => {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginTop: 5 }}
            >
            <Grid item xs={2}>
                <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 900 }}>
                    slack
                </Typography>  
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h4" component="div" gutterBottom sx={{ color: "#4F0E00", fontFamily: 'system-ui', fontWeight: 'bold'}}>
                    Sign up to Slack
                </Typography>
            </Grid>
            <Grid item xs={2}>
                We suggest using the email address you use at work.
            </Grid>
            <Grid item xs={2} sx={{ marginTop: 3 }}>
                <Stack spacing={1} sx={{ width: 400 }}>  
                    <TextField size="small" label="First name" variant="outlined" />         
                    <TextField size="small" label="Last name" variant="outlined" />    
                        
                    <TextField size="small" label="Email" variant="outlined" />
                    <TextField size="small" label="Password" variant="outlined" type="password" />
                    <Button variant="contained" color="primary">Login</Button>
                </Stack>
                <div>
                    Already have an account ? 
                    <Link sx={{marginLeft: 1}} href="/login" underline="none">
                        Sign in
                    </Link>
                </div>
            </Grid>
        </Grid>
    )
}

export default SignupScreen