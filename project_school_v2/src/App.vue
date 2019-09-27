<template>
  <div id="app">
    <Alunos />
  </div>
</template>

<script>
import Alunos from "./components/Aluno/Alunos.vue";

export default {
  name: "app",
  components: {
    Alunos
  }
};
</script>

<style>
/* #app{} */
body{
  
font-family: fantasy;
}

</style>
