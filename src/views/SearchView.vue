<template>
    <div class="searchView">
        <div class="infoView">
            <h1>Search for a Country</h1>
            <div class="sendInfo">
                <input v-model="countryName" @keypress.enter="getCountryData" placeholder="e.g.Brazil" title="Write someone country name"/>
                <Router-link to="/info"><button @click="getCountryData" id="btnSearch" aria-label="Search" title="Search"><i class="fa-solid fa-search"></i></button></Router-link>
            </div>
            <div class="commonCountry">
                <p>Common Country: </p>
                <div class="allBoxes">
                    <div class="box">
                        <button aria-label="Common Country: Brazil" title="Brazil">Brazil</button>
                    </div>
                    <div class="box">
                        <button aria-label="Common Country: Argentina" title="Argentina">Argentina</button>
                    </div>
                    <div class="box">
                        <button aria-label="Common Country: US" title="US">US</button>
                    </div>
                </div>
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


<style scoped>
    
    /* .searchView {
        display: flex;
        justify-content: center;
        place-items: center;
        min-height: 90vh;
    }

    .infoView h1 {
        margin: 50px 0;
        font-size: 40px;
        color: #027EE7;
        text-align: center;
    }

    .infoView input {
        width: 40rem;
        padding: 15px 20px;
        font-weight: 600;
        border-radius: 5px;
        background: #BFBFBF;
        font-size: 16px;
        outline: none;
    }
    .infoView input::placeholder {
        color: #030303;
    }

    .infoView #btnSearch {
        padding: 16px;
        border-radius: 5px;
        margin: 0 1rem;
        cursor: pointer;
        transition: .3s ease-in;
        background: #BFBFBF;
    }

    .infoView #btnSearch:hover {
        background: #E8E8E8;
    }

    .commonCountry {
        display: flex;
        margin: 40px 0;
        width: 35rem;
    }

    .commonCountry p {
        width: 15rem;
        display: flex;
        justify-content: center;
        place-items: center;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin: 0 20px 0 0;
    }

    .commonCountry .allBoxes {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .commonCountry .allBoxes .box button {
        padding: 5px 35px;
        border-radius: 2.5px;
        cursor: pointer;
        border: none;
        background: #444444;
        color: #D9D9D9;
        font-weight: 600;
        transition: .3s ease-in
    }

    .commonCountry .allBoxes .box button:hover {
        background: #575757;
    } */
</style>