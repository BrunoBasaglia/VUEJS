<template>
  <div style="display:flex">
    <h1>{{texto}}</h1>
    <slot></slot>
    <button v-show="btnVoltar" style="margin-left:0.1em;" class="btn btn-voltar" @click="voltar()">Voltar</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: String,
    btnVoltar: Boolean
  },
  methods: {
    voltar() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>

</style>