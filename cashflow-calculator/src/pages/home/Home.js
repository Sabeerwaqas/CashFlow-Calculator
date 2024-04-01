import React, { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { projectColors } from "../../assets/colors/index";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { atmBtn } from "./index";
import { v4 as uuidv4 } from "uuid";

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
                backgroundColor:
                  themeState === false
                    ? projectColors.lightTheme
                    : projectColors.darkTheme,
                boxShadow: "0 1px 10px 1px grey",
                p: 2,
                mt: 3.5,
                borderRadius: "10px",
              }}
            >
              <Grid container justifyContent={"space-between"} height={"100px"}>
                {/* Left side */}
                <Grid
                  item
                  xs={6}
                  sx={{
                    backgroundColor:
                      themeState === false
                        ? projectColors.lightTheme
                        : "#000000",
                    boxShadow:
                      themeState === false
                        ? "0 1px 10px 1px grey"
                        : "0 1px 10px 1px #ffffff",
                    color: themeState === false ? "#000000" : "#ffffff",
                    borderRadius: "10px",
                    padding: "1%",
                  }}
                >
                  <Box
                    component={"section"}
                    sx={{
                      border:
                        themeState === false
                          ? "2px solid #000000"
                          : "2px solid #ffffff",
                      height: "20vh",
                      borderRadius: "10px",
                      backgroundColor:
                        themeState === false
                          ? "#ffffff"
                          : projectColors.darkTheme,
                    }}
                  ></Box>
                </Grid>
                {/* Right side */}
                <Grid
                  item
                  xs={4}
                  sx={{
                    backgroundColor:
                      themeState === false
                        ? projectColors.lightTheme
                        : "#000000",
                    boxShadow:
                      themeState === false
                        ? "0 1px 10px 1px grey"
                        : "0 1px 10px 1px #ffffff",
                    color:
                      themeState === false
                        ? projectColors.lightThemeBtnColor
                        : projectColors.darkThemeBtnColor,
                    borderRadius: "10px",
                  }}
                >
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
                              textTransform: "capitalize",
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
                              textTransform: "capitalize",
                            }}
                          >
                            Light Mode
                          </Box>
                        </Box>
                      )}
                    </Button>
                  </Box>
                  {/* ATM buttons */}
                  <Box
                    component={"div"}
                    sx={{
                      width: "90%",
                      height: "auto",
                      backgroundColor:
                        themeState === false
                          ? "#ffffff"
                          : projectColors.darkTheme,
                      boxShadow:
                        themeState === false
                          ? "0 0 5px 0 grey"
                          : "0 0 5px 0 #ffffff",
                      color: themeState === false ? "#000000" : "#ffffff",
                      margin: "10px auto",
                      borderRadius: "10px",
                      padding: "2%",
                    }}
                  >
                    <Grid container justifyContent={"space-between"}>
                      <Grid item xs={7}>
                        {atmBtn.map((data, index) => (
                          <Button
                            key={uuidv4()}
                            sx={{
                              color:
                                themeState === false ? "#000000 " : "#ffffff",
                            }}
                          >
                            <Box component={"span"}>
                              {data?.num}
                              <Box component={"sup"} sx={{ fontSize: "7px" }}>
                                {data?.superScript}
                              </Box>
                            </Box>
                          </Button>
                        ))}
                      </Grid>
                      <Grid item xs={5}>
                        <Button
                          size="small"
                          sx={{
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: projectColors.cancelBtnBgColor,
                            color: "#000000",
                            fontSize: "12px",
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="small"
                          sx={{
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: projectColors.clearBtnBgColor,
                            color: "#000000",
                            fontSize: "12px",
                            mt: 1,
                          }}
                        >
                          Clear
                        </Button>
                        <Button
                          size="small"
                          sx={{
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: projectColors.enterBtnBgColor,
                            color: "#000000",
                            fontSize: "12px",
                            mt: 1,
                          }}
                        >
                          Enter
                        </Button>
                      </Grid>
                    </Grid>
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
