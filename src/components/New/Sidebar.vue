<template>
    <aside class="menu column is-narrow">
        <p class="menu-label">Modules</p>
        <ul class="menu-list">
            <li><a @click="$emit('selectModule', 'Name Match')">Name Match</a></li>
            <li><a @click="$emit('selectModule', 'Field Investigation')">Field Investigation</a></li>
            <li><a @click="$emit('selectModule', 'Hunter')">Hunter</a></li>
        </ul>
    </aside>
</template>

<script>
export default {};
</script>

<style>
.menu {
    background-color: #f5f5f5;
    padding: 1rem;
    height: 100vh;
}
</style>