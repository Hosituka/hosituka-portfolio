//#このファイルには私が独自に作った関数があります。正直車輪の再発明している可能性が高いかもしれません
//##Mathというやつにない処理を書くところ
export abstract class MathUtility{
    static{
        requestAnimationFrame(MathUtility.UpdateTimeDelta);
    }
    
    static Repeat(t:number, length:number) {
        return t - Math.floor(t / length) * length;
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
    private static lastTime:number = 0;
    static DeltaTime:number = 0;
    static UpdateTimeDelta(time:number){
        MathUtility.DeltaTime = (time - MathUtility.lastTime) / 1000;
        MathUtility.lastTime = time;
        requestAnimationFrame(MathUtility.UpdateTimeDelta);
    }

}
