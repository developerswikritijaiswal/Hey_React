import CardComponent from "./Card";
// import resList from '../utils/mockData';
import { useState, useEffect } from "react";
// import LoaderComponent from "./Loader";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [allListOfResturant, setAllListOfResturant] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allJson, setAllJson] = useState({});
  const [loading, setLoading] = useState(true);

  const clickTopRatedResturants = () => {
    const filtertheRestaurant = filterValue.filter((item) => {
      return item?.info?.avgRating > 4.3;
    });
    setFilterValue(filtertheRestaurant);
  };

  const clearFilter = () => {
    setFilterValue(allListOfResturant);
    setSearchText('')
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57553299557862&lng=77.38999027758837&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.146757289936993&lng=83.55684142559767&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await response.json();
    console.log(json)

    const targetCard = json.data.cards.find(item => 
      item.card?.card?.layout?.columns === 4
    );
    setAllJson(json);
    const resData = targetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllListOfResturant(resData);
    setFilterValue(resData);
    }
    catch{
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  };

  const loadMore = () => {
    updateData();
  }

  const updateData = async () => {
    setLoading(true);
    try{
      const responseUpdate = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57553299557862&lng=77.38999027758837&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await responseUpdate.json();

    const targetCard = json.data.cards.find(item => 
      item.card?.card?.layout?.columns === 4
    );
    const resDataUpdate = targetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllListOfResturant((prev) => [...prev, ...resDataUpdate]);
    setFilterValue((prev) => [...prev, ...resDataUpdate]);
    }
    catch{
      console.error("Error fetching restaurants:", error);
    }
    finally{
      setLoading(false)
    }
  };

  const updateData1 = async () => {
    let payload = {
      lat: "28.57553299557862",
      lng: "77.38999027758837",
      nextOffset: allJson?.data?.pageOffset?.nextOffset,
      widgetOffset: allJson?.data?.pageOffset?.widgetOffset,
      filters: {},
      seoParams: {
        seoUrl: "https://www.swiggy.com/home",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
        businessLine: "FOOD",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: allJson.csrfToken,
    };
    const myRequest = new Request("https://www.swiggy.com/dapi/restaurants/list/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const response = await fetch(myRequest);
    console.log(response);
  }

  return allListOfResturant?.length == 0 ? (
    <div className="shimmer-container"><Shimmer count={10}/></div>
  ) : (
    <div className="body-container">
      <div className="d-flex align-item-center">
        <div className="search-box">
          <input type="text" placeholder="search..." value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>
          <button type='button' 
            className="search-btn"
            disabled={searchText == ''}
            onClick={()=>{
            const filterValue = allListOfResturant.filter((value)=>{
              return value.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilterValue(filterValue)
          }}>Search</button>
        </div>
        <div className="btn-rate">
          <button type="button" className="btn" onClick={clickTopRatedResturants}>
            Top Rated Resturants
          </button>
          {filterValue.length != allListOfResturant.length && 
            <button type="button" 
            className="clear-btn" 
            onClick={clearFilter}>
            Clear
          </button>}
        </div>
      </div>
      <div className="card-main-container">
        {filterValue.length == 0 ? 
          (<div className="no-record">No Record Found!</div>) :
          (filterValue.map((item, i) => {
            const resItem = item?.info ? item?.info : item;
              return (
                <Link to={"/resturantCardDetails/" + resItem.id} key={resItem.id+i}>
                  <CardComponent resData={resItem} />
                </Link>
              );
            })
          )
        }
        {loading && <Shimmer count={6}/>}
      </div>
      {filterValue.length > 0 && 
        <div className="show-more text-center">
          <button type="button" onClick={loadMore}>Show More..</button>
        </div>}
    </div>
  );
};

export default BodyComponent;
