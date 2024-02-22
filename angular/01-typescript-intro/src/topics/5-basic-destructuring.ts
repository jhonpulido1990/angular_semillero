interface AudioPlayer {
    audioVolum: number;
    songDuration: number;
    song: string;
    details: DEtails;
}
interface DEtails {
    author: string;
    year: number;
}

const audioPlayer:AudioPlayer = {
    audioVolum: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//  destructuracion

const song = 'New Song';

const { song:another, songDuration:duration, details } = audioPlayer;
const { author:authorsong } = details;

/* console.log('Song: ', another)
console.log('duration:', duration)
console.log('author: ', authorsong) */

const [,, trunks = 'no hay personaje']: string[] =['Goku', 'Vegeta'];

console.error('Perdonaje 3: ', trunks)

export {};
