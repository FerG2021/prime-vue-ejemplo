<template>
  <div>
    <Toast />

    <Dialog
      v-model:visible="display"
      icon="pi pi-refresh"
      :style="{width: '30%'}"
      class="flex justify-content-center"
    >
      <template #header icon="pi pi-refresh" style="margin: 0px" class="s">
        <h3 style="margin: 0px"><i class="pi pi-user-plus" /> Nuevo empleado</h3>
      </template>

      <div style="margin-top: 5px; width: 100%">
        <!-- <h5 style="margin: 0px">DNI</h5> -->
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid" style="margin-top: 30px">
          <div class="field">
            <div class="p-float-label">
              <InputNumber
                id="dni"
                inputId="integeronly"
                v-model="form.dni"
                style="width: 100%"
                :class="{'p-invalid':v$.dni.$invalid && submitted}"
              />
              <label for="dni" :class="{'p-error':v$.dni.$invalid && submitted}">DNI</label>
            </div>
            <small v-if="(v$.dni.$invalid && submitted) || v$.dni.$pending.$response" class="p-error">{{v$.dni.required.$message.replace('Value', 'DNI')}}</small>
          </div>

          <div class="field">
            <div class="p-float-label">
              <InputText
                id="nombre"
                type="text"
                v-model="form.nombre"
                style="width: 100%"
                :class="{'p-invalid':v$.nombre.$invalid && submitted}"
              />
              <label for="nombre" :class="{'p-error':v$.nombre.$invalid && submitted}">Nombre</label>
            </div>
            <small v-if="(v$.nombre.$invalid && submitted) || v$.dni.$pending.$response" class="p-error">{{v$.nombre.required.$message.replace('Value', 'Nombre')}}</small>
          </div>
         
          <div class="field">
            <div class="p-float-label">
              <InputText
                id="apellido"
                type="text"
                v-model="form.apellido"
                style="width: 100%"
                :class="{'p-invalid':v$.apellido.$invalid && submitted}"
              />
              <label for="apellido" :class="{'p-error':v$.apellido.$invalid && submitted}">Apellido</label>
            </div>
            <small v-if="(v$.apellido.$invalid && submitted) || v$.dni.$pending.$response" class="p-error">{{v$.apellido.required.$message.replace('Value', 'Apellido')}}</small>
          </div>
          
          <div class="field">
            <div class="p-float-label">
              <Dropdown
                id="sexo"
                v-model="form.sexo"
                :options="arraySexo"
                optionLabel="name"
                style="width: 100%"
                :class="{'p-invalid':v$.sexo.$invalid && submitted}"
              />
              <label for="sexo" :class="{'p-error':v$.sexo.$invalid && submitted}">Sexo</label>
            </div>
            <small v-if="(v$.sexo.$invalid && submitted) || v$.sexo.$pending.$response" class="p-error">{{v$.sexo.required.$message.replace('Value', 'Sexo')}}</small>

          </div>
          
          <div class="field">
            <div class="p-float-label">
              <InputNumber
                id="edad"
                inputId="integeronly"
                v-model="form.edad"
                style="width: 100%"
                :class="{'p-invalid':v$.edad.$invalid && submitted}"
              />
              <label for="edad" :class="{'p-error':v$.edad.$invalid && submitted}">Edad</label>
            </div>
            <small v-if="(v$.edad.$invalid && submitted) || v$.edad.$pending.$response" class="p-error">{{v$.edad.required.$message.replace('Value', 'Edad')}}</small>
          </div>
          
          <h5 style="margin: 0px">Supervisor</h5>
          <InputSwitch v-model="form.supervisor" aria-label="Remember Me" />
          


          <div style="display: flex">
            <Button
              label="Cancelar"
              icon="pi pi-times"
              class="p-button-text"
              @click="cerrar()"
            />
            <Button
              label="Guardar"
              type="submit"
              icon="pi pi-check"
              autofocus
              @click="guardar()"
            />
          </div>
          
        </form>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { helpers } from '@vuelidate/validators';

export default {
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      display: false,
      submitted: false,
      isFormValid: false,
      form: {
        dni: null,
        nombre: null,
        apellido: null,
        sexo: null,
        edad: null,
        supervisor: null,
      },

      arraySexo: [
        { id: "Masculino", name: "Masculino" },
        { id: "Femenino", name: "Femenino" },
        { id: "No binario", name: "No binario" },
      ],
    };
  },

  validations() {
    return {
      dni: {
        required: helpers.withMessage('El DNI es requerido', required),
      },
      nombre: {
        required: helpers.withMessage('El nombre es requerido', required),
        // email,
      },
      apellido: {
        required: helpers.withMessage('El apellido es requerido', required),
      },
      sexo: {
        required: helpers.withMessage('Seleccione un valor para sexo', required),
      },
      edad: {
        required: helpers.withMessage('La edad es requerida', required),
      },
    };
  },

  methods: {
    abrir() {
      this.submitted = false
      console.log("abrir");
      this.display = true;
      this.isFormValid = false
      this.resetForm()
    },

    cerrar() {
      this.$toast.add({
        severity: "error",
        summary: "Ventana cerrada con éxito",
        detail: "Message Content",
        life: 3000,
      });
      this.display = false;
    },

    handleSubmit(isFormValid) {
      this.isFormValid = isFormValid

      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },

    toggleDialog() {
      this.showMessage = !this.showMessage;
  
      if(!this.showMessage) {
        this.resetForm();
      }
    },

    resetForm() {
      this.form.dni = null
      this.form.nombre = null
      this.form.apellido = null
      this.form.sexo = null
      this.form.edad = null
      this.form.supervisor = null
      this.submitted = false;
    },

    guardar() {
      console.log("this.form");
      console.log(this.form);
      this.$emit("update:nuevoEmpleado", this.form);

      this.display = false;

      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped> 
  .field {
    margin-bottom: 1.5rem;
  }

  .header {
    margin: 0px !important;
  }

  .p-dialog {
    border-radius: 30% !important;
  }
</style>