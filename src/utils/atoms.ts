import { atom } from 'recoil';
import { axiosInstance } from './axiosInstance';
import Youtube from './Youtube';
import YoutubeClient from './youtubeClient';

const client = new YoutubeClient(axiosInstance);
const youtube = new Youtube(client);

export const devYoutubeApi = atom({
  key: 'YoutubeApi',
  default: youtube,
});
