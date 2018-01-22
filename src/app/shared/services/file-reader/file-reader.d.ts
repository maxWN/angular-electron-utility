
export interface IFileSourceReader {

    //receives file path from FileReader
    readFilePath(path:any):void;

    //gets file path from service
    getFilePath(path:any):any;

}