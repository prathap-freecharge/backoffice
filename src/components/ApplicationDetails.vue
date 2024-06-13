<!-- <template>
    <div>
      <Header />
      <div class="columns">
        <div class="column is-one-fifth">
          <Sidebar />
        </div>
        <div class="column">
          <div class="box">
            <button class="button" @click="goBack">Back</button>
            <h2 class="title">Application Details</h2>
            <div v-if="application">
              <div class="columns">
                <div class="column">
                  <strong>Application ID:</strong> {{ application.appId }}
                </div>
                <div class="column">
                  <strong>Customer Name:</strong> {{ application.customerName }}
                </div>
                <div class="column">
                  <strong>Product Type:</strong> {{ application.product }}
                </div>
                <div class="column">
                  <strong>Flag Type:</strong> {{ application.flag }}
                </div>
                <div class="column">
                  <strong>Raised On:</strong> {{ application.raisedOn }}
                </div>
                <div class="column">
                  <strong>Expiry:</strong> {{ application.expiry }}
                </div>
                <div class="column">
                  <strong>Status:</strong> {{ application.status }}
                </div>
              </div>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Sidebar from './Sidebar.vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useApplicationStore } from '../stores/index';
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'ApplicationDetails',
    components: {
      Header,
      Sidebar,
    },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const store = useApplicationStore();
      const application = ref(null);
  
      const fetchApplication = () => {
        const appId = route.params.id;
        application.value = store.getApplicationById(appId);
      };
  
      const goBack = () => {
        router.push('/');
      };
  
      onMounted(fetchApplication);
  
      return {
        application,
        goBack,
      };
    },
  };
  </script>
  
  <style scoped>
  .box {
    padding: 20px;
  }
  </style>
   -->

<template>
    <div>
        <Header />
        <div class="columns">
            <div class="column is-one-fifth">
                <Sidebar />
            </div>
            <div class="column">
                <div class="box">
                    <button class="button" @click="goBack">Back</button>
                    <h2 class="title">Application Details</h2>
                    <div v-if="application">
                        <div class="columns">
                            <div class="column">
                                <strong>Application ID:</strong> {{ application.appId }}
                            </div>
                            <div class="column">
                                <strong>Customer Name:</strong> {{ application.customerName }}
                            </div>
                            <div class="column">
                                <strong>Product Type:</strong> {{ application.product }}
                            </div>
                            <div class="column">
                                <strong>Flag Type:</strong> {{ application.flag }}
                            </div>
                            <div class="column">
                                <strong>Raised On:</strong> {{ application.raisedOn }}
                            </div>
                            <div class="column">
                                <strong>Expiry:</strong> {{ application.expiry }}
                            </div>
                            <div class="column">
                                <strong>Status:</strong> {{ application.status }}
                            </div>
                            <!-- Add other fields as necessary -->
                        </div>
                    </div>
                    <div v-else>
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import { useRouter, useRoute } from 'vue-router';
import { useApplicationStore } from '../stores/index';
import { ref, onMounted } from 'vue';

export default {
    name: 'ApplicationDetails',
    components: {
        Header,
        Sidebar,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useApplicationStore();
        const application = ref(null);

        const fetchApplication = () => {
            const appId = route.params.id;
            application.value = store.getApplicationById(appId);
        };

        const goBack = () => {
            router.push('/');
        };

        onMounted(fetchApplication);

        return {
            application,
            goBack,
        };
    },
};
</script>

<style scoped>
.box {
    padding: 20px;
}
</style>