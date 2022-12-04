export default class Youtube {
  apiClient: any;
  constructor(apiClient: any) {
    this.apiClient = apiClient;
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id: string | undefined) {
    return this.apiClient
      .get('channels', {
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res: any) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id: string) {
    return this.apiClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res: any) => res.data.items.map((item: any) => ({ ...item, id: item.id.videoId })));
  }

  async #searchByKeyword(keyword: string) {
    return this.apiClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res: any) => res.data.items.map((item: any) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then((res: any) => res.data.items);
  }
}
