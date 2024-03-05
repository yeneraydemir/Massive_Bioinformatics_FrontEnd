<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import IconQuestion from './icons/IconQuestion.vue'

</script>
<template>
    <WelcomeItem>
    <template #icon>
      <IconQuestion />
    </template>
    <template #heading>What is Massive Filter-App</template>
<p>Massive Filter-App is a simple application at its core.
<br>Its purpose is to make it easier for users to find the information they are looking for in a table.<br></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>How to Use?</template>
<p>Using the "Massive Filter-App" is quite simple.<br> There are three sections to easily find the information in the data table.<br>
<br><b>Filter Table:</b> Allows you to find the name you are looking for.<br>
<br><b>Sort Data:</b> Sorts IDs, Ages or Names from smallest to largest in the table.<br>
<br><b>Page Size:</b> You can divide the table into groups to find what you are looking for as you want.

</p>   
  </WelcomeItem>

</template>
