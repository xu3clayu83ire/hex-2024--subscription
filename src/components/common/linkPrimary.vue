<template>
    <a href="#" class="sb-link-primary"> {{ text }}</a>
</template>

<script setup>
const props = defineProps(['text'])
const text = props.text;

</script>

<style scoped>
.sb-link-primary {
    display: inline-block;
    color: #569573;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
}

.sb-link-primary:hover,
.sb-link-primary:active {
    color: #406c55;
}


.sb-link-primary.disabled {
    color: #ADB5BD;
}

@media (min-width: 992px) {

    .sb-link-primary {
        font-size: 20px;
        line-height: 1.2;
    }

}
</style>
