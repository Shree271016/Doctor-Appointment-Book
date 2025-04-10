/* eslint-disable react/prop-types */
// ServiceCard.jsx
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textcolor } = item;

  return (
    <div className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div 
        className="absolute -top-4 right-4 w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full shadow-md"
        style={{ background: bgColor, color: textcolor }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#007e69] transition-colors animate-scale-up">
          {name}
        </h3>
        <p className="text-gray-600 leading-relaxed hover:animate-hover-pulse">{desc}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link
          to="/doctors"
          className="animate-scale-up flex items-center gap-2 text-[#007e69] hover:text-[#005a4d] font-semibold transition-colors"
        >
          Explore Service
          <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;