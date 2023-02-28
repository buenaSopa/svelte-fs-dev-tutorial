import type { RequestHandler }  from "@sveltejs/kit";
import { todos as storeTodos } from "$lib/store"
import { get } from "svelte/store";
//TODO: fetch uid from patch request

// DELETE
export const DELETE: RequestHandler = ({ params }) => {
    storeTodos.update((value: any)=> (value.filter((todo: Todo) => todo.uid !== params.uid)))

    return new Response(JSON.stringify({
        status: 200,
    }))
}

// UPDATE
export const PATCH: RequestHandler = async (event) => {
    const data = await event.request.formData()
    const text = data.get("text")?.toString() || ''

    get(storeTodos).map((todo: Todo) => {
        if (todo.uid === event.params.uid) {
            todo.text = text
        }
    })
   
    
    return new Response(JSON.stringify({
      success: true
    }))
  }