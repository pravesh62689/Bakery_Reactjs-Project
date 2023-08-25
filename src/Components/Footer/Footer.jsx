import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 100px",
          color: " rgb(151, 151, 151)",
        }}
      >
        <div>
          <p>
            Designed by <b>Elegant Themes</b> | Powered by <b> WordPress</b>
          </p>
        </div>
        <div>
          <FacebookIcon sx={{width:"30px",height:"30px" , padding:"0 10px"}}/>
          <TwitterIcon  sx={{width:"30px",height:"30px" , padding:"0 10px"}}/>
          <GoogleIcon  sx={{width:"30px",height:"30px" , padding:"0 10px"}}/>
          <RssFeedIcon  sx={{width:"30px",height:"30px" , padding:"0 10px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
