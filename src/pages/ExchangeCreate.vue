<template>
  <div class="page-wrapper">
    <div class="wrapper">
      <div>
        <div class="row">
          <div class="col-3 cotben col2">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                ><i class="fas fa-users-cog"></i> Thông tin của quản trị viên</a
              >
              <a
                class="nav-link"
                id="v-pills-users-tab"
                data-toggle="pill"
                href="#v-pills-users"
                role="tab"
                aria-controls="v-pills-users"
                aria-selected="false"
                ><i class="fas fa-users"></i> Thông tin của nhân viên</a
              >
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                ><i class="fa fa-search"></i> Lịch sử</a
              >
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
                ><i class="fa fa-bar-chart" style="font-size: 24px"></i> Thống
                kê</a
              >
            </div>
          </div>
          <div></div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div>
                  <div class="">
                    <div>
                      <h1>Thông tin của quản trị viên</h1>
                      <button
                        type="button"
                        class="btn-add btn btn-lg mb-2"
                        data-toggle="modal"
                        data-target="#modelId"
                      >
                        <div class=""><i class="fa fa-plus"></i></div>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- <table class="table boder">
<thead> -->
                <!-- Button trigger modal -->

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="modelId"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modelTitleId"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title"></h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="ml-6 container has-text-centered">
                          <div class="is-4 is-offset-4">
                            <h6 class="title has-text-grey">
                              Thêm quản trị viên mới
                            </h6>
                            <div class="box">
                              <form>
                                <div class="field">
                                  <div class="control">
                                    <input
                                      v-model="form.email"
                                      class="input"
                                      type="email"
                                      placeholder="Email"
                                      autocomplete="email"
                                    />
                                    <div class="form-error">
                                      <form-errors
                                        :errors="v$.form.email.$errors"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="field">
                                  <div class="control">
                                    <input
                                      v-model="form.username"
                                      class="input"
                                      type="text"
                                      placeholder="Tên đăng nhập"
                                    />
                                    <form-errors
                                      :errors="v$.form.username.$errors"
                                    />
                                  </div>
                                </div>
                                <div class="field">
                                  <div class="control">
                                    <input
                                      v-model="form.password"
                                      class="input"
                                      type="password"
                                      placeholder="Mật khẩu"
                                      autocomplete="current-password"
                                    />
                                    <form-errors
                                      :errors="v$.form.password.$errors"
                                    />
                                  </div>
                                </div>
                                <div class="field">
                                  <div class="control">
                                    <input
                                      v-model="form.passwordConfirmation"
                                      class="input"
                                      type="password"
                                      placeholder="Nhập lại mật khẩu"
                                    />
                                    <form-errors
                                      :errors="
                                        v$.form.passwordConfirmation.$errors
                                      "
                                    />
                                  </div>
                                </div>
                                <button
                                  @click="register"
                                  :disabled="isProcessing"
                                  type="button"
                                  class="button is-block is-info is-fullwidth"
                                >
                                  Thêm
                                </button>
                              </form>
                            </div>
                            <p class="has-text-grey"></p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Đóng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                  <table class="table table-bordered table-striped mb-0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên tài khoản</th>
                        <th>Điện thoại</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in users" :key="user.id">
                        <td scope="row">{{ user.id }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.phone }}</td>
                        <td class="text-center">
                          <button
                            class="bg-transparent border-0 text-black"
                            @click="deleteprofile(user.id)"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-users"
                role="tabpanel"
                aria-labelledby="v-pills-users-tab"
              >
                <!-- Thông tin nhân viên -->

                <div><h1>Thông tin của nhân viên</h1></div>

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                  <table class="table table-bordered table-striped mb-0">
                    <thead>
                      <tr>
                        <th class="text-center">Mã nhân viên</th>
                        <th class="text-center">Họ tên</th>
                        <th class="text-center">Vị trí</th>
                        <th class="text-center">Tham gia vào ngày</th>
                        <th class="text-center">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="text-center"
                        v-for="employee in newuser"
                        :key="employee.id"
                      >
                        <td scope="row">{{ employee.ID }}</td>
                        
                        <td>{{ employee.Name }}</td>

                        <td>{{ employee.Position }}</td>
                        <td>{{ employee.createAt }}</td>
                        <td>
                          <button
                            class="bg-transparent border-0 text-black"
                            @click="EditUser(employee.id)"
                          >
                            <i class="fa fa-pen"></i></button
                          ><button
                            class="bg-transparent border-0 text-black"
                            @click="deleteUser(employee.id)"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <!-- Lịch sử -->

                <div><h1>Lịch sử</h1></div>

                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                  <table class="table table-bordered table-striped mb-0">
                    <thead>
                      <tr>
                        <th class="text-center" scope="col">Ngày</th>
                        <th class="text-center" scope="col">Mã nhân viên</th>
                        <th class="text-center" scope="col">Tên</th>
                        <th class="text-center" scope="col">Có mặt</th>
                        <th class="text-center" scope="col">Check in</th>
                        <th class="text-center" scope="col">Check out</th>
                      </tr>
                    </thead>
                    <tbody v-for="(employee, date) in history" :key="date">
                      <tr
                        class="text-center"
                        v-for="(e, i) in employee"
                        :key="i"
                      >
                        <td scope="row">{{ date }}</td>
                        
                        <td>{{ e.ID }}</td>

                        <td>{{ e.Name }}</td>
                        <td>
                          {{
                            new Date(e.checkOutTime) -
                              new Date(e.checkInTime) >=
                            5000
                              ? "có mặt"
                              : "vắng mặt"
                          }}
                        </td>
                        <td>{{ e.checkInTime }}</td>
                        <td>{{ e.checkOutTime }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <!-- Thống Kê -->

                <div>
                  <h1>Thống kê</h1>
                  <section class="content">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-6 grid-margin stretch-card">
                          <div class="card bigger tale-bg">
                            <div class="card-people mt-auto">
                              <img
                                src="../assets/img/people.svg"
                                alt="people"
                              />
                            </div>
                            <div class="weather-info">
                              <div class="">
                                <div>
                                  <h2 class="mb-0 font-weight-normal">
                                    <i class="icon-sun mr-2">| 31°C</i>
                                  </h2>
                                </div>
                                <div class="ml-2">
                                  <h4 class="location font-weight-normal">
                                    TP Ho Chi Minh
                                  </h4>
                                  <h6 class="font-weight-normal">Viet Nam</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 grid-margin transparent">
                          <div class="row">
                            <div class="col-md-6 mb-4 stretch-card transparent">
                              <div class="card card1 card-tale">
                                <div class="card-body">
                                  <p class="mb-1">Số lượng nhân viên</p>
                                  <p>{{ totalEmployee() }}</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 mb-4 stretch-card transparent">
                              <div class="card card2 card-dark-blue">
                                <div class="card-body">
                                  <p class="mb-1">Có mặt hôm nay</p>
                                  <p>{{ compareDate() }}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div
                              class="col-md-6 mb-4 mb-lg-0 stretch-card transparent"
                            >
                              <div class="card card3 card-light-blue">
                                <div class="card-body">
                                  <p class="mb-1">Vắng mặt hôm nay</p>
                                  <p>{{ totalEmployee() - compareDate() }}</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 stretch-card transparent">
                              <div class="card card4 card-light-danger">
                                <div class="card-body">
                                  <p class="mb-1">Tỉ lệ có mặt hôm nay</p>
                                  <p>
                                    {{
                                      tinhPhanTram(
                                        compareDate(),
                                        totalEmployee()
                                      )
                                    }}%
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <!-- Đồ thị -->

                        <div class="mt-5 col-md-6 grid-margin transparent">
                          <div class="row text-center">
                            <div>
                              <h4 class="">{{ renderNgay() }}</h4>
                            </div>
                            <div
                              class="col-md-6 mb-4"
                              style="width: 600px; height: 300px"
                            >
                              Tỉ lệ có mặt trong ngày
                              <Pie :data="pieData" :options="pieOptions" />
                            </div>

                            <div
                              class="col-md-6 mb-4"
                              style="width: 600px; height: 300px"
                            >
                              Tỉ lệ có mặt trong tuần
                              <Bar :data="chartData" :options="chartOptions" />
                            </div>
                            <div
                              class="col-md-6 mb-4"
                              style="width: 300px; height: 300px"
                            >
                              Tỉ lệ có mặt trong tuần
                              <Line :data="chartData" :options="chartOptions" />
                            </div>
                            <div
                              class="col-md-6 mb-4"
                              style="width: 600px; height: 300px"
                            >
                              Tỉ lệ có mặt trong tuần
                              <Radar
                                :data="chartData"
                                :options="radarOptions"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="footer_boot">
      <!-- Footer -->
      <footer
        class="text-center text-lg-start text-white"
        style="background-color: #404765"
      >
        <div class="text-center p-3" style="background-color: #404765">
          © 2023 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">AttendanceX</a>
        </div>
        <!-- Copyright -->
        <div
          style="background-color: #404765"
          class="d-sm-flex justify-content-center justify-content-sm-between"
        >
          <span class="text-center text-sm-left d-block d-sm-inline-block"
            >| KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH. | Designed and Developed by
            Phan Nguyen Xuan Loc - Nguyen Quang Huy - Doan Thi Hue. |
            Instructor: Tran Thanh Binh</span
          >
        </div>
      </footer>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>
import useAuth from "../composition/useAuth";
import FormErrors from "../components/FormErrors.vue";
import useVuelidate from "@vuelidate/core";
import { required, sameAs, helpers, email } from "@vuelidate/validators";
import { db } from "../db";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, remove } from "firebase/database";
import { realtimeDb } from "../db";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Line, Bar, Pie, Radar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler
);
export default {
  components: {
    FormErrors,
    Line,
    Bar,
    Pie,
    Radar,
  },
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      },
      chartData: {
        labels: [
          "thứ 2",
          "thứ 3",
          "thứ 4",
          "thứ 5",
          "thứ 6",
          "thứ 7",
          "Chủ nhật",
        ],
        datasets: [
          {
            label: "Phần trăm nhân viên có mặt ",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      pieData: {
        labels: ["Có mặt", "Vắng"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#DD1B16"],
            data: [],
          },
        ],
      },
      radarOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              callback: function (value) {
                return value + "%";
              },
            },
          },
        },
      },

      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
        
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 100,
            ticks: {
              min: 0, 
              max: 100, 
             
              callback: function (value) {
                return value + "%";
              },
            },
          },
        },
      },
    };
  },
  validations() {
    return {
      form: {
        email: { required, email },
        username: { required },
        password: { required },
        passwordConfirmation: {
          required,
          sameAs: helpers.withMessage(
            "Must be same as the password",
            sameAs(this.form.password)
          ),
        },
      },
    };
  },
  setup() {
    return {
      ...useAuth(),
      v$: useVuelidate(),
    };
  },
  watch: {
    "this.$store.state.newuser.items": function (newVal) {
      // Cập nhật biến local hoặc thực hiện hành động nào đó khi dữ liệu thay đổi
      this.newuser = newVal;
    },
    isAuthenticated(isAuth) {
      if (isAuth) {
        this.$router.push("/");
      }
    },
    "$store.state.history.items": function () {
      // Cập nhật dữ liệu biểu đồ mỗi khi 'history.items' thay đổi
      this.pieData.datasets[0].data[0] = this.compareDate();
      this.pieData.datasets[0].data[1] =
        this.totalEmployee() - this.compareDate();
      this.chartData.datasets[0].data[0] = this.tinhThu2();
      this.chartData.datasets[0].data[1] = this.tinhThu3();
      this.chartData.datasets[0].data[2] = this.tinhThu4();
      this.chartData.datasets[0].data[3] = this.tinhThu5();
      this.chartData.datasets[0].data[4] = this.tinhThu6();
      this.chartData.datasets[0].data[5] = this.tinhThu7();
      this.chartData.datasets[0].data[6] = this.tinhChuNhat();
    },
  },
  computed: {
    users() {
      return this.$store.state.users.items;
    },
    newuser() {
      return this.$store.state.newuser.items;
    },
    checkin() {
      return this.$store.state.checkin.items;
    },
    history() {
      return this.$store.state.history.items;
    },
  },
  methods: {
    async deleteUser(personId) {
      try {
        const personRef = ref(realtimeDb, "person/" + personId);
        await remove(personRef);
        window.location.reload();
        // this.$router.go();
        // this.$router.replace({ path: '/' });
        this.updateUserData();
      } catch (error) {
        console.error("Error removing person: ", error);
      }
    },
    updateUserData() {
      // Cập nhật dữ liệu người dùng từ store
      this.$store.dispatch("users/getUsers");
    },
    totalEmployee() {
      return Object.keys(this.$store.state.newuser.items).length;
    },
    today() {
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      var formattedDate = day + "-" + month + "-" + year;
      return formattedDate;
    },
    renderNgay() {
      const todayString = this.today();
      return `Hôm nay thứ ${this.chuyenDoiNgayTrongTuan(
        todayString
      )} ngày ${todayString}`;
    },
    compareDate() {
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      var formattedDate = day + "-" + month + "-" + year;
      console.log(formattedDate);
      const index = Object.keys(this.$store.state.history.items);
      console.log(index);

      if (Object.keys(this.$store.state.history.items)[0] == formattedDate) {
        let data = this.$store.state.history.items;
        let specificObject =
          data[Object.keys(this.$store.state.history.items)[0]];

        let count = 0;

        for (let id in specificObject) {
          let item = specificObject[id];

          if (
            new Date(item.checkOutTime) - new Date(item.checkInTime) >=
            5000
          ) {
            count += 1;
          }
        }
        return count;
      } else {
        return 0;
      }
    },

    chuyenDoiNgayTrongTuan(ngayChuoi) {
      const [ngay, thang, nam] = ngayChuoi.split("-").map(Number);
      const ngayMoi = new Date(nam, thang - 1, ngay);
      const thuTrongTuan = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      return thuTrongTuan[ngayMoi.getDay()];
    },
    tinhChuNhat() {
      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Chủ Nhật") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
            
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhThu7() {
      

      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Thứ Bảy") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
           
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhThu6() {
      
      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Thứ Sáu") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
            
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhThu5() {
      
      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Thứ Năm") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
            
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhThu4() {
      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Thứ Tư") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
            
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhThu3() {
      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Thứ Ba") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
           
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhThu2() {
      let diemdanh = 0;
      let phanTramMoiNgay = 0;
      let countngay = 0;
      let historyItems = this.$store.state.history.items;

      for (let ngay in historyItems) {
        if (this.chuyenDoiNgayTrongTuan(ngay) === "Thứ Hai") {
          countngay++;
          for (let id in historyItems[ngay]) {
            let item = historyItems[ngay][id];
           
            if (
              new Date(item.checkOutTime) - new Date(item.checkInTime) >=
              5000
            ) {
              diemdanh++;
            }
          }
          phanTramMoiNgay += (diemdanh / this.totalEmployee()) * 100;
        }
      }
      return phanTramMoiNgay / countngay;
    },
    tinhPhanTram(a, b) {
      if (b === 0) {
        return "Lỗi: Tổng số nhân viên không thể bằng 0.";
      }
      return (a / b) * 100;
    },
    processLastname(name) {
      const myArray = name.split(" ");
      return myArray[0];
    },
    async register() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.$store.dispatch("user/register", this.form);
      }
    },

  

    async deleteprofile(id) {
      deleteDoc(doc(db, "users", id));

      this.$store.dispatch("users/getUsers");
    },
  },

  created() {
    this.$store.dispatch("users/getUsers");
    this.$store.dispatch("newuser/getUsers");
    this.$store.dispatch("history/getUsers");
    this.$store.dispatch("checkin/getUsers");
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 28px;
}
.nav-link {
  color: black;
}
.col2 {
  height: 100%;
}
.delete_user {
  border: 2px #ff6767 solid;
  border-radius: 5px;
  background: #ff6767;
  transition: 0.5s;
}
.delete_user:hover {
  border: 2px #ff6767 solid;
  border-radius: 5px;

  background: red;
}
.doan {
  margin-top: 300px;
}
.card {
  border: 0px white solid;
  border-radius: 20px;
}
@media (max-width: 1850.98px) {
  #areaChart {
    display: block;
    width: 510px;
    height: 255px;
  }
  #barChart {
    display: block;
    width: 510px;
    height: 255px;
  }
}
.card1 {
  background-color: #9ff4df;
}
.card2 {
  background-color: #f996ae;
}

.card3 {
  background-color: #f6f0a3;
}
.card4 {
  background-color: #d9b6fd;
}
.bigger {
  position: relative;
  display: inline-block;
}
.weather-info {
  position: absolute;
  display: inline-block;
  top: 0px;
  right: 0px;
}
.btn-add {
  background: #b4eeb4;

  height: 35px;
  text-align: center;
  font-size: medium;
}
.container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

/* Register */
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 1rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 700;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
.my-custom-scrollbar {
  position: relative;
  height: 400px;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}
.footer_boot {
  margin-top: 100px;
}
.card-body {
  display: flex;
  flex-direction: column; 
  justify-content: center; /* Center children vertically */
  align-items: center; /* Center children horizontally */
  text-align: center; /* Center text for all children */
  height: 100%; /* Optional: Set a specific height if needed */
}
</style>
