import CardComponent from './Card';
// import resList from '../utils/mockData';
import { useState, useEffect } from 'react';

const BodyComponent = () => {
  const [AllListOfResturant, setAllListOfResturant] = useState([]);
  const [filteredListOfResturant, setFilteredListOfResturant] = useState([]);
  // const [searchText, setSearchText] = useState('');

  const clickTopRatedResturants = () => {
    const filtertheRestaurant =  AllListOfResturant.filter((item)=> {
      return item?.info?.avgRating > 4.3
    });
    setFilteredListOfResturant(filtertheRestaurant);
  }

  const clearTopRate = ()=>{
    setFilteredListOfResturant(AllListOfResturant);
  }

  const input = (e) => {
    // setSearchText(e.target.value);
    searchBtnClick(e.target.value);
  };

  const searchBtnClick = (searchText) => {
    const searchValue = AllListOfResturant.filter((item) => {
      return item?.info?.name.toLowerCase().includes(searchText.toLowerCase()); 
    });
    setFilteredListOfResturant(searchValue);
  }

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async ()=>{
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57553299557862&lng=77.38999027758837&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await response.json();
    const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllListOfResturant(resData);
    setFilteredListOfResturant(resData);
  }
  
  return (
    <div className="body-container">
      <div className='search-box btn-rate'>
        <input type='text' onInput={input} placeholder='search...'></input>
        {/* <button type='button' onClick={searchBtnClick}>Search</button> */}
      </div>
      <div className='btn-rate'>
        <button type='button' className='btn' onClick={clickTopRatedResturants}>Top Rated Resturants</button>
        {filteredListOfResturant?.length !== AllListOfResturant?.length && (<button type='button' onClick={clearTopRate} className='clear-btn'>Clear</button>)}
      </div>
      <div className="card-main-container">
        { filteredListOfResturant?.length == 0 ? 
          <h1>No restaurants match your filter!</h1> :
          filteredListOfResturant.map((item)=>{
            const resItem = item?.info ? item?.info : item;
            console.log(resItem)
            return <CardComponent key={resItem.id} resData={resItem}/>
          })
        }
      </div>
    </div>
  )
} 

export default BodyComponent;