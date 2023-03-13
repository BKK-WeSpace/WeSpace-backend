import { Feature, Point } from "geojson";

export default interface Tree extends Omit<Feature<Point>, "properties"> {
  // Have to overwrite it like this to force it to be optional.
  properties?: TreeProperties;
}

export interface TreeProperties {
  commonName?: string;
  species?: string;
  genus?: string;
  quote?: TreeQuote;
  appearance?: TreeAppearance;
  carbonProfile?: TreeCarbonProfile;
}

export interface TreeQuote {
  quote?: string;
  description?: string;
}

export interface TreeAppearance {
  /**
   * The color to be displayed on the map
   */
  color?: string;
  imgLink?: string;
}

export interface TreeCarbonProfile {
  carbonAbsorption?: AbsorptionEmission;
  o2Emission?: AbsorptionEmission;
}

export interface AbsorptionEmission {
  amount: number;
  unit: string;
  per: "year" | "month" | "day";
}
