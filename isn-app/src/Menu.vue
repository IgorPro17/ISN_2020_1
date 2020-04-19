<template>
  <div id="app" style="height:80%; font-size: 40px">
    <div id="app" style="font-size: 40px; height: 40%; line-height: 4em">
      <img style="border-radius: 100px" src="./assets/zulfia.jpg" />
    </div>
    <p>Здравствуйте, Зульфия@mail.ru</p>
    <b-col><b-button variant="outline-dark" size="lg" id="buttonwid">ИНФОРМАЦИЯ О КОФЕЙНЕ</b-button></b-col>
    <div id="footer">
      <b-container>
        <b-row>
          <b-col><b-button variant="dark" size="lg" id="buttonwid">ВЫЙТИ</b-button></b-col>
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
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px; /* Height of the footer */
}

#buttonwid {
  min-width: 340px;
}
</style>