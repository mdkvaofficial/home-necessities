<script>
  import { language } from './../stores/language';  // Import language store

  let dropdownVisible = false;

  function toggleDropdown() {
    dropdownVisible = !dropdownVisible;
  }

  function setLanguage(lang) {
    language.set(lang);  // Update the language in the store
    dropdownVisible = false;
  }
</script>

<nav>
  <a href="./">Home</a>
  <a href="./medicines">Medicines</a>
  <a href="./bp">Blood Pressure</a>
  <a href="./diabetes">Diabetes</a>
  <button on:click={toggleDropdown}>Language</button>

  {#if dropdownVisible}
    <div class="dropdown">
      <button on:click={() => setLanguage('en')}>English</button>
      <br>
      <button on:click={() => setLanguage('ur')}>Urdu</button>
    </div>
  {/if}
</nav>

<style>
  nav {
    background-color: black;
    color: white;
    padding: 1em;
    display: flex;
    gap: 1em;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  nav button {
    margin-left: auto;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 3em;
    right: 1em;
    background-color: black;
    border: 1px solid white;
    padding: 0.5em;
  }

  .dropdown button {
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5em;
    text-align: left;
  }
</style>
