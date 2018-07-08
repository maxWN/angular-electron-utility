import { Playlist } from './playlist';

    export interface ModalData {
        subTitle: string;
        explanations: Array<string>;
        currentSongs?: Array<Playlist>;
        minorDetails?: MinorDetails;
        isError?: boolean;
        errorDescription?: string;
        modalType?: ModalType;
    }

    export interface MinorDetails {
        metaData?: Array<string>;
        loadTime?: Date;
    }

    export enum ModalType {
        error = 1,
        warning = 2,
        save = 3,
        binary = 4,
        info = 5
    }