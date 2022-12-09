import { Material } from "../types";

export const materials: Material[] = [
  {
    Obj_Id: "MAT0001",
    Obj_name: "ROUND BAR",
    elements: "11SMn30    EN ISO 683-4",
    density: 7.85e-6,
    kg: 12,
    remarks: "Free-cutting steel",
    mass: 11,
    compositions: {
      C: 0.04,
      Mn: 0.1,
      P: 0.11,
      Mg: 1.8,
      S: 0.3,
    },
  },
  {
    Obj_Id: "MAT0002",
    Obj_name: "ROUND BAR",
    elements: "16MnCr5    EN 10084",
    remarks: "Case hardening steel",
    mass: 1.57834,
    density: 7.85e-6,
    kg: 14,
    compositions: {
      Ni: 0.4,
      Cr: 0.1,
      Mn: 1.02,
      P: 0.25,
      Si:0.2,
      S: 0.35,
    },
  },
  {
    Obj_Id: "MAT0003",
    Obj_name: "ROUND BAR",
    elements: "20NiCrMo2-2    EN 10084",
    remarks: "Case hardening steel",
    mass: 7.54876,
    density: 7.85e-6,
    kg: 9,
    compositions: {
      C: 0.2,
      Cr: 0.5,
      Cu: 1.3,
      Mn: 0.8,
      Mo: 0.2,
      Ni: 0.5,
    },
  },

];
