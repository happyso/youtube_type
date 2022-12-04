export default class YoutubeClient {
  httpClient: any;
  constructor(client: any) {
    this.httpClient = client;
  }

  async search(params: string | undefined) {
    return this.httpClient.get('search', params);
  }

  async videos(params: string) {
    return this.httpClient.get('videos', params);
  }

  async channels(params: string) {
    return this.httpClient.get('channels', params);
  }
}
