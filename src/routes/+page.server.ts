import type { Load } from "@sveltejs/kit";

export const load: Load = async ({fetch}) => {
    const res = await fetch('/todo', {
        method: 'GET'
    })

    if (res.ok) {
        const todos = await res.json()
        return {
            todos
        };
    } 

    const { msg } = await res.json()
    return {
        error: new Error(msg)
    }
}



