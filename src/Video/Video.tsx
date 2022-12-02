import React from 'react';
import { useMost } from '../utils/useYoutube';
import VideoCard from '../VideoCard/VideoCard';

export default function Video() {
  const { mostPopular } = useMost();

  return (
    <>
      {mostPopular.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </>
  );
}
