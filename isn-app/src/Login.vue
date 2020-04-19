<template>
  <div id="app" style="height:80%; font-size: 40px">
  <!--<div id="app" style="font-size: 40px; height: 90%; line-height: 11em">-->
  <!--</div>-->
    <p>Вход</p>
    <div class="input_text">
      <b-container fluid>
        
        <b-row class="my-1">
          <b-col>
            <b-form-input id="input-small" placeholder="Email адрес" style="max-width: 340px; margin:auto;"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-2">
          <b-col>
            <b-form-input type="password" id="input-small" placeholder="Пароль" style="max-width: 340px; margin:auto;"></b-form-input>
          </b-col>
        </b-row>

      </b-container>
    </div>
    <div id="footer">
      <b-container>
        <b-row>
          <b-col><b-button variant="outline-dark" size="lg" id="buttonwid">Войти</b-button></b-col>
          <b-col><b-button variant="dark" size="lg" id="buttonwid">Назад</b-button></b-col>
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

.input-text{
  margin-left: 30%;
}
</style>