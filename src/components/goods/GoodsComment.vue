<template>
    <div>
        <cmt-box :id="$route.params.id"></cmt-box>
    </div>
</template>

<script>
import commentbox from '../subcomponents/comment.vue'
export default {
    components:{
        'cmt-box':commentbox
    }
}
</script>

<style lang="scss" scoped>

</style>