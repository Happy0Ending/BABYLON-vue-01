import { Mesh, Scene } from "babylonjs";
import { Emitter, EventType } from "mitt";
import { mittDataSend } from "../mitt/mitt";
import { SceneManager } from "../scene";
import { bjsMeshPositionToString } from "../utils";

export function sceneInit(sceneManager:SceneManager){
    //render渲染之前
    let scene = sceneManager.scene;
    let mitt = sceneManager.mitt;
    let gizmo = sceneManager.gizmoManager;
    scene.onBeforeRenderObservable.add((e,p)=>{

    });
    scene.onPointerDown = (e,p,type)=>{
        switch (e.button) {
            case 0:
                if(p.pickedMesh){
                    gizmo.gizmoManager.attachToMesh(p.pickedMesh);
                    mittDataSend(mitt,'showMeshInfo',bjsMeshPositionToString(p.pickedMesh as Mesh));
                }
                break;
            case 1:
                console.log("halou")
                break;
            case 2:
                break;
            default:
                break;
        }
    }
}