<template>
<div>
    <h1>Saldo: ${{store.saldo}}</h1>
    <button @click="store.addSaldo" >+100</button>
     <button @click="store.disSaldo">-50</button>
</div>
  
</template>

<script setup>
import store from "../store/store";
</script>

