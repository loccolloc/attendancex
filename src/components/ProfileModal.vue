<template>
  <exchange-modal
    ref="exchangeModal"
    :onModalSubmit="updateProfile"
  >
    <form>
      <div class="field">
        <label class="title">Tên đăng nhập</label>
        <input
          v-model="userProfile.username"
          class="input">
      </div>
      <div class="field">
        <label class="title">Ảnh đại diện</label>
        <div class="file has-name">
          <label class="file-label">
            <input
              @change="handleUpload"
              class="file-input"
              type="file"
              name="resume"
            >
            <span class="file-cta">
              <span class="file-icon">
                <font-awesome-icon
                  icon="upload"
                />
              </span>
              <span class="file-label">
                Tải lên ảnh
              </span>
            </span>
          </label>
        </div>
        <progress
          class="progress"
          :value="progress"
          max="100"
        >
          {{progress}}%
        </progress>
        <img
          v-if="userProfile.avatar"
          class="image-preview"
          :src="userProfile.avatar"
        />
      </div>
      <div class="field">
        <label class="title">Thông tin người dùng</label>
        <input
          v-model="userProfile.info"
          class="input">
      </div>
      <div class="field">
        <label class="title">Địa chỉ</label>
        <input
          v-model="userProfile.address"
          class="input">
      </div>
      <div class="field">
        <label class="title">Quốc tịch</label>
        <input
          v-model="userProfile.country"
          class="input">
      </div>
      <div class="field">
        <label class="title">Số điện thoại</label>
        <input
          v-model="userProfile.phone"
          class="input">
      </div>
    </form>

    <template #activator>
      <button class="button is-block is-primary is-light is-fullwidth">
        Cập nhật thông tin
      </button>
    </template>

  </exchange-modal>
</template>

<script>
  import ExchangeModal from "../components/ModalComponent.vue";
  export default {
    components: {
      ExchangeModal
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        userProfile: { ...this.user },
        progress: 0
      }
    },
    computed: {
      modal() {
        return this.$refs.exchangeModal
      }
    },
    methods: {
      updateProfile() {
        this.$store.dispatch("user/updateProfile", {
          data: this.userProfile,
          onSuccess: () => this.modal.close()
        })
      },
      handleUpload(e) {
        const self = this;
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);

        reader.onload = function() {
          self.$store.dispatch("user/uploadImage", {
            bytes: reader.result,
            name: file.name,
            onSuccess: (url) => {
              self.userProfile.avatar = url;
            },
            onProgress: (progress) => {
              self.progress = progress;
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .image-preview {
    height: 200px;
  }

  .progress {
    margin-top: 15px;
  }
</style>