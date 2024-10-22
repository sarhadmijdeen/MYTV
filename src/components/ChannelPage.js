// src/components/ChannelPage.js
import React, { useEffect, useRef } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Hls from 'hls.js';

// Updated channels array with unique logos and descriptions
const channels = [
  {
    id: 1,
    name: 'AVA',
    logo: 'https://karwan.tv/wp-content/uploads/ava-media.jpg',
    url: 'https://ava2.site/upload//images/avahd.m3u8',
    about: '',
  },
  {
    id: 2,
    name: 'K24',
    logo: 'https://d2wqffb2bc8st5.cloudfront.net/images/Feb-2024/1708947763k24_logo_default.jpg',
    url: 'https://bitdash.a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    about: 'Tune in for the latest news and updates from around the world.',
  },
  {
    id: 3,
    name: 'RUDAW',
    logo: 'https://pbs.twimg.com/profile_images/1273158135218417666/Y98jvB-Q_400x400.jpg',
    url: 'https://svs.itworkscdn.net/rudawlive/rudawlive.smil/rudawpublish/rudawtv/chunks.m3u8',
    about: 'Enjoy a variety of movies and series for all ages.',
  },
  {
    id: 4,
    name: 'CHANNEL 8',
    logo: 'https://images.seeklogo.com/logo-png/52/1/channel-8-logo-png_seeklogo-522832.png',
    url: 'https://live.channel8.com/Channel8-Kurdish/tracks-v4/index.fmp4.m3u8',
    about: 'Enjoy a variety of movies and series for all ages.',
  },
  {
    id: 5,
    name: 'NRT',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1Wbh7dXUO5Bmiz3O1ZV5IBFxN-bT2OIV7g&s',
    url: 'https://media.streambrothers.com:1936/8226/8226/chunklist_w1247064054.m3u8',
    about: 'Enjoy a variety of movies and series for all ages.',
  },
  {
    id: 6,
    name: 'KURDSAT NEWS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i8-GzMg4xa8xYGEgDT9A8bygFDjeM_48bA&s',
    url: 'https://kurdsat-news.akamaized.net/hls/kurdsat-news.m3u8',
    about: 'Enjoy a variety of movies and series for all ages.',
  },
];

const ChannelPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const videoRef = useRef(null);
  const videoUrl = location.state?.videoUrl;

  // Find the current channel based on the ID
  const channel = channels.find(channel => channel.id === parseInt(id));

  useEffect(() => {
    const video = videoRef.current;

    // Check if HLS is supported
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari and other browsers that support HLS natively
      video.src = videoUrl;
    }

    return () => {
      if (video) {
        video.src = '';
      }
    };
  }, [videoUrl]);

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row">
      
      {/* Main Content Area */}
      <div className="flex-grow lg:w-3/4 pr-0 lg:pr-6">
     

        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          {videoUrl ? (
            <video
              ref={videoRef}
              className="w-full h-[500px] lg:h-[600px] rounded-lg shadow-lg"
              controls
              autoPlay
              style={{ backgroundColor: 'black' }}
            />
          ) : (
            <p className="text-center text-gray-700 dark:text-gray-300">Loading video...</p>
          )}
        </div>

        <div className="mt-8 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex items-start space-x-4">
          {/* Add Channel Logo here */}
          {channel && channel.logo && (
            <img
              src={channel.logo}
              alt={`${channel.name} logo`}
              className="w-16 h-16 rounded-lg"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white"> {channel?.name}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {channel?.about} {/* Display the unique about section */}
            </p>
          </div>
        </div>
      </div>
      
      {/* Sidebar for Channel List */}
      <aside className="lg:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Other Channels</h2>
        <div className="space-y-4">
          {channels.map(channel => (
            <Link
              key={channel.id}
              to={`/channel/${channel.id}`}
              state={{ videoUrl: channel.url }}
              className="flex items-center space-x-4 p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition"
            >
              <img src={channel.logo} alt={channel.name} className="w-12 h-12 rounded-lg" />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{channel.name}</span>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default ChannelPage;




