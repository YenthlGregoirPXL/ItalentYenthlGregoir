<template>
  <div class="activity-screen">
    <div class="image-container">
      <img v-bind:src="require('../assets/images/'+ obj.image)" alt="Activity Image">
    </div>
    <div class="text-container">
      <h2>{{ obj.title }}</h2>
      <div class="info">
        <span>
          <i class="material-icons">location_on</i>
          <span>{{ obj.location }}</span>
        </span><br>
        <span>
          <i class="material-icons">event</i>
          <span>{{ obj.date }}</span>
        </span><br>
        <span>
          <i class="material-icons">schedule</i>
          <span>{{ obj.duration }}</span>
        </span>
      </div>
      <p class="description">{{ obj.description }}</p>
    </div>
      <button @click="this.$router.push('/activities');" class="homeButton">Back</button>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const obj = JSON.parse(route.query.obj);
    return {
      obj
    };
  }
}
</script>

<style scoped>
.activity-screen {
  display: flex;
  height: 100vh;
  background-color: #20262c;
  color: white;
  font-family: "Arial Black",serif;
}

.image-container {
  width: 50%;
  flex: 0 0 auto;
}

.image-container img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.text-container {
  width: 50%;
  padding: 20px;
}

h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

.info {
  margin-top: 15px;
  font-size: 18px;
}

.description {
  font-size: 18px;
  margin-top: 20px;
}

.material-icons {
  margin-right: 10px;
  vertical-align: middle;
}
</style>
