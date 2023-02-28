import type { RequestHandler } from "@sveltejs/kit"
import { get } from "svelte/store"
import { todos as storeTodos } from "$lib/store"

//GET
export const GET: RequestHandler = () => {
  return new Response(JSON.stringify(get(storeTodos)))
}

//POST
export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData()
  const body = data.get("text")?.toString() ?? ''

  storeTodos.update((value: any) => ([...value, {
    uid: `${Date.now()}`,
    created_at: new Date(),
    text: body,
    done: false
  }]))
  
  return new Response(JSON.stringify({
    success: true
  }))
}