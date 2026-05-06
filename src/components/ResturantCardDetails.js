import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRouteError } from "react-router";
import useResturantCardDetails from "../utils/useResturantCardDetails";
import CardDetailsInner from "./CardDetailsInner";
import WithDeliveryLabel from "./WithDeliveryLabel";
import MenuList from "./MenuList";

const ResturantCardDetails = () => {
  // const [openIndex, setOpenIndex] = useState(false);
  const [showItems, setShowItems] = useState(null);

  const { restaurantId } = useParams(); //destructing here const params = useParams();

  const err = useRouteError();

  const resCardDetails = useResturantCardDetails(restaurantId);

  const CardDetailsInnerWithLabel = WithDeliveryLabel(CardDetailsInner);

  if (resCardDetails === null) return <Shimmer />;

  if (resCardDetails?.error)
    return (
      <div className="menu-not-found mt-20 text-center res-card-details border-2 border-gray-300 rounded-lg p-5 mx-auto max-w-3xl shadow-sm">
        {resCardDetails?.error}
      </div>
    );

  const info = resCardDetails?.cards?.[2]?.card?.card?.info;
  const menu =
    resCardDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="res-card-details pt-20 mx-auto max-w-3xl">
      {info?.sla?.deliveryTime <= 30 ? (
        <CardDetailsInnerWithLabel info={info} />
      ) : (
        <CardDetailsInner info={info} />
      )}
      <div className="res-card-menu">
        <div className="text-center">MENU</div>
        <div>
          {/* accodian  */}
          <ul>
            {menu?.map((item, index) => {
              if (Object.keys(item).length === 0) return;
              const menuList = item?.card?.card;
              return <MenuList 
                key={menuList.title} 
                menuList={menuList} 
                showItems={index === showItems}
                setShowItems={() => setShowItems(showItems == index ? null : index)} /> 
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResturantCardDetails;
