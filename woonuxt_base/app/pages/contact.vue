<script setup lang="ts">
const { t } = useI18n();
useHead({
title: t('messages.general.contacts'),
meta: [{ name: 'description', content: 'Contact' }],
});
</script>

<template>
  <div class="container my-8">
    <h1 class="mb-8 text-3xl font-semibold text-primary">{{t('messages.general.contacts')}}</h1>
    <div class="my-8 prose">
      <p>SIA FIFO</p>
      <p>reģ. nr. 43603086114</p>
      <p>Kalna iela 12, Bauska</p>
      <p>+371 26699825</p>
      <p>info@fiifa.lv</p>
    </div>
  </div>
</template>
