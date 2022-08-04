import React from "react";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// Iconsss
import SendIcon from "@mui/icons-material/Send";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const Jobportal = () => {
  return (
    <div>
      <Container sx={{ display: "flex" }}>
        <Box>
          <Card sx={{ width: "552px", height: "351px", mr: "30px"  }}>
            <CardContent>
              <Typography
                sx={{ fontSize: "20px" }}
                color="black"
                gutterBottom
                fontWeight="700"
              >
                Online Working
              </Typography>
              <Typography
                variant="h7"
                component="div"
                fontWeight="100"
                fontSize="16px"
                marginTop="-10px"
              >
                EFU LIFE ASSURANCE
              </Typography>

              <Typography
                variant="h7"
                component="div"
                fontWeight="300"
                fontSize="18px"
                marginButtom="80px"
                sx={{ mt: "15px" }}
              >
                RawalPindi
              </Typography>

            

              <Typography
                sx={{
                  mb: "12px",
                  mt: "10px",
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: "700",
                  bgcolor: "white",
                  width: "150px",
                  borderRadius: "4px",
                  letterSpacing: 1,
                }}
                color="text.secondary"
              >
                <BusinessCenterIcon sx={{ mr: "12px", fontSize: "20px" }} />{" "}
                Part-Time +1
              </Typography>
              <Typography
                variant="body2"
                sx={{ disply: "flex", flexDirection: "row"  }}
              >
                <SendIcon sx={{ fontSize: "14px", mr: "7px", color: "blue" }} />{" "}
                Apply From your Phone
                <PersonAddAlt1Icon
                  sx={{
                    
                    ml: "18px",
                    color: "blue",
                  }}
                />{" "}
                Hiring multiple candidates
              </Typography>
            </CardContent>
            <CardActions>
                <Box  >
                <Typography >
                <RadioButtonUncheckedIcon  sx={{fontSize:"10px ", mr: "10px" }}/> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.
                  </Typography>

                  <Typography >
                <RadioButtonUncheckedIcon  sx={{fontSize:"10px ", mr: "10px" }}/> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.
                  </Typography>
                  <Typography >
                <RadioButtonUncheckedIcon  sx={{fontSize:"10px ", mr: "10px" }}/> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.
                  </Typography>
                  <Typography >
                <RadioButtonUncheckedIcon  sx={{fontSize:"10px ", mr: "10px" }}/> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.
                  </Typography>
                  </Box> 
                
            </CardActions>
          </Card>

                    


        </Box>

        <Box>
          <Card sx={{ width: "430px", height: "692px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Online Working
              </Typography>
              <Typography variant="h5" component="div">
                be
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Jobportal;
