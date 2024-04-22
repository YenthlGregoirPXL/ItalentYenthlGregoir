<template>
  <div>
    <header>
      <button @click="this.$router.push('/');" class="homeButton">Home</button>
    </header>

    <section id="home">
      <div class="home-left">
        <img src="../assets/images/yenthlGoal.jpg" alt="">
      </div>
      <div class="home-right">
        <h2 class="home-heading">Mijn naam is Yenth’l Grégoir</h2>
        <p class="home-para">Hallo, ik ben Yenth’l Grégoir, een toegewijde 20-jarige student toegepaste informatica met afstudeerrichting Aplicatie ontwikkeling aan PXL in Hasselt.</p>
      </div>
    </section>

    <section id="futurePlans">
      <h2 class="heading">Toekomstplannen</h2>
      <p class="para">In de eerste jaren wil ik ervaring opdoen in het veld door voor een bedrijf te werken. Daarna, na een aantal jaar, wil ik de transitie maken om zelfstandig te gaan.</p>
    </section>

    <section id="strengths-and-weaknesses">
      <div class="strengths-left">
        <div class="strengths">
          <h2>Sterke punten</h2>
          <ul>
            <li>Gedreven door uitdagingen</li>
            <li>Efficiënt en resultaatgericht</li>
            <li>Actieve communicator en teamspeler</li>
          </ul>
        </div>
        <div class="weaknesses">
          <h2>Zwakke punten</h2>
          <ul>
            <li>Moeite om langdurig de concentratie vast te houden</li>
            <li>Slordig</li>
          </ul>
        </div>
      </div>
      <div class="strengths-right">
        <img src="../assets/images/yenthl2.jpg" alt="">
      </div>
    </section>

    <section id="our-Team">
      <h2>Passies</h2>
      <div class="passionsContainer">
        <div class="passion-item">
          <img src="../assets/images/YenthlZaal.jpg" alt="">
          <h5 class="passion-name">Voetbal</h5>
        </div>
        <div class="passion-item">
          <img src="../assets/images/yenthlDarts.png" alt="">
          <h5 class="member-name">Darts</h5>
        </div>
        <div class="passion-item">
          <img src="../assets/images/yenthlThemePark.jpg" alt="">
          <h5 class="member-name">Atractieparken</h5>
        </div>
      </div>
    </section>
    <footer>
      <p> &copy; 2023 - 2024 - ITalent - Yenth'l Grégoir</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutMeScreen',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: white;
}

header {
  height: 300px;
  position: relative;
}

header::before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/yenthlGoal.jpg);
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



.strengths,
.weaknesses {
  width: 48%; /* Geef beide secties bijna de helft van de ruimte */
}

.strengths,
.weaknesses {
  margin: 0 1%; /* Marge tussen de secties */
}

.strengths ul,
.weaknesses ul {
  list-style: none;
  padding: 0;
}

.strengths h2,
.weaknesses h2 {
  margin-bottom: 10px;
}
.navbar ul li {
  padding: 8px 12px;
}

.navbar ul li a {
  z-index: 2;
  color: #fff;
  position: relative;
  text-decoration: none;
}

#hamBurger {
  display: none;
}

.button {
  padding: 7px 10px;
  color: #fff;
  animation: none;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  background-color: rgb(32, 154, 202);
}

#home {
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.home-left {
  height: 300px;
  position: relative;
}

.home-left img {
  height: 100%;
  border-radius: 10px;
}

.home-right {
  width: 50%;
}

.home-heading {
  font-size: 2rem;
  margin-bottom: 10px;
}

.home-para {
  margin-bottom: 20px;
}

.btn {
  text-decoration: none;
  color: white;
  font-weight: bold;
  position: relative;
  width: 0;
}

.btn:hover::after {
  content: '';
  height: 4px;
  position: absolute;
  background-color: aqua;
  left: 0;
  bottom: -10px;
  animation: width;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  border-radius: 5px;
}

@keyframes width {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

#futurePlans {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
}

.heading {
  margin: 1rem auto;
  text-align: center;
}

.para {
  margin: 1rem auto;
}

.num-container {
  width: 70%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.num-item {
  font-size: 1.5rem;
  line-height: 1.4rem;
  color: white;
}

/* Our Goal */
#strengths-and-weaknesses {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.strengths-left {
  width: 60%;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
}

.strengths-left h2 {
  font-size: 2.4rem;
  margin-bottom: 20px;
}

.strengths-left p {
  line-height: 1.5rem;
  margin: 1rem 0;
}

.strengths-left ul {
  list-style: none;
  margin-bottom: 1rem;
}

.strengths-left ul li::before {
  line-height: 1.5rem;
  content: '✓';
  color: red;
}

.strengths-right {
  position: relative;
  width: 35%;
}

.strengths-right img {
  width: 80%;
  cursor: pointer;
  border-radius: 10px;
  filter: drop-shadow(3px 4px 5px black);
  transition: all 0.2s linear;
}

.strengths-right img:hover {
  transform: translateY(-5px);
  filter: drop-shadow(5px 6px 7px black);
}

/* Our Team */
#our-Team {
  width: 80%;
  margin: 4rem auto 1rem;
}

#our-Team h2 {
  text-align: center;
  margin: 1rem auto 4rem;
  position: relative;
}

#our-Team h2::after {
  content: '';
  height: 4px;
  margin: 0 auto;
  text-align: center;
  width: 15%;
  background-color: aqua;
  position: absolute;
  left: 50%;
  bottom: -10px;
  border-radius: 5px;
  transform: translate(-50%);
}
.passionsContainer {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.homeButton{
  width: 80px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 20px;

}
.homeButton:hover{
  cursor: pointer;
  color:darkgray;
}
.passion-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0.25rem;
}

.passion-item h5 {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.passion-item span {
  margin-top: .4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.passion-item img {
  width: 300px;
  height: 200px; /* Stel hier de gewenste hoogte in */
  object-fit: cover; /* Behoudt de aspectverhouding en vult de volledige container */
}

footer {
  padding: 1rem 0;
  text-align: center;
}

@media screen and (max-width: 784px) {
  #list {
    display: none;
  }

  #hamBurger {
    cursor: pointer;
    display: block;
    z-index: 20;
    font-size: 2rem;
  }

  .navbar .responsive {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0%;
    left: 100%;
    padding: 2rem 0;
    z-index: 2;
    height: 100vh;
    background-color: rgb(24, 23, 24);
    width: 100%;
    transition: all 0.5s linear;
    opacity: 0.9;
  }

  .navbar ul li {
    margin: 0.4rem 0;
  }

  .responsive.active {
    left: 0%;
  }

  .strengths-right {
    width: 100%;
    margin: 0 auto 2rem;
  }

  .strengths-left {
    width: 100%;
    text-align: center;
  }

  #strengths-and-weaknesses {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 633px) {
  #home {
    flex-direction: column;
  }

  .home-left {
    width: 100%;
    height: auto;
  }

  .home-left img {
    width: 100%;
  }

  .home-right {
    margin-top: 2rem;
    width: 100%;
  }

  .para {
    width: 90%;
  }

  .num-container {
    flex-direction: column;
  }

  .num-item {
    margin: 1rem;
  }

  .passionsContainer {
    justify-content: center;
  }
}
</style>
