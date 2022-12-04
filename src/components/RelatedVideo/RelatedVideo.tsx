import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { devYoutubeApi } from '../../utils/atoms';
import VideoCard from '../VideoCard/VideoCard';

export default function RelatedVideo({ id }: { id: string }) {
  const youtube = useRecoilValue(devYoutubeApi);
  const { data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      {videos && (
        <ul>
          {videos.map((video: any) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
