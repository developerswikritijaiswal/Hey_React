import { useEffect } from "react";

const Help = () =>{
    useEffect(() => {
        fetchFaqData();
    },[]);

    const fetchFaqData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/support/v3/issues/swiggy_one_faq');
        const json = await data.json();
        console.log('help',json);
    }

    return (
        <div className="help-conatiner  p-5 mt-20">
            <h1 className="text-2xl font-bold mb-4">Swiggy One FAQs</h1>
        </div>
    )
}

export default Help;