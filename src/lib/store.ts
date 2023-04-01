import { writable } from "svelte/store";
import { get } from "svelte/store"

export const todos: any = writable([])

export function getTodos() {
    return get(todos);
}

export function addTodos(body: String) {
    todos.update((value: Array<Todo>) => ([...value, {
        uid: `${Date.now()}`,
        created_at: new Date(),
        text: body,
        done: false
      }]))
}

export function removeTodos(id: String){
    todos.update((value: Array<Todo>)=> (value.filter((todo: Todo) => todo.uid !== id)))
}

export function updateTodos(id: String, body: String) {
    get(todos).map((todo: Todo) => {
        if (todo.uid === id) {
            if (body!==undefined) todo.text = body
        }
    })
}

export function updateStatus(id: String, done: String) {
    get(todos).map((todo: Todo) => {
        if (todo.uid === id) {
            if (done!==undefined) todo.done = done.toLowerCase() === "true"   
        }
    })
}