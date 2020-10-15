<template>
  <div class="container">
    <div class="form-container" v-if="!submitted">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <InputComponent label="Nombre" placeholder="Ingrese el nombre" type="text" v-model="name" />
          <ErrorMessageComponent
            class="error-wrapper"
            :text="extractError('name', $v.name, errorMessages) || errors.name"
          />
        </div>
        <div class="col-md-5">
          <InputComponent
            label="Apellido"
            placeholder="Ingrese el apellido"
            type="text"
            v-model="lastname"
          />
          <ErrorMessageComponent
            class="error-wrapper"
            :text="extractError('lastname', $v.lastname, errorMessages) || errors.lastname"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <InputComponent label="Mail" placeholder="Ingrese el mail" type="email" v-model="email" />
          <ErrorMessageComponent
            class="error-wrapper"
            :text="extractError('email', $v.email, errorMessages) || errors.email"
          />
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-10 d-flex flex-row-reverse">
          <ButtonComponent :isLoading="isLoading" @click="submit" color="light" text="Enviar" />
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <div class="result-container" v-else>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h3>Gracias!</h3>
          <p>Siga las instrucciones del mail enviado para instalar nuestra app.</p>
          <ButtonComponent to="/" color="light" text="Home" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const InputComponent = () => import("common/components/input.component");
const ButtonComponent = () => import("common/components/button.component");
const ErrorMessageComponent = () => import("common/components/error.message.component");
import { required, email } from "vuelidate/lib/validators";
import errorMessages from "./errors/index.json";
import prospectService from "./services/prospect.service";

export default {
  components: {
    InputComponent,
    ButtonComponent,
    ErrorMessageComponent
  },
  data: () => ({
    name: null,
    lastname: null,
    email: null,
    errorMessages: errorMessages,
    errors: {},
    isLoading: false,
    submitted: false
  }),
  validations: {
    name: { required },
    lastname: { required },
    email: { required, email }
  },
  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.isLoading = true;

      const payload = {
        name: this.name,
        lastname: this.lastname,
        email: this.email
      };

      prospectService
        .submitProspect(payload)
        .then(response => {
          this.submitted = true;
        })
        .catch(err => {
          if (err.response.status == 422) {
            const errors = err.response.data.errors;

            for (const [key, value] of Object.entries(errors)) {
              this.errors[key] = value[0];
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  margin: 80px auto 0;

  .button {
    margin: 50px 0 0;
  }
}

.result-container {
  p,
  h3 {
    font-weight: bold !important;
  }

  .button {
    margin: 100px 0 0;
  }
}
</style>
