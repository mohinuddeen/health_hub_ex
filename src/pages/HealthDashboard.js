import React, { useState } from "react";
import { 
  FaUserMd, FaStethoscope, FaVials, FaHeartbeat, 
  FaClinicMedical, FaChartLine, FaPhoneAlt, 
  FaCalendarCheck, FaShieldAlt, FaApple, FaGoogle, 
  FaCreditCard, FaWhatsapp, FaFacebookF, 
  FaLinkedinIn, FaInstagram, FaArrowRight, 
  FaTimes, FaBars, FaStar, FaQuoteLeft, FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

// Header Component with mobile menu
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
          <FaHeartbeat className="text-xl" />
        </div>
        <h1 className="text-2xl font-bold">Health Hub EX</h1>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>
      
      <nav className={`${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-lg p-4' : 'hidden'} md:flex md:space-x-6 md:static md:bg-transparent md:shadow-none md:p-0`}>
        <button className="hover:text-blue-600 font-medium transition-colors py-2">Home</button>
        <button className="hover:text-blue-600 font-medium transition-colors py-2">Services</button>
        <button className="hover:text-blue-600 font-medium transition-colors py-2">About Us</button>
        <button className="hover:text-blue-600 font-medium transition-colors py-2">Contact</button>
      </nav>
      
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg">
          Book Appointment
        </button>
        <button className="text-gray-600 hover:text-blue-600 transition-colors">
          <FaWhatsapp className="text-xl" />
        </button>
      </div>
    </header>
  );
};

// Enhanced Hero Component with animation
const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-6 relative overflow-hidden">
    {/* Animated decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-10 left-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          UAE's Premier Digital Healthcare Platform
        </h2>
        <p className="text-xl mb-6 opacity-90">Access premium healthcare services from the comfort of your home</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Book Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="ml-1 text-sm">4.9/5 (1,250+ reviews)</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold">24/7</span> Support Available
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm rounded-2xl p-6 max-w-md border border-white border-opacity-30 shadow-xl transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-4">Why Choose Health Hub EX?</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="bg-white bg-opacity-30 rounded-full p-2 mr-3">
                <FaCalendarCheck className="text-lg" />
              </div>
              <span className="font-medium">Easy Online Booking</span>
            </li>
            <li className="flex items-center">
              <div className="bg-white bg-opacity-30 rounded-full p-2 mr-3">
                <FaShieldAlt className="text-lg" />
              </div>
              <span className="font-medium">Certified Healthcare Professionals</span>
            </li>
            <li className="flex items-center">
              <div className="bg-white bg-opacity-30 rounded-full p-2 mr-3">
                <FaCreditCard className="text-lg" />
              </div>
              <span className="font-medium">Multiple Payment Options</span>
            </li>
            <li className="flex items-center">
              <div className="bg-white bg-opacity-30 rounded-full p-2 mr-3">
                <FaPhoneAlt className="text-lg" />
              </div>
              <span className="font-medium">24/7 Customer Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Enhanced ServiceCard with more interactivity
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-100 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon className="text-blue-600 text-2xl group-hover:text-white" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-blue-600 font-medium text-sm flex items-center group-hover:text-blue-700">
      Book Now <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

// Enhanced Services Component with filtering capability
const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const services = [
    {
      icon: FaUserMd,
      title: "General Care / GP Consultation",
      description: "Expert consultations with certified general practitioners for all your healthcare needs.",
      category: "consultation"
    },
    {
      icon: FaStethoscope,
      title: "Nurse & Caregiver Services",
      description: "Professional at-home nursing and caregiver services for recovery and daily care.",
      category: "homecare"
    },
    {
      icon: FaVials,
      title: "Blood Test Packages",
      description: "Comprehensive lab test packages with at-home sample collection and digital reports.",
      category: "diagnostics"
    },
    {
      icon: FaHeartbeat,
      title: "IV Therapy",
      description: "Wellness and recovery IV therapy administered by certified professionals.",
      category: "treatment"
    },
    {
      icon: FaClinicMedical,
      title: "Telemedicine",
      description: "Virtual consultations with healthcare specialists and prescription services.",
      category: "consultation"
    },
    {
      icon: FaChartLine,
      title: "Diagnostics",
      description: "Advanced diagnostic services including MRI, X-Ray, and Ultrasound scans.",
      category: "diagnostics"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Healthcare Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Health Hub EX provides comprehensive digital healthcare services tailored to your needs
        </p>
        
        {/* Service filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['all', 'consultation', 'diagnostics', 'homecare', 'treatment'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

// Enhanced ProcessStep with animation
const ProcessStep = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow text-center group hover:bg-blue-50 transition-colors">
    <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <span className="font-bold">{number}</span>
    </div>
    <h3 className="font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Enhanced Process with connecting lines
const Process = () => (
  <section className="mb-16 relative">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">Simple steps to access premium healthcare services</p>
    </div>

    <div className="grid md:grid-cols-4 gap-6 relative">
      {/* Connecting line for desktop */}
      <div className="hidden md:block absolute top-16 left-1/8 right-1/8 h-0.5 bg-blue-200 -z-10"></div>
      
      <ProcessStep 
        number={1}
        title="Book Appointment"
        description="Online or via phone"
      />
      <ProcessStep 
        number={2}
        title="Confirmation"
        description="Health Hub EX confirms your booking"
      />
      <ProcessStep 
        number={3}
        title="Service Delivery"
        description="Professional comes to you"
      />
      <ProcessStep 
        number={4}
        title="Follow-up"
        description="Feedback and support"
      />
    </div>
  </section>
);

