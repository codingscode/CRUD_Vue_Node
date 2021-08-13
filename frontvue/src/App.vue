<template>
   <div id="app">
      <nav class="navbar navbar-expand bg-dark navbar-dark">
         <a class="navbar-brand order-md-last" >CRUD Vue + PostgreSQL + Node + Azure</a>
         <ul class="navbar-nav mr-auto">
            <li class="nav-item" >
               <router-link class="nav-link" to="/" >Criar Novo Empregado</router-link>
            </li>
            <li class="nav-item" >
               <router-link class="nav-link" to="/listar-empregado" >Listar Empregados</router-link>
            </li>
         </ul>
      </nav>
      <div class="container mt-5">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>