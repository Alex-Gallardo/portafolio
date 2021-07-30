import Startpont from "../views/work/Startpont/Startpont";

export interface DataSlider {
  pathname: string | string[];
  page: any;
  description?: string[];
}

export const Data: DataSlider[] = [
  {
    pathname: "startpont",
    page: Startpont,
    description: ["ART DESIGN", "DEVELOPMENT", "PHOTOGRAPHY"],
  },
];
