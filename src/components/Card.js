import {CDN_URL} from '../utils/constants';

const CardComponent = (props) => {
  const {resData} = props;
  const {resName, cloudinaryImageId, avgRating, cuisines, deliveryTime, cost} = resData;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="food" className="card-image"/>
      <h2 className="card-heading">{resName}</h2>
      <p className="rating">⭐ {avgRating} * {deliveryTime} mins</p>
      <p className="card-description">{cuisines.join(", ")}</p>
      <p className="card-description">₹{cost} for Two</p>
    </div>
  )
}

export default CardComponent;