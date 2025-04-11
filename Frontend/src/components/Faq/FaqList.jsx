
import {faqs} from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";
const FaqList = () => {
  return (
    <div>

 <ul className="mt-[38px] text-headingColor">
    {faqs.map((item,index)=>(
        <FaqItem item={item} key={index}/>))}

 </ul>
    </div>
  )
}

export default FaqList