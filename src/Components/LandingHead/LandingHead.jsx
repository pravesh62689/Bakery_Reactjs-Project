import SouthIcon from "@mui/icons-material/South";
import { ButtonGroup } from "@mui/material";
import "./style.css";
const LandingHead = () => {
  return (
    <div className="container">
      <div className="landingContainer">
        <div>
          <h1 className="landingH1">Only Quality Food</h1>
        </div>
        <div>
          <p className="landingP">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the s standard dummy text ever since
            the 1500s Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <ButtonGroup
            sx={{ display: "flex", justifyContent: "center" }}
            className="buttonGroup"
          >
            <button className="button button1">VIEW MENU</button>
            <button className=" button button2">RESERVATION</button>
          </ButtonGroup>
        </div>
        <div className="downArrow">
          <SouthIcon />
        </div>
      </div>
    </div>
  );
};

export default LandingHead;
