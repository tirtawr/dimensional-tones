/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';

import './App.css';
import Engine from './lib/Engine'

function App() {

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    Engine.init()
    Engine.animate()
  }, []);

  const onPlayConcurrent = () => {
    if (isPlaying) Engine.resetPlayback()
    setIsPlaying(true);
    Engine.playConcurrent()
  }

  const onPlayAlternating = () => {
    if (isPlaying) Engine.resetPlayback()
    setIsPlaying(true);
    Engine.playAlternating();
  }

  const onPlayXAxis = () => {
    if (isPlaying) Engine.resetPlayback()
    setIsPlaying(true);
    Engine.playXAxis();
  }

  const onPlayYAxis = () => {
    if (isPlaying) Engine.resetPlayback()
    setIsPlaying(true);
    Engine.playYAxis();
  }

  const onPlayZAxis = () => {
    if (isPlaying) Engine.resetPlayback()
    setIsPlaying(true);
    Engine.playZAxis();
  }

  const onStop = () => {
    setIsPlaying(false);
    Engine.resetPlayback()
  }

  const onRandomizeTonalBoxesPosition = () => {
    Engine.randomizeTonalBoxesPosition()
  }

  return (
    <div id="info">
      Move objects around with your mouse by dragging them around the screen.<br />
			Use mouse and scroll wheel to move the camera around.<br/>
      <a onClick={onPlayConcurrent}>Play Together</a> . <a onClick={onPlayAlternating}>Play Alternating</a><br />
      <a onClick={onPlayXAxis}>Play on X Axis</a> . <a onClick={onPlayYAxis}>Play on Y Axis</a> . <a onClick={onPlayZAxis}>Play on Z Axis</a><br />
      <a onClick={onStop}>Stop</a><br/>
      <a onClick={onRandomizeTonalBoxesPosition}>Randomize Position</a>
    </div>
  );
}

export default App;
