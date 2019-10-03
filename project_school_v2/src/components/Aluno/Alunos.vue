
<template>
  <div>
    <titulo
      :texto="professorid != undefined ? 'Professor: '  + professor.nome : 'Todos os Alunos'"
    />
    <div v-if="professorid != undefined">
      <input type="text" placeholder="Nome do Aluno" v-model="nome" v-on:keyup.enter="addAluno()" />
      <button style="margin-left:2em" class="btn-adicionar" @click="addAluno()">+ Adicionar</button>
    </div>
    <table class="table">
      <thead>
        <th>Matricula</th>
        <th>Nome</th>
        <th>Opções</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(aluno,index) in alunos" :key="index">
          <td>{{aluno.id}}</td>
          <router-link tag="td" :to="`/AlunoDetalhe/${aluno.id}`" style="cursor:pointer">{{aluno.nome}} {{aluno.sobrenome}}</router-link>
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
      professorid: this.$route.params.prof_id,
      professor: {},
      nome: "",
      alunos: []
    };
  },
  created() {
    if (this.professorid) {
      this.carregarProfessores();
      this.$http
        .get("http://localhost:3000/alunos?professor.id=" + this.professorid)
        .then(res => res.json())
        .then(alunos => (this.alunos = alunos));
    } else {
      this.$http
        .get("http://localhost:3000/alunos")
        .then(res => res.json())
        .then(alunos => (this.alunos = alunos));
    }
  },
  props: {},
  methods: {
    addAluno() {
      let _aluno = {
        nome: this.nome,
        sobrenome: "",
        professor: {
          id: this.professor.id,
          nome: this.professor.nome
        }
      };
      this.$http
        .post("http://localhost:3000/alunos", _aluno)
        .then(res => res.json())
        .then(alunoRetorno => {
          this.alunos.push(alunoRetorno);
          this.nome = "";
        });
    },
    remover(aluno) {
      this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`).then(() => {
        let indice = this.alunos.indexOf(aluno);
        this.alunos.splice(indice, 1);
      });
    },
    carregarProfessores() {
      this.$http
        .get("http://localhost:3000/professores/" + this.professorid)
        .then(res => res.json())
        .then(professor => {
          this.professor = professor;
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
