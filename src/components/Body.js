import CardComponent from './Card';
import resList from '../utils/mockData';
import { useState } from 'react';

const BodyComponent = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);
  const [searchText, setSearchText] = useState('');

  const clickTopRatedResturants = () => {
    const filtertheRestaurant =  listOfResturant.filter((item)=> {
      return item.avgRating > 4
    });
  setListOfResturant(filtertheRestaurant);
  }

  const clearTopRate = ()=>{
    setListOfResturant(resList);
  }

  const input = (e) => {
    setSearchText(e.target.value);
  };

  const searchBtnClick = () => {
    const searchValue = resList.filter((item) => {
      return item.resName.toLowerCase().includes(searchText.toLowerCase()); 
    });
    setListOfResturant(searchValue);
  }
  
  return (
    <div className="body-container">
      <div className='search-box btn-rate'>
        <input type='text' onInput={input}></input>
        <button type='button' onClick={searchBtnClick}>Search</button>
      </div>
      <div className='btn-rate'>
        <button type='button' className='btn' onClick={clickTopRatedResturants}>Top Rated Resturants</button>
        <button type='button' onClick={clearTopRate}>Clear</button>
      </div>
      <div className="card-main-container">
        {
          listOfResturant.map((item)=>{
            return <CardComponent key={item.id} resData={item}/>
          })
        }
      </div>
    </div>
  )
} 

export default BodyComponent;