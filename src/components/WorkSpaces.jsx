import React, {useEffect, useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { deepOrange, green } from '@mui/material/colors';
import {Grid, Typography, Divider, Stack} from '@mui/material';
import CreateWorkSpace from './CreateWorkSpace';
import { useNavigate } from 'react-router-dom';

export default function WorkSpaces() {
    const [workSpaces, setWorkSpaces] = useState([]);

    const workspaces = [
        {
            nom: 'SUP MTI',
            image: 'https://moutamadris.info/admin/avatar/avatar17.png',
            members: [
                {
                  nom: "amine",
                  image: "https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                },
                {
                  nom: "amine",
                  image: "https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg"
                },{},{},{}
            ]
        },
        {
          nom: 'ISI4',
          members: [
              {}
          ]
      },
      {
          nom: 'SUP MTI',
          members: [
              {},{}
          ]
      },
    ]
    const navigate = useNavigate();

    useEffect(() => {
        getAllWorkSpaces()
      }, []);

    const getAllWorkSpaces = () => {
        // get data from backend
        // const data = .....
        const data = workspaces;
        setWorkSpaces(data);
    }

    const goToWorkSpace = (w) => {
        console.log("ddd")
        navigate('/workspace', {state: w})
    }

  const user = {
      email: "adnaneyoussefi70@gmail.com",
      nom: "youssefi",
      prenom: "adnan"
  };

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', marginTop: 5, marginBottom: 5 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
          <><Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          Workspaces for {user.email}
        </ListSubheader>
        </>
      }
    >
        <Divider />
        {
            workSpaces && workSpaces.map((w) => (
                <>
                <ListItemButton onClick={() => goToWorkSpace(w)}>
                    <ListItemIcon>
                        <Avatar sx={{ bgcolor: green[500] }} variant="rounded" src={w.image}>
                        </Avatar>
                    </ListItemIcon>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        >
                        <Grid item xs={12}>
                            <ListItemText primary={w.nom} />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex'}}>
                            <AvatarGroup max={4} sx={{ marginRight: 2, '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 }, }} >
                            {w.members.map((member) => (
                                <Avatar alt="Remy Sharp" src={member.image} />
                            ))}
                            </AvatarGroup>
                            <Typography variant="caption" display="block" gutterBottom>
                                {w.members.length} members
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-end">
                        <ChevronRightIcon />
                    </Grid>
                </ListItemButton>
                <Divider variant="inset" component="li" />
                </>
            ))
        }
    </List>
    <CreateWorkSpace getAllWorkSpaces={getAllWorkSpaces} />
    </>
  );
} 
