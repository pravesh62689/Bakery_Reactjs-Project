
import "./style.css";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="">
        <div
          className="contactCardContainer"
          style={{
            padding: "100px 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="contactCardSubContainer">
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                backgroundColor: "#242424",
                color: "white",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    hover: { backgroundColor: "#242424" },
                    padding: "100px 80px 250px 80px",
                  }}
                >
                  <h2 style={{ fontSize: "2rem",marginBottom:"50px" }} className="fontText">
                    Hours of Operation
                  </h2>
                  <Typography gutterBottom variant="h6" component="div">
                    MON-FRI
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    10:00-1:00pm
                  </Typography>
                  <Typography
                    className="span"
                    sx={{ width: "auto" }}
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    4:00-10:30pm
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    SAT
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ width: "auto" }}
                    className="span"
                    component="div"
                  >
                    3:00-10:30pm
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ width: "auto" }}
                    component="div"
                  >
                    SUN
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    We are closed
                  </Typography>
                  <button
                    style={{ width: "auto", marginTop: "40px" }}
                    className="button2"
                  >
                    MAKE A RESERVATION
                  </button>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="contactCardSubContainer">
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                backgroundColor: "#242424",
                color: "white",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    hover: { backgroundColor: "#242424" },
                    padding: "100px 80px 110px 80px",
                  }}
                >
                  <h3 style={{ fontSize: "1.8rem", lineHeight: "0.5" }}>
                    Drop Us a Line
                  </h3>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{
                      width: "80%",
                      margin: "auto",
                      color: "rgb(227, 227, 227)",
                    }}
                  >
                    Don&apos;t be shy. Let us know if you have any question
                  </Typography>
                  <button
                    style={{ width: "auto", marginTop: "30px" }}
                    className="button2"
                  >
                    CONTACT US
                  </button>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ marginTop: "50px" }}
                    component="div"
                  >
                    Our Newsletter
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    Dialog is an essential part of any script
                  </Typography>

                  <input className="input" placeholder="First Name"/>
                  <input className="input" placeholder="Last Name"/>
                  <input className="input" placeholder="Email"/>
                    <br/>
                  <button
                    style={{ width: "auto", marginTop: "40px" }}
                    className="button2"
                  >
                    CONTACT US
                  </button>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
