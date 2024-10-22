// src/components/AdsSlideshow.js
import React, { useEffect, useState } from 'react';

const ads = [
  {
    id: 1,
    image: 'https://pbs.twimg.com/profile_images/1273158135218417666/Y98jvB-Q_400x400.jpg',
    caption: 'Ad Description 1',
    url: 'https://example.com/ad1', // URL to redirect when clicked
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/1200x400?text=Ad+2',
    caption: 'Ad Description 2',
    url: 'https://example.com/ad2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/1200x400?text=Ad+3',
    caption: 'Ad Description 3',
    url: 'https://example.com/ad3',
  },
];

const AdsSlideshow = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000); // Change ad every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const goToNextAd = () => {
    setCurrentAd((prev) => (prev + 1) % ads.length);
  };

  const goToPreviousAd = () => {
    setCurrentAd((prev) => (prev - 1 + ads.length) % ads.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {ads.map((ad, index) => (
        <div
          key={ad.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentAd ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href={ad.url} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.image}
              alt={ad.caption}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl">{ad.caption}</h2>
            </div>
          </a>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPreviousAd}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-blue-500 hover:text-white transition"
      >
        &lt;
      </button>
      <button
        onClick={goToNextAd}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-blue-500 hover:text-white transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default AdsSlideshow;


