<template>
  <!-- <h1>Home</h1> -->

  <div style="display: block">
    <Toast />
    <InputText v-model="text"></InputText>
    <Button
      icon="pi pi-user"
      @click="showSuccess()"
      style="margin-left: 10px"
      label="Enviar"
    />
  </div>
  
  <div style="display: block; margin-top: 10px">
    <Button
      icon="pi pi-check"
      @click="$refs.modalConfirmacion.abrir()"
      label="Modal ejemplo de tabla"
    ></Button>
  </div>


  <div style="display: block; margin: 10px">
    <Button
      icon="pi pi-plus-circle"
      @click="$refs.modalNuevo.abrir()"
      label="Nuevo"
    ></Button>
  </div>

  <div>
    <DataTable :value="arrayEmpleados" responsiveLayout="scroll">
      <template #header>
        <div class="table-header" >
          <div style="display: flex">
            <div style="margin: right: auto">Products</div>
            <div style="margin-left: auto">
              <Button icon="pi pi-refresh" />
            </div>
          </div>
        </div>
      </template>

      <!-- <Column selectionMode="multiple" headerStyle="width: 3rem"></Column> -->
      <Column field="dni" header="DNI"></Column>
      <Column field="nombre" header="Nombre"></Column>
      <Column field="apellido" header="Apellido"></Column>
      <Column field="sexo" header="Sexo"></Column>
      <Column
        field="edad"
        header="Edad"
        style="text-align: center"
      ></Column>
      <Column
        field="supervisor"
        header="Supervisor"
        style="text-align: center"
      ></Column>

      <Column
        field="eliminar"
        header="Eliminar"
        style="text-align: center"
      >
        <!-- <template #body >
          <Button icon="pi pi-trash" class="p-button-danger" @click="eliminar(props)"/>
        </template> -->

        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="$refs.modalEditarEmpleado.abrir(slotProps.data)" />
          <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="eliminar(slotProps)" />
        </template>
      </Column>
    </DataTable>
  </div>

  <!-- <Dialog header="Header" v-model:visible="display" >
    Content
  </Dialog>
  <Button
    icon="pi pi-check"
    @click="confirmar()"
    label="Modal"
  ></Button> -->

  <!-- <DynamicDialog />
  <Button
    icon="pi pi-check"
    @click="showProducts()"
    label="Modal dinamico"
  ></Button> -->

  <modal-confirmacion
    ref="modalConfirmacion"
  ></modal-confirmacion>

  <modal-nuevo
    ref="modalNuevo"
    @update:nuevo-empleado="nuevoEmpleado($event)"
  ></modal-nuevo>

  <modal-editar-empleado
    ref="modalEditarEmpleado"
  ></modal-editar-empleado>
</template>

<script>
import ModalConfirmacion from './modales/modalConfirmacion.vue'
import ModalNuevo from './modales/modalNuevo.vue'
import ModalEditarEmpleado from './modales/modalEditarEmpleado.vue'


export default {
  name: "Home",

  components: {
    ModalConfirmacion,
    ModalNuevo,
    ModalEditarEmpleado
  },

  data() {
    return {
      text: null,
      display: false,
      arrayEmpleados: [
        {
          dni: 123456789,
          nombre: 'Juan',
          apellido: 'Perez',
          sexo: 'Masculino',
          edad: 27,
          supervisor: true
        }
      ]
    };
  },

  mounted() {},

  methods: {
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },

    confirmar() {
      this.display = true
    },

    showProducts() {
      this.$dialog.open();
    },

    nuevoEmpleado(params){
      console.log("params");
      console.log(params);

      let fila = {
        dni: params.dni,
        nombre: params.nombre,
        apellido: params.apellido,
        sexo: params.sexo.id,
        edad: params.edad,
        supervisor: params.supervisor
      }

      this.arrayEmpleados.push(fila)
    },

    eliminar(props){
      console.log("props");
      console.log(props);

    },
  },
};
</script>
