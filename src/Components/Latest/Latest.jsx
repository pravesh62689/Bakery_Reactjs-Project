import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
export default function Latest() {
  const NewsData = [
    {
      img: "https://cdn.pixabay.com/photo/2017/03/20/10/58/books-2158773_640.jpg",
      title: "Nunc Volutpat Venenatis",
      subTitle: "CATEGORY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem ",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/12/06/00/49/baptism-1885303_640.jpg",
      title: "Vestibulum Nisl Felis",
      subTitle: "CATEGORY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the Lorem ",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/08/01/17/28/table-1561597_640.jpg",
      title: " Proin Eu Augue Efficitur",
      subTitle: "CATEGORY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the Lorem ",
    },
  ];
  return (
    <div className="latestContainer">
      <div>
        <div>
          <div>
            <h3 className="latestText">
              DO<span className="span">N&apos;T MI</span>SS{" "}
            </h3>
          </div>
          <div>
            <h1 style={{color:" #000000"}} className="fontText">Our News And Events </h1>
          </div>
          <div>
            <p style={{width:"50%",margin:"auto"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum been the s standard dummy text
              ever since the
            </p>
          </div>
        </div>
        <div className="cardMain">
          {NewsData.map((item, index) => (
            <div key={index} className="cardContainer">
              <Card
                sx={{ maxWidth: 350, margin: "0px 0px" }}
                className="cardGroup"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="p"
                      sx={{ color: "#aa7b41f7"}}
                      component="div"
                    >
                      {item.subTitle}
                    </Typography>
                    <Typography
                      className="cardPara"
                      variant=""
                      sx={{ lineHeight: "1.8rem",letterSpacing:"0.2px" }}
                      color="#0000005d"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
        <div>
          <button style={{marginTop:"60px"}} className="button2">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
