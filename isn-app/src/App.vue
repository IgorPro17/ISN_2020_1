<template>
  <div id="app" style="height:80%; font-size: 40px">
  <div id="app" style="font-size: 40px; height: 90%; line-height: 11em">
  <img src="./assets/starbucks.png" height="200" width="200">
  </div>
    <p>Кофе</p>
    <div id="footer">
      <b-container>
        <b-row>
          <b-col><b-button variant="outline-dark" size="lg" id="buttonwid" href="./public/login.html">Вход</b-button></b-col>
          <b-col><b-button variant="dark" size="lg" id="buttonwid">Регистрация</b-button></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .text1{
  font-size: 40px;
  }
}

#footer {
   position:absolute;
   bottom:5;
   width:100%;
   height:60px;   /* Height of the footer */
}

#buttonwid {
   min-width: 340px;
}
</style>