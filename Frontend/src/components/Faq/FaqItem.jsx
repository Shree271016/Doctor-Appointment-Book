/* eslint-disable react/prop-types */
import { useState } from "react";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`group p-6 mb-1 lg:p-7 rounded-2xl bg-[#404c49] shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${isOpen ? 'border-[#007e69] ' : 'border-transparent'}`}>
        <div 
          className="flex items-center justify-between gap-5 cursor-pointer  hover:animate-hover-pulse"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4 className="text-lg lg:text-xl font-semibold text-headingColor transition-colors group-hover:text-[#007e69]">
            {item.question}
          </h4>
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#007e69] text-headingColor rotate-180' : 'bg-[#e6faf8] text-[#007e69]'}`}>
            {isOpen ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
          </div>
        </div>
        
        {isOpen && (
          <div className="mt-6 pl-2 border-l-2 border-[#00a88b] animate-fadeIn">
            <p className="text-headingColor leading-relaxed text-base lg:text-lg">
              {item.content}
            </p>
          </div>
        )}
      </div>
    );
  };

export default FaqItem;