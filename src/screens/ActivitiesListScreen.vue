<template>
  <button @click="this.$router.push('/');" class="homeButton">Home</button>
  <div class="activities-screen">
    <h1 class="page-title">Activiteiten</h1> <!-- Titel "Activiteiten" bovenaan het scherm -->

    <div class="container">
      <div class="sorting-options">
        <div class="select-container">
          <label>Sorteer op academiejaar:</label>
          <select id="year-sort" v-model="selectedYear">
            <option value="all">Alle jaren</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
          </select>
        </div>
        <div class="select-container">
          <label>Sorteer op soort:</label>
          <select id="type-sort" v-model="selectedType">
            <option value="all">Alle soorten</option>
            <option value="Seminaries">Seminaries</option>
            <option value="Innovatie">Innovatie</option>
            <option value="Persoonlijke ontwikkeling">Persoonlijke ontwikkeling</option>
            <option value="Internationalisering">Internationalisering</option>
          </select>
        </div>
      </div>
    </div>

    <div class="activity-cards">
      <activity-card
          v-for="activity in filteredActivities"
          :key="activity.id"
          :activity="activity"
      />
    </div>


    <h2 class="ChosenActivitiesTitle">Gekozen Activiteiten</h2>
    <div class="activity-cards">
      <activity-card
          v-for="activity in chosenActivities"
          :key="activity.id"
          :activity="activity"
      />
    </div>
  </div>
</template>

<script>
import ActivityCard from '../components/ActivityCard.vue';

