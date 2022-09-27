export interface Material {
    Obj_Id: string,
    Obj_name: string,
    dimensions?: string,
    unit?: string,
    standard?: string,
    materials: string,
    remarks: string,
    mass: number,
    density: number,
    kg: number,
    price?:[],
}