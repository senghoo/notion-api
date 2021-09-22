import api from '../notion'
import { parsePageID } from '../notion/utils'
import { Request } from 'itty-router'
import { ErrorResponse, JsonResponse } from './utils'
export async function getPage(request: Request): Promise<Response> {
  try {
    let id = request.params && request.params['id']
    if (!id){
      return ErrorResponse('not found')
    }
    id = parsePageID(id)
    const page = await api.pages.retrieve(
      {
        page_id: id
      }
    )
    const block = await api.blocks.retrieve({
      block_id: id
    })
    const children = await api.blocks.children.list({
      block_id: id
    })
    return JsonResponse({page, block, children: children.results})
  }catch (e) {
    return ErrorResponse(e)
  }
}
