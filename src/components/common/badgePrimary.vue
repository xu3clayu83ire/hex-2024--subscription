<template>
    <span class="sb-badge-primary badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#406C55" class="bi bi-play-fill me-2"
            viewBox="0 0 16 16">
            <path
                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </svg>
        {{ text }}
    </span>
</template>

<script setup>
const props = defineProps(['text'])
const text = props.text;

</script>

<style scoped lang="scss">
.sb-badge-primary {

    $sb-accent-300: #406c55;
    $sb-accent-100: #e0efde;

    &.badge {
        border: 1px solid $sb-accent-100;
        padding: 8px 12px;
        color: $sb-accent-300;
        background-color: #fff;
        font-size: 16px;
        border-radius: 4px;

        svg {
            vertical-align: top;
        }
    }

}
</style>