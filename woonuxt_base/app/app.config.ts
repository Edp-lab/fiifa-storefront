/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Fiifa',
  shortDescription: 'This is an example of a WooNuxt store. It provides a modern, fast, and SEO friendly ecommerce store built with Nuxt and WooCommerce.',
  description: `Fiifa - sieviešu apģērbi un aksesuāri`,
  baseUrl: 'https://fiifa.lv',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: false,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
