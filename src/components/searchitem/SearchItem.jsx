import './searchItem.css';
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://cf.bstatic.com/xdata/images/hotel/square600/414707217.webp?k=903295ad31743293e84dc32ad815c6548bdf2e3710eafdfa4d9063adb556564f&o=&s=1"
        alt=""
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio • 2 bedrooms • 2 living rooms •</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel latel, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Include taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
