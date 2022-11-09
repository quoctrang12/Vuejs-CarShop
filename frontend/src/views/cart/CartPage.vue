<style>
@import "@/assets/css/cart.css";
</style>
<template>
  <main>
    <div class="container-fluid px-0 m-0 position-sticky free-ship" style="top:171px;z-index:1000;">
        <div class="row discount w-100 m-0">
            <p class="bg-secondary text-light text-center py-2"><i>Miễn phí giao hàng toàn quốc</i></p>
        </div>
    </div>

    <div class="container my-5">
        <div class="row table-product">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">HÌNH ẢNH</th>
                        <th scope="col">TÊN SẢN PHẨM</th>
                        <th scope="col">SỐ LƯỢNG</th>
                        <th scope="col">THÀNH TIỀN</th>
                        <th scope="col">XÓA</th>
                    </tr>
                </thead>
                <tbody>
                <tr class="align-middle">
            <th scope="row">1</th>
            <td class="col-img"> <router-link to="/detail?masp="><img src="@/assets/picture/product/Nam/sp7.jpg" width="100%" ></router-link>
           </td>
            <td>Ten san pham</td>
            <td><input type="number" style="width:70px;" value = 1 /></td>
            <td>10000000 VNĐ</td>
            <td><router-link to="/delCart?masp="><button class="btn btn-dark text-light">X</button></router-link></td>
        </tr>
                </tbody>
            </table>
        </div>

        <div class="row total justify-content-center mt-5">
            <div class="col-sm-8 col-md-10 col-lg-5">
                <h5 class="text-center border-bottom border-dark py-3">ĐƠN HÀNG</h5>
                <div class="row my-3 text-right">
                    <p class="col-8 fw-bold">Tổng số lượng</p>
                    <div class="col-4">1</div>
                </div>
                <div class="row my-2">
                    <p class="col-8 fw-bold">Tổng tiền</p>
                    <div class="col-4">1000000000 VNĐ</div>
                </div>
                <div class="row my-2">
                    <p class="col-6 fw-bold">Hình thức thanh toán</p>
                    <div class="col-6">Thanh toán khi nhận hàng</div>
                </div>
                <div class="row mb-5">
                    <button class="btn btn-dark text-light thanh-toan" data-bs-toggle="modal" data-bs-target="#confirm-pay">Đặt hàng</button>
                </div>
                <div class="row pay">
                    <div class="col-4">
                        <router-link to="#"><img src="@/assets/picture/visa.png" width="100"></router-link>
                    </div>
                    <div class="col-4">
                        <router-link to="#"><img src="@/assets/picture/discover.png" width="100"></router-link>
                    </div>
                    <div class="col-4">
                        <router-link to="#"><img src="@/assets/picture/mastercard.jpg" width="100"></router-link>
                    </div>
                </div>
            </div>
            <div class="modal show" tabindex="-1" id="confirm-pay" data-bs-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-danger">XÁC NHẬN ĐẶT HÀNG</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="post" action="/pay">
                            <input type="hidden" name="tong-tien" value="<?=$total?>">
                            <div class="modal-body">
                                <div class="form-group mb-4">
                                    <label for="address" class="form-label">Address*:</label>
                                    <input type="text" class="form-control py-2" id="address" placeholder="ENTER ADDRESS" name="address" required>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">CONFIRM</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>
