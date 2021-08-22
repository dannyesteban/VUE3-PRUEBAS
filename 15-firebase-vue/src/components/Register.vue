<template>
  <div class="row">
    <div class="container">
      <h4>Register</h4>
      <hr />
      <form @submit.prevent="fnRegister" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              v-model.trim="email"
              class="validate"
              required
            />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              v-model.trim="password"
              class="validate"
            />
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password2"
              type="password"
              v-model.trim="password2"
              class="validate"
            />
            <label for="password">Confirm Password</label>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Register
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data: () => ({
    email: null,
    password: null,
    password2: null,
  }),
  methods: {
    async fnRegister() {
      if (!this.fnValidateUser()) {
        return;
      }
      const API_KEY = "AIzaSyAOV2f45aPNvPfLrqIBA9x68ZVDfEabjZk";
      const data = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }),
        }
      );
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/proyectos");
    },
    fnValidateUser() {
      if (this.email == "") {
        M.toast({ html: "El correo es obligatorio!" });

        return false;
      }
      if (this.password != this.password2 || this.password.length < 6) {
        M.toast({ html: "La constraseña no son validad!" });

        return false;
      }
      return true;
    },
  },
};
</script>
