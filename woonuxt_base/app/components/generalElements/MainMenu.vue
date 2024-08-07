<template>
  <nav>
    <NuxtLink to="/categories/clothes">{{ $t('messages.general.newArrivals') }} | {{ $t('messages.general.clothes') }}</NuxtLink>
    <NuxtLink to="/categories/shoes">{{ $t('messages.general.shoes') }}</NuxtLink>
    <NuxtLink to="/products?filter=pa_size[44,46,48,50,52,xl,xxl]">PLUS SIZE</NuxtLink>
    <NuxtLink to="/categories/accessories">{{ $t('messages.general.accessories') }}</NuxtLink>
    
    <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>
<script setup lang="ts">
</script>