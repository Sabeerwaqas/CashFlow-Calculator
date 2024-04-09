import React, { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { projectColors } from "../../assets/colors/index";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { atmBtn } from "./index";
import { v4 as uuidv4 } from "uuid";
import projectImages from "../../assets";

const Home = () => {
  const [themeState, setThemeState] = useState(false);
  const [amount, setAmount] = useState(null);

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
                backgroundColor: themeState === false ? projectColors.lightTheme : projectColors.darkTheme,
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
                    backgroundColor: themeState === false ? projectColors.lightTheme : "#000000",
                    boxShadow: themeState === false ? "0 1px 10px 1px grey" : "0 1px 10px 1px #ffffff",
                    color: themeState === false ? "#000000" : "#ffffff",
                    borderRadius: "10px",
                    padding: "1%",
                  }}
                >
                  <Box
                    component={"section"}
                    sx={{
                      border: themeState === false ? "2px solid #000000" : "2px solid #ffffff",
                      height: "20vh",
                      borderRadius: "10px",
                      backgroundColor: themeState === false ? "#ffffff" : projectColors.darkTheme,
                    }}
                  >
                    <Box
                      component={"h2"}
                      sx={{
                        margin: "0",
                        color: projectColors.currencyColor,
                        textAlign: "center",
                      }}
                    >
                      Rs:{+amount}
                    </Box>
                  </Box>
                  <Grid item xs={12}>
                    <Grid container justifyContent={"space-between"}>
                      {/* 10 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.ten}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "250px",
                            left: "290px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 20 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.twenty}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "250px",
                            left: "550px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 50 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.fifty}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "340px",
                            left: "290px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 75 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.seventyFive}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "340px",
                            left: "550px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 100 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.hundred}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "430px",
                            left: "290px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 500 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.fiveHundreds}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "430px",
                            left: "550px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 1000 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.oneThousand}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "500px",
                            left: "290px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                      {/* 5000 rupees */}
                      <Grid item xs={6}>
                        <Box
                          component={"img"}
                          sx={{
                            mt: 1,
                            width: "150px",
                            boxShadow: themeState ? "0 0 10px 0 grey" : "0 0 10px 0 grey",
                          }}
                          src={projectImages.fiveThousands}
                          alt="Ten rupees"
                        />
                        <Box
                          component={"h2"}
                          sx={{
                            display: "block",
                            position: "absolute",
                            top: "500px",
                            left: "550px",
                            color: projectColors.currencyColor,
                          }}
                        >
                          0
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Right side */}
                <Grid
                  item
                  xs={4}
                  sx={{
                    backgroundColor: themeState === false ? projectColors.lightTheme : "#000000",
                    boxShadow: themeState === false ? "0 1px 10px 1px grey" : "0 1px 10px 1px #ffffff",
                    color: themeState === false ? projectColors.lightThemeBtnColor : projectColors.darkThemeBtnColor,
                    borderRadius: "10px",
                  }}
                >
                  {/* Dark mode and light mode */}
                  <Box component={"div"}>
                    <Button
                      onClick={() => changeTheme()}
                      size="small"
                      sx={{
                        color: themeState === false ? projectColors.darkThemeTextColor : projectColors.lightThemeTextColor,
                        backgroundColor: themeState === false ? projectColors.darkTheme : projectColors.lightTheme,
                        "&:hover": {
                          backgroundColor: themeState === false ? projectColors.darkTheme : projectColors.lightTheme,
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
                      backgroundColor: themeState === false ? "#ffffff" : projectColors.darkTheme,
                      boxShadow: themeState === false ? "0 0 5px 0 grey" : "0 0 5px 0 #ffffff",
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
                            onClick={() => setAmount((prevAmount) => (prevAmount ? prevAmount + data?.num : data?.num))}
                            key={uuidv4()}
                            sx={{
                              color: themeState === false ? "#000000 " : "#ffffff",
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
                          onClick={() => setAmount(0)}
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
                          onClick={() => setAmount((prevAmount) => prevAmount.slice(0, -1))}
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
