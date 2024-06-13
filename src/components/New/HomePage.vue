<!-- <template>
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
</style> -->

<!-- ******************************************************************************* -->

<template>
    <div :class="{ 'dark-mode': isDarkMode }">
        <Navbar />
        <div class="columns">
            <Sidebar @selectModule="selectModule" :selectedModule="selectedModule" />
            <ApplicationsTable :applications="applications" :selectedModule="selectedModule" />
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import ApplicationsTable from './ApplicationsTable.vue';
import { useApplicationStore } from '../../stores/index';
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
        const isDarkMode = ref(false);

        const selectModule = (module) => {
            selectedModule.value = module;
        };

        return {
            applications: applicationStore.applications,
            selectedModule,
            selectModule,
            isDarkMode
        };
    }
};
</script>

<style>
.columns {
    margin-top: 1rem;
}

.dark-mode {
    background-color: #1a1a1a;
    color: #ddd;
}
</style>