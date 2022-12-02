import React from 'react';

export default function VideoCard({ video }: any) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{publishedAt}</p>
      </div>
    </li>
  );
}
