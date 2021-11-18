<template>
       <div class="pm-image">
           <img :src="src" alt="" :style="['object-fit', fit]" class="pm-image__inner">
       </div>
</template>
<script>

export default {
    name: "PmImage",
    props: {
        src: String,
        fit: String
    },

}
</script>
