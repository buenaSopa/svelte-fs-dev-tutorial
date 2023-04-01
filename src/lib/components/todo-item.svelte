<script lang='ts'>
    import { enhance, type SubmitFunction } from "$app/forms";
    import { notifications } from "$lib/utils/notifications";


    export let todo: Todo;

    let loading = false

    const updateTodo: SubmitFunction = () => {
        loading = true
        notifications.warning('Wait a moment...', 500)

        return async ({ update, result }) => {
            loading = false
            if (result.status == 400) {
                notifications.danger('Failed to update Todo', 1000)
            } else {
                notifications.success('Updated Todo', 1000)
            }
            await update()
        }
    }

    const updateStatus: SubmitFunction = () => {
        loading = true
        notifications.warning('Wait a moment...', 500)

        return async ({ update, result }) => {
            loading = false
            if (result.status == 400) {
                notifications.danger('Failed to update Todo status', 1000)
            } else {
                notifications.success('Updated Todo statuss', 1000)
            }
            await update()
        }
    }

    const removeTodo: SubmitFunction = () => {
        loading = true
        notifications.warning('Wait a moment...', 500)

        return async ({ update, result }) => {
            loading = false
            if (result.status == 400) {
                notifications.danger('Failed to remove Todo', 1000)
            } else {
                notifications.success('Removed Todo', 1000)
            }
            await update()
        }
    }

</script>

<div class="slide" class:opacity-40="{todo.done}">
    <form class="toggle"  method="POST" action="?/updateStatus" use:enhance={updateStatus}>
        <input type="hidden" name="done" value="{todo.done}" >
        <input type="hidden" name="uid" value={todo.uid}>
        <button aria-label="Mark done/not done"
        on:click={ ()=>{ todo.done = !todo.done } }>{todo.done ? "✓" : "✖"}</button>
    </form>

    <form class="save grid grid-cols-9 text-slate-50" method="POST" action="?/updateTodo" use:enhance={updateTodo}>
        <input class="col-span-8" type="text" name="text" value="{todo.text}">
        <input type="hidden" name="uid" value={todo.uid}>
        <button>
            <img 
            width="30px"
            alt="saveee"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/save--v1.png"/>
        </button>
    </form>

    <!-- action="todo/{todo.uid}" method="delete" -->
    <form class="delete" method="POST" action="?/removeTodo" use:enhance={removeTodo}>
        <input type="hidden" name="uid" value={todo.uid}>
        <button type="submit">
            <img 
            width="30px"
            alt="delete"
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"/>
        </button>
    </form>
</div>

<style>
    .slide {
        @apply grid grid-cols-8 text-black text-center my-5 bg-slate-900 bg-opacity-25 px-1 py-3 rounded-lg w-11/12 mx-auto;
    }

    .toggle {
        @apply col-span-1 self-center;
    }
    
    .toggle button {
        @apply rounded-full border-2 px-1 text-slate-50 ;
    }

    .save {
        @apply col-span-6;
    }
    
    .save input {
        @apply bg-transparent ;
    }

    .save button img {
        @apply  mx-auto;
    }

    .delete {
        @apply col-span-1;
    }

    .delete button img {
        @apply  mx-auto pt-1;
    }

    input:focus {
        @apply outline-none;
    }
</style>