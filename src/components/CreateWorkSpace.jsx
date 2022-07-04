import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {FormHelperText, Input, Typography, InputLabel, FormControl, Button, Modal} from '@mui/material';

export default function CreateWorkSpace({getAllWorkSpaces}) {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addWorkSpace = () => {
    try {
      // add axios config
      console.log({name, description})
      getAllWorkSpaces()
      setOpen(false)
    } catch(e) {

    }
  }

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.currentTarget.value);
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
        <CardContent sx={{ backgroundColor: "#F8F4F3" }}>
          <Typography variant="body2">
            Want to use Slack with a different team?
            <Button sx={{ marginLeft: 3 }} variant="outlined" onClick={handleOpen}>Create Another Workspace</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <FormControl>
                    <InputLabel htmlFor="my-name">Name of work space</InputLabel>
                    <Input id="my-name" aria-describedby="my-helper-name" onChange={(e)=>handleChangeName(e)}/>
                    <FormHelperText id="my-helper-name">Name</FormHelperText>
                  </FormControl>
                  <FormControl sx={{marginTop: 3}}>
                    <InputLabel htmlFor="my-description">Description</InputLabel>
                    <Input id="my-description" aria-describedby="my-helper-description" onChange={(e)=>handleChangeDescription(e)}/>
                    <FormHelperText id="my-helper-description">Description</FormHelperText>
                  </FormControl>
                  <Button variant="contained" onClick={addWorkSpace}>Enregistrer</Button>
                </Box>
              </Modal>
          </Typography>
        </CardContent>
      </React.Fragment>
      </Card>
    </Box>
  );
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};