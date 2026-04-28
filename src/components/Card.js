import {CDN_URL} from '../utils/constants';

const CardComponent = (props) => {
  const {resData} = props;
  const {name, cloudinaryImageId, avgRating, cuisines, sla, costForTwo} = resData;
  return (
    <div className="card w-[250px] min-h-72 p-2 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      {/* {sla.deliveryTime < 30 && <p className="absolute top-2 left-0 bg-blue-500 p-1 z-10 inline-block text-[12px] text-white">30-mins Delivery</p>} */}
      <img src={CDN_URL + cloudinaryImageId} alt="food" className="card-image w-full h-40 object-cover"/>
      <h2 className="card-heading text-lg break-words line-clamp-1 font-bold">{name}</h2>
      <p className="rating">⭐ {avgRating} * {sla.slaString}</p>
      <p className="card-description cuisines break-words line-clamp-1 font-extralight text-base">{cuisines.join(", ")}</p>
      <p className="card-description">{costForTwo}</p>
    </div>
  )
}

// HOC (Higher Order Component) - A component which takes another component as an argument and returns a new component is called HOC. 
// use this one when you want to add some common UI (like label) to multiple components. 
// or you can use WithDeliveryLabel componet directly in body component when you want to add label. 
// (example shown in CardDetailsInner component && resturantCardDetails component)
export const withDeliveryLabel = (CardComponent) => {
  return (props) => {
    return (
      <div className='relative'>
        <p className="absolute top-2 left-0 bg-blue-500 p-1 z-10 inline-block text-[12px] text-white">30-mins Delivery</p>
        <CardComponent {...props} />
      </div>
    )
  }
}

export default CardComponent;