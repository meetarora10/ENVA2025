import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();
  const eventsData = require('../Pages/Details.json');
  
  // Convert eventId to number for comparison since URL parameters are always strings
  const event = eventsData.find(e => e.id === parseInt(eventId, 10));

  if (!event) {
    return (
      <div className="bg-gradient-to-b from-black to-[#6c210c] text-white min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-[#FFA500]">Event Not Found</h1>
          <p>Event ID: {eventId}</p>
          <p>Available event IDs: {eventsData.map(e => e.id).join(', ')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-black to-[#6c210c] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-[#FFA500] mt-8 text-center">{event.eventName}</h1>
        {event.image_url && (
          <img 
            src={event.image_url} 
            alt={event.eventName}
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        )}
        <div className="bg-[#8B4513] p-8 rounded-lg">
        <h2 className='text-center text-3xl'>Event Details</h2>
          <p className="text-lg">{event.description}</p>
          {/* Add any additional event details you want to display */}
        </div>
        <div className='bg-[#8B4513] p-8 rounded-lg mt-4'>
            <h2 className='text-center text-3xl'>Team Details</h2>
            <p className='text-lg'>Minimum team size: {event.min} </p>
            <p className='text-lg'>Maximum team size: {event.max} </p>
        </div>
        <div className='bg-[#8B4513] p-8 rounded-lg mt-4'>
            <h2 className='text-center text-3xl'>General Instructions</h2>
            <p className='text-lg'>1. No Show, No Refund: Refunds will not be provided if the participant/team fails to show
up for the event. Ensure timely attendance to avoid any inconvenience. <br />
2. Confirmation Email: Participants must keep the confirmation email readily available
when asked for. It is a one-time-use document and should be kept secure. Do not share
it with others. <br />
3. Respectful Behavior: All participants are expected to display kind and respectful behavior
towards the organizing team and fellow participants. <br />
4. Property Damage: Any damage to the event property caused by the participant will be
charged. Please handle everything responsibly. <br />
5. Compliance with Rules: Participants must adhere to the instructions and orders given by
the organizing team. Failure to comply may result in disqualification from the event. <br />
6. Punctuality: Ensure you arrive on time for the competition. Late arrivals may not be
accommodated and could face penalties. <br />
7. Health and Safety: Participants should follow all health and safety protocols as outlined
by the event organizers. <br />
8. Personal Items: The organizing team is not responsible for any personal items that are
lost or damaged during the event.<br/>
9. Decision of the Organizers: The decisions made by the organizing team regarding the
event will be final and binding.<br />
</p>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;