// Enhanced StatCard with counting animation
const StatCard = ({ title, value, color }) => {
  const [count, setCount] = useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ''));
    const duration = 2000; // milliseconds
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div className="bg-white p-8 rounded-xl shadow text-center hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className={`text-4xl font-bold ${color} mt-2`}>
        {value.includes('+') ? `${count.toLocaleString()}+` : value}
      </p>
    </div>
  );
};

// Enhanced Stats Component
const Stats = () => (
  <section className="grid md:grid-cols-3 gap-6 mb-16">
    <StatCard 
      title="Active Patients"
      value="1,250+"
      color="text-blue-600"
    />
    <StatCard 
      title="Monthly Revenue"
      value="AED 25,000+"
      color="text-green-600"
    />
    <StatCard 
      title="Appointments"
      value="320+"
      color="text-purple-600"
    />
  </section>
);

// Enhanced TestimonialCard with quote styling
const TestimonialCard = ({ rating, text, author, location }) => (
  <div className="bg-white p-6 rounded-xl shadow relative group hover:shadow-lg transition-shadow">
    <FaQuoteLeft className="text-blue-100 text-4xl absolute top-4 right-4 opacity-50" />
    <div className="flex items-center mb-4">
      <div className="text-yellow-400 flex">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
      </div>
    </div>
    <p className="text-gray-600 mb-4 relative z-10">"{text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center text-blue-600 font-semibold">
        {author.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  </div>
);

// Enhanced Testimonials with carousel functionality
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      rating: 5,
      text: "The service was exceptional. The nurse arrived on time and was very professional.",
      author: "Ahmed K.",
      location: "Dubai"
    },
    {
      rating: 5,
      text: "Booking through the app was so easy. I'll definitely use Health Hub EX again for our family's healthcare needs.",
      author: "Sarah M.",
      location: "Abu Dhabi"
    },
    {
      rating: 5,
      text: "The blood test service saved me so much time. I didn't have to visit a lab or wait in queues.",
      author: "Mohammed R.",
      location: "Sharjah"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">Hear from our satisfied patients</p>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`transition-opacity duration-300 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'}`}
            >
              <TestimonialCard 
                rating={testimonial.rating}
                text={testimonial.text}
                author={testimonial.author}
                location={testimonial.location}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          onClick={prevTestimonial}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          onClick={nextTestimonial}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced CTA Component
const CTA = () => (
  <section className="bg-blue-600 text-white rounded-2xl p-10 mb-16 text-center relative overflow-hidden">
    {/* Background pattern */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-10 right-10 w-20 h-20 bg-white rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full"></div>
    </div>
    
    <div className="relative z-10">
      <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Healthcare?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">Book your appointment today and get the care you deserve from the comfort of your home</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
          Book Appointment
        </button>
        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:-translate-y-1">
          Download App
        </button>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button className="flex items-center bg-black bg-opacity-20 px-4 py-2 rounded hover:bg-opacity-30 transition">
          <FaApple className="text-2xl mr-2" />
          <span>App Store</span>
        </button>
        <button className="flex items-center bg-black bg-opacity-20 px-4 py-2 rounded hover:bg-opacity-30 transition">
          <FaGoogle className="text-2xl mr-2" />
          <span>Google Play</span>
        </button>
      </div>
    </div>
  </section>
);

// Enhanced Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center mb-4">
          <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
            <FaHeartbeat className="text-xl" />
          </div>
          <h2 className="text-xl font-bold">Health Hub EX</h2>
        </div>
        <p className="text-gray-400 mb-4">
          UAE's premier digital healthcare platform
        </p>
        <p className="text-gray-400 italic">
          "Your health is our priority - anytime, anywhere."
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Services</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer transition-colors">GP Consultation</li>
          <li className="hover:text-white cursor-pointer transition-colors">Nurse & Caregiver</li>
          <li className="hover:text-white cursor-pointer transition-colors">Blood Tests</li>
          <li className="hover:text-white cursor-pointer transition-colors">IV Therapy</li>
          <li className="hover:text-white cursor-pointer transition-colors">Telemedicine</li>
          <li className="hover:text-white cursor-pointer transition-colors">Diagnostics</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
          <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
          <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
          <li className="hover:text-white cursor-pointer transition-colors">Press</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2 text-sm" /> +971 4 123 4567
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2 text-sm" />
            info@healthhubex.com
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-sm" />
            Dubai, UAE
          </li>
        </ul>
        <div className="flex mt-4 space-x-3">
          <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition-colors">
            <FaWhatsapp className="text-lg" />
          </a>
          <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition-colors">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition-colors">
            <FaLinkedinIn className="text-lg" />
          </a>
          <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition-colors">
            <FaInstagram className="text-lg" />
          </a>
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-700 text-white px-3 py-2 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
            <button className="bg-blue-600 text-white px-3 py-2 rounded-r text-sm hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-700">
      <p className="text-center text-gray-400 text-sm">
        © 2025 Health Hub EX. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </p>
    </div>
  </footer>
);

// Back to Top button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Main Component
function HealthDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero />
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default HealthDashboard;