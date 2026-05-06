import { useEffect, useState } from "react";

const Help = () =>{
    const [faqData, setFaqData] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        fetchFaqData();
    },[]);

    const fetchFaqData = async () =>{
        // const data = await fetch('https://www.swiggy.com/dapi/support/v3/issues/swiggy_one_faq');
        const data = await fetch('http://localhost:5000/api/swiggy-faq');
        const json = await data.json();
        setFaqData(json.data.issues.data);
    }

    const clickAccordian = (e, index) => {
        openIndex == index ? setOpenIndex(null) : setOpenIndex(index);
    }

    return (
        <div className="help-conatiner  p-5 mt-20">
            <h1 className="text-2xl font-bold mb-4 text-center">Food One FAQs</h1>
            <ul className="w-1/2 mx-auto">
                {
                faqData.map((faq, index) => {
                    return <li key={faq.id} className="p-3 shadow-lg bg-slate-200 mb-3 rounded-lg">
                        <div className="flex justify-between items-center cursor-pointer" onClick={(e) => clickAccordian(e, index)}>
                            <h4 className="font-semibold text-sm" >{faq.title}</h4>
                            <span className="font-bold">{openIndex == index ? '−' : '+'}</span>
                        </div>
                        {openIndex == index && <p className="text-gray-700 mt-1">{faq.description}</p>}
                    </li>
                })
                }
            </ul>
        </div>
    )
}

export default Help;