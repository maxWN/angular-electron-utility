import { Playlist } from './playlist';

    export interface ModalData {
        subTitle: string;
        explanations: Array<string>;
        currentSongs?: Array<Playlist>;
        minorDetails?: MinorDetails;
        isError?: boolean;
        errorDescription?: string;
    }

    export interface MinorDetails {
        metaData?: Array<string>;
        loadTime?: Date;
    }