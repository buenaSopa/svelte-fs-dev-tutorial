import { getTodos, updateStatus, updateTodos } from "$lib/store";
import type { PageServerLoad } from "./$types";
import { addTodos, removeTodos } from "$lib/store";
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    const todos = getTodos() 
    return { todos }
}

export const actions: Actions = {
    addTodo: async ({ request }) => {
        const formData = await request.formData()
        const todo = String(formData.get('text'))

        if (!todo) {
            return fail(400, { todo, missing: true })
        }

        addTodos(todo)

        return { success: true }
    },

    removeTodo:async ({ request }) => {
        const formData = await request.formData()
        const id = String(formData.get('uid'))

        removeTodos(id)

        return { success: true }
    },

    updateTodo:async ({ request }) => {
        const formData = await request.formData()
        const id = String(formData.get('uid'))
        const body = String(formData.get('text'))

        updateTodos(id, body)

        return { success: true }
    },
    
    updateStatus:async ({ request }) => {
        const formData = await request.formData()
        const id = String(formData.get('uid'))
        const done = String(formData.get('done'))

        updateStatus(id, done)

        return { success: true }
    },
};
