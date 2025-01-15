import React from 'react';

const Events = () => {
  const eventsData = require('../Pages/Details.json');

  return (
    <div id="events" className="bg-gradient-to-b from-black to-[#6c210c] text-white p-8 min-h-screen">
      <h1 className="text-7xl font-bold mb-12 text-[#FFA500] text-center">Events</h1>

      <div style={{ fontFamily: 'Satoshi, sans-serif' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-[#8B4513] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-48 bg-gray-800">
              {event.image_url ? (
                <img 
                  src={event.image_url} 
                  alt={event.eventName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src="/api/placeholder/400/320" 
                  alt={event.eventName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-6">
              <h2  style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold mb-4 text-white">{event.eventName}</h2>
              <p style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-white text-sm line-clamp-4">{event.description}</p>
              <button style={{ fontFamily: 'Satoshi, sans-serif' }} className="mt-4 bg-white text-[#FFA500] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
                Know More!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Events;