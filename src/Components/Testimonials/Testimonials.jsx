import "./style.css";
const Testimonials = () => {
  const TestimonialsData = [
    {
      rating: "★★★★★",
      title: "A Great Find",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the   ",
      footerText: "Divi",
    },
    {
      rating: "★★★★★",
      title: "Fabulous Food flawless service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the   ",
      footerText: "Bloom",
    },
    {
      rating: "★★★★★",
      title: "Another successful experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the   ",
      footerText: "Extra",
    },
    {
      rating: "★★★★★",
      title: "Speechless",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the s standard dummy text ever since the   ",
      footerText: "Monarch",
    },
  ];

  return (
    <div className="testimonialContainer">
      <div>
        <div className="headingT">
          <p>
            TES<span className="span">TIMONI</span>ALS
          </p>
        </div>
        <div>
          <h1 className="colorText fontText">What People Are Saying</h1>
        </div>
        <div className="reviewContainer">
          {TestimonialsData.map((item, index) => (
            <div key={index} className="reviewSubContainer">
              <div>
                <div className="rating">
                  <p>{item.rating}</p>
                </div>
                <div className="colorText">
                  <h2 className="fontText">&quot; {item.title} &quot;</h2>
                </div>
                <div>
                  <p>&quot; {item.description} &quot;</p>
                </div>
                <div className="colorText">{item.footerText}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
