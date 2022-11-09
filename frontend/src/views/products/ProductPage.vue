<style scoped>

.product:hover {
  background-color: aliceblue;
}
.type-car:hover {
    filter: invert(53%) sepia(40%) saturate(3043%) hue-rotate(158deg) brightness(90%) contrast(101%);
}
.type{
    font-weight: 600;
    margin: 20px 0;
}

.side-bar {
  border-right: 1px solid rgba(128, 128, 128, 0.3);
}
.title {
  font-size: 1.4em;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}
.btn-outline-secondary:focus,
.btn:focus,
.btn-outline-secondary.active:focus {
  box-shadow: none;
}
</style>
<template>
  <main>
    <div class="container text-left my-5">
      <h3 class="my-4">Các dòng xe Mesrcedes-Benz</h3>
      <div class="row">
        <div class="btn-group col-10" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-0 active"
            style="width: 100px"
          >
            Tất cả sản phẩm
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <img src="@/assets/svg/Mercedes-eq.svg" />
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <img src="@/assets/svg/AMG.svg" />
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <img src="@/assets/svg/MAYBACH.svg" />
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-0"
            style="width: 100px"
          >
            Các dòng xe mới
          </button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-3 side-bar">
          <div>
            <h5 class="type">Loại nhiên liệu</h5>
            <p>Điện</p>
          </div>
          <div>
            <h5 class="type">Loại thân xe</h5>
            <p class="type-car">
              <img src="@/assets/svg/Sedans.svg" width="40" />
              Sedans
            </p>
            <p class="type-car">
              <img src="@/assets/svg/SUV.svg" width="40" />
              Xe địa hình / SUV
            </p>
            <p class="type-car">
              <img src="@/assets/svg/Coupe.svg" width="40" />
              Xe Coupé
            </p>
            <p class="type-car">
              <img src="@/assets/svg/Xedadung.svg" width="40" />
              Xe đa dụng
            </p>
            <p class="fw-bold">Xem tất cả</p>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row ms-4">
            <div class="title mb-3">Sedans</div>
            <div
              class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center"
            >
              <p class="fw-bold m-0">GLC 200</p>
              <p class="text-secondary">Giá từ 4.000.000.000 đ</p>
              <p></p>
              <router-link to="/detail"
                ><img src="@/assets/Images/Mercedes_MAYBACH/iris.webp" class="py-4"
              /></router-link>
            </div>
            <div
              class="p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center product"
            >
              <p class="fw-bold m-0">GLC 200</p>
              <p class="text-secondary">Giá từ 4.000.000.000 đ</p>
              <p></p>
              <router-link to="/detail"
                ><img src="@/assets/Images/Mercedes_MAYBACH/iris.webp" class="py-4"
              /></router-link>
            </div>
            <div
              class="p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center product"
            >
              <p class="fw-bold m-0">GLC 200</p>
              <p class="text-secondary">Giá từ 4.000.000.000 đ</p>
              <p></p>
              <router-link to="/detail"
                ><img src="@/assets/Images/Mercedes_MAYBACH/iris.webp" class="py-4"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
