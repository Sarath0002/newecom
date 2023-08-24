// import React from "react";
import "../navbar/navebar.css";
// import "bootstrap/dist/css/bootstrap.css";

// const Navbars = () => {
//   return <></>;
// };

// export default Navbars;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import logo from "../../projectimg/white.svg";
import { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Await, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbars() {
  // const [data, setdata] = useState([]);
  // const [add, setadd] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios.get(`http://localhost:3000/Products`).then((res) => {
  //     setdata(res.data);
  //   });
  // }, []);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  let logout = () => {
    window.location.assign("/login");
  };
  let dashbordnav = () => {
    window.location.assign("/dashbord");
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });

    try {
      const response = await axios.get(
        `http://localhost:3000/Products?q=${searchQuery}`
      );
      // Handle the response and update the search results in the UI
      console.log("jbj:", response.data); // Assuming the API returns data in the expected format
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error fetching search results:", error);
    }
    navigate(`/search?q=${searchQuery}`);
  };
  console.log("q", searchQuery);

  return (
    <AppBar
      style={{
        boxShadow: "none",
      }}
      className="mb-5 sticky-top"
    >
      <Container maxWidth="xl" className="back">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center" className="btnhov">
                  profile
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" className="btnhov">
                  cart
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <img
            src={logo}
            className="logo"
            onClick={() => navigate("/dashbord")}
            style={{ cursor: "pointer" }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "chocolate",
                display: "block",
                fontSize: 25,
                fontWeight: 600,
              }}
              className="btnhov"
            >
              Profile
            </Button>
            <ShoppingCartIcon
              sx={{
                my: 2,
                color: "chocolate",
                display: "block",
                fontSize: 25,
                fontWeight: 600,
              }}
              className=" carticon "
              onClick={() => navigate("/cart")}
            />
          </Box>

          {/* <Search onClick={handleSearch} style={{ cursor: "pointer" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="search"
              placeholder="Search…"
              // inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search> */}
          <form className="navform" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search…"
              // inputProps={{ "aria-label": "search" }}
              className="navinput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* <AiOutlineSearch className="searchicon" /> */}
          </form>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon
                  sx={{ fontSize: 40 }}
                  className="setting"
                ></SettingsIcon>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  className="btnhov"
                  onClick={dashbordnav}
                >
                  Dashabord
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  className="btnhov"
                  onClick={logout}
                >
                  Log Out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbars;
