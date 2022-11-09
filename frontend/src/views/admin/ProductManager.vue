<template>
  <div class="container" style="min-height: 100vh">
    <div class="row san-pham mt-4">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bold">DANH SÁCH SẢN PHẨM</h4>
      </div>

      <div class="mb-4 text-end">
      <button type="button" class="btn btn-outline-dark rounded-0">
        <i class="fa-solid fa-plus"></i> Thêm Sản Phẩm
      </button>

      <button type="button" class="btn btn-dark rounded-0">
        Cập Nhật
      </button>
    </div>
      <table class="table  table-light text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">HÌNH ẢNH</th>
            <th scope="col" style="width: 50px">TÊN SẢN PHẨM</th>
            <th scope="col">LOẠI</th>
            <th scope="col">GIÁ SẢN PHẨM</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr>
            <th scope="row">1</th>
            <td class="px-0 w-25">
              <img class="m-0" src="/assets/picture/CHANEL/man/allure.webp" width="40%" />
            </td>
            <td class="px-0 w-25">Mercedes</td>
            <td>sedan</td>
            <td class="px-0 w-25 text-danger fw-bold">8.000.000.000 VNĐ</td>
            <td>
              <button type="button" class="btn btn-outline-dark me-1 px-2 rounded-0">
                <i class="fas fa-edit"></i></button>
              <button class="btn btn-dark px-2 rounded-0">
                <i class="fas fa-trash text-light"></i>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    
  </div>
</template>
