<template>
  <div class="home-page">
    <div class="content">
      <div class="avatar-container">
        <img src="../assets/images/avatar.jpeg" alt="Avatar" class="avatar">
      </div>
      <div class="name">
        <h1>Yenth'l Grégoir</h1>
      </div>
      <div class="description">
        <p>
          Mijn naam is Yenth'l Grégoir, een student Toegepaste Informatica uit België. <br> Momenteel volg ik de opleiding applicatie ontwikkeling aan Hogeschool Pxl in Hasselt.
        </p>
      </div>
      <div class="options">
        <router-link to="/activities" class="option">Activiteiten</router-link>
        <div class="option-divider"></div> <!-- Verticale streep -->
        <router-link to="/about-me" class="option">Wie ben ik</router-link>
        <div class="option-divider"></div> <!-- Verticale streep -->
        <router-link to="/reflection" class="option">Eind reflectie</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:#20262c;
  color: white;
  font-family: "Arial Black",serif;
}

.content {
  text-align: center;
}

.avatar-container {
  margin-top: 50px;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid black;
}

.name {
  margin-top: 20px;
}

.description {
  margin-top: 20px;
}

.options {
  margin-top: 50px;
  display: flex;
  justify-content: center;

}

.option {
  margin: 0 10px; /* Ruimte tussen de opties */
  font-size: 20px;
  color:  #73b4c6;
  cursor: pointer;
  text-decoration: none; /* Verwijder standaard link onderstreping */
}
.option:hover {
  color: #508090; /* Donkerdere kleur bij hover */
}
.option-divider {
  border-right: 2px solid #73b4c6; /* Verticale streep */
  height: 25px; /* Hoogte van de streep */
  margin: 0 20px; /* Ruimte boven en onder de streep */
}
</style>

