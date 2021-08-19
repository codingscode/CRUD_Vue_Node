<template>
   <div class="container">
      <div class="card">
         <div class="card-header">
            <h3>Adicionar novo empregado</h3>
         </div>
         <div class="card-body">
           <form @submit.prevent="gerenSubmitForm()" > 
             <div class="form-group">
               <label class="font-weight-bold">Nome Empregado</label>
               <input id="nome" name="nome" type="text" class="form-control" placeholder="Digite seu nome" v-model="formEmpregado.nome" :class="{ 'is-invalid': isSubmitted && $v.formEmpregado.nome.$error }" > 
               <div v-if="isSubmitted && !$v.formEmpregado.nome.required" class="invalid-feedback" >
                  Campo nome empregado é exigido!
               </div>
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Função de Trabalho</label>
               <input id="funcao" name="funcao" type="text" class="form-control" placeholder="Digite sua função" v-model="formEmpregado.trabalho_funcao" :class="{ 'is-invalid': isSubmitted && $v.formEmpregado.funcao.$error }" >  
               <div v-if="isSubmitted && !$v.formEmpregado.funcao.required" class="invalid-feedback" >
                  Campo função é exigido!
               </div>
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Salário</label>
               <input id="salario" name="salario" type="number" class="form-control" placeholder="Digite seu salário" v-model="formEmpregado.salario" :class="{ 'is-invalid': isSubmitted && $v.formEmpregado.salario.$error }" >  
               <div v-if="isSubmitted && !$v.formEmpregado.salario.required" class="invalid-feedback" >
                  Campo salário é exigido!
               </div>
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Data de nascimento</label>
               <input id="nascimento" name="nascimento" type="date" class="form-control" placeholder="YYYY/MM/DD" v-model="formEmpregado.nascimento" :class="{ 'is-invalid': isSubmitted && $v.formEmpregado.nascimento.$error }" > 
               <div v-if="isSubmitted && !$v.formEmpregado.nascimento.required" class="invalid-feedback" >
                  Campo nascimento é exigido!
               </div>
             </div>
             <div class="form-group">
               <label class="font-weight-bold">Registro de empregado</label>
               <input id="registro" name="registro" type="text" class="form-control" placeholder="Registro de empregado" v-model="formEmpregado.registro_empregado" :class="{ 'is-invalid': isSubmitted && $v.formEmpregado.nascimento.$error }" >  
               <div v-if="isSubmitted && !$v.formEmpregado.registro.required" class="invalid-feedback" >
                  Campo registro é exigido!
               </div>
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

import { required } from 'vuelidate/lib/validators'

export default {
   name: 'CriarEmpregado',
   data() {
      return {
         formEmpregado: {
            nome: '1', trabalho_funcao: '2', salario: '3', nascimento: '4', registro_empregado: '5'
         },
         isSubmitted: false
      }
   },
   validations: {
   formEmpregado: {
      nome: { required },
      trabalho_funcao: { required },
      salario: { required },
      nascimento: { required },
      registro_empregado: { required }
   }
   },
   methods: {
      gerenSubmitForm() {
         this.isSubmitted = true
   
         this.$v.touch()
         if (this.$v.invalid) {
            return
         }
      } 
   }
}
</script>

<style>

</style>