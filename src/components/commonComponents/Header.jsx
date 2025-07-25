
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useLayoutContext } from '../../context/LayoutContext';
import {useAuth} from '../../context/AuthContext'
import {
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Tooltip,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material';
import { Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { sidebarOpen, toggleSidebar } = useLayoutContext();
    const { logout } = useAuth()
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py:{xs:0.8 }, borderBottom: '1px solid #e0e0e0', }}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }} >
                <MenuIcon sx={{ cursor: 'pointer', display: { xs: "none", sm: "none", md: "none", lg: "none", xl: "block" }, fontSize: "24px" }} onClick={toggleSidebar} />
                <Typography variant='h5' color='primary.dark' fontWeight={600}>{isMobile ? "EMS" : "Employee Management System"}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                
                <ProfileDropdown logout={logout}  />
            </Box >

        </Box>
    )
}

export default Header;


function ProfileDropdown({ logout }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false);
  
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
  
    const handleLogoutClick = () => setOpenDialog(true);
    const handleConfirmLogout = () => {
      logout();
      setOpenDialog(false);
    };
    const handleCancelLogout = () => setOpenDialog(false);
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="profile">
          <IconButton onClick={handleClick} size="small">
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oyt9166XWnxUIF4AgPIJSA2AfNh1ebiRig&s"
              alt="Profile"
            />
          </IconButton>
        </Tooltip>
  
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
          <MenuItem onClick={() => alert('Only for Demo, but logout is working')}>
            <AccountCircleIcon fontSize='18px' /> <Typography ml={1}>Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => alert('Only for Demo, but logout is working')}>
            <SettingsIcon fontSize='18px' /> <Typography ml={1}>Settings</Typography>
          </MenuItem>
          <MenuItem onClick={handleLogoutClick}>
            <LogoutIcon fontSize='18px' /> <Typography ml={1}>Logout</Typography>
          </MenuItem>
        </Menu>
  
        <Dialog open={openDialog} onClose={handleCancelLogout}>
          <DialogTitle color='warning'>Confirm Logout</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Are you sure you want to logout?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelLogout} variant='contained' sx={{textTransform:"none"}}>Cancel</Button>
            <Button onClick={handleConfirmLogout} color="error" variant="contained" sx={{textTransform:"none"}}>Logout</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
  