<template>
  <div id="app" style="height:80%; font-size: 40px">
    <div id="app" style="font-size: 40px; height: 40%; line-height: 3em">
      <img src="./assets/about.png" />
    </div>
    <p>О нас</p>
    <p style="font-size: 20px;">Каждую неделю это происходит миллионы раз — гость получает свой напиток от бариста CoffeShop — но каждый такой момент уникален.</p><br>
    <p style="font-size: 20px;">Наш адрес: Улица курица, Дом петуха, Квартира цыпленка, Подъезд индюка!</p>
    <div id="footer">
      <b-container>
        <b-row>
          <b-col><b-button variant="dark" size="lg" id="buttonwid">НАЗАД</b-button></b-col>
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