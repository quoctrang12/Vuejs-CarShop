<style scoped>
.title-banner {
  position: absolute;
  top: 0px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.568);
  width: 100%;
  height: 100%;
}
.title-banner .title {
  width: 400px;
  position: relative;
  top: 150px;
  left: 100px;
}
button {
  border: 0;
  border-radius: 20px;
}
</style>
<template>
  <main class="">
    <div class="container-fluid position-relative">
      <div class="row">
        <img
          src="https://www.mercedes-benz.com/en/_jcr_content/root/stage/parsys/stageitem/image/MQ6-0-image-20221017082646/22C0291_001_Stage_3400x1440.jpeg"
          alt=""
          class="p-0"
        />
      </div>
      <div class="title-banner row">
        <div class="title">
          <h4>Digital World Premiere</h4>
          <h2>EQE SUV</h2>
          <button class="bg-white py-2 px-4 fw-bold">
            <router-link class="text-decoration-none text-dark" to="/about"
              >SEE MORE <i class="fa-solid fa-chevron-right"></i
            ></router-link>
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row py-5">
        <div class="col-lg-6 d-flex flex-column">
          <div>
            <p>Vehicles</p>
            <h2>50 years of the 116 series.</h2>
          </div>
          <div class="mt-5">
            <img
              src="https://www.mercedes-benz.com/en/design/sensual-purity/_jcr_content/image/MQ6-12-image-20221018164454/06_Design_showcars_portfolio_2022_220609_5_2d_final.png"
              alt=""
              class="w-100"
            />
          </div>
          <div class="mt-auto">
            <p>
              These are the powerful attributes of the S-Class. The first luxury
              saloon to bear this name made its debut 50 years ago: a new star
              was born! The abbreviation stands for “special class”, but could
              just as well symbolise “style” or “star”. Today, the Mercedes-Benz
              116 series inspires people just as much as it did in 1972.
            </p>
            <button class="bg-dark text-white py-2 px-4 fw-bold mt-4">
              Find out more <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <img
            src="https://www.mercedes-benz.com/en/_jcr_content/root/editorialhighlight/image/MQ7-0-image-20220722124103/mercedes-benz-home-teaser-classic-w116-1570x2784-08-2022.jpeg"
            alt=""
            class="w-75 mx-auto"
          />
        </div>
      </div>
    </div>
    <div style="background-color:black;" class="text-white py-5">
      <div class="container" >
      <div class="row">
        <div class="col-md-6">
          <p>Vehicles</p>
          <h4>The G-Class: For those who live forever.</h4>
          <img
            src="https://www.mercedes-benz.com/en/_jcr_content/root/teasertiles_203628856/parsys/teasertilesitem_1257186820/image/MQ6-0-image-20220722090758/mercedes-benz-home-teaser-concept-eqg-954X1268-08-2022.jpeg"
            alt=""
            style="width: 85%"
          />
        </div>
        <div class="col-md-6 mt-auto">
          <p>Sustainability</p>
          <h4>
            The most valuable car of the world sold for a record price to
            benefit the Mercedes-Benz Fund.
          </h4>

          <img
            src="https://www.mercedes-benz.com/en/_jcr_content/root/teasertiles_203628856/parsys/teasertilesitem_1041760803/image/MQ6-0-image-20220722090509/mercedes-benz-home-teaser-coupe-300-slr-01-1344x756-08-2022.jpeg"
            alt=""
            style="width: 100%"
          />
        </div>
      </div>
    </div>
    </div>
    <div class="container-fluid position-relative">
      <div class="row">
        <img
          src="https://www.mercedes-benz.com/en/_jcr_content/root/stage/parsys/stageitem_1441300015/image/MQ6-0-image-20220722084958/mercedes-benz-home-stage-project-maybach-3840x2160-08-2022.jpeg"
          alt=""
          class="p-0"
        />
      </div>
      <div class="title-banner row">
        <div class="title" style="top: 250px">
          <h2>Project MAYBACH</h2>
          <button class="bg-white py-2 px-4 fw-bold">
            <router-link class="text-decoration-none text-dark" to="/about/1"
              >Discover now <i class="fa-solid fa-chevron-right"></i
            ></router-link>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script></script>
