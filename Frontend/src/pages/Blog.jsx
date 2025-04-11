
import { Link } from 'react-router-dom';
import medicareplus from "../assets/images/medicareplus.png";
import shree from "../assets/images/shree.png";
import kasmita2 from "../assets/images/kasmita2.jpg";
import HomeImage from "../assets/images/HomeImage.png";


const Blog = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-fixed bg-no-repeat bg-center">
            {/* Fixed Background Image with Overlay */}
            <div className="fixed inset-0 z-[-1] w-full h-full">
                <img
                    className="w-full h-full object-cover object-top"
                    src={medicareplus}
                    alt="Medical background"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container mx-auto p-6 pt-24">


                <h1 className="text-3xl font-bold text-center mb-6 leading-tight animate-slide-in">Revolutionizing Healthcare with Our Doctor Appointment Booking App</h1>

                <div className="bg-slate-700/80 p-6  rounded-lg mb-8">

                    <p className="text-center text-lg text-headingColor opacity-100 hover:animate-hover-pulse">
                        Discover a complete healthcare solution serving <span className="font-bold">1M+ patients</span> across <span className="font-bold">50+ specialties</span>
                    </p>
                </div>
                <div className='text-center animate-scale-up pt-3 pb-3'>

                    <img src={medicareplus}
                        alt="Healthcare Technology"
                        className="w-full sm:px-3 rounded-lg mb-6 shadow-xl h-[85vh]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-[#404c49] p-6 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 text-headingColor animate-slide-in">Patient-Centric Features</h2>

                        <ul className="list-disc list-inside space-y-3 text-headingColor ">
                            <li><span className="font-semibold hover:animate-hover-pulse">Smart Search:</span> Find doctors by symptom, specialty, or insurance provider</li>
                            <li><span className="font-semibold hover:animate-hover-pulse">Instant Booking:</span> 24/7 availability with emergency slots</li>
                            <li><span className="font-semibold hover:animate-hover-pulse">Health Wallet:</span> Secure storage for medical reports and prescriptions</li>
                            <li><span className="font-semibold hover:animate-hover-pulse" >Care Continuity:</span> Follow-up scheduling and chronic care management</li>
                            <li><span className="font-semibold hover:animate-hover-pulse">Medicine Delivery:</span> Integrated pharmacy partners with e-prescriptions</li>
                        </ul>

                    </div>

                    <div className="bg-[#404c49] p-6 rounded-xl shadow-md ">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-900 animate-slide-in">Doctor Dashboard Tools</h2>

                        <ul className="list-disc list-inside space-y-3 text-headingColor ">
                            <li  className='hover:animate-hover-pulse'>Smart calendar management with auto-schedule optimization</li>
                            <li  className='hover:animate-hover-pulse'>Telemedicine toolkit with virtual waiting room</li>
                            <li  className='hover:animate-hover-pulse'>Patient history viewer with AI-assisted diagnostics</li>
                            <li  className='hover:animate-hover-pulse'>Revenue analytics and payment integration</li>
                            <li  className='hover:animate-hover-pulse'>Continuing medical education (CME) tracking</li>
                        </ul>


                    </div>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <div className="bg-[#404c49] p-6 rounded-xl shadow-md">
                        <img src="https://media.istockphoto.com/id/824219356/photo/ai-concept-3d-rendering-abstract-image-visual.jpg?s=1024x1024&w=is&k=20&c=nx_7MRiZxoXB1g1JRckXeg4qWax4Z9zsRn37Yzx10_c=" alt="AI-Powered Healthcare" className="w-full rounded-lg mt-4 animate-scale-up" />
                        <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center mt-4 animate-slide-in">Advanced Features</h2>


                        <ul className="list-decimal list-inside text-headingColor mb-4 ">
                            <li  className='hover:animate-hover-pulse'>AI-powered doctor recommendations based on medical history.</li>
                            <li  className='hover:animate-hover-pulse'>Telemedicine support for virtual consultations.</li>
                            <li  className='hover:animate-hover-pulse'>Electronic medical record integration for better treatment tracking.</li>
                            <li  className='hover:animate-hover-pulse'>Multi-language support for diverse users.</li>
                        </ul>


                    </div>

                    <div className="bg-[#404c49] p-6 rounded-xl shadow-md">
                        <img src="https://media.istockphoto.com/id/1404179486/photo/anesthetist-working-in-operating-theatre-wearing-protecive-gear-checking-monitors-while.jpg?s=1024x1024&w=is&k=20&c=FIjd0v71G2Mq_3fSUX490N1dMnHwX6ZsFCf9GU2G2ds=" alt="How It Works" className="w-full rounded-lg mt-4 animate-scale-up" />
                        <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center mt-4 animate-slide-in">How It Works</h2>


                        <ul className="list-decimal list-inside text-headingColor mb-4 ">
                            <li className='hover:animate-hover-pulse'>Sign up and create a profile.</li>
                            <li  className='hover:animate-hover-pulse'>Search for doctors based on specialty and location.</li>
                            <li  className='hover:animate-hover-pulse'>Book an available time slot instantly.</li>
                            <li  className='hover:animate-hover-pulse'>Receive appointment reminders and updates.</li>
                        </ul>


                    </div>
                </div>




                <div className="mt-12 bg-[#404c49] p-8 rounded-xl">

                    <h2 className="text-2xl font-semibold mb-6 text-center animate-scale-up">Developed By Healthcare Tech Experts</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-center">
                            <div className='animate-rotate-bounce'>
                                <img src={shree}
                                    alt="Developer"
                                    className="w-32 h-32 rounded-full mx-auto mb-4 mt-2 object-cover border-4 border-white shadow-lg" />
                                <h3 className="text-xl font-bold">Shree krishna Pudasaini</h3>
                                <p className="text-headingColor mb-2">Full Stack Developer & Healthcare Tech Specialist</p>
                            </div>
                            <div className="flex justify-center space-x-4 relative">
                                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                                <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
                                    <i className="fas fa-globe text-xl"></i>
                                </a>
                            </div>
                        </div>

                        <div className="max-w-md">
                            <p className="text-headingColor mb-4">
                                With 5+ years of experience building healthcare solutions, I&apos;ve created this platform to bridge the gap between patients and doctors through technology.
                            </p>
                            <p className="text-headingColor mb-4">
                                Explore more of my work and connect for collaborations:
                            </p>
                            <div className="flex flex-col space-y-3">
                                <a href="https://www.shreekrishnapudasaini.com.np/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:animate-hover-pulse bg-[rgb(0,126,105)] text-headingColor px-4 py-2 rounded-lg text-center hover:bg-white hover:text-[rgb(0,126,105)] hover:border-[rgb(0,126,105)] hover:border transition">
                                    View My Portfolio
                                </a>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=pudasainishreekrishna1@gmail.com&su=Hiring Inquiry&body=Hello, I'd like to discuss hiring you..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:animate-hover-pulse border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-50 transition"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center ">
                        <div className="tech-card p-4 bg-[#97a4a1] rounded-lg shadow">
                            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
                                alt="React"
                                className="h-16 mx-auto mb-2" />
                            <span className="text-headingColor">React JS</span>
                        </div>
                        <div className="tech-card p-4 bg-[#97a4a1] rounded-lg shadow">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                                alt="Node.js"
                                className="h-16 mx-auto mb-2" />
                            <span className="text-headingColor">Node.js</span>
                        </div>
                        <div className="tech-card p-4 bg-[#97a4a1] rounded-lg shadow">
                            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png"
                                alt="MongoDB"
                                className="h-16 mx-auto mb-2" />
                            <span className="text-headingColor">MongoDB</span>
                        </div>
                        <div className="tech-card p-4 bg-[#97a4a1] rounded-lg shadow">
                            <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                                alt="Express.js Logo"
                                className="h-16 mx-auto mb-2" />
                            <span className="text-headingColor">Express</span>
                        </div>
                    </div>
                </div>


                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-[#404c49] rounded-xl shadow-md">


                        <h2 className="text-2xl font-semibold mb-4 animate-slide-in">Enterprise-Grade Security</h2>


                        <ul className="space-y-3 text-headingColor ">
                            <li className='hover:animate-hover-pulse'>🔒 HIPAA-compliant data storage</li>
                            <li className='hover:animate-hover-pulse'>🔑 End-to-end encryption for all communications</li>
                            <li className='hover:animate-hover-pulse'>📜 Audit trails and access controls</li>
                            <li className='hover:animate-hover-pulse'>🛡️ Regular security testing</li>
                            <li className='hover:animate-hover-pulse'>📌 Two-factor authentication</li>
                            <li className='hover:animate-hover-pulse'>🔐 Biometric login options</li>
                            <li className='hover:animate-hover-pulse'>📊 Compliance with GDPR and other regulations</li>
                        </ul>

                    </div>


                    <img src="https://media.istockphoto.com/id/1490694111/photo/doctor-visual-screen-software-data-management-doctor-document-management-on-cloud-computing.jpg?s=1024x1024&w=is&k=20&c=BxHx_Pc9VchoxV4bhAeZxtRhCWFl9cLOF1uhwVe-VeM="
                        alt="Security"
                        className="rounded-xl object-cover h-full animate-scale-up" />

                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">


                    <img src="https://plus.unsplash.com/premium_photo-1664475477169-46b784084d4e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Security"
                        className="rounded-xl object-cover h-full animate-scale-up" />

                    <div className="p-6 bg-[#404c49] rounded-xl shadow-md">


                        <h2 className="text-2xl font-semibold mb-4 animate-slide-in">Key Features</h2>


                        <ul className="list-disc list-inside space-y-3 text-headingColor ">
                            <li className='hover:animate-hover-pulse'>Effortless appointment scheduling with top healthcare professionals.</li>
                            <li className='hover:animate-hover-pulse'>Real-time availability and instant confirmations.</li>
                            <li className='hover:animate-hover-pulse'>Secure patient-doctor communication.</li>
                            <li className='hover:animate-hover-pulse'>Integrated reminders to reduce missed appointments.</li>
                            <li className='hover:animate-hover-pulse'>User-friendly interface for all age groups.</li>
                        </ul>

                    </div>



                </div>

                <div className="mt-12">


                    <h2 className="text-2xl font-semibold mb-6 text-center hover:animate-hover-pulse">Success Stories</h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="bg-[#404c49] p-6 rounded-xl shadow-md">
                            <p className="text-headingColor mb-4">&quot;Reduced our no-show rate by 40% with smart reminders and easy rescheduling.&quot;</p>
                            <div className="flex items-center">
                                <img src={kasmita2}
                                    alt="User"
                                    className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-orange-500">Dr. Kasmita Ghimire</p>
                                    <p className="text-headingColor">Cardiologist</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#404c49] p-6 rounded-xl shadow-md ">
                            <p className="text-headingColor mb-4">&quot;Found my perfect specialist in minutes - finally a healthcare app that actually works!&quot;</p>
                            <div className="flex items-center">
                                <img src={HomeImage}
                                    alt="User"
                                    className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-orange-500">Ai Shree Krishna</p>
                                    <p className="text-headingColor">Patient since 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 bg-[rgb(0,126,105,0.8)] text-headingColor p-8 rounded-xl text-center ">


                    <h2 className="text-2xl font-bold mb-4 hover:animate-hover-pulse">Ready to Transform Your Healthcare Experience?</h2>


                    <p className="mb-6 hover:animate-hover-pulse">Join 500,000+ users and 20,000+ healthcare providers</p>


                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/register">
                            <button className="bg-headingColor text-[rgb(0,126,105)] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition animate-scale-up">
                                I&apos;m a Patient
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="animate-scale-up border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-headingColor hover:text-[rgb(0,126,105)] transition">
                                I&apos;m a Doctor
                            </button>
                        </Link>
                    </div>


                </div>


                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-[#404c49] rounded-lg shadow hover:animate-hover-pulse">
                        <div className="text-3xl font-bold text-blue-900">98%</div>
                        <div className="text-headingColor">Booking Success Rate</div>
                    </div>
                    <div className="p-4 bg-[#404c49] rounded-lg shadow hover:animate-hover-pulse">
                        <div className="text-3xl font-bold text-blue-900">24/7</div>
                        <div className="text-headingColor">Support Availability</div>
                    </div>
                    <div className="p-4 bg-[#404c49] rounded-lg shadow hover:animate-hover-pulse">
                        <div className="text-3xl font-bold text-blue-900">4.9★</div>
                        <div className="text-headingColor">Average Rating</div>
                    </div>
                    <div className="p-4 bg-[#404c49] rounded-lg shadow hover:animate-hover-pulse" >
                        <div className="text-3xl font-bold text-blue-900">50+</div>
                        <div className="text-headingColor">Insurance Partners</div>
                    </div>
                </div>

                <div className="mt-12 bg-gradient-to-r  p-8 rounded-xl border border-blue-100 ">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>


                            <h3 className="text-xl font-bold text-headingColor mb-2 hover:animate-hover-pulse">Need a Custom Healthcare Solution?</h3>


                            <p className="text-headingColor mb-4">
                                I specialize in building tailored medical applications for clinics, hospitals, and healthcare startups.
                            </p>


                            <div className="flex space-x-3">
                                <a href="https://www.shreekrishnapudasaini.com.np/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[rgb(0,126,105)] text-headingColor px-4 py-2 rounded-lg hover:bg-[rgb(0,126,105)] transition hover:animate-hover-pulse" >
                                    Get a Free Consultation
                                </a>
                                <a href="https://www.shreekrishnapudasaini.com.np/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border hover:animate-hover-pulse border-[rgb(0,126,105)] text-[rgb(0,126,105)] px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                                    View Case Studies
                                </a>
                            </div>

                        </div>


                        <img src={medicareplus}
                            alt="Consultation"
                            className="w-80 h-52 object-cover rounded-lg animate-scale-up" />

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Blog;