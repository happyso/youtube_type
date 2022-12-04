import React from 'react';
import { useParams } from 'react-router-dom';
import { useMost } from '../../utils/useYoutube';
import VideoCard from '../../components/VideoCard/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  console.log(keyword);

  const { mostPopular } = useMost();

  return (
    <ul>
      {mostPopular.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  );
}
