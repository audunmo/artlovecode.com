<template>
  <div class="bg-image-fill text-center">
    <div class="background-dark circle text-white hero">
      <h1 class="hero-title">
        AUDUN BJØRNERUD MO
      </h1>
      <h2 class="hero-sub-title">
        Software engineer
      </h2>
      <div class="hero-links">
        <a href="https://medium.com/@audun.b.mo">blog</a>
        <span class="bar">
          /
        </span>
        <a href="/portfolio">portfolio</a>
        <span class="bar">
          /
        </span>
        <a href="/talks">talks</a>
        <span class="bar">
          /
        </span>
        <a href="https://twitter.com/artlovecode">twitter</a>
      </div>
    </div>
  </div>
</template>

<style>
.background-dark {
  background: #1c3450;
}

.bar {
  font-family: arial;
}

.circle {
  margin: auto;
  width: 500px;
  height: 500px;
  border-radius: 50%;
}

.text-white {
  color: #fbf6ed;
}

@font-face {
  font-family: 'BaskervilleItalic';
  src: url(../static/baskervville.italic.ttf) format('truetype');
}

.hero {
  font-family: 'BaskervilleItalic';
}

.hero .hero-title {
  font-weight: bold;
  margin-top: 200px;
}

.hero .hero-sub-title {
  font-weight: bold;
  font-size: 15px;
}

.hero .hero-links {
  margin-top: 50px;
}

.hero .hero-links a {
  font-decoration: none;
  color: #d2e5dd;
}

a:visited {
  color: #d2e5dd;
}

.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-image-fill {
  background: url(../static/wave_off_kanagawa_pixelated.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* Height and width fallback for older browsers. */
  height: 100%;
  width: 100%;

  /* Set the height to match that of the viewport. */
  height: 100vh;

  /* Set the width to match that of the viewport. */
  width: 100vw;

  /* Remove any browser-default margins. */
  margin: 0;
  filter: grayscale(10%);
  background-blend-mode: saturation;
}
</style>

<script>
export default {
  head: {
    bodyAttrs: {
      style: 'height: 100%; margin: 0; background: #FEFEFA'
    }
  }
}
</script>
