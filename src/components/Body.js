import CardComponent from "./Card";
// import resList from '../utils/mockData';
import { useState, useEffect } from "react";
// import LoaderComponent from "./Loader";
import Shimmer from './Shimmer';

const BodyComponent = () => {
  const [allListOfResturant, setAllListOfResturant] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  const [searchText, setSearchText] = useState('');

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
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57553299557862&lng=77.38999027758837&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await response.json();
    const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllListOfResturant(resData);
    setFilterValue(resData);
  };

  return allListOfResturant?.length == 0 ? (
    <Shimmer />
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
          (filterValue.map((item) => {
            const resItem = item?.info ? item?.info : item;
            return <CardComponent key={resItem.id} resData={resItem} />;
          }))
        }
      </div>
    </div>
  );
};

export default BodyComponent;
