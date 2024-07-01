<!-- HomeView.vue -->
<template>
  <main>
    <div v-if="countryData" class="allInfo">
      <div class="container">
        <div class="box">
          <div class="displayFlag">
            <img :src="countryData.flags.svg" :alt="countryData.flags.alt" :title="countryData.name.common" />
            <div class="coatArms">
              <img :src="countryData.coatOfArms.svg" id="coatArms"/>
            </div>
          </div>
        </div>
        <div class="mainInfo">
          <h1>{{ countryData.name.common }}</h1>
          <div class="infos">
            <div class="mainInfos">
              <p>Capital: <span>{{ countryData.capital[0] }}</span></p>
              <p>População: <span>{{ countryData.population }}</span></p>
              <p>Area: <span>{{ countryData.area }}</span></p>
              <p>Fronteira: <span>{{ countryData.borders }}</span></p>
              <p>Continent: <span>{{ countryData.continents[0] }}</span></p>
              <p>Currencies: <span>{{ countryData.currencies }}</span></p>
              <p>Languages: <span>{{ countryData.languages }}</span></p>
            </div>
            <div class="othersInfo">
              <p>Independent: <span>{{ countryData.independent }}</span></p>
              <p>Official Name: <span>{{ countryData.name.official }}</span></p>
              <p>Sub-Region: <span>{{ countryData.subregion }}</span></p>
              <p>Start of Week: <span>{{ countryData.startOfWeek }}</span></p>
              <p>TimeZones: <span>{{ countryData.timezones }}</span></p>
            </div>
          </div>
        </div>
        <div class="third">
        </div>
        <div class="backControl">
          <RouterLink to="/search"><button aria-label="Back to Search" title="Back to Search"><i class="fa-solid fa-arrow-left"></i></button></RouterLink>
        </div>
      </div>
    </div>
    <div v-else>
      <ErrorView />
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 60px;
  }

  .container {  
    display: grid;
    grid-template-columns: 0.7fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: 30px 40px;
    grid-auto-flow: row;
    grid-template-areas:
      "box mainInfo mainInfo"
      "box mainInfo mainInfo"
      "box third backControl"
}

  .mainInfo { 
    grid-area: mainInfo; 
    background: #303030;
    border-radius: 5px;
    padding: 30px;
  }

  .mainInfo h1 {
    margin: 0 0 30px 0;
  }

  .mainInfo p {
    margin: 5px 0;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .mainInfo p span {
    margin: 0 10px;
    font-weight: 500;
  }

  .backControl {
    grid-area: backControl;
  }

  .backControl button {
    width: 20rem;
    padding: 10px 60px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #027EE7;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    transition: .3s ease-in;
  }

  .backControl button:hover{
    background-color: #279aff;
  }

  .box {
    height: 70vh;
    padding: 0 20px;
    grid-area: box;
    background: #303030;
    border-radius: 5px;
  }

  .third { 
    padding: 20px;
    grid-area: third; 
    background: #303030;
    border-radius: 5px;
  }

  .box .displayFlag {
    padding: 20px 0;
  }

   .box .displayFlag img {
    width: 350px;
    max-height: 350px;
  } 

  .coatArms {
    display: flex;
    justify-content: center;
    place-items: center;
    height: 35vh;
  }

  #coatArms {
    width: 150px;
    height: 150px;
  }

  .infos {
    display: flex;
  }

  .infos .othersInfo {
    padding: 0 5rem;
  }

</style>

<script>
import ErrorView from './ErrorView.vue';
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