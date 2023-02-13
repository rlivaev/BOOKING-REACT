import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/600x600/619896.jpg?k=9364e91ae738a47a4a37b0a7fb26d01e5e95db810f7167e9e5ecf58e5ca74e9b&o="
          alt=""
        />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o="
          alt=""
        />
        <div className="featuredTitle">
          <h1>Turkey</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/600x600/686023.jpg?k=315b82bac9991c71d6f14f8618e68a9b6d3f45b61b9ceb335523918d0e086dbf&o="
          alt=""
        />
        <div className="featuredTitle">
          <h1>Tashkent</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};
export default Featured;
