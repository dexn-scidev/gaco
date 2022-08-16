#!/bin/bash

DATA=$(curl https://www.googleapis.com/youtube/v3/playlistItems\?key\=$YOUTUBE_DATA_API_KEY\&playlistId\=$YOUTUBE_PLAYLIST_ID\&part\=snippet\&maxResults\=50)
echo $DATA | jq '.items[] | { title: .snippet.title, id: .snippet.resourceId.videoId } | select(.title | contains("Minecraft"))'
