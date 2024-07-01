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

<style scoped>
  @media (max-width: 480px) {
    main {
      display: flex;
      flex-direction: column;
    }

    .intro-section {
      order: 1;
    }

    .image-section {
      display: flex;
      justify-content: center;
      order: 0;
      height: 50vh;
      margin: 5rem 0;
    }

    .image-section img {
      width: 100%;
      height: 100%;
    }

    .intro-section span {
      color: #027EE7;
    }

    .intro-section h1 {
      margin: 2.5rem 2rem;
      font-size: 24px;
    }

    .intro-section h2 {
      margin: 1.5rem 2rem;
      font-size: 20px;
    }

    .intro-section p {
      font-size: 14px;
      font-weight: 500;
      margin: 0 2rem;
      letter-spacing: 1px;
    }

    .intro-section button {
      margin: 2rem;
      padding: .5rem 2.5rem;
      letter-spacing: 1px;
      font-weight: bold;
      color: #fff;
      background: #027EE7;
      outline: none;
      border-radius: 2.5px;
      border: none;
    }
}



  /* main {
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 60px;
    min-height: 90vh;
  }

  .intro-section {
    width: 50%;
  }

  .intro-section h1 {
    margin: 2.5rem 0;
    font-size: 36px;
  }

  .intro-section h2 {
    font-size: 24px;
  }

  .intro-section p {
    width: 35rem;
    margin: 2.5rem 0;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.5rem;
    font-size: 16px;
  }

  .intro-section button {
    width: 18rem;
    padding: 15px 0;
    margin: 2.5rem 0;
    background: #027EE7;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s ease-in;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .intro-section button:hover{
    background-color: #0663B1;
  }

  .intro-section button i {
    margin: 0 5px;

  }

  .image-section {
    width: 50%;
    display: flex;
    justify-content: center;
  } */
</style>
