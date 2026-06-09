import type { CollectionEntry, CollectionKey, DataEntryMap } from "astro:content";

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
export function FormatDateOfJP(date:Date):string
{
    return date.toLocaleDateString(
        'ja-JP',
        {
            year:'numeric',
            month:'long',
            day:'numeric'
        }
    )
}
export async function GetRenderAndEntrys<T extends CollectionKey>(collectionEntrys:CollectionEntry<T>[]){
    return await Promise.all(
        collectionEntrys.map(async (entry) => {
            const Content = (await entry.render()).Content;
            return{
                entry,
                Content,
            };
        })
    )
}
