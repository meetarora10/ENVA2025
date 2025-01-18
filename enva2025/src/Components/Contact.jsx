import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-black to-[#6c210c] text-white p-8 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4 text-[#FFA500]">
            Let's Get In Touch
            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
          </h1>
      </div>

      {/* Contact Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center relative">
        {/* Vertical Lines for Separation */}
        <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-gray-300"></div>
        <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-gray-300"></div>

        {/* Address */}
        <div className="px-4">
          <h2 className="text-xl font-semibold mb-4 text-[#FFA500]">ADDRESS</h2>
          <p className=" text-[#FFFFFF]">C-4 MARKET, Janakpuri, New Delhi, Delhi 110058</p>
        </div>

        {/* Phone */}
        <div className="px-4">
          <h2 className="text-xl font-semibold mb-4 text-[#FFA500]">PHONE NUMBER</h2>
          <p className="text-gray-700 text-[#FFFFFF]">
            Aditya: <a href="tel:7042029033" className="text-blue-600">+91 8920372787</a>
          </p>
          <p className="text-gray-700 text-[#FFFFFF]">
            Meet: <a href="tel:9560585673" className="text-blue-600">+91 9582371097</a>
          </p>
          <p className="text-gray-700 text-[#FFFFFF]">
            Nipun: <a href="tel:9999554630" className="text-blue-600">+91 7291945251</a>
          </p>
        </div>

        {/* Email */}
        <div className="px-4">
          <h2 className="text-xl font-semibold mb-4 text-[#FFA500]">EMAIL</h2>
          <p className="text-gray-700">
            <a href="mailto:prakriti@msit.in" className="text-blue-600">prakriti@msit.in</a>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 flex justify-center">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.306659542025!2d77.07144267529609!3d28.631577780964915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c97d5b5cf5%3A0x916e94e381d6faaf!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1674456145634!5m2!1sen!2sin"
          className="w-full max-w-md h-[400px] border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
