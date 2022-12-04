import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useRecoilValue } from 'recoil';
import { devYoutubeApi } from '../../utils/atoms';

export default function Videos() {
  const { keyword } = useParams();
  const youtube = useRecoilValue(devYoutubeApi);
  const { data: videos } = useQuery(['videos', keyword ? keyword : 'mostPopular'], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <ul>
      {videos?.map((video: any) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  );
}
