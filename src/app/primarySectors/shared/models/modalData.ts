import { Playlist } from './playlist';

    export interface ModalData {
        subTitle: string;
        explanations: Array<string>;
        currentSongs: Array<Playlist>;
    }

    export interface MinorDetails {
        metaData: string;
        loadTime: Date;
    }