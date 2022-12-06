<template>
    <main class="container_body container">
      <div
        class="container_body-main border d-flex justify-content-center align-items-end"
      >
        <div class="container_body-child text-center my-5">
          <h5>Digital World Premiere</h5>
          <h4>EQE SUV</h4>
          <p class="bg-white py-2 fw-bold">
            <router-link class="text-decoration-none text-dark" to="/detail/album/MercedesMaybach"
              >SEE MORE</router-link
            >
          </p>
        </div>
      </div>
      <h3 class="text-center fw-bold pt-5 pb-3">New Mercedes-AMG EQE SUV</h3>
  
      <div class="list mx-5 mb-5">
        <p class="text-">Design</p>
        <h3 class="fw-bold py-3">New levels of Modern Luxury.</h3>
        The EQE SUV from Mercedes-EQ. The clean lines emphasise progressive
        dynamics and sporty proportions, accompanied by sensual clarity and
        seamless transitions. Inside, the MBUX Hyperscreen and digital colour
        worlds set emotional accents, assisted by high-quality trim elements and a
        generous sense of space. Driving assistance systems, intelligent
        navigation and excellent noise comfort make even long distances an
        extremely relaxing affair.
      </div>
      <div class="container-fluid pb-5">
        <div class="row first-row justify-content-center">
          <div class="col">
            <img
              class=" w-100"
              src="@/assets/Images/banner/mercedes-eq-eqe-suv.jpg"
            />
            <div class="text-center first-row--child align-center">
              <p>The new Mercedes-AMG EQE SUV.</p>
              <router-link to="#" class="text-decoration-none text-dark"
                >DISCOVER MORE
                <i class="fas fa-angle-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="pb-5">
          <p class="fw-bold pb-3">Electrifying clarity.<br/></p>
  
          The new EQE SUV has space for five passengers, offering innovative
          comfort, high flexibility and generous load volume. Including all the
          other benefits of an SUV from Mercedes-Benz. The energetic silhouette,
          the purist exterior and the luxurious interior with digital cockpit -
          including the pioneering MBUX Hyperscreen.
          <p>Exterior</p>
  
          <h3 class="fw-bold py-3">This is how character shows itself today.</h3>
          Equipped with distinctive design, the new EQE SUV features the highest
          standards of function and aerodynamics. Its dynamic proportions
          reinforce this impression and powerfully refer to generously modelled
          surfaces, reduced joints and seamless transitions. This is what it looks
          like when EQE meets SUV.
        </div>
        <div class="row">
          <div class="background">
            <video
              class="d-block"
              id="video_background"
              preload="auto"
              autoplay="true"
              muted
              volume="0"
            >
              <source
                src="https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/eqe/suv-x294-pi/pad/highlights/10-2022/videos/mercedes-eq-eqe-suv-x294-highlights-product-film-3302x1858-10-2022.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div>
          <p>Interior</p>
  
          <h3 class="fw-bold py-3">More than an SUV. A trailblazer.</h3>
          The new EQE SUV presents itself as a pioneering all-rounder in the fully
          electric luxury SUV segment. Uncompromisingly visionary, powerfully
          electric - and with a range suitable for long journeys. Enjoy the
          next-generation driving experience today: sporty, luxurious and
          consistently digitally connected. The impressive MBUX Hyperscreen adds
          to this ultra-modern interior.
        </div>
        <div class="row d-flex justify-content-center second-row">
          <div class="col-3 first-child stories-1">
            <p class="align-items-end">
              <router-link class="text-decoration-none text-dark" to="#"
                >Tail lamp elements in 3D helix design.</router-link
              >
            </p>
          </div>
          <div class="col-3 first-child stories-2">
            <p class="align-items-end">
              <router-link class="text-decoration-none text-dark" to="#"
                >Flush-fitting door handles</router-link
              >
            </p>
          </div>
          <div class="col-3 first-child stories-3">
            <p class="align-items-end">
              <router-link class="text-decoration-none text-dark" to="#">
                Black panel radiator grille with Mercedes-Benz
                pattern.</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </main>
  </template>
  <style scoped>
  .stories-1 {
    background-image: url(src/assets/Images/Banner/1.webp);
    background-position: center;
    background-size: 200%;
  }
  .stories-2 {
    background-image: url(src/assets/Images/Banner/2.webp);
    background-size: 200%;
    background-position: center;
  }
  .stories-3 {
    background-image: url(src/assets/Images/Banner/3.webp);
    background-size: 200%;
    background-position: center;
  }
  </style>
  