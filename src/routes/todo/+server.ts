import type { RequestHandler } from "@sveltejs/kit"

let todos: Todo[] = []

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData()
  const body = data.get("text")?.toString() ?? ''

  todos.push({
    created_at: new Date(),
    text: body,
    done: false
  })
  
  return new Response(JSON.stringify({
    success: "FALSE FALSE FALSE u r always wrong retard"
  }))
}

export const GET: RequestHandler = async () => {

  return new Response(JSON.stringify(todos))
}