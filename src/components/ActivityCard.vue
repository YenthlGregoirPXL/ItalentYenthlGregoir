<template>
  <div class="activity-card" @click="clicked">
    <div class="body">
      <div class="image-container">
        <img v-bind:src="require('../assets/images/' + activity.image)" alt="Activity Image">
      </div>
      <div class="text-container">
        <h2>{{ activity.title }}</h2>
        <div class="info">
          <span>
            <i class="material-icons">location_on</i>
            <span>{{ activity.location }}</span>
          </span>
          <span>
            <i class="material-icons">event</i>
            <span>{{ activity.date }}</span>
          </span>
          <span>
            <i class="material-icons">schedule</i>
            <span>{{ activity.duration }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
  methods: {
    clicked() {
      if(this.activity.route === undefined){
        this.$router.push({
          name: 'Activity',
          query: {
            obj: JSON.stringify(this.activity) // Converteer het object naar een string voordat het wordt doorgegeven
          }
        });
      }
      else{
        this.$router.push('/activities/' + this.activity.route);
      }
    }
  },
}
</script>


<style scoped>
.activity-card {
  max-width: 1400px;
  height: 150px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #20262c;
  color: white;
  transition: transform 0.3s ease; /* Voeg een overgang toe voor het transformeereffect */
}

.activity-card:hover {
  transform: scale(1.025);
  cursor: pointer;
}

.body {
  display: flex;
}

.image-container {
  width: 150px; /* Breedte van de afbeelding */
  height: 80%; /* Stelt de hoogte in op 100% van de ouder (activity card) */
}

.image-container img {
  width: 100%;
  height: 100%; /* Stelt de hoogte van de afbeelding in op 100% van de container */
  object-fit: cover; /* Behoudt de aspect ratio van de afbeelding en rekt deze uit om de container te vullen */
}

.text-container {
  flex: 1; /* Hierdoor neemt de tekstcontainer de resterende ruimte in beslag */
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.info {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.info span {
  font-size: 14px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.material-icons {
  margin-right: 5px; /* Ruimte tussen pictogram en tekst */
  vertical-align: middle;
}
</style>