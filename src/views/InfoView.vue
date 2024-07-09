<template>
  <main>
    <div v-if="countryData" class="allInfo">
      <div class="container">
        <div class="box">
          <div class="displayFlag">
            <img :src="countryData.flags.svg" :alt="countryData.flags.alt" :title="countryData.name.common" />
          </div>
        </div>
        <div class="mainInfo">
          <h1>{{ countryData.name.common}}</h1>
          <div class="infos">
            <div class="mainInfos">
              <p>Official Name: <span>{{ countryData.name.official }}</span></p>
              <p>Capital: <span>{{ countryData.capital[0] }}</span></p>
              <p>Population: <span>{{ countryData.population }}</span></p>
              <p>Area: <span>{{ countryData.area }}</span></p>
              <p>Borders: <span>{{ countryData.borders }}</span></p>
              <p>Continent: <span>{{ countryData.continents[0] }}</span></p>
              <p>Region: <span>{{ countryData.region }}</span></p>
              <p>Sub-Region: <span>{{ countryData.subregion }}</span></p>
              <p>Currencies: <span>{{ countryData.currencies }}</span></p>
              <p>Languages: <span>{{ countryData.languages }}</span></p>
            </div>
            <div class="othersInfo">
              <p>Independent: <span>{{ countryData.independent }}</span></p>
              <p>Start of Week: <span>{{ countryData.startOfWeek }}</span></p>
              <p>TimeZones: <span>{{ countryData.timezones }}</span></p>
            </div>
          </div>
        </div>
        <div class="backControl">
          <RouterLink to="/search"><button aria-label="Back to Search" title="Back to Search"><i class="fa-solid fa-arrow-left"></i></button></RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCountryStore } from '../stores/CountryStore';
import { computed } from 'vue';

export default {
  setup() {
    const countryStore = useCountryStore();
    const countryData = computed(() => countryStore.countryData);
    return { countryData };
  }
}
</script>