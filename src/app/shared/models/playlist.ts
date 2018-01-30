import { Howl } from 'howler';

/**
 * Playlist interface is an object that represents
 * Audio files
 * @property title {string} represents song title
 * @property song {Howl} represents Howl Audio file 
 **/
export interface Playlist {
    title: string,
    song: Howl    
}