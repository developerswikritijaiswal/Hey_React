import {CDN_URL} from '../utils/constants';

const CardComponent = (props) => {
  const {resData} = props;
  const {name, cloudinaryImageId, avgRating, cuisines, sla, costForTwo} = resData;
  return (
    <div className="card w-[250px] min-h-72 p-2 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <img src={CDN_URL + cloudinaryImageId} alt="food" className="card-image w-full h-40 "/>
      <h2 className="card-heading text-lg break-words line-clamp-1 font-bold">{name}</h2>
      <p className="rating">⭐ {avgRating} * {sla.slaString}</p>
      <p className="card-description cuisines break-words line-clamp-1 font-extralight text-base">{cuisines.join(", ")}</p>
      <p className="card-description">{costForTwo}</p>
    </div>
  )
}

export default CardComponent;