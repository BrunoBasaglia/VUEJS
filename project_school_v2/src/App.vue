<template>
  <div id="app">
    <Nav></Nav>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/_nav/Nav";
import Alunos from "./components/Aluno/Alunos";
import Professores from "./components/Professor/Professor";
import Sobre from "./components/Sobre/Sobre";

export default {
  name: "app",
  components: {
    Alunos,
    Nav,
    Professores,
    Sobre
  }
};
</script>

<style>
/* #app{} */
body {
  font-family: cursive;
}
.btn-remove {
  width: 50%;
  background-color: #ff5050;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-adicionar {
  width: 20%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-editar {
  width: 10%;
  background-color: #f7570e;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.btn-voltar {
  width: 10%;
  background-color: #410ef7;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

input[type="text"],
select {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin-top: 1em;
}

.foot {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 160.5%;
  height: 50px;
  background-color: #ddd;
  text-align: center;
}

.table td,
.table th {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center !important;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* .table tr:hover {background-color: #ddd;} */

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
.colPequeno {
  width: 25%;
  background-color: #4caf50;
}
</style>
