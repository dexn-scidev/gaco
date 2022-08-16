const YOUTUBE_V3_API_ENDPOINT = "https://www.googleapis.com/youtube/v3";

const defaultConfig = {
  key: process.env.YOUTUBE_DATA_API_KEY,
  playlistId: process.env.YOUTUBE_PLAYLIST_ID,
  part: "snippet",
  maxResults: 50,
};

const apiRequest = (config) =>
  fetch(
    `${YOUTUBE_V3_API_ENDPOINT}/playlistItems?${new URLSearchParams(config)}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`response status: ${res.status}`);
    }
    return res.json();
  });

let items = [];
const run = (nextPageToken = "") => {
  const config =
    nextPageToken.length === 0
      ? defaultConfig
      : { ...defaultConfig, pageToken: nextPageToken };
  apiRequest(config).then((json) => {
    items = items.concat(json.items);
    if (json.nextPageToken === undefined) {
      console.log(items.length);
      return;
    }

    run(json.nextPageToken);
  });
};

run();
