import { useEffect, useState } from "react";

const useResturantCardDetails = (restaurantId) => {

    const [resInfo, setResInfo] = useState(null);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() =>{
        fetchCardDetails();
    },[])

    const fetchCardDetails = async () => {
        setIsLoad(true);
        try{
            const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+123456); //restaurantId
            const json = await data?.json();
            if(data.status == 200){
                setResInfo(json?.data);
            }else{
                console.log(json);
                setResInfo(json);
                setIsLoad(false);
            }
        }
        catch(error){
            console.log(error);
        }
        finally{
            setIsLoad(false);
        }
    }

    return resInfo;
}

export default useResturantCardDetails;