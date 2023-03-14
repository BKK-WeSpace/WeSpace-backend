import TreesRequestBody from "../requests/TreesRequest";
import TreesResponse from "../responses/TreesResponse";
// @ts-ignore
import mockResponse from "../../mockResponses/trees.json";
import TreeUploadRequest from "../requests/TreeUploadRequest";

export default class TreeRepository {
  // TreesRequestBody
  static getTreesWithinBound(
    reqBody: TreesRequestBody
  ): Promise<TreesResponse> {
    // TODO replace with real data fetch to CouchBase. If the coordinates is empty, return ALL existing coordiantes from CouchBase.
    return Promise.resolve(mockResponse as TreesResponse);
  }

  static uploadTreeImage(reqBody: TreeUploadRequest): Promise<void> {
    // TODO replace with real upload service
    return Promise.resolve();
  }
}