export default {
  components: {
    ActivityCard,
  },
  data() {
    return {
      activities: [
          {
        domain: 'Persoonlijke ontwikkeling',
        title: 'Projctweek 2TIN',
        description: 'Deze week stond in het teken van kennismaking met je team voor het research project. Daarnaast waren er verschillende sessies, waaronder die over LinkedIn en over de persoonlijkheden binnen het team.',
        location: 'PXL',
        date: '13/02/2023 - 17/02/2023',
        duration: '27 uur',
        image: "personal.png"
      },
        {
          domain: 'Persoonlijke ontwikkeling',
          title: 'POPsessie : POPping',
          description: 'Hier zaten we samen met ons research project team en voerden opdrachten uit waarbij we elkaar vragen stelden, onszelf voorstelden en ook onze kwaliteiten binnen het ',
          location: 'Digital PXL - B122',
          date: '21/02/2023',
          duration: '2 uur',
          image: "personal.png"
        },
        {
          domain: 'Persoonlijke ontwikkeling',
          title: 'POPsessie : brein aan het werk niet storen',
          description: 'Dit was een sessie over het bewustzijn rond het gebruik van technologie in ons dagelijks leven, waarbij we hebben besproken wanneer en hoeveel we technologie gebruiken. Ook hebben we situaties besproken waarin het gebruik van onze mobiele telefoon bijvoorbeeld niet gepast is, zoals tijdens de les of tijdens het studeren.',
          location: 'Digital PXL - B123',
          date: '21/02/2023',
          duration: '2 uur',
          image: "personal.png"
        },
        {
          domain: 'Seminaries',
          title: 'Accenture: Prototyping van een full-stack applicatie',
          description: '\n' +
              'Tijdens het Accenture-seminarie hebben we de mogelijkheid gekregen om een basisapplicatie te ontwikkelen met Flutter, een krachtig framework voor het bouwen van cross-platform mobiele apps. Na het ontwikkelingsproces hebben we de opgedane kennis toegepast om onze Flutter-applicatie te hosten op AWS, Amazon Web Services. Dit bood ons niet alleen een praktische ervaring met het bouwen van apps, maar gaf ook inzicht in het gebruik van cloudservices zoals AWS voor het hosten en schalen van onze applicaties.',
          location: 'Digital PXL - G414',
          date: '28/02/2023',
          duration: '3 uur',
          image: "seminarie.png"
        },
        {
          domain: 'Seminaries',
          title: 'Cegeka: The Challenge of Open Source',
          description: '\n' +
              'Tijdens het seminarie van Cegeka, genaamd "The Challenge of Open Source", hebben we diepgaand begrip ontwikkeld over het concept van open source, inclusief zijn oorsprong en evolutie. Daarnaast hebben we inzicht gekregen in de specifieke benadering van open source binnen Cegeka en hoe dit bedrijf deze waardevolle bronnen effectief benut in zijn ontwikkelingspraktijken.',
          location: 'Digital PXL - G414',
          date: '28/03/2023',
          duration: '3 uur',
          image: "seminarie.png"
        },
        {
          domain: 'Seminaries',
          title: 'Infosupport: Reactive Programming',
          description: 'Tijdens het seminarie van Infosupport genaamd "Reactive Programming" kregen we stapsgewijs inzicht in het gebruik van TypeScript en lieten ze ons de voornaamse verbeteringen en verschillen ten opzichte van javascript zien aan de hand van een muziekapplicatie',
          location: 'Digital PXL - G414',
          date: '25/04/2023',
          duration: '3 uur',
          image: "seminarie.png"
        },
        {
          domain: 'Seminaries',
          title: 'Sopra Steria: AI: Chatbot',
          description: 'Tijdens het seminarie van Sopra Steria, getiteld "AI: Chatbot", kregen we inzicht in wat AI inhoudt, hoe een AI-chatbot wordt ontwikkeld en getraind, en werden we uitgedaagd om zelf aan de slag te gaan met het trainen van een eenvoudige AI-chatbot.',
          location: 'Digital PXL - G412a',
          date: '16/05/2023',
          duration: '3 uur',
          image: "seminarie.png"
        },
        {
          domain: 'Innovatie',
          title: 'InnovatieRoute DDD',
          date: '28/09/2023 - 12/10/2023',
          location: 'Digital PXL - G514',
          description: 'In deze innovatieve reis hebben we gedurende 4 weken de principes van Domain-Driven Design (DDD) verkend. In de eerste week lag de focus op het afbakenen van domeinen en het identificeren van wat bij elk domein hoort. De daaropvolgende 3 weken stonden in het teken van hands-on ervaring, waarbij we zelf aan de slag gingen met het coderen op een manier die consistent is met de principes van DDD.',
          duration: '25 uur',
          image:"innovation.png"
        },
        {
          domain: 'Seminaries',
          title: 'AE: Application observability',
          date: '08/11/2023',
          location: 'digital PXL',
          description: 'AE (Application Observability) is een seminarie gericht op het verbeteren van de monitoring en traceerbaarheid van applicaties. Tijdens deze sessie kregen we niet alleen inzicht in de theoretische aspecten, maar kregen we ook praktische demonstraties over hoe deze concepten in de praktijk worden toegepast.',
          duration: '3 uur',
          image: "seminarie.png"
        },
        {
          domain: 'Seminaries',
          title: 'Cegeka: Dark launches and gradual release',
          date: '15/11/2023',
          location: "digital PXL",
          description: 'Het seminarie "Cegeka: Dark launches and gradual release" belicht de implementatie van dark launches en gradual release in softwareontwikkeling, waarbij nieuwe functies stapsgewijs worden geïntroduceerd om risico\'s te minimaliseren en feedback te verzamelen.',
          duration: '3 uren',
          image: 'seminarie.png'
        },
        {
          domain: 'Seminaries',
          title: 'ACA group: From Hello World to Hello Work',
          date: '13/12/2023',
          location: 'Digital PXL - B124',
          description: 'Deze seminarie van ACA Group, getiteld "From Hello World to Hello Work", behandelde het verschil tussen programmeren in het bedrijfsleven en op school. Tijdens de sessie kregen we de kans om hands-on te werken, waarbij we bugs uit code moesten halen en een nieuwe functie moesten toevoegen.',
          duration: '3 uur',
          image: 'seminarie.png'
        },
        {
          domain: 'Seminaries',
          title: 'GEANNULEERD SEMINARIE HARMONY',
          date: '10/01/2024',
          location: 'Digital PXL - B124',
          description: 'Laatste seminarie werd geannuleerd, geen optie om extra seminaries te volgen',
          duration:'3 uur',
          image: 'seminarie.png'
        },

      ],
      chosenActivities: [
        {
          domain: 'Internationalisering',
          title: 'How to stay human in a technology driven society?',
          date: '08/05/2023 - 12/05/2023',
          location: 'Fontys ICT InnovationLab Eindhoven',
          description: '',
          duration:'40 uur',
          image: 'fontys.png',
          route: "fontys",
        },
        {
          domain: 'Innovatie',
          title: 'Innovatie - Hackathon',
          date: '13/02/2024 - 14/02/2024',
          location: 'Corda Campus AI Hub',
          description: "Tijdens deze hackathon werkten we twee dagen aan het project Buzzwatch, waarbij we ideeën bedachten voor een app om bijenpopulaties te ondersteunen en voedselbronnen te identificeren. We hebben een prototype van deze app gemaakt in Figma.",
          duration: '25 uur',
          image:"innovation.png",
          route: "hackaton",

        },
        {
          domain: 'Persoonlijke ontwikkeling',
          title: 'POPsessie :My Team and I',
          date: '11/10/2023',
          location: 'Corda Campus ISpace',
          description: 'Tijdens deze POP-sessies analyseerden we eerst potentiële problemen binnen een groep en bespraken we hoe we hiermee om konden gaan. Vervolgens voerden we opdrachten uit om de samenwerking binnen het team te bevorderen.',
          duration: '2 uur',
          image: "personal.png",
          route: "popsessie",
        },
      ],
      selectedYear: 'all',
      selectedType: 'all',


    };
  },
  computed: {
    filteredActivities() {
      return this.activities.filter(activity =>
          (this.selectedYear === 'all' || this.getAcademicYear(activity.date) === this.selectedYear) &&
          (this.selectedType === 'all' || activity.domain === this.selectedType)
      );
    },
  },
  methods: {
    getAcademicYear(fullDate) {

      const multipleDates = fullDate.split('-');
      if(multipleDates.length > 1){
        if (!fullDate) return 'Geen jaar';
        const split = multipleDates[0].split('/');
        console.log(split)
        return (parseInt(split[1]) < 9 && parseInt(split[2]) === 2023) || (parseInt(split[2]) === 2022) ? '2022-2023' : '2023-2024';
      }

      if (!fullDate) return 'Geen jaar';
      const split = fullDate.split('/');
      console.log(split)
      return (parseInt(split[1]) < 9 && parseInt(split[2]) === 2023) || (parseInt(split[2]) === 2022) ? '2022-2023' : '2023-2024';
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #20262c;
}

.activities-screen {
  padding: 20px;
  color: white;
  font-family: "Arial Black",serif;
}

.sorting-options {
  margin-bottom: 20px;
}

.activity-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.activity-card {
  width: calc(100% - 40px);
  margin: 0 auto;
}
select {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #508090;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

select:hover {
  background-color: #3d576b;
}

select:focus {
  outline: none;
  background-color: #3d576b;
}
.page-title {
  font-size: 50px;
  margin-bottom: 40px;
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
}

.sorting-options {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.select-container {
  margin-right: 45px;
}
label{
  margin-right: 10px;
}

.ChosenActivitiesTitle{
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
}
</style>

