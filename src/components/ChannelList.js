// src/components/ChannelList.js
import React from 'react';
import { Link } from 'react-router-dom';

const channels = [
  { id: 1, name: 'AVA', logo: 'https://karwan.tv/wp-content/uploads/ava-media.jpg', url: 'https://ava2.site/upload//images/avahd.m3u8' },
  { id: 2, name: 'K24', logo: 'https://d2wqffb2bc8st5.cloudfront.net/images/Feb-2024/1708947763k24_logo_default.jpg', url: 'http://linux-app.tv:8080/246008866889/ErDpwzX5tj/8' },
  { id: 3, name: 'RUDAW', logo: 'https://pbs.twimg.com/profile_images/1273158135218417666/Y98jvB-Q_400x400.jpg', url: 'https://svs.itworkscdn.net/rudawlive/rudawlive.smil/rudawpublish/rudawtv/chunks.m3u8' },
  { id: 4, name: 'CHANNEL 8', logo: 'https://images.seeklogo.com/logo-png/52/1/channel-8-logo-png_seeklogo-522832.png', url: 'https://live.channel8.com/Channel8-Kurdish/tracks-v4/index.fmp4.m3u8' },
  { id: 5, name: 'NRT', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1Wbh7dXUO5Bmiz3O1ZV5IBFxN-bT2OIV7g&s', url: 'https://media.streambrothers.com:1936/8226/8226/chunklist_w1247064054.m3u8' },
  { id: 6, name: 'KURDSAT NEWS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i8-GzMg4xa8xYGEgDT9A8bygFDjeM_48bA&s', url: 'https://kurdsat-news.akamaized.net/hls/kurdsat-news.m3u8' },
];

const ChannelList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {channels.map(channel => (
        <Link
          to={`/channel/${channel.id}`}
          state={{ videoUrl: channel.url }}
          key={channel.id}
          className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform"
        >
          <img src={channel.logo} alt={channel.name} className="w-32 h-auto mx-auto mb-4 rounded-lg" />
          <h2 className="text-xl text-center font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">{channel.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ChannelList;




