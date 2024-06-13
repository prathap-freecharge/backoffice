<template>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <h3 class="title">Filters</h3>
          <button class="button is-small is-danger" @click="clearAll">Clear All</button>
          <hr>
          <div>
            <label class="label">Product Type</label>
            <div class="control">
              <label class="checkbox" v-for="product in productTypes" :key="product">
                <input type="checkbox" :value="product" v-model="selectedProductTypes">
                {{ product }}
              </label>
            </div>
          </div>
          <div>
            <label class="label">Partner Name</label>
            <div class="control">
              <label class="checkbox" v-for="partner in partnerNames" :key="partner">
                <input type="checkbox" :value="partner" v-model="selectedPartnerNames">
                {{ partner }}
              </label>
            </div>
          </div>
          <hr>
          <button class="button is-primary" @click="applyFilters">Apply</button>
          <button class="button" @click="close">Close</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterModal',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        productTypes: ['MF', 'MCA', 'QOD'],
        partnerNames: ['JSW Paints Private Limited', 'DABUR', 'AJIO', 'SK Electrode Private Limited', 'SK Electronics', 'BISLERI', 'AGRIM', 'Sabari'],
        selectedProductTypes: [],
        selectedPartnerNames: []
      };
    },
    methods: {
      clearAll() {
        this.selectedProductTypes = [];
        this.selectedPartnerNames = [];
      },
      applyFilters() {
        this.$emit('apply-filters', {
          productTypes: this.selectedProductTypes,
          partnerNames: this.selectedPartnerNames
        });
        this.close();
      },
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-content {
    width: 90%;
    max-width: 600px;
  }
  </style>
  