<script lang='ts'>
    import { enhance } from "$app/forms";


    export let todo: Todo;

</script>
<div class="slide" class:opacity-40="{todo.done}">
    <form class="toggle"  method="POST" action="?/updateStatus" use:enhance>
        <input type="hidden" name="done" value="{todo.done}" >
        <input type="hidden" name="uid" value={todo.uid}>
        <button aria-label="Mark done/not done"
        on:click={ ()=>{ todo.done = !todo.done } }>{todo.done ? "✓" : "✖"}</button>
    </form>

    <form class="save grid grid-cols-9 text-slate-50" method="POST" action="?/updateTodo" use:enhance>
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
    <form class="delete" method="POST" action="?/removeTodo" use:enhance>
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