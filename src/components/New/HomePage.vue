<template>
    <div>
        <Navbar />
        <div class="columns">
            <Sidebar @selectModule="selectModule" />
            <ApplicationsTable :applications="applications" :selectedModule="selectedModule" />
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import ApplicationsTable from './ApplicationsTable.vue';
import { useApplicationStore } from '../../stores/index'; // Correct path to store.js
import { ref } from 'vue';

export default {
    components: {
        Navbar,
        Sidebar,
        ApplicationsTable
    },
    setup() {
        const applicationStore = useApplicationStore();
        const selectedModule = ref('Name Match');

        const selectModule = (module) => {
            selectedModule.value = module;
        };

        return {
            applications: applicationStore.applications,
            selectedModule,
            selectModule
        };
    }
};
</script>

<style>
.columns {
    margin-top: 1rem;
}
</style>