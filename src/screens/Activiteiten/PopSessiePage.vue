<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div>
    <header>
      <h1>Popsessie</h1>
      <button @click="this.$router.push('/activities');" class="homeButton">Back</button>
    </header>

    <section class="activity">
      <h2>Popsessie : My team and I</h2>

      <div @click="toggleDescription('omschrijving')" class="textToggle">
        <h2 >omschrijving</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'omschrijving'" class="description" ref="description">
        <p>Bij aanvang van het IT-project deden we samen met heel het team deze pop sessie, we  zijn begonnen met het analyseren van de potentiële valkuilen binnen ons team. We hebben diverse opdrachten uitgevoerd om de onderlinge band te versterken en eventuele struikelblokken aan te pakken.
        </p>
      </div>

      <div @click="toggleDescription('verslag')" class="textToggle">
        <h2 >Verslag</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'verslag'" class="description" ref="description">
        <p> Tijdens de popsessie hebben we twee delen gekregen eerste kregen we uitleg wat potentiële struikelblokken kunnen zijn binnen een team en hoe we deze best kunnen oplossen en vermijden. In het 2 de deel gingen we dan verschillende opdrachten uitvoeren om zo onze team sfeer te versterken.
          Het eerste deel van onze sessie richtte zich op het identificeren van mogelijke problemen binnen ons team en waarom deze zich kunnen voordoen. We bespraken verschillende scenario's en kregen vragen om over na te denken, zoals communicatieproblemen, gebrek aan leiderschap, en een gebrek aan teamcohesie. Door deze problemen te benoemen en te bespreken, waren we beter voorbereid om ze aan te pakken tijdens de teambuildingsoefeningen.
          Vervolgens kregen we drie opdrachten om onze samenwerking en communicatie te verbeteren. De eerste opdracht was een grote houten puzzel, bestaande uit een groot vierkant met kleine vierkanten erin. Deze puzzel kon volledig uit elkaar worden gehaald. Eerst mochten we de puzzel bekijken en een plan maken voor het in elkaar zetten ervan dit ging uiteraard zonder problemen Daarna werd het lastiger we moesten we het plan wegleggen en zonder begeleiding van het plan de puzzel weer eerst uit elkaar halen zodat we een strategie konden ontwikkelen hierna moesten we deze dan volledig terug in elkaar zetten. Deze opdracht vereiste teamwork en communicatie, omdat we moesten samenwerken om de puzzel opnieuw te construeren zonder een vooraf bepaald plan.
          De tweede opdracht betrof een fysieke uitdaging. We kregen een lange stok en stonden tegenover elkaar en naast elkaar. De stok lag op onze vingers en het doel was om zo ver mogelijk naar beneden te zakken zonder dat iemand de stok liet vallen of zonder dat iemand aanraking verloor met de stok. Deze opdracht vereiste goed leiderschap en communicatie, omdat we moesten samenwerken om een strategie te bedenken en uit te voeren om de stok stabiel te houden terwijl we naar beneden zakten. Uiteindelijk hebben we een leider aangeduid die aangaf wanneer we naar beneden moesten gaan en moesten stoppen zo is deze opdracht uiteindelijk geslaagd.

          De derde opdracht was een puzzeluitdaging met een twist. Eén persoon werd geblinddoekt en moest de puzzel met behulp van de instructies en aanwijzingen van de rest van het team in elkaar zetten.  Dit was een zeer moeilijke oefening maar door weer zeer goede communicatie en vertrouwen hebben we deze opdracht tot een goed einde kunnen brengen. Deze opdracht benadrukte het belang van effectieve communicatie en vertrouwen binnen het team, omdat we moesten samenwerken om de geblinddoekte persoon te begeleiden en te ondersteunen bij het voltooien van de puzzel.

          Over het algemeen was de popsessie zeer waardevol en leerzaam. Zo leerde we het team kennen en zagen we al de verschillende sterktes en zwaktes van elkaar ook hebben we geleerd hoe belangrijk het is om effectief te communiceren, samen te werken en leiderschap te tonen binnen ons team. Deze ervaring heeft onze band versterkt en ons beter voorbereid om samen te werken aan toekomstige uitdagingen binnen ons project en daarbuiten.

        </p>
      </div>

      <div @click="toggleDescription('reflectie')" class="textToggle">
        <h2 >Reflectie</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'reflectie'" class="description" ref="description">
        <p>Tijdens de popsessie hebben we geleerd over samenwerking en de gevaren die projecten binnen een team kunnen bedreigen. In het eerste deel identificeerden we mogelijke struikelblokken zoals communicatieproblemen en gebrek aan leiderschap. Vervolgens deden we opdrachten om onze samenwerking te verbeteren. De houten puzzeluitdaging benadrukte het belang van flexibiliteit, terwijl de fysieke uitdaging met de lange stok leiderschap en communicatie testte. De puzzeluitdaging met de geblinddoekte persoon testte onze communicatie en vertrouwen. Over het algemeen leerden we het belang van samenwerking, communicatie en leiderschap binnen een team, wat ons beter voorbereidt op toekomstige projecten.
          In het begin van de stokopdracht ondervonden we wat moeite omdat niemand echt de leiding op zich nam. Maar zodra we een leider hadden aangewezen, verliep de opdracht heel vlot.
          De popsessie was zeer plezierig en leerzaam. Het bood ons de gelegenheid om ons team beter te leren kennen en om elkaars sterke en zwakke punten te identificeren. Dit heeft ons geholpen om de samenwerking binnen het team te verbeteren en om effectiever te werken aan onze gezamenlijke doelen.

          Mijn sterke punt is dat ik zeer open communiceer, maar tegelijkertijd zie ik mijn zwakte in het feit dat ik niet altijd snel het voortouw neem.
          Dit heeft veel te maken met mijn opleiding, aangezien we tijdens onze studie en zeker daarna veel met teamwerk te maken zullen hebben. Dit heeft me al enige ervaring gegeven in het werken binnen een team en zo ook te weten komen wat de valkuilen zijn binnen een team.

          Ik koos voor deze popsessie omdat het symbool stond voor het begin van een sterk team binnen het IT-project, waar open communicatie en het waarderen en accepteren van feedback centraal stonden. Dit benaderde ook onze werkwijze binnen het IT-project, wat heeft bijgedragen aan een succesvol resultaat.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PopSessiePage",
  data() {
    return {
      showDescription: null
    };
  },
  methods: {
    toggleDescription(section) {
      this.showDescription = this.showDescription === section ? null : section;
    }
  }
};
</script>

<style scoped>
*{
  font-family: "Arial Black",serif;

}

header {
  color: white;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
header button{
  margin-left: auto;
}
header::before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/popsessieHeader.png);
  background-position: bottom;
  background-size: cover;
  opacity: 0.8;
  z-index: -1;
}

header::after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  background-size: cover;
  background-color: black;
  background-position: bottom;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}

.textToggle {
  border: 2px solid white;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  background-color: #3d576b;
}

.textToggle span {
  margin-left: auto;
  margin-right: 30px;
}

.textToggle h2 {
  margin-right: auto; /* Zorgt ervoor dat de h2 zich aan de linkerkant uitlijnt */
  margin-left: 30px; /* Voegt een extra margin aan de linkerkant toe */
}



.activity {
  padding: 20px;
}

.textToggle:hover {
  cursor: pointer;
}

.description {
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}

.description p {
  margin: 0;
}

.textToggle.active {
  font-weight: bold;
}

.textToggle.active + .description {
  max-height: 500px; /* Adjust as needed */
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 50%;
}

.image-grid img {
  width: 100%;
  height: auto;
}
</style>
