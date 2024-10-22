import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { Paper, IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const VideoPlayer = ({ url }) => {
  const playerRef = useRef(null); // Ref to hold the player element
  const [isFullscreen, setIsFullscreen] = React.useState(false); // State for fullscreen mode

  const toggleFullscreen = () => {
    if (playerRef.current) {
      if (!isFullscreen) {
        playerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen); // Toggle the state
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#1e1e1e',
      }}
      ref={playerRef} // Set the ref on the Paper component
    >
      <div style={{ width: '100%', maxWidth: '1080px', position: 'relative' }}>
        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="100%"
          style={{ borderRadius: '8px', overflow: 'hidden' }}
        />
        <IconButton
          onClick={toggleFullscreen}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: '#90caf9',
          }}
        >
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
      </div>
    </Paper>
  );
};

export default VideoPlayer;
