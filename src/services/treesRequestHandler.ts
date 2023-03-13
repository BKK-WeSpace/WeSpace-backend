import TreeRepository from "../repositories/TreesRepository";
import TreesRequestBody from "../requests/TreesRequest";
import TreesResponse from "../responses/TreesResponse";

export default async function treesRequestHandler(
  request: TreesRequestBody
): Promise<TreesResponse> {
  return TreeRepository.getTreesWithinBound(request);
}
