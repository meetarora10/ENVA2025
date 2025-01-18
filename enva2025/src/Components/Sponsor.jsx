import React, { useState, useEffect, useRef, useCallback } from 'react';

const Sponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(5);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sponsorList = [
    { logo: "/Sponsors/img1.jpeg" },
    { logo: "/Sponsors/img2.jpeg" },
    { logo: "/Sponsors/img3.jpeg" },
    { logo: "/Sponsors/img4.jpeg" },
    { logo: "/Sponsors/img5.jpeg" },
    { logo: "/Sponsors/img6.jpeg" },
    { logo: "/Sponsors/img8.jpeg" },
    { logo: "/Sponsors/img10.jpeg" },
    { logo: "/Sponsors/img11.jpeg" },
    { logo: "/Sponsors/img12.jpeg" },
    { logo: "/Sponsors/img14.jpeg" },
    { logo: "/Sponsors/img15.jpeg" },
    { logo: "/Sponsors/img16.jpeg" },
    { logo: "/Sponsors/img18.jpeg" },
    { logo: "/Sponsors/img20.jpeg" },
    { logo: "/Sponsors/img21.jpeg" },
    { logo: "/Sponsors/img22.jpeg" },   
  ];

  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sponsorList.length - slidesToShow ? 0 : prevIndex + 1
    );
  }, [sponsorList.length, slidesToShow]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sponsorList.length - slidesToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isAnimating) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 2500);
    }
    return () => clearInterval(timerRef.current);
  }, [isAnimating, nextSlide]);

  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <div id='sponsors' className="w-full bg-gradient-to-b from-[#6c210c] to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4 text-[#FFA500]">Former Sponsors
            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
          </h1>
        </div>

        <div 
          className="relative px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center items-center mb-8">
            <button 
              onClick={prevSlide}
              className="mr-4 p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <div className="flex transition-transform duration-500">
              {sponsorList.slice(currentIndex, currentIndex + slidesToShow).map((sponsor, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-2 lg:mx-4 bg-white rounded-lg hover:scale-105 transition-transform duration-300"
                  style={{ padding: '0.5rem' }}
                >
                    <img 
                      src={sponsor.logo} 
                      alt="Sponsor logo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="ml-4 p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="flex justify-center space-x-2">
            {[...Array(sponsorList.length - slidesToShow + 1)].map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentIndex === idx ? 'bg-orange-500' : 'bg-gray-700'
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;