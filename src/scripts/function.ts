//#関数だけを置くファイルです。
export function CheckMedia(mediaURL:string):"video" | "image"| "undefined"{

    //#渡されたmediaが動画かチェックを行う処理
    const videoExtensions:Array<string> = ['.mp4','.webm']
    if(videoExtensions.some(e => mediaURL.endsWith(e))){
        return "video";
    }
    //#渡されたmediaが画像かチェックを行う処理
    const imageExtensions:Array<string> = ['.png','.jpg','webp']
    if(imageExtensions.some(e => mediaURL.endsWith(e))){
        return "image";
    }
    return "undefined";
}