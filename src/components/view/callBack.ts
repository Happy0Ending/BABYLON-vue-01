export const changePositionCallback = (data: string, obj: any, domList?: any[]) => {
    console.log('VueMitt')
    if (data) {
        let string = data.split(',');
        obj.obj = string[0] as string;
        obj.x = parseInt(string[1]);
        obj.y = parseInt(string[2]);
        obj.z = parseInt(string[3]);
    }
}