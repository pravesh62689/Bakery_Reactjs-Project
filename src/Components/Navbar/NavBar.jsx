import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";
const navItems = [
  "Home",
  "Gallery",
  "Shop",
  "Blog",
  "About",
  "Team",
  "Contact",
];

function NavBar() {
  return (
    <div>
      <AppBar component="nav">
        <Toolbar className="navbar">
          <Typography variant="h5" component="div">
            Restaurant Landing Page
          </Typography>
          <Box
            className="containerLink"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Typography  variant="p" className="link">
              Landing
            </Typography>
            {navItems.map((item) => (
              <Typography
               
                variant="p"
                className="links"
                key={item}
              >
                {item}
              </Typography>
            ))}
            <ShoppingCartIcon
              className="link"
              sx={{ marginTop: "5px", marginBottom: "-5px" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
