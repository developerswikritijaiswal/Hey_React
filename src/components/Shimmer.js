const Shimmer = ({count}) => {
    // return <div className="shimmer-container">
        return Array(count).fill().map((ele, i) => (
            <div className="shimmer-card" key={i}></div>
        ));
        
    // </div>
}

export default Shimmer;