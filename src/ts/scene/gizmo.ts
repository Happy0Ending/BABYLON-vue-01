import { GizmoManager, Mesh, PositionGizmo, Scene, UtilityLayerRenderer } from "babylonjs";
import { mittDataSend } from "../mitt/mitt";
import { SceneManager } from "../scene";
import { bjsMeshPositionToString } from "../utils";

export class gizmoManager{
    public gizmoManager:GizmoManager
    public utilityLayer:UtilityLayerRenderer
    // public gizmo:PositionGizmo;
    public sceneManager:SceneManager
    constructor(sceneManager:SceneManager){
        this.sceneManager = sceneManager;
        this.utilityLayer = new UtilityLayerRenderer(sceneManager.scene);
        this.gizmoManager = new GizmoManager(sceneManager.scene,2,this.utilityLayer);
        this.gizmoManager.positionGizmoEnabled = true;
        this.gizmoManager.gizmos.positionGizmo?.xPlaneGizmo.dragBehavior.onDragObservable.add(()=>{
            console.log("111")
            this.onMoving()
        })
        this.gizmoManager.gizmos.positionGizmo?.yPlaneGizmo.dragBehavior.onDragObservable.add(()=>{
            console.log("111")
            this.onMoving()
        })
        this.gizmoManager.gizmos.positionGizmo?.zPlaneGizmo.dragBehavior.onDragObservable.add(()=>{
            console.log("111")
            this.onMoving()
        })
        this.gizmoManager.gizmos.positionGizmo?.xGizmo.dragBehavior.onDragObservable.add(()=>{
            console.log("111")
            this.onMoving()
        })
        this.gizmoManager.gizmos.positionGizmo?.yGizmo.dragBehavior.onDragObservable.add(()=>{
            console.log("111")
            this.onMoving()
        })
        this.gizmoManager.gizmos.positionGizmo?.zGizmo.dragBehavior.onDragObservable.add(()=>{
            console.log("111")
            this.onMoving()
        })
        
    }
    onMoving(){
        mittDataSend(this.sceneManager.mitt,'showMeshInfo',bjsMeshPositionToString(this.gizmoManager.gizmos.positionGizmo?.attachedMesh as Mesh))
    }
}