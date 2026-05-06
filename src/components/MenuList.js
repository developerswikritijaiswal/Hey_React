import MenuListItems from "./MenuListItems";

const MenuList = ({menuList, showItems, setShowItems}) => {

    const clickMenu = () => {
        setShowItems()
        // showItems ? setShowItems(false) : setShowItems(true);
    }

    return (
        <li className="menu-list border-2 border-gray-300 rounded-lg mb-3 shadow-sm bg-gray-100">
            <h3
            className="menu-list-heading p-2 font-semibold cursor-pointer"
            onClick={clickMenu}
            >
            {menuList?.title} ({menuList?.itemCards?.length})
            </h3>
            {/* menu list items inner */}
            {showItems && <MenuListItems menuList={menuList} />}
        </li>
    )
}

export default MenuList;