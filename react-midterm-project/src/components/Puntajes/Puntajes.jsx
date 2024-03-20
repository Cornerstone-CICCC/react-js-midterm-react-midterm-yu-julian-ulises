import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import axios from "axios";

const drawerWidth = 240;

const API_KEY = "fNeY4X3O0INgpL7c";
const SECRET_KEY = "QLHpQDRONN1zMOs1CG0GE3uEMiUc32oU";

function Puntajes() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [lives, setLives] = React.useState(false);

  console.log(lives);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://livescore-api.com/api-client/matches/live.json?&key=${API_KEY}&secret=${SECRET_KEY}`
        );

        const datLive = await response.data;
        setLives(datLive.data);
      } catch (error) {
        console.error("Error al capturar la data:", error);
      }
    };

    fetchData();
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SPORT APP
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"asdasd"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"item"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", color: "#000" }}>
            <ListItemText primary={"item"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <CssBaseline />

        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <Box sx={{ marginLeft: 40, p: 3 }}>
          <Toolbar />
          <Typography sx={{ display: "flex", gap: "2em" }}>
            <strong style={{ padding: "3px" }}>SCOREBOARD</strong>
            <Stack direction="row" spacing={5}>
              <Chip label="Yesterday" variant="outlined" sx={{ width: 150 }} />
              <Chip label="Today" variant="outlined" sx={{ width: 150 }} />
              <Chip label="Tomorrow" variant="outlined" sx={{ width: 150 }} />
            </Stack>
          </Typography>
        </Box>
        {lives &&
          lives.match.map((info) => (
            <>
              <Box sx={{ marginLeft: 40, p: 3 }}>
                <Toolbar />
                <div
                  style={{
                    borderBottom: "2px solid #bebebe",
                    width: "700px",
                    marginLeft: 150,
                  }}
                ></div>
                <Typography sx={{ display: "flex", gap: "2em" }}>
                  <Typography sx={{ display: "grid", gap: "2em" }}>
                    <strong style={{ padding: "3px" }}>YESTERDAY</strong>

                    <Typography
                      sx={{ display: "flex", gap: "10em", marginLeft: 20 }}
                    >
                      <strong> {info.away.name}</strong>
                      <strong> 0</strong>
                    </Typography>
                    <Typography
                      sx={{ display: "flex", gap: "10em", marginLeft: 20 }}
                    >
                      <strong> {info.away.name}</strong>

                      <strong> 0</strong>
                    </Typography>
                  </Typography>
                  <Typography sx={{ p: 15 }}>
                    <div style={{ display: "grid" }}>
                      <strong style={{ padding: "3px" }}>FT</strong>
                      <strong style={{ padding: "3px" }}> OCT 21, 24</strong>
                    </div>
                  </Typography>
                  <div
                    style={{
                      borderLeft: "2px solid #bebebe",
                      marginLeft: "-296px",
                    }}
                  ></div>
                </Typography>
                <div
                  style={{
                    borderBottom: "2px solid #bebebe",
                    width: "700px",
                    marginLeft: 150,
                  }}
                ></div>
                <Typography
                  sx={{ display: "flex", gap: "2em", marginTop: "2em" }}
                >
                  <Typography sx={{ display: "grid", gap: "2em" }}>
                    <div
                      style={{
                        borderBottom: "2px solid #bebebe",
                        marginLeft: 150,

                        width: "700px",
                      }}
                    ></div>

                    <Typography
                      sx={{ display: "flex", gap: "10em", marginLeft: 20 }}
                    >
                      <strong> TEAM1</strong>
                      <strong> 0</strong>
                    </Typography>
                    <Typography
                      sx={{ display: "flex", gap: "10em", marginLeft: 20 }}
                    >
                      <strong> TEAM1</strong>
                      <strong> 0</strong>
                    </Typography>
                  </Typography>
                  <Typography sx={{ p: 15 }}>
                    <div style={{ display: "grid", marginLeft: "-445px" }}>
                      <strong style={{ padding: "3px" }}>FT</strong>
                      <strong style={{ padding: "3px" }}> OCT 21, 24</strong>
                    </div>
                  </Typography>
                  <div
                    style={{
                      borderLeft: "2px solid #bebebe",
                      marginLeft: "-672px",
                      marginTop: "62px",
                    }}
                  ></div>
                </Typography>
                <div
                  style={{
                    borderBottom: "2px solid #bebebe",
                    width: "700px",
                    marginLeft: 150,
                  }}
                ></div>
                <Typography
                  sx={{ display: "flex", gap: "2em", marginTop: "2em" }}
                >
                  <Typography sx={{ display: "grid", gap: "2em" }}>
                    <div
                      style={{
                        borderBottom: "2px solid #bebebe",
                        marginLeft: 150,

                        width: "700px",
                      }}
                    ></div>

                    <Typography
                      sx={{ display: "flex", gap: "10em", marginLeft: 20 }}
                    >
                      <strong> TEAM1</strong>
                      <strong> 0</strong>
                    </Typography>
                    <Typography
                      sx={{ display: "flex", gap: "10em", marginLeft: 20 }}
                    >
                      <strong> TEAM1</strong>
                      <strong> 0</strong>
                    </Typography>
                  </Typography>
                  <Typography sx={{ p: 15 }}>
                    <div style={{ display: "grid", marginLeft: "-445px" }}>
                      <strong style={{ padding: "3px" }}>FT</strong>
                      <strong style={{ padding: "3px" }}> OCT 21, 24</strong>
                    </div>
                  </Typography>
                  <div
                    style={{
                      borderLeft: "2px solid #bebebe",
                      marginLeft: "-672px",
                      marginTop: "62px",
                    }}
                  ></div>
                </Typography>
                <div
                  style={{
                    borderBottom: "2px solid #bebebe",
                    width: "700px",
                    marginLeft: 150,
                    marginBottom: "4em",
                  }}
                ></div>
              </Box>
            </>
          ))}
      </Box>
    </>
  );
}

export default Puntajes;
