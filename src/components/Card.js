import {CDN_URL} from '../utils/constants';

const CardComponent = (props) => {
  const {resData} = props;
  const {name, cloudinaryImageId, avgRating, cuisines, sla, costForTwo} = resData;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="food" className="card-image"/>
      <h2 className="card-heading">{name}</h2>
      <p className="rating">⭐ {avgRating} * {sla.slaString}</p>
      <p className="card-description cuisines">{cuisines.join(", ")}</p>
      <p className="card-description">{costForTwo}</p>
    </div>
  )
}

export default CardComponent;