// store/country.js
import { defineStore } from 'pinia';

export const useCountryStore = defineStore('country', {
  state: () => ({
    countryName: '',
    countryData: null,
  }),
  actions: {
    setCountryName(name) {
      this.countryName = name;
    },
    async fetchCountryData() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${this.countryName}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        this.countryData = data[0];
      } catch (error) {
        console.error('There was a problem', error);
      }
    }
  }
});