// IDCard.js
import React from 'react';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Box,
} from '@mui/material';

const IDCard = React.forwardRef(({ emp }, ref) => {
    return (
        <Card
            ref={ref}
            sx={{
                width: 300,
                height: 270,
                boxShadow: 3,
                padding: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Arial',
                bgcolor: "#ffffc5",
                color:"black"
            }}
        >
            <CardContent sx={{ padding: '8px !important', width: '100%' }}>
                <Box display="flex" flexDirection="column" alignItems="center"  >
                    <Avatar
                        src={emp.profilePicture}
                        sx={{ width: 80, height: 80, marginBottom: 0.5,  borderRadius:"50%", border:"3px solid #f58c21" }}
                    />
                    <Typography color='primary' variant="h6" fontWeight="bold">
                        {emp.fullName}
                    </Typography>

                </Box>

                <Divider sx={{ my: 1 }} />

                <Box sx={{display:"flex", gap:2, alignItems:"flex-start", pl:"1.5rem"}}>
                    <Box>
                    <Typography variant="body2" >
                        ID No
                    </Typography>
                    <Typography variant="body2">
                        Dept.
                    </Typography>
                    <Typography variant="body2">
                        Deg.
                    </Typography>
                    <Typography variant="body2">
                        Phone
                    </Typography>
                    <Typography variant="body2">
                        Email
                    </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">: {emp.empId}</Typography>
                        <Typography variant="body2">: {emp.department}</Typography>
                        <Typography variant="body2">: {emp.designation}</Typography>
                        <Typography variant="body2">: {emp.phoneNumber}</Typography>
                        <Typography variant="body2">: {emp.email}</Typography>
                    </Box>
                    
                </Box>
            </CardContent>
        </Card>
    );
});

export default IDCard;
