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
        <div className="menu-not-found mt-20 text-center res-card-details border-2 border-gray-300 rounded-lg p-5 mx-auto max-w-3xl shadow-sm">
            {resCardDetails?.error}
        </div>)

    const info = resCardDetails?.cards?.[2]?.card?.card?.info;
    const menu = resCardDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
      <div className="res-card-details pt-20 mx-auto max-w-3xl">
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
        <div className="res-card-menu">
            <div className="text-center">MENU</div>
            <div>
                <ul>
                    {
                        menu?.map((item, index)=>{
                            if(Object.keys(item).length === 0) return;
                            const menuList = item?.card?.card
                            return (
                                <li key={index} className="menu-list border-2 border-gray-300 rounded-lg mb-3 shadow-sm">
                                    <h3 className="menu-list-heading p-2 font-semibold cursor-pointer" 
                                        onClick={()=>{
                                        return openIndex == index ? setOpenIndex(null) : setOpenIndex(index);
                                    }}>{menuList?.title} ({menuList?.itemCards?.length})</h3>
                                    
                                    {openIndex === index && (
                                        menuList?.itemCards?.map((itemCards)=>{
                                            return (
                                                <div key={itemCards?.card?.info?.id} className="item-card border-b-2 border-gray-200 m-5 flex justify-between items-start pb-5 last:border-b-0 last:mb-0">
                                                    <div>
                                                        <h5 className="mb-2">{itemCards?.card?.info?.name}</h5>
                                                        <p className="mb-2">₹ {itemCards?.card?.info?.price/100}</p>
                                                        <p className="mb-2">{itemCards?.card?.info?.description}</p>
                                                    </div>
                                                    <div className="menu-img w-36 h-32">
                                                        <img src={MENU_LIST_URL + itemCards?.card?.info?.imageId} className="w-full h-full"></img>
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