#!/bin/bash

DATA=$(curl https://www.googleapis.com/youtube/v3/playlistItems\?key\=$API_KEY\&playlistId\=$PLAYLIST_ID\&part\=snippet\&maxResults\=50)
echo $DATA | jq '.items[] | { title: .snippet.title, id: .snippet.resourceId.videoId } | select(.title | contains("Minecraft"))'
