import { useState } from "react";
import { Send, MapPin, Phone, Mail, Globe, CheckCircle } from "lucide-react";
import show6 from "../../assets/about-hero.jpg"; // Placeholder image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    country: "India",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          number: "",
          country: "India",
          message: ""
        });
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 3000);
    }, 1500);
  };

  // List of upcoming locations in Indian cities
  // const upcomingLocations = [
  //   {
  //     city: "YMCA AHMEDABAD",
  //     address: "Luxury Galleria, Bandra West",
  //     date: "11.12.13 JULY, 2025",
  //     details: "Exclusive pop-up showcase featuring our premium collection",
  //     color: "amber-700"
  //   },
  //   {
  //     city: "THE ASHOK DELHI",
  //     address: "Imperial Arcade, Connaught Place",
  //     date: "29.30 AUG, 2025",
  //     details: "Grand opening of our flagship store",
  //     color: "amber-700"
  //   },
  //   {
  //     city: "TAJ KRISHNA HYDERABAD",
  //     address: "The Promenade, Indiranagar",
  //     date: "03.04.05 OCT, 2025",
  //     details: "Special exhibition with limited edition pieces",
  //     color: "amber-700"
  //   },
  //   {
  //     city: "ST. REGIS MUMBAI",
  //     address: "Heritage Emporium, Civil Lines",
  //     date: "25.26.27 JULY, 2025",
  //     details: "Traditional craftsmanship showcase",
  //     color: "amber-700"
  //   },
  //   {
  //     city: "HOTEL MARRIOTT INDORE",
  //     address: "Oceanside Mall, ECR Road",
  //     date: "26.27 SEPT, 2025",
  //     details: "New year collection launch",
  //     color: "amber-700"
  //   },
  //   {
  //     city: "ST. REGIS MUMBAI",
  //     address: "Victorian Gallery, Park Street",
  //     date: "14.15.16 NOV, 2025",
  //     details: "Spring collection preview",
  //     color: "amber-700"
  //   },
  //   {
  //     city: "YMCA AHMEDABAD",
  //     address: "Luxury Galleria, Bandra West",
  //     date: "21.22.23 NOV, 2025",
  //     details: "Exclusive pop-up showcase featuring our premium collection",
  //     color: "amber-700"
  //   }
  // ];
  
  // Contact information
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: "+91 9323275057",
      action: "tel:+919876543210",
      actionText: "Call Now"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "jewelleryworldexhibitions@gmail.com",
      action: "mailto:jewelleryworldexhibitions@gmail.com",
      actionText: "Send Email"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Head Office",
      details: "Piramal Nagar, Goregaon West, Mumbai",
      action: "https://maps.google.com",
      actionText: "View Map"
    }
  ];

  return (
    <div className="bg-stone-50 font-serif ">
      {/* Contact Form with Background Image Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0 bg-fixed">
          <img 
            src={show6}
            alt="Luxury Jewelry Background" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/80"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10 ">
          <div className="text-center mb-16 animate-fade-in pt-5">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">GET IN TOUCH</h1>
            <div className="w-24 h-0.5 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-stone-200 max-w-2xl mx-auto text-lg">Experience luxury like never before. Connect with us to schedule a private viewing or inquiry about our exclusive collections.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Form Card */}
            <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg p-8 md:p-10 rounded-lg shadow-2xl border border-amber-100">
              <div className="flex flex-col md:flex-row mb-8">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex-1 p-4 text-center border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-amber-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-700 mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium text-stone-800 mb-1">{item.title}</h3>
                    <p className="text-stone-600 mb-2">{item.details}</p>
                    <a 
                      href={item.action} 
                      className="text-sm text-amber-700 hover:text-amber-900 inline-block border-b border-amber-300 hover:border-amber-700 transition-colors"
                    >
                      {item.actionText}
                    </a>
                  </div>
                ))}
              </div>
              
              {formStatus.isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-light text-stone-800">Thank You!</h3>
                  <p className="text-stone-600 text-center max-w-md">
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-light text-stone-800 mb-6 flex items-center">
                    <span className="w-6 h-0.5 bg-amber-700 mr-3"></span>
                    Contact Us
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-stone-50 group-hover:bg-white"
                          required
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-stone-50 group-hover:bg-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="number" className="block text-sm font-medium text-stone-600 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="w-full p-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-stone-50 group-hover:bg-white"
                          required
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="country" className="block text-sm font-medium text-stone-600 mb-2">Country</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full p-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-stone-50 group-hover:bg-white appearance-none"
                          required
                          style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23806043%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1rem top 50%", 
                                backgroundSize: "0.65rem auto",
                                paddingRight: "2.5rem" }}
                        >
                          <option value="India">India</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="UAE">UAE</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-stone-50 group-hover:bg-white"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="text-center md:text-right">
                      <button 
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`px-8 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2 mx-auto md:ml-auto md:mr-0 ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        <span>{formStatus.isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <Send className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Locations Section */}
      {/* <div className="bg-gradient-to-b from-stone-50 to-stone-100 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase text-amber-700 tracking-widest text-sm font-medium mb-2 inline-block">Experience Luxury</span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Our Upcoming Presence
            </h2>
            <div className="w-20 h-0.5 bg-amber-700 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Experience our exclusive collections at these upcoming locations across India. 
              Private viewings are available by appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingLocations.map((location, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-amber-100 rounded-lg shadow-sm overflow-hidden h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-${location.color} text-white p-4`}>
                  <h3 className="text-xl font-medium">{location.city}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                    <p className="text-stone-800">{location.address}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm uppercase tracking-wider text-stone-500 mb-1">Dates</p>
                    <p className="text-stone-800 font-medium">{location.date}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-stone-100">
                    <p className="text-stone-600 italic">{location.details}</p>
                  </div>
                  <div className="mt-4 pt-2">
                    <button className="text-amber-700 hover:text-amber-900 text-sm font-medium flex items-center transition-colors">
                      Schedule a Visit
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-stone-500 mb-4">Can't find a location near you?</p>
            <button className="px-8 py-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-md hover:bg-amber-100 transition-colors">
              Request a Private Viewing
            </button>
          </div>
        </div>
      </div>       */}
      
    </div>
  );
};

export default Contact;