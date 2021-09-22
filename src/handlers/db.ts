import api from '../notion'
import { parsePageID } from '../notion/utils'
import { Request } from 'itty-router'
import { ErrorResponse, JsonResponse } from './utils'
import * as console from 'console'
export async function getDB(request: Request): Promise<Response> {
  try {
    let id = request.params && request.params['id']
    if (!id){
      return ErrorResponse('not found')
    }
    id = parsePageID(id)
    const db = await api.databases.retrieve(
      {
        database_id: id
      }
    )
    return JsonResponse(db)
  }catch (e) {
    return ErrorResponse(e)
  }
}
export async function query(request: Request): Promise<Response> {
  try {
    let id = request.params && request.params['id']
    if (!id){
      return ErrorResponse('not found')
    }
    id = parsePageID(id)
    let obj:any = {}
    if (request.json){
      obj = await request.json()
    }
    obj.database_id = id
    const content = await api.databases.query(obj)
    return JsonResponse(content.results)
  }catch (e) {
    return ErrorResponse(e)
  }
}

