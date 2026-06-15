
import {
    formatSongTitle,
    getSongDurationInMinutes
} from "./spotifyUtils.js";


const song = {
    title: "let it be",
    duration: 245
};

const formattedTitle = formatSongTitle(song.title);
const formattedDuration = getSongDurationInMinutes(song.duration);

console.log("Song:", formattedTitle);
console.log("Duration:", formattedDuration);