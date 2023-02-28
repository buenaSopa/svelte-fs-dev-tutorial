<script lang='ts'>
    export let reload: () => void
    export let todo: Todo;

    const done = "✓"
    let toggled = false

    async function deleteTodo() {
        await fetch('/todo/'+todo.uid, {
            method: 'DELETE',
        })        
        reload()
    }

    async function editTodo(event: { target: any; }) {
        const form = event.target
        const data = new FormData(form)

        await fetch('/todo/'+todo.uid, {
            method: 'PATCH',
            body: data,
        })
        reload()
    }


</script>

<style>
    .slide {
        @apply grid grid-cols-12 text-black text-center my-5 bg-slate-900 bg-opacity-25 px-1 py-3 rounded-lg w-11/12 mx-auto;
    }

    .toggle {
        @apply col-span-1 self-center;
    }
    
    .toggle button {
        @apply rounded-full border-2 px-1 text-slate-50 ;
    }

    .save {
        @apply col-span-10;
    }
    
    .save input {
        @apply bg-transparent ;
    }

    .save button img {
        @apply  mx-auto;
    }

    .delete {
        @apply col-span-1 flex ;
    }

    .delete button img {
        @apply  mx-auto;
    }

    input:focus {
        @apply outline-none;
    }


</style>

<div class="slide">
    <form class="toggle">
        <input type="hidden" name="done" value="{todo.done}" >
        <button aria-label="Mark done/not done" 
        class:opacity-25="{toggled===true}"
        on:click={ ()=>{ toggled = !toggled } }>{done}</button>
    </form>

    <form class="save grid grid-cols-9 text-slate-50" on:submit|preventDefault={editTodo}>
        <input class="col-span-8" type="text" name="text" value="{todo.text}">
        <button>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img 
            width="30px"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/save--v1.png"/>
        </button>
    </form>

    <form on:submit|preventDefault={deleteTodo} class="delete">
        <button>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img 
            width="35px"
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"/>
        </button>
    </form>
</div>