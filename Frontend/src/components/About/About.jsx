import medicareplus from "../../assets/images/medicareplus.png";
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#f7fdfc] to-[#e6faf8]">
            <div className="container max-w-7xl px-4 mx-auto">
 
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-all duration-300 animate-scale-up">
                            <img 
                                src={medicareplus} 
                                alt="Medical Facility" 
                                className="w-full h-[550px] object-cover rounded-2xl" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#007e69] to-transparent opacity-20" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 hidden lg:block animate-scale-up">
                            <div className="bg-[#007e69] text-white px-8 py-4 rounded-full shadow-lg font-medium">
                                Since 1994
                            </div>
                        </div>
                    </div>

                 
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border-l-8 border-[#007e69] hover:border-[#00a88b] transition-all duration-300">
                      
                            <div className="absolute -top-6 -left-6 w-14 h-14 bg-[#007e69] rounded-full flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                                </svg>
                            </div>
                            
                            <div className="space-y-6">
                                <h2 className="text-4xl lg:text-5xl font-bold text-[#003a33] leading-tight hover:animate-hover-pulse">
                                    Proud to be one of the nations best
                                </h2>
                                
                                <div className="space-y-6">
                                    <p className="text-lg text-[#4a5957] leading-relaxed relative pl-6 border-l-2 border-[#00a88b]">
                                        For 30 years in a row, Nepal News & World Report has recognized us as one of the best public hospitals in the nation, known for exceptional care, innovation, and community-focused healthcare services.
                                    </p>
                                    
                                    <p className="text-lg text-[#4a5957] leading-relaxed bg-[#f5fffd] p-6 rounded-lg border border-[#e0f5f1]">
                                        Our best is something we strive for each day, caring for our patients—not looking back at what we accomplished but towards what we can do tomorrow. Providing the best care, compassion, innovation, excellence, dedication, integrity, empathy, trust, teamwork, and growth.
                                    </p>
                                </div>

                                <Link 
                                    to='/Services'
                                    className="animate-scale-up inline-flex items-center gap-3 px-8 py-4 bg-[#007e69] text-white rounded-full font-semibold hover:bg-[#00a88b] transition-all duration-300 shadow-md hover:shadow-lg group"
                                >
                                    <span>Learn More</span>
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#007e69]/10 rounded-full blur-xl" />
                        </div>
                    </div>
                </div>
           

            </div>
        </section>
    )
}

export default About