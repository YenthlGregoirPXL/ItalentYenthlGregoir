<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div>
    <header>
      <h1>Reflectie - Bus-IT Week Eindhoven</h1>
      <button @click="this.$router.push('/activities');" class="homeButton">Back</button>
    </header>

    <section class="activity">
      <h2>Internationalisering: How to stay human in a technology driven society</h2>

      <div @click="toggleDescription('omschrijving')" class="textToggle">
        <h2 >omschrijving</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'omschrijving'" class="description" ref="description">
        <p>Deze week stond in het teken van innovatie en technologie, met een bijzonder en uitdagend thema: de Smombie Run.
          Maar wat is dat nu precies? De Smombie Run is een unieke loopwedstrijd waarbij de deelnemers niet alleen hun
          fysieke vaardigheden moeten laten zien, maar ook hun multitaskingcapaciteiten op de proef worden gesteld. Tijdens
          het rennen dienen ze verschillende taken uit te voeren op hun smartphones, waardoor ze in feite een constante
          balans moeten vinden tussen concentratie op de race en aandacht voor digitale bezigheden. Dit soort race wordt
          gedaan om inzicht te scheppen over de mogelijke gevaren van gsm gebruik in het verkeer.</p>
      </div>

      <div @click="toggleDescription('verslag')" class="textToggle">
        <h2 >Verslag</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'verslag'" class="description" ref="description">
        <p>Gedurende de vijf opwindende dagen van de Smombie Run challenge bij Fontys ICT InnovationLab werden deelnemers
          ondergedompeld in een wereld van innovatie, creativiteit en bewustwording. De uitdaging begon op maandagochtend
          met een warm welkom en een introductie tot het concept van de Smombie Run, gepresenteerd door techno-filosoof Rens
          van der Vorst. Deelnemers kregen hun badges en maakten kennis met elkaar, klaar om samen te werken aan het
          ontwikkelen van deze unieke ervaring. Zondag kwamen we al aan in Eindhoven, waar we eerst tijd hadden om het hotel
          te vinden, ons comfortabel te installeren en al wat van de stad te ontdekken. We verbleven in het Blue Collar
          Hotel, op zo'n 10 minuten loopafstand van Fontys Hogeschool en op 15 minuten lopen van het centrum van Eindhoven.
          Het hoogtepunt van de eerste dag was de Concepting Workshop, waarin projectgroepen werden gevormd en ideeën werden
          gegenereerd voor het spelconcept, de digitale fysieke obstakels en de app voor deelnemers. Met de begeleiding van
          de lectoren uit Fontys begonnen we onze visies te vormen en plannen te smeden voor de dagen die voor ons lagen.
          Op dinsdag gingen we door met het verfijnen van het concept tijdens de Rapid Prototyping voor Mobile Workshop.
          Ze werden geïnspireerd door voorbeelden van gamification en verkenden manieren om het spel uitdagend en boeiend te
          maken voor de deelnemers. Tijdens de bouwtijd werden de eerste stappen gezet in de ontwikkeling van de app en
          werden ideeën uitgewisseld over de obstakels die deelnemers zouden moeten overwinnen. Op woensdagochtend werden
          de deelnemers geïnspireerd door een boeiende lezing over de sociale impact van technologie, waardoor ze dieper
          nadachten over de bredere implicaties van smartphoneverslaving. Ondertussen werkten we onvermoeibaar door aan het
          verfijnen van ons project, terwijl we onze ideeën deelden en feedback van elkaar ontvingen. De bouwtijd bood ons
          de gelegenheid om onze plannen om te zetten in concrete actie, met het oog op de uiteindelijke presentaties.
          Donderdag bracht een focus op het afronden van projecten en het voorbereiden van de teams voor de eindpresentaties.
          Na een intensieve ochtend van bouwen en finetunen, was het tijd voor een welverdiende pauze tijdens de lunch.
          In de namiddag verzamelden we voor de laatste instructies en maakten we ons op voor een verkenningstocht door
          Eindhoven, waar we de stad verkenden en teambuilding versterkten voordat we ons voorbereidde op de finale op
          vrijdag. Op vrijdagochtend begonnen we vol energie aan onze laatste voorbereidingen, wetende dat we klaar waren
          om ons werk aan de jury te presenteren. Met presentaties die de resultaten van dagen hard werken en collaboratie
          weerspiegelden, stonden we trots voor de jury en de andere aanwezigen, terwijl we onze concepten en creaties
          deelden. Na de presentaties volgde een opwindende ceremonie, waarbij prijzen werden uitgereikt aan de meest
          innovatieve en impactvolle projecten. De deelnemers ontvingen certificaten als erkenning voor hun inzet en
          bijdragen aan de Smombie Run challenge. Terwijl de dag ten einde liep, waren er hartelijke afscheidsgroeten en
          een gevoel van voldoening onder de deelnemers, wetende dat we samen iets belangrijks hadden bereikt: het bevorderen
          van bewustzijn over smartphone gebruik in het verkeer en het stimuleren van positieve verandering.</p>
      </div>

      <div @click="toggleDescription('reflectie')" class="textToggle">
        <h2 >Reflectie</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'reflectie'" class="description" ref="description">
        <p>Reflecterend op mijn ervaring tijdens de Bus-IT week in Eindhoven, kan ik met zekerheid zeggen dat het werken in
          teams, vooral met mensen die ik niet kende en het feit dat we in een andere taal moesten communiceren - Engels in
          dit geval - aanvankelijk een uitdaging vormde. Het was een situatie die ik niet eerder had ervaren, maar het bleek
          een waardevolle stap te zijn in mijn professionele ontwikkeling. De intensieve projectweek heeft me een onvergetelijke
          ervaring opgeleverd. Samenwerken met studenten van verschillende hogescholen op één project gaf me een voorproefje
          van het professionele leven. Ondanks enkele strubbelingen, vooral in de communicatie met de uitwisselingsstudent uit
          Taiwan die ons niet altijd volledig begreep, hebben we geduldig samengewerkt en hem bij het project betrokken door
          alles uit te leggen. Een belangrijke les die ik heb geleerd, is het belang van effectieve taakverdeling, vooral
          gezien de korte tijdsduur van slechts vier dagen om het project af te ronden. Dit aspect van teamwerk heeft sterke
          parallellen met de opleiding aan PXL, waar we vaak beginnen met een idee dat moet worden uitgewerkt vanaf de basis,
          zoals we dat deden tijdens het research project. Mijn rol als de enige programmeur in het team gaf me een uniek
          perspectief, waardoor ik me kon concentreren op de technische aspecten van de app en kon bepalen wat nodig was en
          wat technisch haalbaar was. Dit werd een van mijn sterkste punten tijdens de week. Ik beschouw deze ervaring als
          een van de meest opwindende en uitdagende aspecten van mijn opleiding, vooral omdat het me in staat stelde om
          samen te werken met mensen buiten mijn vertrouwde omgeving van de hogeschool. Dit is waarom ik ervoor heb gekozen
          om dit project op te nemen in mijn portfolio, als een illustratie van mijn vermogen om te gedijen in complexe en
          diverse teamomgevingen.</p>
      </div>
      <div @click="toggleDescription('Images')" class="textToggle">
        <h2 >Bewijs</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'Images'" class="description" ref="description">
        <div class="image-grid">
          <img src="../../assets/images/fontys/fontys2.png" alt="">
          <img src="../../assets/images/fontys/fontys4.png" alt="">
          <img src="../../assets/images/fontys/fontys1.png" alt="">
          <img src="../../assets/images/fontys/fontys3.png" alt="">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FontysPage",
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
  background-image: url(../../assets/images/fontys/fontysinnvation.png);
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
  margin-right: auto;
  margin-left: 30px;
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
