// ServicesList.jsx
import { services } from "./../../assets/data/services";
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-12">
      {services.map((item, index) => (
        <ServiceCard 
          item={item} 
          index={index} 
          key={index} 
        />
      ))}
    </div>
  );
};

export default ServicesList;