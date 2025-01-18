import React, {useState,useEffect} from 'react';

const About = () => {
  const images=[
    '/Image1.jpeg',
    '/Image2.jpeg',
    '/Image3.jpeg',
    '/Image4.jpeg',
    '/Image5.jpeg',
    '/Image6.jpeg',
    '/Image7.jpeg',
    '/Image8.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id='about' className="bg-gradient-to-b from-[#6c210c] to-black text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left md:pr-12">
          <h1 className="text-7xl font-bold mb-4 text-[#FFA500]">About the Event
            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
          </h1>
          <p className="text-xl leading-relaxed font-satoshi" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            ENVA, the annual college Fest, organised by Prakriti MSIT is a fun-packed, frolicsome event which is a 2-day-long event held in January. The fest not only sees involvement of students, but also teachers, showcasing wholesome senior-junior interaction. With a plethora of exciting events, enjoyable activities and amazing prizes to be won, it ensures everlasting fun.
          </p>
        </div>

        {/* Right Side: Simple Carousel */}
        <div className="md:w-1/2 w-full relative h-[400px] overflow-hidden rounded-lg mt-8 md:mt-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;