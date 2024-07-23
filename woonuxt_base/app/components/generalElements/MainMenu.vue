<template>
  <nav>
    <NuxtLink to="/categories/clothes">JAUNUMI | APĢĒRBI</NuxtLink>
    <NuxtLink to="/categories/shoes">APAVI</NuxtLink>
    
    <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>
