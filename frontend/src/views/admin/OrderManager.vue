<style>
/* @import "@/assets/css/qldh.css"; */
</style>
<template>
  <div class="container" style="min-height: 100vh">
    <div class="row san-pham mt-4">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bold">DANH SÁCH HÓA ĐƠN</h4>
      </div>
      <div class="mb-4 text-end">
        <button type="button" class="btn btn-outline-dark rounded-0">
        <i class="fa-solid fa-plus"></i> Thêm Hóa Đơn
      </button>
        <button type="button" class="btn btn-dark rounded-0">
          Cập Nhật
        </button>
      </div>
      <table class="table table-light text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">NGÀY LẬP</th>
            <th scope="col">KHÁCH HÀNG</th>
            <th scope="col">SẢN PHẨM</th>
            <th scope="col">THÀNH TIỀN</th>
            <th scope="col">NƠI LẬP</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr>
            <th scope="row">1</th>
            <td>12/12/2022</td>
            <td class="fw-bold text-danger">Nguyễn Quốc Trạng</td>
            <td>Maybach Z300</td>
            <td>
              8.000.000.000 đ
            </td>
            <td>
              Chi nhánh 1 (Cần Thơ)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
