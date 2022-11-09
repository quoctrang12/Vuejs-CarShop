<style scoped>
@import "@/assets/css/detail.css";
.banner-title {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: beige;
}
.title {
  position: relative;
  top: 100px;
  left: 100px;
  width: 300px;
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
</style>
<template>
  <main>
    <div class="container-fluid mb-5 position-relative">
      <div class="row">
        <img src="@/assets/Images/Mercedes_MAYBACH/z223.webp" class="p-0" />
      </div>
      <div class="banner-title row">
        <div class="title">
          <h4>Mercedes-Maybach S-Class</h4>
          <h6>Định nghĩa một tuyệt tác</h6>
          <p class="fw-bold mt-4">Giá: 8.199.000.000 <i class="fa-solid fa-dong-sign"></i></p>
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
          <p>Điểm nổi bật</p>
          <h5>Vượt tầm kiệt tác</h5>
          Hoàn mỹ trong việc lựa chọn chất liệu đến sự tinh tế của từng đường
          chỉ may tương phản đầy ấn tượng, <br />Mercedes-Maybach S-Class mới
          tái thiết chuẩn mực sang trọng.<br />
          Trợ lý cá nhân MBUX với những công nghệ ưu việt đánh dấu khởi nguyên
          của một trải nghiệm lái xe bậc nhất.
        </div>
        <div class="row">
          <div class="col-md-6">
            <div
              class="row justify-content-end ms-auto mb-5"
              style="width: 75%"
            >
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-1.webp" />
              <p class="img-title">
                Thiết kế mâm xe mang dấu ấn Mercedes-Maybach độc quyền.
              </p>
            </div>
            <div class="row mb-5">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-2.webp" />
              <p class="img-title">
                Ốp gỗ nội thất designo màu nâu với các đường viền aluminium
                trang trí độc đáo.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-5">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-3.webp" />
              <p class="img-title">
                Tuyên ngôn của thiết kế duy mỹ với các chi tiết mạ crôm sang
                trọng.
              </p>
            </div>
            <div class="row mb-5" style="width: 60%">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-4.webp" />
              <p class="img-title">
                Trực quan tối ưu với hệ thống thông tin giải trí MBUX cho hàng
                ghế sau.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <p>Thiết kế</p>
          <h5>Sang trọng thuần khiết</h5>
          Vẻ lịch lãm truyền thống cùng tiện nghi hiện đại bậc nhất được thể
          hiện ở mọi góc độ. Khả năng vận hành<br />
          vượt trội của chiếc xe gây ấn tượng mạnh ngay từ cái nhìn đầu tiên.
        </div>
        <div class="row">
          <div class="col-md-6">
            <img
              src="@/assets/Images/Mercedes_MAYBACH/z223-5.webp"
              style="width: 100%"
            />
            <p class="img-title">Vè thiết kế ngoại thất</p>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/Images/Mercedes_MAYBACH/z223-6.webp"
              style="width: 100%"
            />
            <p class="img-title">Về thiết kế nội thất</p>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <p>Tiện nghi</p>
          <h5>Đẳng cấp thương gia</h5>
          Sự hoàn mỹ trong phong cách di chuyển thời thượng chính là chuẩn mực
          của Mercedes-Maybach S-Class.<br />
          Lịch lãm, sang trọng cùng trang bị tiện nghi đẳng cấp mang đến những
          trải nghiệm lái độc đáo khó quên
        </div>
        <div class="row">
          <div class="col-md-7">
            <img
              src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/comfort-teaser/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ4.0.20210823072935.jpeg"
              style="width: 100%"
            />
          </div>
          <div class="col-md-5">
            <p class="h4 ps-4">Tiện nghi nổi bật</p>
            <ul style="font-weight: 600">
              <li>
                Hệ thống giải trí MBUX thế hệ mới với màn hình cảm ứng trung tâm
                12,8-inch công nghệ OLED.
              </li>
              <li>
                Chức năng điều khiển bằng cử chỉ MBUX Interior Assistant cho
                hàng ghế trước và hàng ghế sau.
              </li>
              <li>
                Gói trang bị Warmth Comfort với chức năng sưởi ấm cho tựa tay ở
                cửa trước và sau, tựa tay trung tâm phía trước và vô lăng.
              </li>
              <li>
                Chức năng sưởi ấm cổ và vai cho hàng ghế sauHệ thống lọc không
                khí, bụi bẩn và vi khuẩn cao cấp ENERGIZING AIR CONTROL.
              </li>
              <li>Cửa sau đóng mở bằng điện.</li>
              <li>
                Kính an toàn nhiều lớp cao cấp với chức năng cách âm, cách nhiệt
                & phản xạ tia hồng ngoại.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <p>Thông số</p>
          <h5>Công suất vượt trội cho trải nghiệm độc đáo.</h5>
          Động cơ của Mercedes-Maybach S-Class: kiệt tác của tinh hoa công nghệ
          Đức. <br />Đó là sự kết hợp hài hoà giữa khả năng di chuyển êm mượt và
          hiệu suất lái vượt trội.
        </div>
        <div class="row">
          <div class="col-md-5">
            <p class="pb-3">Công suất cực đại</p>
            <h2 class="pb-3">463 kW (630 HP)</h2>
            <p class="pb-3">tại 5000 vòng/phút</p>
            <hr />
            <p class="pb-3">Động cơ</p>
            <h2 class="pb-3">V12</h2>
          </div>
          <div class="col-md-7">
            <img
              src="https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/specifications-teaser/_jcr_content/par/imagenumbercombinati/media/videoimageslide/image.MQ4.0.20210823072937.jpeg"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
