import React, { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { projectColors } from "../../assets/colors/index";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Home = () => {
  const [themeState, setThemeState] = useState(false);

  const changeTheme = () => {
    setThemeState((prevState) => !prevState);
  };

  return (
    <>
      <Box component={"div"}>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                height: "90vh",
                backgroundColor: "lightgreen",
                p: 2,
                mt: 3.5,
                borderRadius: "10px",
              }}
            >
              <Grid container justifyContent={"space-between"} height={"100px"}>
                <Grid item xs={6} sx={{ backgroundColor: "blue" }}>
                  wrw
                </Grid>
                <Grid item xs={4} sx={{ backgroundColor: "lightblue" }}>
                  {/* Dark mode and light mode */}
                  <Box component={"div"}>
                    <Button
                      onClick={() => changeTheme()}
                      size="small"
                      sx={{
                        color:
                          themeState === false
                            ? projectColors.darkThemeTextColor
                            : projectColors.lightThemeTextColor,
                        backgroundColor:
                          themeState === false
                            ? projectColors.darkTheme
                            : projectColors.lightTheme,
                        "&:hover": {
                          backgroundColor:
                            themeState === false
                              ? projectColors.darkTheme
                              : projectColors.lightTheme,
                        },
                      }}
                    >
                      {themeState === false ? (
                        <Box>
                          <DarkModeIcon
                            sx={{
                              fontSize: "20px",
                              position: "relative",
                              top: "4px",
                            }}
                          />
                          <Box
                            component={"span"}
                            sx={{
                              fontSize: "15px",
                              pl: 1,
                              pr: 0.2,
                              textTransform:"capitalize"
                            }}
                          >
                            Dark Mode
                          </Box>
                        </Box>
                      ) : (
                        <Box>
                          <LightModeIcon
                            sx={{
                              fontSize: "20px",
                              position: "relative",
                              top: "4px",
                            }}
                          />
                          <Box
                            component={"span"}
                            sx={{
                              fontSize: "15px",
                              pl: 1,
                              pr: 0.2,
                              textTransform:"capitalize"
                            }}
                          >
                            Light Mode
                          </Box>
                        </Box>
                      )}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
