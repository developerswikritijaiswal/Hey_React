import {MENU_LIST_URL} from "../utils/constants";

const MenuListItems = ({ menuList }) => {
    return (
        <div>
            {
                menuList?.itemCards?.map((itemCards) => {
                    return (
                    <div
                        key={itemCards?.card?.info?.id}
                        className="item-card border-b-2 border-gray-200 m-5 flex justify-between items-start pb-5 last:border-b-0 last:mb-0"
                    >
                        <div>
                            <h5 className="mb-2">
                                {itemCards?.card?.info?.name}
                            </h5>
                            <p className="mb-2">
                                ₹ {itemCards?.card?.info?.price / 100}
                            </p>
                            <p className="mb-2">
                                {itemCards?.card?.info?.description}
                            </p>
                        </div>
                        <div className="menu-img w-36 h-32">
                            <img
                                src={
                                MENU_LIST_URL + itemCards?.card?.info?.imageId
                                }
                                className="w-full h-full"
                            ></img>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    )
}

export default MenuListItems;