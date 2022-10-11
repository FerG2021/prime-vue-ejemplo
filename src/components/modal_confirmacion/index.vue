<template>
  <ConfirmDialog v-model="visible">

  </ConfirmDialog>
</template>

<script>
  export default {
    name: 'Modal',

    data() {
      return {
        visible: false,
      }
    },

    methods: {
      abrir(){
        console.log("abrir");
        this.visible = true
      }
    },

  }

  
</script>

<style>

</style>