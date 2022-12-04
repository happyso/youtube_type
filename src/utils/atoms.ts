import { atom } from 'recoil';
import { axiosInstance } from './axiosInstance';
import Youtube from './Youtube';

const youtube = new Youtube(axiosInstance);

export const devYoutubeApi = atom({
  key: 'YoutubeApi',
  default: youtube,
});
