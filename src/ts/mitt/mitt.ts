import { Scene } from "babylonjs";
import mitt, { Emitter, EventType } from "mitt";
import { Ref } from "vue";
import { cBox, changePosition } from "./mittCallBack";
const mittEmit = mitt();
//接受recmit 发送sendmitt

export default mittEmit;
export function mittMegRecUI(mitt:Emitter<Record<EventType, unknown>>,evenType:string,callback:Function,ref:any,domList?:any[]){
    console.log("mittRec...")
    mitt.on(evenType,data=>callback(data,ref,domList));
}
export function mittMegRecScene(mitt:Emitter<Record<EventType, unknown>>,evenType:string,callback:Function,scene:Scene){
    console.log("mittRec...")
    mitt.on(evenType,data=>callback(data,scene));
}
export function mittDataSend(mitt:Emitter<Record<EventType, unknown>>,evenType:string,data:string){
    console.log('mittSend...')
    mitt.emit(evenType,data);
}

export function mittScene(mitt:Emitter<Record<EventType, unknown>>,scene:Scene){
    mittMegRecScene(mitt,'createBox',cBox,scene);
    mittMegRecScene(mitt,'changePosition',changePosition,scene)
}