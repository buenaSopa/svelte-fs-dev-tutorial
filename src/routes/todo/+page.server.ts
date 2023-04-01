import { getTodos, updateStatus, updateTodos } from "$lib/store";
import { addTodos, removeTodos } from "$lib/store";
import { fail, type Actions } from "@sveltejs/kit";
import { sleep } from "$lib/utils/utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const todos = getTodos() 
    return { todos }
}

let response = true;

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

        if (!response) {
            return fail(400, { response })
        }

        removeTodos(id)

        return { success: true }
    },

    updateTodo:async ({ request }) => {
        const formData = await request.formData()
        const id = String(formData.get('uid'))
        const body = String(formData.get('text'))

        if (!response) {
            return fail(400, { response })
        }

        updateTodos(id, body)

        return { success: true }
    },
    
    updateStatus:async ({ request }) => {
        const formData = await request.formData()
        const id = String(formData.get('uid'))
        const done = String(formData.get('done'))

        if (!response) {
            return fail(400, { response })
        }

        updateStatus(id, done)

        return { success: true }
    },
};
