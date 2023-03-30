<script lang="ts">
    import TodoItem from "$lib/todo-item.svelte";
    import type { ActionData } from "./$types";
    
    type PageData = {
        todos: Array<Todo>;
    }
    
    export let data: PageData
    export let form: ActionData

</script> 

<svelte:head>
    <title>Todo</title>
</svelte:head>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<div class="todos">
    <h1 class="text-center text-4xl p-6 ">Todo</h1>
    <form method="POST" class="new" action="?/addTodo">
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" class="placeholder:text-slate-50">
    </form>

    {#if form?.missing}
        <p>This field is required!</p>    
    {/if}

    {#each data.todos as todo }
        <TodoItem todo={todo}/>  
    {/each}

</div>

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

