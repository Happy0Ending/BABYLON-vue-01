import { AbstractMesh, ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "babylonjs";
import mitt, { Emitter, EventType } from "mitt";
import mittEmit, { mittDataSend, mittScene } from "./mitt/mitt";
import { gizmoManager } from "./scene/gizmo";
import { sceneInit } from "./scene/sceneEvent";

export  class SceneManager{
    public scene:Scene;
    public engine:Engine;
    public canvas: HTMLCanvasElement;
    public mitt: Emitter<Record<EventType, unknown>>;
    public gizmoManager:gizmoManager;
    // public activeMesh:AbstractMesh;
    // public activeNode:Node[];
    constructor(){
        let canvas  = document.createElement('canvas');
        canvas.style.width = 100+'vh';
        canvas.style.height = 100+'vh';
        document.body.style.overflow = 'hidden';
        this.canvas = canvas;
        document.body.append(canvas);
        this.engine = new Engine(canvas);
        this.scene = new Scene(this.engine);
        let camera = new ArcRotateCamera('camera',-Math.PI/2,Math.PI/2,Math.PI,Vector3.Zero(),this.scene);
        camera.position = new Vector3(0,10,10);
        camera.attachControl(canvas,true);
        const box = MeshBuilder.CreateBox('box',{size:4},this.scene);
        this.gizmoManager = new gizmoManager(this);
        let light = new HemisphericLight("light",Vector3.Up(),this.scene);
        console.log(123);
        this.mitt = mittEmit;
        sceneInit(this);
        mittScene(this.mitt,this.scene);
        this.engine.runRenderLoop(()=>{
            this.scene.render();
        })
        
    }
    dispose(){
        this.scene.dispose();
        this.engine.dispose();
        document.body.removeChild(this.canvas);
        this.mitt.all.clear();
    }
}

