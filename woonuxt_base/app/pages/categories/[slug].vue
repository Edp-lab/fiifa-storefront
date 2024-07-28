<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
const { data } = await useAsyncGql('getProductCategories');
const productCategories = data.value.productCategories?.nodes.filter(category => category.parent?.node?.slug == slug) as ProductCategory[];

useHead({
  title: slug?.toString().toUpperCase(),
  meta: [{ name: 'description', content: 'All product categories' }],
  link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/categories' }],
});
</script>

<template>
  <main class="container d-flex flex-direction-column">
    <div v-if="productCategories && productCategories.length" class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      <CategoryCard v-for="(category, i) in productCategories" :key="i" :node="category" :image-loading="i <= 2 ? 'eager' : 'lazy'" />
    </div>
  </main>
</template>

<style scoped lang="postcss">
.d-flex {
  display: flex;
}

.flex-direction-column {
  flex-direction: column;
}
</style>
