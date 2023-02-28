
<script lang="ts">
    import TodoItem from "$lib/todo-item.svelte";

    let promise = fetchTodo()
    let input = ''
    const title = 'Todo'

    async function fetchTodo() {
        const res = await fetch('/todo')
        const data = await res.json()
        
        if (res.ok) {
            return data
        } else {
            throw new Error(data)
        }
    }

    async function addTodo(event: { target: any; }) {
        const form = event.target
        const data = new FormData(form)
        await fetch('/todo', {
            method: 'POST',
            body: data
        })

        input = ''
        reload()
    }

    function reload() {
        promise = fetchTodo()
    }

</script> 

<svelte:head>
    <title>{title}</title>
</svelte:head>

<style>
    .todos {
        @apply m-11;
    }

    .new {
        @apply mb-3;
    }

    .new :global(input) {
        @apply text-xl px-5 py-3 w-full text-center bg-transparent rounded-lg bg-slate-900 bg-opacity-25 border-0;
    }

    .new :global(input:focus) {
        @apply outline-none;
    }

</style>

<div class="todos">
    <h1 class="text-center text-4xl p-6 ">{title}</h1>
    <form on:submit|preventDefault={addTodo} class="new">
        <input type="text" name="text" bind:value={input} aria-label="Add a todo" placeholder="+ type to add a todo" class="placeholder:text-slate-50">
    </form>

    {#await promise}
        <p>Fetching...</p>
    {:then data}
        {#each data as todo }
            <TodoItem todo={todo} reload={reload}/>  
        {/each}
    {:catch error}
        <div class="error">{error.message}</div>
    {/await}

</div>

