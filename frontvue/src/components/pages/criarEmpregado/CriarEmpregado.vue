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
               <input type="text" class="form-control" placeholder="Digite seu nome" v-model="empregado.nome" required > 
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Função de Trabalho</label>
               <input type="text" class="form-control" placeholder="Digite sua função" v-model="empregado.trabalho_funcao" required >  
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Salário</label>
               <input type="number" class="form-control" placeholder="Digite seu salário" v-model="empregado.salario" required >  
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Data de nascimento</label>
               <input type="date" class="form-control" placeholder="YYYY/MM/DD" v-model="empregado.nascimento" required > 
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Registro de empregado</label>
               <input type="text" class="form-control" placeholder="Registro de empregado" v-model="empregado.registro_empregado" required >  
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
         empregado: {
            nome: '1', trabalho_funcao: '2', salario: '3', nascimento: '4', registro_empregado: '5'
         }
      }
   },
   methods: {
      gerenSUbmitForm() {
      
      } 
   }
}
</script>

<style>

</style>