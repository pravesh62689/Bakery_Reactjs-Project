import { Grid } from "@mui/material";
import "./style.css";
const Products = () => {
  const productsData = [
    {
      imgPresent: false,
      price: "$26.95",
      title: "Grilled Fillet",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem Ipsum has been the s standard dummy text ever since the ",
    },
    {
      imgPresent: true,
      img: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_640.jpg",
    },
    {
      imgPresent: false,
      price: "$53.3",
      title: "Chicken Breast",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem Ipsum has been the s standard dummy text ever since the ",
    },
    {
      imgPresent: true,
      img: "https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_640.jpg",
    },
    {
      imgPresent: false,
      price: "$40.5",
      title: "King Crab",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem Ipsum has been the s standard dummy text ever since the ",
    },
    {
      imgPresent: true,
      img: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_640.jpg",
    },
    {
      imgPresent: false,
      price: "$40.5",
      title: "Sea Trout",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem Ipsum has been the s standard dummy text ever since the ",
    },
    {
      imgPresent: true,
      img: "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_640.jpg",
    },
    {
      imgPresent: false,
      price: "$22.3",
      title: "Roasted Bakra",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem Ipsum has been the s standard dummy text ever since the ",
    },
    {
      imgPresent: true,
      img: "https://cdn.pixabay.com/photo/2018/10/14/18/29/meatloaf-3747129_640.jpg",
    },
    {
      imgPresent: false,
      price: "$22.3",
      title: "Roasted Bakra",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the  Lorem Ipsum has been the s standard dummy text ever since the ",
    },
    {
      imgPresent: true,
      img: "https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_640.jpg",
    },
  ];
  return (
    <div>
      <div className="subContainer">
        <div>
          <Grid
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {productsData.map((item, index) => (
              <Grid item key={index}>
                <div className="products">
                  {item.imgPresent == true ? (
                    <img src={item.img} className="productImg" />
                  ) : (
                    <>
                      <div className="singleProduct">
                        <div>
                          <p className="price">{item.price}</p>
                        </div>
                        <div className="contentContainer">
                          <p className="title">{item.title}</p>
                          <p className="content">{item.content}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Products;
