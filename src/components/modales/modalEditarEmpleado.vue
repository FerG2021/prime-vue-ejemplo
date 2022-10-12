<template>
  <div>
    <Toast />

    <Dialog v-model:visible="display" icon="pi pi-refresh" style="width: 50%" class="flex justify-content-center">
      <template #header icon="pi pi-refresh">
        
        <h3> <i class="pi pi-user-edit" /> Editar empleado</h3>
      </template>


      <div style="margin-top: 5px; width: 100%" >
        <h5 style="margin: 0px">DNI</h5>
        <InputNumber 
          inputId="integeronly" 
          v-model="form.dni" 
          style="width: 100%"
          placeholder="Ingrese DNI"
          disabled 
        />

        <h5 style="margin: 0px">Nombre</h5>
        <span class="p-input-icon-left" style="width: 100%">
          <i class="pi pi-user" />
          <InputText 
            type="text" 
            v-model="form.nombre" 
            placeholder="Nombre" 
            style="width: 100%"
          />
        </span>

        <h5 style="margin: 0px">Apellido</h5>
        <span class="p-input-icon-left" style="width: 100%">
          <i class="pi pi-user" />
          <InputText 
            type="text" 
            v-model="form.apellido" 
            placeholder="Apellido" 
            style="width: 100%"
          />
        </span>
       
        <h5 style="margin: 0px">Sexo</h5>
        <Dropdown 
          v-model="form.sexo" 
          :options="arraySexo" 
          optionLabel="name" 
          placeholder="Seleccione el sexo" 
          style="width: 100%"
        />

        <h5 style="margin: 0px">Edad</h5>
        <InputNumber 
          inputId="integeronly" 
          v-model="form.edad" 
          style="width: 100%"
          placeholder="Ingrese edad"
        />

        <h5 style="margin: 0px">Supervisor</h5>
        <InputSwitch 
          v-model="form.supervisor"
          aria-label="Remember Me"
        />
      </div>

      <template #footer>
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
      </template>
    </Dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: false, 
        form: {
          dni: null,
          nombre: null,
          apellido: null,
          sexo: null,
          edad: null,
          supervisor: null,
        },

        arraySexo: [
          {id: 'Masculino', name: 'Masculino'},
          {id: 'Femenino', name: 'Femenino'},
          {id: 'No binario', name: 'No binario'},
        ] 
      }
    },

    methods: {
      abrir(datos){
        console.log("abrir");
        console.log("datos");
        console.log(datos);

        this.form.dni = datos.dni
        this.form.nombre = datos.nombre
        this.form.apellido = datos.apellido
        this.form.sexo = datos.sexo
        this.form.edad = datos.edad
        this.form.supervisor = datos.supervisor

        this.display = true
      },

      cerrar(){
        this.$toast.add({
          severity: "error",
          summary: "Ventana cerrada con éxito",
          detail: "Message Content",
          life: 3000,
        });
        this.display = false
      },

      guardar(){
        console.log("this.form");
        console.log(this.form);


        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Message Content",
          life: 3000,
        });


        this.$emit('update:nuevoEmpleado', this.form)

        this.display = false
      },
    },
  }
</script>

<style>

</style>