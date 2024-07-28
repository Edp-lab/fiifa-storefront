/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Fiifa',
  shortDescription: 'ALWAYS DRESS LIKE IT`S THE BEST DAY OF YOUR LIFE',
  description: `Fiifa - ALWAYS DRESS LIKE IT\`S THE BEST DAY OF YOUR LIFE`,
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
