import { Drawer,Button, AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import NavListDrawer from "./NavBar/NavListDrawer";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CardWidget from "./CardWidget/CardWidget";


import { NavLink } from "react-router-dom";



export default function NavBar ({navArrayLinks}) {    
    const [open, setOpen] = useState (false)


    return(
        <>
                <AppBar position="static" color="warning">
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{display:{xs: "flex", sm: "none"}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6"
                        sx={{ flexGrow: 1}}
                        >
                            Menu
                        </Typography>
                        <Box sx={{display: {xs: "none", sm: "block"}}}>

                            {navArrayLinks.map ( item =>(
                                    <Button
                                        color="inherit" 
                                        key={item.title}
                                        component={NavLink}
                                        to={item.path}
                                    >
                                        {item.title}
                                        </Button>
                                ))}
                                
                        </Box>
                    </Toolbar>
                    <CardWidget/>
                </AppBar>


            <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false) }
            sx={{display:{xs: "flex", sm: "none"}}}
            >
                <NavListDrawer navArrayLinks={navArrayLinks}/>
            </Drawer>
              
            
        </>
    )
}