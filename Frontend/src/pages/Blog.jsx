
import { Link } from 'react-router-dom';
import medicareplus from "../assets/images/medicareplus.png";
import shree from "../assets/images/shree.png";
import kasmita2 from "../assets/images/kasmita2.jpg";
import homeImage from "../assets/images/homeImage.webp";


const Blog = () => {
    return (
        <div className="container mx-auto p-6 pt-32">


            <h1 className="text-3xl font-bold text-center mb-6 leading-tight slide-in-text">Revolutionizing Healthcare with Our Doctor Appointment Booking App</h1>



            <div className="bg-blue-50 p-6 rounded-lg mb-8">

                <p className="text-center text-lg text-gray-700">
                    Discover a complete healthcare solution serving <span className="font-bold">1M+ patients</span> across <span className="font-bold">50+ specialties</span>
                </p>

            </div>



            <div className='text-center '>

                <img src={medicareplus}
                    alt="Healthcare Technology"
                    className="w-full sm:px-3 rounded-lg mb-6 shadow-xl h-[85vh]" />
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-900">Patient-Centric Features</h2>


                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li><span className="font-semibold">Smart Search:</span> Find doctors by symptom, specialty, or insurance provider</li>
                        <li><span className="font-semibold">Instant Booking:</span> 24/7 availability with emergency slots</li>
                        <li><span className="font-semibold">Health Wallet:</span> Secure storage for medical reports and prescriptions</li>
                        <li><span className="font-semibold">Care Continuity:</span> Follow-up scheduling and chronic care management</li>
                        <li><span className="font-semibold">Medicine Delivery:</span> Integrated pharmacy partners with e-prescriptions</li>
                    </ul>

                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-900">Doctor Dashboard Tools</h2>

                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>Smart calendar management with auto-schedule optimization</li>
                        <li>Telemedicine toolkit with virtual waiting room</li>
                        <li>Patient history viewer with AI-assisted diagnostics</li>
                        <li>Revenue analytics and payment integration</li>
                        <li>Continuing medical education (CME) tracking</li>
                    </ul>


                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <img src="https://media.istockphoto.com/id/824219356/photo/ai-concept-3d-rendering-abstract-image-visual.jpg?s=1024x1024&w=is&k=20&c=nx_7MRiZxoXB1g1JRckXeg4qWax4Z9zsRn37Yzx10_c=" alt="AI-Powered Healthcare" className="w-full rounded-lg mt-4" />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center mt-4">Advanced Features</h2>


                    <ul className="list-decimal list-inside text-gray-700 mb-4">
                        <li>AI-powered doctor recommendations based on medical history.</li>
                        <li>Telemedicine support for virtual consultations.</li>
                        <li>Electronic medical record integration for better treatment tracking.</li>
                        <li>Multi-language support for diverse users.</li>
                    </ul>


                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <img src="https://media.istockphoto.com/id/1404179486/photo/anesthetist-working-in-operating-theatre-wearing-protecive-gear-checking-monitors-while.jpg?s=1024x1024&w=is&k=20&c=FIjd0v71G2Mq_3fSUX490N1dMnHwX6ZsFCf9GU2G2ds=" alt="How It Works" className="w-full rounded-lg mt-4" />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center mt-4">How It Works</h2>


                    <ul className="list-decimal list-inside text-gray-700 mb-4">
                        <li>Sign up and create a profile.</li>
                        <li>Search for doctors based on specialty and location.</li>
                        <li>Book an available time slot instantly.</li>
                        <li>Receive appointment reminders and updates.</li>
                    </ul>


                </div>
            </div>




            <div className="mt-12 bg-gray-50 p-8 rounded-xl">

                <h2 className="text-2xl font-semibold mb-6 text-center">Developed By Healthcare Tech Experts</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="text-center">
                        <img src={shree}
                            alt="Developer"
                            className="w-32 h-32 rounded-full mx-auto mb-4 mt-2 object-cover border-4 border-white shadow-lg" />
                        <h3 className="text-xl font-bold">Shree krishna Pudasaini</h3>
                        <p className="text-gray-600 mb-2">Full Stack Developer & Healthcare Tech Specialist</p>
                        <div className="flex justify-center space-x-4">
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
                        <p className="text-gray-700 mb-4">
                            With 5+ years of experience building healthcare solutions, I&apos;ve created this platform to bridge the gap between patients and doctors through technology.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Explore more of my work and connect for collaborations:
                        </p>
                        <div className="flex flex-col space-y-3">
                            <a href="https://www.shreekrishnapudasaini.com.np/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[rgb(0,126,105)] text-white px-4 py-2 rounded-lg text-center hover:bg-white hover:text-[rgb(0,126,105)] hover:border-[rgb(0,126,105)] hover:border transition">
                                View My Portfolio
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=pudasainishreekrishna1@gmail.com&su=Hiring Inquiry&body=Hello, I'd like to discuss hiring you..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-50 transition"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="tech-card p-4 bg-white rounded-lg shadow">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
                            alt="React"
                            className="h-16 mx-auto mb-2" />
                        <span className="text-gray-700">React JS</span>
                    </div>
                    <div className="tech-card p-4 bg-white rounded-lg shadow">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                            alt="Node.js"
                            className="h-16 mx-auto mb-2" />
                        <span className="text-gray-700">Node.js</span>
                    </div>
                    <div className="tech-card p-4 bg-white rounded-lg shadow">
                        <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png"
                            alt="MongoDB"
                            className="h-16 mx-auto mb-2" />
                        <span className="text-gray-700">MongoDB</span>
                    </div>
                    <div className="tech-card p-4 bg-white rounded-lg shadow">
                        <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                            alt="Express.js Logo"
                            className="h-16 mx-auto mb-2" />
                        <span className="text-gray-700">Express</span>
                    </div>
                </div>
            </div>


            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-md">


                    <h2 className="text-2xl font-semibold mb-4">Enterprise-Grade Security</h2>


                    <ul className="space-y-3 text-gray-700">
                        <li>🔒 HIPAA-compliant data storage</li>
                        <li>🔑 End-to-end encryption for all communications</li>
                        <li>📜 Audit trails and access controls</li>
                        <li>🛡️ Regular security testing</li>
                        <li>📌 Two-factor authentication</li>
                        <li>🔐 Biometric login options</li>
                        <li>📊 Compliance with GDPR and other regulations</li>
                    </ul>

                </div>


                <img src="https://media.istockphoto.com/id/1490694111/photo/doctor-visual-screen-software-data-management-doctor-document-management-on-cloud-computing.jpg?s=1024x1024&w=is&k=20&c=BxHx_Pc9VchoxV4bhAeZxtRhCWFl9cLOF1uhwVe-VeM="
                    alt="Security"
                    className="rounded-xl object-cover h-full" />

            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">


                <img src="https://plus.unsplash.com/premium_photo-1664475477169-46b784084d4e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Security"
                    className="rounded-xl object-cover h-full" />

                <div className="p-6 bg-white rounded-xl shadow-md">


                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>


                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>Effortless appointment scheduling with top healthcare professionals.</li>
                        <li>Real-time availability and instant confirmations.</li>
                        <li>Secure patient-doctor communication.</li>
                        <li>Integrated reminders to reduce missed appointments.</li>
                        <li>User-friendly interface for all age groups.</li>
                    </ul>

                </div>



            </div>

            <div className="mt-12">


                <h2 className="text-2xl font-semibold mb-6 text-center">Success Stories</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <p className="text-gray-700 mb-4">&quot;Reduced our no-show rate by 40% with smart reminders and easy rescheduling.&quot;</p>
                        <div className="flex items-center">
                            <img src={kasmita2}
                                alt="User"
                                className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">Dr. Kasmita Ghimire</p>
                                <p className="text-gray-600">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <p className="text-gray-700 mb-4">&quot;Found my perfect specialist in minutes - finally a healthcare app that actually works!&quot;</p>
                        <div className="flex items-center">
                            <img src={homeImage}
                                alt="User"
                                className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">Ai Shree Krishna</p>
                                <p className="text-gray-600">Patient since 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-12 bg-[rgb(0,126,105,0.8)] text-white p-8 rounded-xl text-center">


                <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Experience?</h2>


                <p className="mb-6">Join 500,000+ users and 20,000+ healthcare providers</p>


                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/register">
                        <button className="bg-white text-[rgb(0,126,105)] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                            I&apos;m a Patient
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[rgb(0,126,105)] transition">
                            I&apos;m a Doctor
                        </button>
                    </Link>
                </div>


            </div>


            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-900">98%</div>
                    <div className="text-gray-600">Booking Success Rate</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-900">24/7</div>
                    <div className="text-gray-600">Support Availability</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-900">4.9★</div>
                    <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-900">50+</div>
                    <div className="text-gray-600">Insurance Partners</div>
                </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>


                        <h3 className="text-xl font-bold text-gray-800 mb-2">Need a Custom Healthcare Solution?</h3>


                        <p className="text-gray-700 mb-4">
                            I specialize in building tailored medical applications for clinics, hospitals, and healthcare startups.
                        </p>


                        <div className="flex space-x-3">
                            <a href="https://www.shreekrishnapudasaini.com.np/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[rgb(0,126,105)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(0,126,105)] transition">
                                Get a Free Consultation
                            </a>
                            <a href="https://www.shreekrishnapudasaini.com.np/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[rgb(0,126,105)] text-[rgb(0,126,105)] px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                                View Case Studies
                            </a>
                        </div>

                    </div>


                    <img src={medicareplus}
                        alt="Consultation"
                        className="w-80 h-52 object-cover rounded-lg" />

                </div>
            </div>
        </div>
    );
};

export default Blog;