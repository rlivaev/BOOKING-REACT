import './hotel.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faArrowRight,
  faArrowLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/120750514.jpg?k=c778b66de2cc74e3c70d909692ec0675ed980be09016331645efb5564655d7fe&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/53968848.jpg?k=0dfc820595cd09462b4514aeb55cb0925c73d994205ee6a72f8c1ee100c03257&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/120750794.jpg?k=f1802e8311e49ce33757395fdc062e02f273dbf2e221ebb1a1dbf9dd39c11997&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/41758519.jpg?k=02f8a798c7b6668e9b11d32b0ef39b668e2ee1e22596520670d506692acdd839&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/14642707.jpg?k=b5f3d646a642fae2e2c40404f2036aff7489084394d48974735265d8083638ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/27964190.jpg?k=d5eb414dc87b457887544ae3ef4dddbdb9b183357841a1cadc992912aadc1d16&o=&hp=1',
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === 'l') {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="" list />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faXmark} className="close" onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={() => handleMove('l')} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="arrow"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelOriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of New York</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Royalton New York! To save at this
                property, all you have to do is sign in. This New York City hotel is located on 44th
                Street and is 322 m from Times Square. It features on-site dining and guest rooms
                with flat-screen TVs. Each stylish and modern room at Royalton New York features a
                bathroom with a slate and glass shower. WiFi is available. Royalton New York is a
                design hotel with a large brass fireplace in the lobby. A business center is
                available and the front desk can assist with ticket services. Radio City Music Hall
                and Bryant Park are 644 m from the property. Guests can also find 2 subway stations
                within 700 m of the property.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Situated in the real heart of New York, this hotel has an excellent location score
                of 9.2
              </span>
              <h2>
                <b>$945</b> (9 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Hotel;
