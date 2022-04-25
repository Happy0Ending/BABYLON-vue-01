import { MeshBuilder, Scene, Vector3 } from "babylonjs";

export function echo(data:string){
    console.log(data);
}

export function cBox(data:string,scene:Scene){
    let box = MeshBuilder.CreateBox('box',{size:parseInt(data)},scene);
    box.position.y = Math.random()*10;
}
export function changePosition(data:string,scene:Scene){
    console.log('111');
    let string = data.split(',');
    string.forEach((item)=>{
        console.log(item)
    })
    let mesh = scene.getMeshByName(string[0]);
    if(mesh){
        mesh.position =new Vector3(Number(string[1]),Number(string[2]),Number(string[3]));
    }
}