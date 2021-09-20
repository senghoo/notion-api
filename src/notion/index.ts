import { Client } from '@notionhq/client'

async function customFetch(url: string, info?:RequestInit): Promise<Response>{
  return await fetch(url, info)
}

const api = new Client({
  auth: NOTION_TOKEN,
  fetch: customFetch,
})

export default api
