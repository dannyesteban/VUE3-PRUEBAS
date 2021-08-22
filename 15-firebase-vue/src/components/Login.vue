<template>
  <div class="row">
    <div class="container">
      <h4>Iniciar Sesion</h4>
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
              required
            />
            <label for="password">Password</label>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Login
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
  }),
  methods: {
    async fnRegister() {
      if (!this.fnValidateUser()) {
        return;
      }

      try {
        const API_KEY = "AIzaSyAOV2f45aPNvPfLrqIBA9x68ZVDfEabjZk";
        const data = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }),
          }
        );
        const resp = await data.json();
        if (resp.error) {
          M.toast({ html: "Email / password Invalidos" });
        } else {
          localStorage.setItem("user", JSON.stringify(resp));
          router.push("/proyectos");
        }
      } catch (error) {
        M.toast({ html: error });
      }
    },
    fnValidateUser() {
      if (this.email == "") {
        M.toast({ html: "El correo es obligatorio" });

        return false;
      }
      if (this.password == "" || this.password.length < 6) {
        M.toast({ html: "La contraseña es invalidad" });
        return false;
      }
      return true;
    },
  },
};
</script>
