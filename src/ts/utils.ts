import { Mesh } from "babylonjs";

export function bjsMeshPositionToString(mesh:Mesh){
    let position = mesh.getAbsolutePosition().clone();
    return  mesh.name+','+position.x+','+position.y+','+position.z;
}
