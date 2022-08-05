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
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import CircleIcon from '@mui/icons-material/Circle';
import FlagIcon from '@mui/icons-material/Flag';
import Flag from "@mui/icons-material/Flag";
// Drop down menu itemsss
// import Dropdown from "./Dropdown";

const Jobportal = (props) => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          borderRadius: "20px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box sx={{ mt: "30px" }}>
          <Card
            sx={{
              width: "552px",
              height: "351px",
              mr: "30px",
              border: 1,
              borderRadius: "10px",
            }}
          >
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
                sx={{ disply: "flex", flexDirection: "row" }}
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
              <Box>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <RadioButtonUncheckedIcon
                    sx={{ fontSize: "10px ", mr: "10px" }}
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, molestiae.
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <RadioButtonUncheckedIcon
                    sx={{ fontSize: "10px ", mr: "10px" }}
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, molestiae.
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    ml: "10px",
                    mt: "10px",
                  }}
                >
                  16 days ago. Based on
                  <Typography sx={{ ml: "10px" }}>
                    <b> jobs you explored</b>
                  </Typography>
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Box>

        <Box sx={{ mt: "30px", mb: "30px" }}>
          <Card
            sx={{
              width: "500px",
              height: "620px",
              border: 1,
              borderRadius: "10px",
            }}
          >
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
                fontWeight="400"
                fontSize="16px"
                marginTop="10px"
                color="blue"
              >
                EFU LIFE ASSURANCE
              </Typography>
              <Typography
                variant="h7"
                component="div"
                fontWeight="300"
                fontSize="18px"
                marginButtom="80px"
              >
                RawalPindi
              </Typography>
              <Typography variant="body2" sx={{ display: "flex" }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: "20px",
                    color: "back",
                    fontWeight: "600",
                    borderRadius: "10px",
                  }}
                >
                  Apply Now
                </Button>
                <Typography>
                  <FavoriteIcon
                    sx={{ fontSize: "40px", mt: "20px", ml: "30px" }}
                  />
                </Typography>
              </Typography>
              <Typography sx={{ borderBottom: 1, mt: "20px" }}></Typography>
            </CardContent>
            <Box sx={{ width: "484px", height: "413px", overflow: "auto" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  ml: "12px",
                  mb: "30px",
                }}
              >
                Jobs details
              </Typography>

              <Typography
                sx={{ fontSize: "15px", fontWeight: "300", ml: "12px" }}
              >
                Job-Type
              </Typography>

              <Typography
                sx={{ fontSize: "15px", fontWeight: "300", ml: "12px" }}
              >
                Full-Time
              </Typography>

              <Typography
                sx={{ fontSize: "15px", fontWeight: "300", ml: "12px" }}
              >
                Part-Time
              </Typography>

              <Typography sx={{ borderBottom: 1, mt: "20px" }}></Typography>

              <Typography
                sx={{
                  fontSize: "23px",
                  fontWeight: "600",
                  ml: "12px",
                  mt: "15px",
                }}
              >
                Full Job Description
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  ml: "12px",
                  mb: "10px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate velit illo autem iste maxime? Veniam quibusdam nemo
                doloribus deleniti natus?
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  ml: "12px",
                  mb: "10px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                laborum iste reiciendis. Quidem voluptatum minus fuga fugit,
                fugiat ea alias.
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  ml: "12px",
                  mb: "10px",
                }}
              >
                Job Type: Full-time,Part-time
              </Typography>

              <Typography sx={{ borderBottom: 1, mt: "20px" }}></Typography>

              <Typography
                sx={{
                  fontSize: "23px",
                  fontWeight: "600",
                  ml: "12px",
                  mt: "15px",
                }}
              >
                Hiring Insights
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row" , ml: "10px" }}>
                <PersonIcon sx={{ fontSize: "17px" }} />
                <Typography sx={{ ml: "10px" }}>
                  Hiring <b> 2</b> candidates for this role
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  ml: "10px",
                  mt: "15px",
                }}
              >
                Job activity
              </Typography>

              <Typography sx={{ display: "flex", flexDirection: "row", ml: "10px" }}>
                        <CircleIcon  sx={{fontSize: "10px" , mt: "6px" , mr: "10px"}} /> 

                        <Typography>
                        
                        Employer reviewed job 20 days ago

                        </Typography>
              </Typography>

              <Typography sx={{ borderBottom: 1, mt: "20px" }}></Typography>
                
                <Typography sx={{fontSize: "13px" , ml: "10px"}}>
                        17 days a ago 


                    </Typography> 

                   <Button variant="contained" sx={{ fontWeight: "600" , ml: "10px" , mt: "20px"}}> <Flag sx={{color: "black" }}/>  Report Job</Button>
    

            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Jobportal;
