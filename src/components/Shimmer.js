const Shimmer = ({count}) => {
    // return <div className="shimmer-container">
        return Array(count).fill().map((ele, i) => (
            <div className="shimmer-card w-[250px] min-h-72 p-2 rounded-lg bg-gray-200" key={i}></div>
        ));
        
    // </div>
}

export default Shimmer;