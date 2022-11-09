import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/views/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "product",
        name: "Product",
        component: () => import("@/views/products/ProductPage.vue"),
      },
      {
        path: "detail",
        // name: "orderManager",
        component: () => import("@/views/products/ProductDetail.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        component: () => import("@/views/cart/CartPage.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/AboutPage.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/auth/LoginPage.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/auth/RegisterPage.vue"),
      },
    ],
  },
  {
    path: "/admin/",
    // name:"admin",
    component: () => import("@/views/layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        // name: "adminHome",
        component: () => import("@/views/admin/HomePage.vue"),
      },
      {
        path: "product",
        // name: "productManager",
        component: () => import("@/views/admin/ProductManager.vue"),
      },
      {
        path: "customer",
        // name: "customerManager",
        component: () => import("@/views/admin/CustomerManager.vue"),
      },
      {
        path: "order",
        // name: "orderManager",
        component: () => import("@/views/admin/OrderManager.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
