<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div>
    <header>
      <h1>Hackaton pxl met smart ict</h1>
      <button @click="this.$router.push('/activities');" class="homeButton">Back</button>
    </header>

    <section class="activity">
      <h2>Hackaton : Buzzwatch</h2>

      <div @click="toggleDescription('omschrijving')" class="textToggle">
        <h2 >omschrijving</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'omschrijving'" class="description" ref="description">
        <p>Project Buzzwatch is een innovatief initiatief dat zich richt op het aanpakken van de problematiek rond de achteruitgang van bijenpopulaties en voedselschaarste. Het ontbreken van samenhangende meetinstrumenten en het gebrek aan bewustzijn bij gemeentelijke groendiensten hebben geleid tot een urgentie om actie te ondernemen. Het project streeft ernaar de vraag en het aanbod van voederplanten en bijenpopulaties in kaart te brengen, imkers te ondersteunen bij het optimaliseren van de plaatsing van bijenkasten, en gemeenten te voorzien van waardevolle inzichten voor het beheer van groene ruimtes.

          Tijdens de I-Talent Hackathon op 13 en 14 februari 2024 zullen teams werken aan de visualisatie van de vraag en het aanbod van bijen en stuifmeeldragers. Dit omvat onderdelen zoals het identificeren van de huidige locatie van bijenkasten (met inachtneming van privacy), het visualiseren van voedselbehoefte en stuifmeelaanbod, en het in kaart brengen van overlappingen tussen deze elementen. De eindoplevering omvat mock-ups en een prototype van een mobiele app.
        </p>
      </div>

      <div @click="toggleDescription('verslag')" class="textToggle">
        <h2 >Verslag</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'verslag'" class="description" ref="description">
        <p>Op dag 1 van ons project begonnen we met het schetsen van ideeën voor onze bijenbeschermingsapplicatie. We kwamen samen en bespraken de belangrijkste vereisten, zoals de actieradius van zowel de gebruiker als de bijenpopulatie, het gebruik van de Google Maps API voor kaarten, en de mogelijkheid van de app om voorspellingen te doen over bijensterfte tot drie maanden vooruit. Het was een productieve dag, waarin we onze gedachten de vrije loop lieten en allerlei creatieve oplossingen bedachten. Tijdens de lunch genoten we van heerlijke broodjes en konden we even ontspannen voordat we weer aan de slag gingen.
          We hadden vrij snel door dat een gehele app programmeren in 2 dagen tijd niet mogelijk is dus hebben we er voor gekozen om een werkend prototype in figma maken
          Op dag 2 gingen we verder met het ontwerpen van de app in Figma. We zetten onze ideeën om in concrete ontwerpen en werkten aan de gebruikersinterface en de gebruikerservaring. Terwijl we ons concentreerden op het visuele aspect van de app, genoten we van een smakelijke pizza als lunch. Het ontwerpproces was uitdagend maar ook bevredigend, omdat we zagen hoe onze visie langzaam vorm kreeg. We hadden discussies over de beste manier om informatie weer te geven, welke functies prioriteit moesten krijgen en hoe we de app zo gebruiksvriendelijk mogelijk konden maken voor zowel de gebruikers als de bijenpopulatie.
          Een van de belangrijkste aspecten van ons ontwerp was de focus op gebruikersbetrokkenheid en het bieden van waardevolle informatie en actiemogelijkheden. We wilden dat gebruikers zich betrokken voelden bij het beschermen van bijen en dat onze app een platform zou zijn voor educatie en actie. Daarom hebben we ervoor gezorgd dat de app niet alleen informatie biedt over bijenpopulaties, maar ook voorspellingen doet over bijensterfte en suggesties geeft voor acties die gebruikers kunnen ondernemen om bijen te helpen.
          Een ander belangrijk aspect van ons ontwerp was de gamification van de app. We besloten om een competitief element toe te voegen door een ranglijst van de top 100 gebruikers bij te houden, gebaseerd op hun bijenreddingsprestaties. Dit zou gebruikers aanmoedigen om actief deel te nemen aan het beschermen van bijen en zou een gevoel van voldoening en trots geven aan degenen die het hoogst op de ranglijst stonden.
          De app wordt niet alleen gebruikt door gewone gebruikers, maar ook door imkers zelf. Imkers kunnen via de app informatie krijgen over de locatie van hun mobiele bijenkolonie en suggesties ontvangen over waar ze deze het beste naartoe kunnen verplaatsen. De voorspellingen die de app doet, zijn hierbij zeker ook van belang.
          Aan het einde van dag 2 kregen we bezoek van een vertegenwoordiger van Plantsoon, wat een opwindend moment was voor ons team. We kregen de kans om onze ideeën te presenteren en te pitchen, wat een waardevolle gelegenheid bood om feedback te ontvangen en onze concepten te valideren. Het was een spannende ervaring om ons werk te delen met een expert uit het veld, en we waren enthousiast om te horen welke inzichten en suggesties Plantsoon voor ons had.
          Na twee dagen van intensief werken en brainstormen hadden we een solide basis gelegd voor onze bijenbeschermingsapplicatie. We waren enthousiast over de mogelijkheden en keken ernaar uit om naar de ontwikkeling van deze app in de toekomst.
        </p>
      </div>

      <div @click="toggleDescription('reflectie')" class="textToggle">
        <h2 >Reflectie</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'reflectie'" class="description" ref="description">
        <p>Het eerste wat me opvalt bij het terugkijken op deze twee dagen is hoeveel we hebben bereikt in zo'n korte tijd. We begonnen met ruwe ideeën en eindigden met een concreet prototype in Figma, waarin we onze visie op een bijenbeschermingsapplicatie tot leven zagen komen. Het was inspirerend om te zien hoe ons team samenkwam en creatieve oplossingen bedacht voor de uitdagingen die we tegenkwamen.
          Het waren twee aangename dagen waarop ons team vol energie en motivatie aan dit project begon. Wat deze dagen zo bijzonder maakte, was de sterke motivatie en betrokkenheid van alle teamleden. Iedereen bracht zijn of haar unieke vaardigheden en perspectieven mee, wat resulteerde in een creatieve en productieve samenwerking.
          In het begin vonden we het lastig om te starten omdat ons idee nogal vaag was. Maar met extra uitleg en feedback werd het steeds duidelijker wat onze taken waren. Door open communicatie en het delen van ideeën konden we stap voor stap vooruitgang boeken en een helder beeld krijgen van ons doel. We hebben geleerd flexibel te zijn en open te staan voor feedback, wat ons heeft geholpen om stapsgewijs vooruitgang te boeken, zelfs als de weg voor ons aanvankelijk niet duidelijk was.

          Mijn sterke punt binnen dit team is mijn vermogen om snel een visie te ontwikkelen van hoe de app eruit zou moeten zien. Ik kan meestal vrij snel de essentie van het project vastleggen en een duidelijk beeld krijgen van de gewenste functionaliteiten en gebruikerservaring. Aan de andere kant, mijn zwakkere punt is dat ik soms terughoudend ben om mijn initiële ideeën te veranderen, zelfs als er nieuwe inzichten of feedback worden geboden die wijzigingen rechtvaardigen. Ik werk eraan om flexibeler te worden en open te staan voor verschillende perspectieven, omdat ik weet dat dit kan leiden tot betere resultaten en een verrijking van ons werk als team.
          Ik heb dit gekozen voor mijn portfolio omdat ik dit een zeer aangename 2 dagen vond en dat ik ook heel veel hier uit geleerd heb.
        </p>
      </div>
      <div @click="toggleDescription('Images')" class="textToggle">
        <h2 >Bewijs</h2>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div v-if="showDescription === 'Images'" class="description" ref="description">
        <div class="image-grid">
          <img src="../../assets/images/Hackaton/hackaton1.png" alt="">
          <img src="../../assets/images/Hackaton/hackaton2.png" alt="">
          <img src="../../assets/images/Hackaton/hackaton3.png" alt="">
          <img src="../../assets/images/Hackaton/hackaton4.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HackatonPage",
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
  background-image: url(../../assets/images/Hackaton/hackatonHeader.png);
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
