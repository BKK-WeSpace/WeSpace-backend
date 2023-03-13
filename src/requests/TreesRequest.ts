import { Polygon } from "geojson";

/**
 * For simplicity's sake, we only allow the Polygon request type for now.
 */
export default interface TreesRequestBody extends Polygon {}
