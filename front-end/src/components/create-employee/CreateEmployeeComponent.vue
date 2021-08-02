<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="">
          <div class="form-group">
            <label class="font-weight-bold">Nome Empregado</label>
            <input type="text" class="form-control" placeholder="Digite seu nome" >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Função de Trabalho</label>
            <input type="text" class="form-control" placeholder="Digite sua função" >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Salário</label>
            <input type="number" class="form-control" placeholder="Digite seu salário" >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Data de nascimento</label>
            <input type="date" class="form-control" placeholder="YYYY/MM/DD" >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Registro de empregado</label>
            <input type="text" class="form-control" placeholder="Registro de empregado" >
          </div>

          <div class="form-group">
            <button class="btn btn-primary" type="submit" >+ Empregado</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
     name: 'CreateEmployeeComponent'
  },
  data() {
    return "oi";
  },
};
</script>

<style>
</style>
