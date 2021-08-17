<template>
   <div class="container">
      <div class="card">
         <div class="card-header">
            <h3>Adicionar novo empregado</h3>
         </div>
         <div class="card-body">
           <form @submit.prevent="criarNovoEmpregado()" > 
             <div class="form-group">
               <label class="font-weight-bold">Nome Empregado</label>
               <input type="text" class="form-control" placeholder="Digite seu nome"  > <!-- v-model="employee.name" required --> 
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Função de Trabalho</label>
               <input type="text" class="form-control" placeholder="Digite sua função"  >  <!-- v-model="employee.job_role" required -->
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Salário</label>
               <input type="number" class="form-control" placeholder="Digite seu salário"  >  <!-- v-model="employee.salary" required -->
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Data de nascimento</label>
               <input type="date" class="form-control" placeholder="YYYY/MM/DD"  >  <!-- v-model="employee.birth" required -->
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Registro de empregado</label>
               <input type="text" class="form-control" placeholder="Registro de empregado"  >  <!-- v-model="employee.employee_registration" required -->
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
   name: 'CriarEmpregado',
   data() {
      return {
         
      }
   }
}
</script>

<style>

</style>