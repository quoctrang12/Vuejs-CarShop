<style scoped>
@import "@/assets/css/detail.css";
*{
  background-color: black;
  color: white;
}
.banner-title {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.title {
  position: relative;
  top: 100px;
  left: 100px;
  width: 300px;
  background-color: transparent;
}
.title *{
  background-color: transparent;
}
.title h4 {
  font-size: 2em;
}

.btn {
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.815);
  color: aliceblue;
}

.img-title {
  font-size: 1em;
  font-weight: 600;
  margin-top: 20px;
}

h6 {
  border-bottom: 1px solid black;
  width: fit-content;
}
</style>
<template>
  <main>
    <div class="container-fluid mb-5 position-relative">
      <div class="row">
        <img src="@/assets/Images/Mercedes_G_Class/1.jpeg" class="p-0" />
      </div>
      <div class="banner-title row">
        <div class="title">
          <h4>Mercede G-Class</h4>
          <h5>Mạnh mẽ vượt thời gian</h5>
          <p class="fw-bold mt-4">
            Giá: 10.950.000.000 <i class="fa-solid fa-dong-sign"></i>
          </p>
          <div class="mt-5">
            <button class="btn">
              <i class="fa-solid fa-heart"></i>
              Add to favorite
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="mb-5">
          <h6>Điểm nổi bật</h6>
          <h5>
            Nhiều năm về trước, các kỹ sư ở Graz đã phát triển một dòng xe mới.
          </h5>
          Một dòng xe địa hình đầy tính biểu tượng: mạnh mẽ và trường tồn. Các
          bộ phận trên xe được thiết kế từ ngày trước vẫn<br />
          tiếp tục thực hiện các chức năng tương tự cho đến ngày nay. Đó là sự
          khác biệt của G-Class qua nhiều thế hệ.
        </div>
        <div class="row">
          <video class="w-100" controls autoplay muted loop>
            <source
              src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/g-class/suv-w463/explore/highlights/_jcr_content/mediabox/elements/mediaboxelement_bf48/asset.video.20190412150942.mp4"
              type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="my-5">
        <div class="mb-5">
          <h6>Thiết kế</h6>
          <h5>Thiết kế nói lên tất cả.</h5>
          Độc nhất vô nhị hơn 40 năm: không gì sánh bằng G-Class ngoài G-Class.
          Ngoại thất và nội thất không chỉ độc nhất - với<br />
          G manufaktur mới, cá tính của bạn được phản ánh theo cách nổi bật.
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/Images/Mercedes_G_Class/6.webp" style="width: 100%" />
            <p class="img-title">Khám phá ngoại thất</p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/Images/Mercedes_G_Class/7.webp" style="width: 100%" />
            <p class="img-title">Khám phá nội thất</p>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Tiện nghi</h6>
          <h5>Đẳng cấp thương gia</h5>
          Sự hoàn mỹ trong phong cách di chuyển thời thượng chính là chuẩn mực
          của Mercedes-Maybach S-Class.<br />
          Lịch lãm, sang trọng cùng trang bị tiện nghi đẳng cấp mang đến những
          trải nghiệm lái độc đáo khó quên
        </div>
        <div class="row">
          <div class="col-md-5">
            <p class="h4 ps-4">Tiện nghi nổi bật</p>
            <ul style="font-weight: 600">
              <li>Bộ ghế điều chỉnh đa hướng chủ động</li>
              <li>Hộp số AMG SPEEDSHIFT 9G-TRONIC</li>
              <li>Hệ thống treo với bộ giảm xóc thích ứng</li>
              <li>Chức năng khởi động bằng nút bấm Keyless-Start</li>
              <li>Cổng chờ lắp rơ moóc</li>
              <li>Kính màu tối cách nhiệt và chống ồn</li>
              <li>Buồng lái màn hình rộng</li>
              <li>COMAND Online với màn hình 12,3 inch</li>
              <li>Điều khiển bằng giọng nói LINGUATRONIC</li>
              <li>Hiển thị nhiệt độ bên ngoài</li>
              <li>Hệ thống sưởi ghế ở hàng ghế trước và sau</li>
              <li>Hệ thống âm thanh vòm Burmester®</li>
              <li>Touchpad điều khiển cảm ứng trên bệ trung tâm</li>
              <li>Định vị GPS tích hợp bản đồ Việt Nam</li>
              <li>Đèn viền nội thất với 64 màu và 10 cách phối màu</li>
              <li>Điều hoà khí hậu tự động 3 vùng THERMOTRONIC</li>
            </ul>
          </div>
          <div class="col-md-7">
            <img src="@/assets/Images/Mercedes_G_Class/8.jpeg" style="width: 100%" />
          </div>
        </div>
      </div>
      <div class="">
        <div class="mb-5">
          <h6>Thông số</h6>

          <h5>Nổi bật ở bất cứ đâu.</h5>
          Định hình nên G-Class chính là hiệu suất off-road vượt trội. G-Class
          luôn dẫn đầu về khả năng leo dốc, vượt nước và<br />
          vượt góc nghiêng dốc.
        </div>
        <div class="row">
          <div class="col-md-5">
            <p class="pb-3">Khả năng leo núi</p>
            <h2 class="pb-3">Lên đến 100%</h2>
            <hr />
            <p class="pb-3">Vượt nước tối đa</p>
            <h2 class="pb-3">đến 70cm</h2>
            <hr />
            <p class="pb-3">Góc nghiêng dốc</p>
            <h2 class="pb-3">lên đến 70%</h2>
          </div>
          <div class="col-md-7">
            <img src="@/assets/Images/Mercedes_G_Class/9.webp" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
