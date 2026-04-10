//#このファイルには私が独自に作った関数があります。正直車輪の再発明している可能性が高いかもしれません
//##Mathというやつにない処理を書くところ
import { createNoise2D, type NoiseFunction2D } from "simplex-noise";
export abstract class MathUtility{
    
    static Repeat(value:number, length:number) {
        return value - Math.floor(value / length) * length;
    }
    static Clamp(value:number,min:number,max:number){
        return Math.min(Math.max(value,min),max);
    }

    static PerlinLike=(seed:number,offset:number,size:number):number=>{
        const NoiseLayer=(seed:number,offset:number,size:number)=>{
            return (Math.sin(seed * size + offset) + 1) / 2
        }
        let value = 0;
        //#大きな揺れ
        value += NoiseLayer(seed,offset,size * 0.001);
        //#中くらいの揺れ
        value += NoiseLayer(seed,offset,size * 0.003)* 0.5;
        //#小くらい揺れ
        value += NoiseLayer(seed,offset,size * 0.01) * 0.2;
        //#戻り値∈[0,1.7]を戻り値∈[0,1]にする処理
        value /= 1.7
        return value;
    }

    private static simplexNoise:NoiseFunction2D = createNoise2D();
    static Fbm=(x:number,y:number,octaves:number = 4):number=>{
        let value = 0;
        //#周波数
        let frequency = 1.0;
        //#振幅
        let amplitude = 0.5;
        for(let i = 0; i < octaves;i++){
            value += MathUtility.simplexNoise(frequency * x, frequency * y) * amplitude;
            amplitude *= 0.5;
            frequency *= 2;
        }
        //#戻り値∈[-1,1]を[0,1]に変換
        value = (value + 1) / 2;
        return value;
    }
}
export class Time{
    static{
        requestAnimationFrame(Time.UpdateTimeDelta);
        requestAnimationFrame(Time.UpdateTimeInSeconds);
    }

    private static LastTime:number = 0;
    static DeltaTime:number = 0;
    static UpdateTimeDelta(time:number){
        //#TimeDelta([ms]ではなく[s])を算出するための処理
        Time.DeltaTime = (time - Time.LastTime) / 1000;
        Time.LastTime = time;

        requestAnimationFrame(Time.UpdateTimeDelta);
    }

    static TimeInSeconds:number = 0;
    static UpdateTimeInSeconds(time:number){
        //#Timeを更新するための処理
        Time.TimeInSeconds = time / 1000;
        requestAnimationFrame(Time.UpdateTimeInSeconds);
    }

}
export interface Vector2{
    x:number;
    y:number;
}

