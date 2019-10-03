<template>
  <div>
    <Titulo :texto="`Aluno: ${aluno.nome} ${aluno.sobrenome}`" :btnVoltar="true">
      <button
        style="margin-left:31em;"
        class="btn-editar"
        @click="editarAluno()"
      >{{this.editar ? 'Cancelar' : 'Editar'}}</button>
    </Titulo>

    <table class="table">
      <tbody>
        <tr>
          <td class="colPequeno">Matrícula:</td>
          <td>
            <label>{{aluno.id}}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Nome:</td>
          <td>
            <label v-if="!editar">{{aluno.nome}}</label>
            <input v-else v-model="aluno.nome" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Sobrenome:</td>
          <td>
            <label v-if="!editar">{{aluno.sobrenome}}</label>
            <input v-else v-model="aluno.sobrenome" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Data de Nascimento:</td>
          <td>
            <label v-if="!editar">{{aluno.nasc}}</label>
            <input v-else v-model="aluno.nasc" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Professor:</td>
          <td>
            <label v-if="!editar">{{aluno.professor.nome}}</label>
            <select v-else v-model="aluno.professor">
              <option
                v-for="(professor, index) in professores"
                :key="index"
                v-bind:value="professor"
              >{{professor.nome}}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button v-if="editar" class="btn-adicionar" @click="addAluno(aluno)">Salvar Alterações</button>
    </div>
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
      aluno: {
        professor: {}
      },
      professores: [],
      id: this.$route.params.id,
      editar: false,
      acao: "Editar"
    };
  },
  methods: {
    editarAluno() {
      this.editar = !this.editar;
    },
    addAluno(_aluno) {
      let _alunoEditar = {
        id: _aluno.id,
        nome: _aluno.nome,
        sobrenome: _aluno.sobrenome,
        nasc: _aluno.nasc,
        professor: _aluno.professor
      };
      
      this.$http.put(
        `http://localhost:3000/alunos/${_alunoEditar.id}`,
        _alunoEditar
      );
      this.editar = !this.editar;
    }
  },
  created() {
    this.$http
      .get("http://localhost:3000/alunos/" + this.id)
      .then(res => res.json())
      .then(alunos => (this.aluno = alunos));

    this.$http
      .get("http://localhost:3000/professores")
      .then(res => res.json())
      .then(professor => (this.professores = professor));
  }
};
</script>

<style  scoped>
/*  */
</style>