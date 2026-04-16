import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import Shimmer from "./Shimmer";
import {MENU_LIST_URL} from "../utils/constants"
import { useRouteError } from "react-router";
import useResturantCardDetails from "../utils/useResturantCardDetails";

const ResturantCardDetails = () => {
    // const [resCardDetails, setResCardDetails] = useState(null);
    const [openIndex, setOpenIndex] = useState(false);

    const {restaurantId} = useParams(); //destructing here const params = useParams();

    const err = useRouteError();

    // useEffect(()=> {
    //     fetchCardDetails();
    // }, []);

    // const fetchCardDetails = async () => {
    //     setIsLoad(true);
    //     try{
    //         const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+123456); //restaurantId
    //         const json = await data?.json();
    //         if(data.status == 200){
    //             setResCardDetails(json?.data);
    //         }else{
    //             console.log(json);
    //             setResCardDetails(json)
    //             setIsLoad(false);
    //         }
    //     }
    //     catch(error){
            
    //     }
    //     finally{
    //         setIsLoad(false);
    //     }
    // }
    // console.log(resCardDetails)

    const resCardDetails = useResturantCardDetails(restaurantId);
    
    if(resCardDetails === null) return <Shimmer />;

    if(resCardDetails?.error) return (
        <div className="menu-not-found text-center res-card-details">
            {resCardDetails?.error}
        </div>)

    const info = resCardDetails?.cards?.[2]?.card?.card?.info;
    const menu = resCardDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
      <div className="res-card-details">
        <div className="res-card-info">
          <h1>{info?.name}</h1>
          <p>
            {info?.avgRating} ({info?.totalRatingsString}) |{" "}
            {info?.costForTwoMessage}
          </p>
          <ul className="cuisines">
            {info?.cuisines?.map((item, index) => {
              return (
                <li key={index}>
                  <Link to="/abc">{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="res-card-menu">
            <div className="text-center">MENU</div>
            <div>
                <ul>
                    {
                        menu?.map((item, index)=>{
                            if(Object.keys(item).length === 0) return;
                            const menuList = item?.card?.card
                            return (
                                <li key={index} className="menu-list">
                                    <h3 className="menu-list-heading" 
                                        onClick={()=>{
                                        return openIndex == index ? setOpenIndex(null) : setOpenIndex(index);
                                    }}>{menuList?.title} ({menuList?.itemCards?.length})</h3>
                                    
                                    {openIndex === index && (
                                        menuList?.itemCards?.map((itemCards)=>{
                                            return (
                                                <div key={itemCards?.card?.info?.id} className="item-card">
                                                    <div>
                                                        <h5>{itemCards?.card?.info?.name}</h5>
                                                        <p>₹ {itemCards?.card?.info?.price/100}</p>
                                                        <p>{itemCards?.card?.info?.description}</p>
                                                    </div>
                                                    <div className="menu-img">
                                                        <img src={MENU_LIST_URL + itemCards?.card?.info?.imageId}></img>
                                                    </div>
                                                </div>
                                                
                                            )
                                        })
                                        )}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
      </div>
    );
}

export default ResturantCardDetails;