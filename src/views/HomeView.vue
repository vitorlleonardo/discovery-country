<template>
  <div>
    <main>
      <div class="intro-section">
        <h1>Explore the <span>World</span></h1>
        <p>Welcome to our global data portal! Discovery a vast collection of comprehensive statistics about countries around the world. Get detailed information on population, continents, capital, spoken languages, borders, and much more. Our intuitive platform makes it easy to research and access the essential information you need.</p>
        <h2>Start your journey of <span>discovery</span> now!</h2>
        <RouterLink to="/search"><button aria-label="Go Search a Country" title="Go Search a Country">Let's Go!<i class="fa-solid fa-rocket"></i></button></RouterLink>
      </div>
      <div class="image-section">
        <img src="../assets/img/world-character.svg" alt="An ilustration">
      </div>
    </main>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'HomeView'
}
</script>