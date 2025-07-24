import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{display:"flex", flexDirection:"column",  justifyContent:"center", alignItems:"center", minHeight:"80vh", p:2, gap:2}}>
        <Typography color='primary' sx={{fontSize:{xs:"1.5rem", sm:"2rem"}}}>This is only for demo</Typography>
        <Button variant='contained' color='primary' onClick={()=>navigate('/employees')}>Go to Emolyees</Button>
    </Box>
  )
}

export default Home