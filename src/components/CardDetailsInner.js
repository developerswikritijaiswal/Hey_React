import {Link} from "react-router-dom";

const CardDetailsInner = ({info}) => {
    return (
         <div>
            <div className="res-card-info rounded-2xl border-2 border-gray-300 p-5 mb-5">
                <h1>{info?.name}</h1>
                <p className="my-2">
                    {info?.avgRating} ({info?.totalRatingsString}) |{" "}
                    {info?.costForTwoMessage}
                </p>
                <ul className="cuisines">
                    {info?.cuisines?.map((item, index) => {
                    return (
                        <li key={index} className="pr-2 inline-block">
                            <Link to="/abc">{item}</Link>
                        </li>
                    );
                    })}
                </ul>
            </div>
         </div>
    )
}

// HOC (Higher Order Component) - A component which takes another component as an argument and returns a new component is called HOC. 
// export const withDeliveryLabel = (CardDetailsInner) => {
//   return (props) => {
//     return (
//       <div className='relative'>
//         <p className="absolute top-0 right-0 bg-blue-500 p-1 z-10 inline-block text-[12px] text-white">30-mins Delivery</p>
//         <CardDetailsInner {...props} />
//       </div>
//     )
//   }
// }

export default CardDetailsInner;