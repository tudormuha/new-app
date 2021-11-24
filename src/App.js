import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "./TableApi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signOut, signIn } from "./actions/index";

const drawerWidth = 100;
const baseurl = "http://localhost:3030/";

function App() {
  const counter = useSelector((state) => state.counter);
 

  const dispatch = useDispatch();

  function gettoken(ev) {
    //request a token
    fetch(baseurl + "token")
      .then((res) => res.json())
      .then((content) => {
        let token = content.data;
        localStorage.setItem("token", token);
        console.log(token);
        dispatch(signIn());
      });
  }

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Pokemon
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Link to="/Table">
            <Button>Table</Button>
          </Link>

          <Link to="/">
            <Button>Home</Button>
          </Link>

          <button onClick={gettoken}>Log in</button>
          <button onClick={() => dispatch(signOut())}>Log out</button>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <div className="App">
            <h1>Counter {counter}</h1>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
          <Routes>
            {/* <Route path="/Table">
              <Table />
            </Route> */}            
            <Route path="/Table" element={<Table />} />
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
