<template>
  <div>
    <nav>
      <div class="titlePage">
        <RouterLink to="/"><h2>Discovery Country</h2></RouterLink>
      </div>
      <div class="sendInfo">
        <button aria-label="Settings" title="Settings"><i class="fa-solid fa-gear"></i></button>
      </div>
    </nav>
  </div>
</template>


<style scoped>
  @media (max-width: 480px) {
    nav {
      display: flex;
      justify-content: space-between;
      place-items: center;
      padding: 10px;
    }

    h2 {
      font-size: 16px;
    }

    .sendInfo button i{
      font-size: 16px;
    }
  }

  nav {
    background-color: #222222;
  }

  /* nav {
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 15px 70px;
    background-color: #222222;
  } */

  h2 {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }

  .sendInfo {
    display: flex;
    justify-content: space-between;
  }

  .sendInfo button {
    border-radius: 5px;
    cursor: pointer;
    transition: .3s ease-in;
    background: transparent;
    cursor: pointer;
    color: #fff;
    border: none;
    font-size: 20px;
  }
</style>