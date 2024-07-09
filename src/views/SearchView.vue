<template>
    <div class="searchView">
        <div class="searchContent">
            <h1>Search for a Country</h1>
            <div class="sendInfo">
                <input v-model="countryName" @keypress.enter="getCountryData" placeholder="e.g.Brazil" title="Write someone country name"/>
                <Router-link to="/info"><button @click="getCountryData" id="btnSearch" aria-label="Search" title="Search"><i class="fa-solid fa-search"></i></button></Router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useCountryStore } from '../stores/CountryStore';

export default {
    name: 'SearchView',
  setup() {
    const countryStore = useCountryStore();

    const countryName = computed({
      get: () => countryStore.countryName,
      set: (value) => countryStore.setCountryName(value)
    });

    const getCountryData = () => {
      countryStore.fetchCountryData();
    };

    return { countryName, getCountryData };
  }
}
</script>