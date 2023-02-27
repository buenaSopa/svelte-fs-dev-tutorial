<script>
    import TodoItem from "$lib/todo-item.svelte";

    const title = 'Todo'
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

    .todos :global(form) {
        @apply shadow-2xl;
    }

</style>

<div class="todos">
    <h1 class="text-center text-4xl p-6 ">{title}</h1>
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" class="placeholder:text-slate-50">
    </form>
    
    <TodoItem />
    <TodoItem />
    <TodoItem />    
</div>

