
<template>
  <div>
    <titulo texto="Alunos" />
    <input type="text" placeholder="Nome do Aluno" v-model="nome" v-on:keyup.enter="addAluno()" />
    <button style="margin-left:2em" class="btn-adicionar" @click="addAluno()">+ Adicionar</button>
    <table class="table">
      <thead>
        <th>Matricula</th>
        <th>Nome</th>
        <th>Opções</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(aluno,index) in alunos" :key="index">
          <td>{{aluno.id}}</td>
          <td>{{aluno.nome}}</td>
          <td>
            <button class="btn-remove" @click="remover(aluno)">Remover</button>
          </td>
        </tr>
      </tbody>
      <div class="foot" v-else>NENHUM ALUNO ENCONTRADO</div>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";

export default {
  components: {
    Titulo
  },
  data() {
    return {
      titulo: "ALUNO",
      // nome: "Alunos",
      alunos: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/alunos")
      .then(res => res.json())
      .then(alunos => (this.alunos = alunos));
  },
  props: {},
  methods: {
    addAluno() {
      let _aluno = {
        nome: this.nome,
        sobrenome: ""
      };
      this.$http
        .post("http://localhost:3000/alunos", _aluno)
        .then(res => res.json())
        .then(alunoRetorno => {
          this.alunos.push(alunoRetorno);
          this.nome = '';
        });
    },
    remover(aluno) {
      this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`).then(() => {
        let indice = this.alunos.indexOf(aluno);
        this.alunos.splice(indice, 1);
      });
    }
  }
};
</script>


<style scoped>
template {
  margin: 1em;
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
  padding: 8px;
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
</style>
