<script lang='ts'>
    export let todo: Todo;

    const done = "✓"
    let toggled = false
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
    <form action="" method="" class="toggle">
        <input type="hidden" name="done" value="{todo.done}" >
        <button aria-label="Mark done/not done" 
        class:opacity-25="{toggled===true}"
        on:click={ ()=>{ toggled = !toggled } }>{done}</button>
    </form>

    <form action="" method="" class="save grid grid-cols-9 text-slate-50">
        <input class="col-span-8" type="text" value="{todo.text}">
        <button>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img 
            width="30px"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/save--v1.png"/>
        </button>
    </form>

    <form action="" method="" class="delete">
        <button>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img 
            width="35px"
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"/>
        </button>
    </form>
</div>