import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import cars from "./api/cars.json";
//import images from "./images/s90_recharge.jpg";

function App() {
  // const [data, setData] = useState([]);
  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imgs = cars.map((item) => {
    return item.imageUrl;
  });
  console.log(imgs);

  return (
    <div className="App">
      <Slider {...settings}>
        {cars.map((item, i) => (
          <div className="container">
            <div className="card-top">
              <img key={item.id} src={item.imageUrl} alt={item.modelName} />
            </div>
            <h1 className="name">{item.modelName}</h1>
            <h3 className="category">{item.bodyType}</h3>
            <span>{item.modelType}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
