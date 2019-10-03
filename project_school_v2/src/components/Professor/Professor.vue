<template>
  <div>
    <titulo texto="Professores" />
    <table class="table">
      <thead>
        <th>Registro</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length">
        <tr v-for="(professor,index) in professores" :key="index">
          <td>{{professor.id}}</td>
          <router-link style="cursor:pointer" tag="td" :to="`/alunos/${professor.id}`">{{professor.nome}}</router-link>
          <td>{{professor.qtdAlunos}}</td>
        </tr>
      </tbody>
      <div class="foot" v-else>NENHUM PROFESSOR ENCONTRADO</div>
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
      professores: [],
      alunos: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/alunos")
      .then(res => res.json())
      .then(alunos => {
        this.alunos = alunos;
        this.carregarProfessores();
      });
  },
  props: {},
  methods: {
    pegarQtdAlunosProfessor() {
      this.professores.forEach((professor, index) => {
        professor = {
          id: professor.id,
          nome: professor.nome,
          qtdAlunos: this.alunos.filter(aluno => aluno.professor.id == professor.id).length
        };
        this.professores[index] = professor;
      });
    },
    carregarProfessores() {
      this.$http
        .get("http://localhost:3000/professores")
        .then(res => res.json())
        .then(professor => {
          this.professores = professor;
          this.pegarQtdAlunosProfessor();
        });
    }
  }
};
</script>

<style scoped>
template {
  margin: 1em;
}


</style>
