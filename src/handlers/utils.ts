export function JsonResponse(obj: any):Response{
  return new Response(JSON.stringify(obj), {headers:{'Content-Type': 'application/json; charset=utf-8'}})
}
export function ErrorResponse(obj: any):Response{
  return new Response(JSON.stringify({error: obj}), {status: 400})
}
