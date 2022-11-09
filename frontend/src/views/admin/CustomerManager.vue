<template>
  <div class="container" style="min-height: 100vh">
    <div class="row san-pham mt-4">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bold">DANH SÁCH NGƯỜI DÙNG</h4>
      </div>
      <div class="mb-4 text-end">
        <button type="button" class="btn btn-outline-dark rounded-0">
          <i class="fa-solid fa-plus"></i> Thêm Người Dùng
        </button>
        <button type="button" class="btn btn-dark rounded-0">
          Cập Nhật
        </button>
      </div>
      <table class="table table-light table-hover text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">HỌ TÊN</th>
            <th scope="col">SỐ ĐIỆN THOẠI</th>
            <th scope="col">EMAIL</th>
            <th scope="col">USERNAME</th>
            <th scope="col">THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nguyễn Quốc Trạng</td>
            <td>013346799</td>
            <td>TrangB1910467@student.ctu.edu.vn</td>
            <td>quoctrang12</td>
            <td><button type="button" class="btn btn-outline-dark me-1 px-2 rounded-0">
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
