import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EPG = ({ channelId }) => {
  const [epgData, setEpgData] = useState([]);

  useEffect(() => {
    axios.get(`/api/epg/${channelId}`)
      .then(response => setEpgData(response.data));
  }, [channelId]);

  return (
    <div className="epg">
      <h2>EPG for Channel {channelId}</h2>
      <ul>
        {epgData.map((program, index) => (
          <li key={index}>
            {program.time} - {program.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EPG;
