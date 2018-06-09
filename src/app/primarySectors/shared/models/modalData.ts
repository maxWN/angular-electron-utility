import { Playlist } from './playlist';

    export interface ModalData {
        subTitle: string;
        explanations: Array<string>;
        currentSongs?: Array<Playlist>;
        minorDetails?: MinorDetails;
    }

    export interface MinorDetails {
        metaData?: Array<string>;
        loadTime?: Date;
    }