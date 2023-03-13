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
    return Promise.resolve(mockResponse as TreesResponse);
  }

  static uploadTreeImage(reqBody: TreeUploadRequest): Promise<void> {
    return Promise.resolve();
  }
}
