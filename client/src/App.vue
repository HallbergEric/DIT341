<template>
<body>
  <div id="app" class = "background">
    <div id="app2">
      <div class=container>
        <!--Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row mrg">
          <div class="col-md-2 col-sm-6"> <router-link class="whiteColor greyBgColor boxSize"  to="/">Home  </router-link></div>
          <div class="col-md-2 col-sm-6"> <router-link class="whiteColor greyBgColor boxSize"  to="/accounts">Account  </router-link> </div>
          <div class="col-md-2 col-sm-6"> <router-link class="whiteColor greyBgColor boxSize"  to="/stories">Story  </router-link> </div>
          <div class="col-md-2 col-sm-6"> <router-link class="whiteColor greyBgColor boxSize"  to="/reviews">Review  </router-link> </div>
          <div class="col-md-2 col-sm-6"> <router-link class="whiteColor greyBgColor boxSize"  to="/about">About  </router-link> </div>
      </div></div>
    </div>

    <router-view/>

  </div>
</body>
  <!-- </div> -->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  border-radius: 3px;
}

.boxSize {
  display: inline-block;
  width: 120px;
}

.mrg {
  padding: 15px;
  font-size: 25px;
}

.whiteColor {
  color: white;
}

.greyBgColor {
  background-color: #303030;
  border-radius: 3px;
}

.greyBgColor2 {
  background-color: #808080;
}

h2 {
    font-size: 25px;
    color: rgb(128, 193, 255);
}

.align {
  align-content: center;
}
.alignl {
  text-align: left;
}
.alignr {
  text-align: right;
}
.containerBox {

  margin: 5% auto;
 background-color : #4e4a49;
 padding: 2%;
}
 .formbox{margin: 8% auto; padding: 10%;}

.background {
  background-color:#252424 ;
position:fixed; width: 100%; height: 100%; overflow-y: scroll;
}
.buttonStyle {
margin: 10px;
}
* {
  border-radius: 10px;
}
</style>
