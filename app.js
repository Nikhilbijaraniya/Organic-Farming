/**
 * Vedic Roots Organics — High Performance Store Engine
 * Modern, responsive e-commerce storefront for 100% Certified Organic Pantry Essentials.
 */

// ==========================================================================
// 1. Store Configuration & Initial State
// ==========================================================================
const DEFAULT_CONFIG = {
  storeName: "VEDIC ROOTS ORGANICS",
  storeTagline: "DIRECT FROM FARMS TO YOUR HOME",
  whatsappNumber: "919511355866",
  upiId: "9511355866@upi",
  freeDeliveryThreshold: 799,
  standardShippingFee: 60,
  announcementText: "🌿 100% CERTIFIED ORGANIC & PESTICIDE-FREE • FREE PAN-INDIA DELIVERY ON ORDERS ABOVE ₹799 • USE CODE ORGANIC10"
};

let storeConfig = JSON.parse(localStorage.getItem("organicStoreConfig") || "null") || DEFAULT_CONFIG;

// Official 6 Product Categories for the Farm Catalog
const CATEGORIES = [
  { name: "Desi Ghee", icon: "🏺", desc: "Pure Cow & Buffalo Bilona Ghee" },
  { name: "Wheat & Atta", icon: "🌾", desc: "Desi Sharbati Whole Wheat & Fresh Atta" },
  { name: "Sarso (Mustard)", icon: "🫒", desc: "Kachi Ghani Wood-Pressed Mustard Oil" },
  { name: "Chana & Dal", icon: "🥣", desc: "Desi Kala Chana & Unpolished Toor Dal" },
  { name: "Cow Dung Essentials", icon: "🪵", desc: "Desi Gobar ke Uple / Hawan Kanda" },
  { name: "Bajra & Juar", icon: "🌱", desc: "Organic Bajra & Jowar Ancient Millets" }
];

// ==========================================================================
// 2. Strict Farm Product Catalog (9 Authentic Staples Only)
// ==========================================================================
const products = [
  // 1. Pure Desi Cow Ghee (A2 Bilona Churned)
  {
    id: 1,
    name: "Pure Desi Cow Ghee (A2 Bilona Churned)",
    category: "Desi Ghee",
    description: "Sacred Vedic Bilona ghee prepared from cultured curd of grass-fed indigenous cows. Slow simmered on low wood fire with a rich golden granular (danedar) texture and divine aroma.",
    purity: "100% Pure Cow Ghee • Curd Churned • 0% Chemicals",
    rating: 4.9,
    reviewsCount: 1480,
    image: "images/cow-ghee.jpg",
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    badge: "🔥 Bestseller",
    badgeClass: "badge-bestseller",
    variants: [
      { weight: "500 ml", price: 799, originalPrice: 950 },
      { weight: "1 Litre", price: 1499, originalPrice: 1799 },
      { weight: "2 Litres", price: 2899, originalPrice: 3499 },
      { weight: "5 Litres", price: 6999, originalPrice: 8499 }
    ]
  },

  // 2. Pure Desi Buffalo Ghee (Danedar Bilona)
  {
    id: 2,
    name: "Pure Desi Buffalo Ghee (Danedar Bilona)",
    category: "Desi Ghee",
    description: "Traditional white granular buffalo ghee crafted from high-fat cultured curd using wooden bilona. Remarkable rich taste, traditional aroma, and authentic village purity.",
    purity: "Traditional Curd Churned • Danedar Texture • High Energy",
    rating: 4.9,
    reviewsCount: 920,
    image: "images/buffalo-ghee.jpg",
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    badge: "⭐ Farm Pure",
    badgeClass: "badge-featured",
    variants: [
      { weight: "500 ml", price: 699, originalPrice: 850 },
      { weight: "1 Litre", price: 1349, originalPrice: 1599 },
      { weight: "2 Litres", price: 2599, originalPrice: 3100 },
      { weight: "5 Litres", price: 6299, originalPrice: 7500 }
    ]
  },

  // 3. Desi Sharbati Wheat & Chakki Fresh Atta
  {
    id: 3,
    name: "Desi Sharbati Wheat & Chakki Fresh Atta",
    category: "Wheat & Atta",
    description: "Heavy golden grains of traditional Sehore Sharbati wheat, stone-ground fresh in slow chakki with 100% natural fiber, germ, and bran intact for naturally sweet, ultra-soft rotis.",
    purity: "100% Whole Wheat • Zero Maida • High Dietary Fiber",
    rating: 4.9,
    reviewsCount: 1240,
    image: "images/wheat.jpg",
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    badge: "🔥 Bestseller",
    badgeClass: "badge-bestseller",
    variants: [
      { weight: "5 kg", price: 349, originalPrice: 399 },
      { weight: "10 kg", price: 679, originalPrice: 780 },
      { weight: "25 kg", price: 1649, originalPrice: 1900 }
    ]
  },

  // 4. Kachi Ghani Sarso Tel (Wood-Pressed Mustard Oil)
  {
    id: 4,
    name: "Kachi Ghani Sarso Tel (Wood-Pressed Mustard Oil)",
    category: "Sarso (Mustard)",
    description: "Pure cold-pressed mustard oil extracted in traditional wooden kolhu (Lakdi Ghani) below 40°C. Natural pungency, deep amber golden tint, and rich in natural antioxidants.",
    purity: "Wood-Pressed • Unrefined • Zero Hexane / Argemone",
    rating: 4.9,
    reviewsCount: 1060,
    image: "images/sarso.jpg",
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    badge: "⭐ Cold-Pressed",
    badgeClass: "badge-featured",
    variants: [
      { weight: "1 Litre", price: 249, originalPrice: 299 },
      { weight: "2 Litres", price: 489, originalPrice: 580 },
      { weight: "5 Litres", price: 1199, originalPrice: 1450 }
    ]
  },

  // 5. Desi Kala Chana (Natural Brown Chickpeas)
  {
    id: 5,
    name: "Desi Kala Chana (Natural Brown Chickpeas)",
    category: "Chana & Dal",
    description: "Small-grained indigenous brown desi kala chana grown naturally in rainfed soil. Packed with plant protein, iron, and rich nutty flavor for morning sprouts and wholesome curries.",
    purity: "Unpolished • Non-GMO • Naturally Sun-Dried",
    rating: 4.8,
    reviewsCount: 740,
    image: "images/chana.jpg",
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    badge: "🌱 High Protein",
    badgeClass: "badge-new",
    variants: [
      { weight: "1 kg", price: 149, originalPrice: 175 },
      { weight: "2 kg", price: 289, originalPrice: 340 },
      { weight: "5 kg", price: 699, originalPrice: 820 }
    ]
  },

  // 6. Traditional Unpolished Desi Dal (Toor / Arhar)
  {
    id: 6,
    name: "Traditional Unpolished Desi Dal (Toor / Arhar)",
    category: "Chana & Dal",
    description: "Authentic indigenous toor dal left completely unpolished without synthetic oil, water, or coloring chemicals. Cooks evenly with rich, naturally sweet lentil aroma.",
    purity: "Unpolished • Zero Artificial Gloss • 100% Chemical-Free",
    rating: 4.9,
    reviewsCount: 1150,
    image: "images/dal.jpg",
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    badge: "🔥 Top Dal",
    badgeClass: "badge-bestseller",
    variants: [
      { weight: "1 kg", price: 189, originalPrice: 220 },
      { weight: "2 kg", price: 369, originalPrice: 430 },
      { weight: "5 kg", price: 899, originalPrice: 1050 }
    ]
  },

  // 7. Desi Cow Dung Cakes (Gobar ke Uple / Hawan Kanda)
  {
    id: 7,
    name: "Desi Cow Dung Cakes (Gobar ke Uple / Hawan Kanda)",
    category: "Cow Dung Essentials",
    description: "Traditional round cakes made from fresh dung of free-grazing indigenous desi cows. Sun-dried naturally with sacred straw for Hawan, Agnihotra, purification, and organic garden manure.",
    purity: "100% Desi Cow Dung • Natural Sun-Dried • Chemical-Free",
    rating: 4.9,
    reviewsCount: 890,
    image: "images/cow-dung.jpg",
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    badge: "🪵 Vedic Pure",
    badgeClass: "badge-featured",
    variants: [
      { weight: "12 Pieces", price: 149, originalPrice: 199 },
      { weight: "24 Pieces", price: 279, originalPrice: 360 },
      { weight: "50 Pieces", price: 549, originalPrice: 700 },
      { weight: "100 Pieces", price: 999, originalPrice: 1300 }
    ]
  },

  // 8. Organic Desi Bajra (Pearl Millet)
  {
    id: 8,
    name: "Organic Desi Bajra (Pearl Millet)",
    category: "Bajra & Juar",
    description: "Whole pearl millet harvested from arid Rajasthan farms. Naturally gluten-free, loaded with dietary fiber, iron, and magnesium. Ideal for warming winter rotis, khichdi, and porridge.",
    purity: "Naturally Gluten-Free • Iron Rich • Whole Grain",
    rating: 4.8,
    reviewsCount: 620,
    image: "images/bajra.jpg",
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    badge: "🌱 Ancient Grain",
    badgeClass: "badge-new",
    variants: [
      { weight: "1 kg", price: 99, originalPrice: 125 },
      { weight: "2 kg", price: 189, originalPrice: 240 },
      { weight: "5 kg", price: 449, originalPrice: 560 }
    ]
  },

  // 9. Organic Desi Juar / Jowar (White Sorghum Millet)
  {
    id: 9,
    name: "Organic Desi Juar / Jowar (White Sorghum Millet)",
    category: "Bajra & Juar",
    description: "Heritage white jowar (sorghum) grains and cold-milled flour. Gluten-free, gentle on digestion, with a mild sweet taste that makes soft, delicious traditional jowar bhakris.",
    purity: "100% Gluten-Free • High Fiber • Digestive Wellness",
    rating: 4.8,
    reviewsCount: 580,
    image: "images/juar.jpg",
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    badge: "🌱 Gluten-Free",
    badgeClass: "badge-new",
    variants: [
      { weight: "1 kg", price: 109, originalPrice: 135 },
      { weight: "2 kg", price: 209, originalPrice: 260 },
      { weight: "5 kg", price: 499, originalPrice: 620 }
    ]
  }
];

// ==========================================================================
// 3. Coupons Database
// ==========================================================================
const COUPONS = {
  "ORGANIC10": { discountPercent: 10, minOrder: 799, desc: "10% OFF on orders above ₹799" },
  "FESTIVE15": { discountPercent: 15, minOrder: 1499, desc: "15% OFF on orders above ₹1,499" },
  "FREESHIP": { freeShipping: true, minOrder: 0, desc: "100% Free Doorstep Delivery" },
  "WELCOME100": { discountFlat: 100, minOrder: 799, desc: "Flat ₹100 OFF on first farm order above ₹799" },
  "WELCOME150": { discountFlat: 150, minOrder: 999, desc: "Flat ₹150 OFF on harvest box above ₹999" }
};

// ==========================================================================
// 4. Customer Testimonials
// ==========================================================================
const testimonials = [
  {
    name: "Pooja Sharma",
    city: "New Delhi",
    category: "ghee",
    avatar: "PS",
    stars: 5,
    product: "Pure Desi Cow Ghee (A2 Bilona)",
    quote: "The aroma of this Desi Cow Bilona Ghee takes me straight back to my grandmother's village in Haryana. You can immediately see the golden granular texture. Highly recommended for daily cooking and ayurvedic health!"
  },
  {
    name: "Rajesh Kulkarni",
    city: "Pune",
    category: "ghee",
    avatar: "RK",
    stars: 5,
    product: "Pure Desi Buffalo Ghee (Danedar)",
    quote: "The Buffalo Ghee is truly traditional danedar white ghee with that rich, authentic taste. We make our puran polis and daily dal tadka with it. Far superior to commercial brand ghee."
  },
  {
    name: "Harpreet Singh",
    city: "Chandigarh",
    category: "atta",
    avatar: "HS",
    stars: 5,
    product: "Desi Sharbati Wheat & Chakki Fresh Atta",
    quote: "The Sharbati wheat flour makes the softest, sweet-smelling rotis that stay soft till the evening. Stone-ground with 100% bran intact. You can immediately feel the difference in digestion!"
  },
  {
    name: "Ananya Sen",
    city: "Bengaluru",
    category: "oils",
    avatar: "AS",
    stars: 5,
    product: "Kachi Ghani Sarso Tel & Unpolished Toor Dal",
    quote: "Finally authentic wood-pressed Sarso oil that has genuine kachi ghani pungency without artificial coloring! And the unpolished toor dal cooks quickly with real lentil sweetness."
  },
  {
    name: "Pandit Ramesh Shastri",
    city: "Varanasi",
    category: "ghee",
    avatar: "RS",
    stars: 5,
    product: "Desi Cow Dung Cakes (Gobar ke Uple)",
    quote: "The cow dung cakes are 100% pure desi cow uple, sun-dried naturally with clean straw. Burns steadily with a clean sacred aroma for our daily Agnihotra and Hawan rituals. Pristine purity!"
  },
  {
    name: "Meera Venkatesh",
    city: "Hyderabad",
    category: "atta",
    avatar: "MV",
    stars: 5,
    product: "Organic Desi Bajra & Juar (Jowar)",
    quote: "Both the Bajra and Juar flours are fresh, fragrant, and easy to roll into bhakris. Being naturally gluten-free and fiber-rich, it has become our family's favorite evening dinner staple."
  }
];

// ==========================================================================
// 6. Application State
// ==========================================================================
let cart = JSON.parse(localStorage.getItem("organicStoreCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("organicStoreWishlist") || "[]");

// Sync existing cart items with current products to update image paths & prune removed items
if (Array.isArray(cart) && cart.length > 0) {
  cart = cart.filter(item => products.some(p => p.id === item.id));
  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (p) {
      item.image = p.image;
      item.name = p.name;
    }
  });
  localStorage.setItem("organicStoreCart", JSON.stringify(cart));
}
if (Array.isArray(wishlist) && wishlist.length > 0) {
  wishlist = wishlist.filter(id => products.some(p => p.id === id));
  localStorage.setItem("organicStoreWishlist", JSON.stringify(wishlist));
}
let appliedCoupon = null;
let activeCategory = "All";
let selectedProductVariants = {}; // Map of productId -> variantIndex

// Helper Formatters
const money = n => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(n);

const saveCart = () => localStorage.setItem("organicStoreCart", JSON.stringify(cart));
const saveWishlist = () => localStorage.setItem("organicStoreWishlist", JSON.stringify(wishlist));

// ==========================================================================
// 7. Toast Notification Engine
// ==========================================================================
function showToast(message, type = "success", icon = "🌿") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 8. Product Card HTML Generator
// ==========================================================================
function getProductSelectedVariant(product) {
  const vIndex = selectedProductVariants[product.id] || 0;
  return product.variants[vIndex] || product.variants[0];
}

function renderProductCardHTML(product) {
  const currentVariant = getProductSelectedVariant(product);
  const isWishlisted = wishlist.includes(product.id);
  const cartItem = cart.find(x => x.id === product.id && x.variantWeight === currentVariant.weight);

  const variantOptionsHTML = product.variants.map((v, idx) => `
    <option value="${idx}" ${(selectedProductVariants[product.id] || 0) === idx ? "selected" : ""}>
      ${v.weight} — ${money(v.price)}
    </option>
  `).join("");

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-photo-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>

      <div class="product-body">
        <div class="product-top-bar">
          <div class="product-badges-inline">
            ${product.badge ? `<span class="product-tag-clean ${product.badgeClass || ''}">${product.badge}</span>` : ''}
            <span class="product-category-name">${product.category}</span>
          </div>
          <button class="card-wishlist-btn-inline ${isWishlisted ? 'active' : ''}" data-wishlist-id="${product.id}" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>

        <h3 class="product-title">${product.name}</h3>
        
        <div class="product-rating-bar">
          <span class="rating-stars">★★★★★</span>
          <span class="rating-count"><strong>${product.rating}</strong> (${product.reviewsCount})</span>
        </div>

        <p class="product-desc">${product.description}</p>

        <!-- Variant Selector -->
        <div class="variant-selector-wrapper">
          <label class="variant-label">Pack Size:</label>
          <select class="variant-select" data-variant-select="${product.id}">
            ${variantOptionsHTML}
          </select>
        </div>

        <div class="product-footer">
          <div class="price-container">
            <span class="current-price">${money(currentVariant.price)}</span>
            ${currentVariant.originalPrice ? `<span class="original-price">${money(currentVariant.originalPrice)}</span>` : ''}
          </div>

          <div class="card-action-box">
            ${cartItem ? `
              <div class="card-counter">
                <button data-card-qty="${product.id}" data-variant="${currentVariant.weight}" data-delta="-1">−</button>
                <span>${cartItem.qty}</span>
                <button data-card-qty="${product.id}" data-variant="${currentVariant.weight}" data-delta="1">+</button>
              </div>
            ` : `
              <div class="card-btn-group">
                <button class="add-bag-btn" data-add-bag="${product.id}">
                  ADD TO BAG +
                </button>
                <button class="quick-view-icon-btn" data-quick-view="${product.id}" title="Quick View">
                  👁️
                </button>
              </div>
            `}
          </div>
        </div>
      </div>
    </article>
  `;
}

// Attach event listeners on product cards
function attachProductCardEvents(container) {
  if (!container) return;

  // Variant change
  container.querySelectorAll("[data-variant-select]").forEach(sel => {
    sel.addEventListener("change", e => {
      const pId = Number(e.target.dataset.variantSelect);
      selectedProductVariants[pId] = Number(e.target.value);
      // Re-render relevant grids
      renderProducts();
      renderFeaturedProducts();
      renderBestSellers();
      renderNewArrivals();
    });
  });

  // Wishlist toggle
  container.querySelectorAll("[data-wishlist-id]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleWishlist(Number(btn.dataset.wishlistId));
    });
  });

  // Quick View
  container.querySelectorAll("[data-quick-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      openQuickView(Number(btn.dataset.quickView));
    });
  });

  // Add to Bag
  container.querySelectorAll("[data-add-bag]").forEach(btn => {
    btn.addEventListener("click", () => {
      const pId = Number(btn.dataset.addBag);
      const prod = products.find(p => p.id === pId);
      if (prod) {
        const v = getProductSelectedVariant(prod);
        addToCart(prod.id, v.weight, v.price);
      }
    });
  });

  // Card Counter (- / +)
  container.querySelectorAll("[data-card-qty]").forEach(btn => {
    btn.addEventListener("click", () => {
      const pId = Number(btn.dataset.cardQty);
      const variant = btn.dataset.variant;
      const delta = Number(btn.dataset.delta);
      updateCartQty(pId, variant, delta);
    });
  });
}

// ==========================================================================
// 9. Render Category Visual Explorer Strip (10 Categories)
// ==========================================================================
function renderCategoryChips() {
  const container = document.getElementById("categoryChipsContainer");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const count = products.filter(p => p.category === cat.name).length;
    const isActive = activeCategory === cat.name;

    return `
      <div class="category-chip-card ${isActive ? 'active' : ''}" data-cat-name="${cat.name}">
        <div class="category-chip-icon">${cat.icon}</div>
        <strong class="category-chip-title">${cat.name}</strong>
        <span class="category-chip-count">${count} items</span>
      </div>
    `;
  }).join("");

  container.querySelectorAll("[data-cat-name]").forEach(card => {
    card.addEventListener("click", () => {
      filterByCategory(card.dataset.catName);
    });
  });
}

function filterByCategory(categoryName) {
  if (!categoryName || categoryName.trim().toLowerCase() === "all") {
    activeCategory = "All";
  } else {
    const clean = categoryName.trim().toLowerCase();
    const matched = CATEGORIES.find(c => c.name.toLowerCase() === clean);
    activeCategory = matched ? matched.name : categoryName.trim();
  }

  renderFilters();
  renderProducts();
  renderCategoryChips();

  const shopSection = document.getElementById("shop");
  if (shopSection) {
    const yOffset = -85;
    const y = shopSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  setTimeout(() => {
    const activeTab = document.querySelector(`.category-tabs .filter-btn[data-category="${activeCategory}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, 100);
}

function renderCombos() {}
function addComboToCart() {}

function renderFeaturedProducts() {}
function renderBestSellers() {}
function renderNewArrivals() {}

// ==========================================================================
// 12. Full Pantry Collection & Filtering
// ==========================================================================
function renderFilters() {
  const filterContainer = document.getElementById("categoryFilters");
  if (!filterContainer) return;

  const catNames = ["All", ...CATEGORIES.map(c => c.name)];
  filterContainer.innerHTML = catNames.map(c => `
    <button class="filter-btn cat-tab ${c === activeCategory ? 'active' : ''}" data-category="${c}">
      ${c}
    </button>
  `).join("");

  filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderProducts();
      renderCategoryChips();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
  const sortSelect = document.getElementById("sortSelect");
  const sortBy = sortSelect ? sortSelect.value : "featured";

  let list = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery = !query || 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  // Sorting
  if (sortBy === "price-low") {
    list.sort((a, b) => getProductSelectedVariant(a).price - getProductSelectedVariant(b).price);
  } else if (sortBy === "price-high") {
    list.sort((a, b) => getProductSelectedVariant(b).price - getProductSelectedVariant(a).price);
  } else if (sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "bestseller") {
    list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  } else if (sortBy === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update product count status
  const countDisplay = document.getElementById("productCountText");
  const clearBtn = document.getElementById("clearFiltersBtn");
  if (countDisplay) {
    countDisplay.textContent = `Showing ${list.length} pure organic product${list.length === 1 ? '' : 's'}${activeCategory !== 'All' ? ` in ${activeCategory}` : ''}`;
  }
  if (clearBtn) {
    clearBtn.style.display = (activeCategory !== "All" || query) ? "inline-block" : "none";
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background-color: var(--cream); border-radius: var(--radius-md);">
        <p style="font-size: 2.4rem; margin-bottom: 10px;">🌾</p>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No matching organic items found</h3>
        <p style="color: var(--muted); margin-bottom: 18px;">Try searching for ghee, atta, basmati, honey, or clearing active filters.</p>
        <button class="primary-btn" id="resetFiltersInnerBtn">View All Essentials</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetFiltersInnerBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", resetAllFilters);
    }
    return;
  }

  grid.innerHTML = list.map(p => renderProductCardHTML(p)).join("");
  attachProductCardEvents(grid);
}

function resetAllFilters() {
  activeCategory = "All";
  const searchInput = document.getElementById("searchInput");
  const headerSearchInput = document.getElementById("headerSearchInput");
  if (searchInput) searchInput.value = "";
  if (headerSearchInput) headerSearchInput.value = "";
  renderFilters();
  renderProducts();
  renderCategoryChips();
}

// ==========================================================================
// 13. Header Search & Autocomplete Dropdown
// ==========================================================================
function setupHeaderSearch() {
  const headerInput = document.getElementById("headerSearchInput");
  const clearBtn = document.getElementById("headerSearchClear");
  const dropdown = document.getElementById("searchDropdownMenu");
  const resultsContainer = document.getElementById("searchDropdownResults");
  const resultsHeading = document.getElementById("searchResultsHeading");
  const shopSearchInput = document.getElementById("searchInput");

  if (!headerInput || !dropdown) return;

  // Show dropdown on focus
  headerInput.addEventListener("focus", () => {
    updateDropdownMatches();
    dropdown.classList.add("show");
  });

  // Close dropdown on click outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".header-search-wrap")) {
      dropdown.classList.remove("show");
    }
  });

  // Typing search
  headerInput.addEventListener("input", () => {
    const q = headerInput.value.trim();
    if (clearBtn) clearBtn.style.display = q ? "block" : "none";
    if (shopSearchInput) shopSearchInput.value = q;
    updateDropdownMatches();
    renderProducts();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      headerInput.value = "";
      clearBtn.style.display = "none";
      if (shopSearchInput) shopSearchInput.value = "";
      updateDropdownMatches();
      renderProducts();
      headerInput.focus();
    });
  }

  // Tag chip clicks
  document.querySelectorAll(".search-tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const term = chip.dataset.search;
      headerInput.value = term;
      if (clearBtn) clearBtn.style.display = "block";
      if (shopSearchInput) shopSearchInput.value = term;
      renderProducts();
      dropdown.classList.remove("show");
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
  });

  function updateDropdownMatches() {
    const q = headerInput.value.trim().toLowerCase();
    const matches = products.filter(p => {
      if (!q) return p.isFeatured || p.isBestSeller;
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }).slice(0, 5);

    if (resultsHeading) {
      resultsHeading.textContent = q ? `Matching Products (${matches.length})` : "Popular Organic Recommendations";
    }

    if (!resultsContainer) return;

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p class="small-text" style="color: var(--muted); padding: 8px;">No direct product matches. Press Enter to view full pantry.</p>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(m => {
      const v = m.variants[0];
      return `
        <div class="search-item-row" data-search-result="${m.id}">
          <img src="${m.image}" alt="${m.name}" class="search-item-thumb">
          <div class="search-item-info">
            <div class="search-item-name">${m.name}</div>
            <div class="search-item-meta">${m.category} · ${v.weight}</div>
          </div>
          <span class="search-item-price">${money(v.price)}</span>
        </div>
      `;
    }).join("");

    resultsContainer.querySelectorAll("[data-search-result]").forEach(row => {
      row.addEventListener("click", () => {
        const id = Number(row.dataset.searchResult);
        dropdown.classList.remove("show");
        openQuickView(id);
      });
    });
  }
}

// ==========================================================================
// 14. Wishlist Engine
// ==========================================================================
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${prod.name} from your wishlist.`, "info", "🤍");
  } else {
    wishlist.push(productId);
    showToast(`Saved ${prod.name} to your wishlist!`, "success", "❤️");
  }

  saveWishlist();
  updateWishlistUI();
  renderProducts();
  renderFeaturedProducts();
  renderBestSellers();
  renderNewArrivals();
}

function updateWishlistUI() {
  const count = wishlist.length;
  const badge = document.getElementById("wishlistCount");
  const mobileCount = document.getElementById("mobileWishlistCount");
  const drawerCount = document.getElementById("wishlistDrawerCount");

  if (badge) badge.textContent = count;
  if (mobileCount) mobileCount.textContent = count;
  if (drawerCount) drawerCount.textContent = `${count} item${count === 1 ? '' : 's'}`;

  const container = document.getElementById("wishlistItems");
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--muted);">
        <p style="font-size: 2.2rem; margin-bottom: 12px;">🤍</p>
        <p style="font-weight: 600; color: var(--ink);">Your wishlist is empty</p>
        <p class="small-text">Tap the heart icon on any organic product to save it here.</p>
      </div>
    `;
    return;
  }

  const items = products.filter(p => wishlist.includes(p.id));
  container.innerHTML = items.map(p => {
    const v = p.variants[0];
    return `
      <div class="wishlist-item-card">
        <img src="${p.image}" alt="${p.name}" class="wishlist-item-thumb">
        <div class="wishlist-item-info">
          <div class="wishlist-item-name">${p.name}</div>
          <div class="small-text" style="color: var(--muted);">${p.category} · ${v.weight}</div>
          <div class="wishlist-item-price">${money(v.price)}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <button class="primary-btn" data-wishlist-add="${p.id}" style="padding: 6px 12px; font-size: 0.74rem;">
            Move to Bag
          </button>
          <button class="remove-item-btn" data-wishlist-remove="${p.id}">
            Remove
          </button>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll("[data-wishlist-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.wishlistAdd);
      const prod = products.find(p => p.id === id);
      if (prod) {
        addToCart(prod.id, prod.variants[0].weight, prod.variants[0].price);
        toggleWishlist(id);
      }
    });
  });

  container.querySelectorAll("[data-wishlist-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleWishlist(Number(btn.dataset.wishlistRemove));
    });
  });
}

function openWishlist() {
  updateWishlistUI();
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("show");
}

function closeWishlist() {
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
}

// ==========================================================================
// 15. Shopping Bag & Cart Engine
// ==========================================================================
function addToCart(productId, variantWeight, price) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(x => x.id === productId && x.variantWeight === variantWeight && !x.isCombo);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      variantWeight: variantWeight,
      price: price,
      image: product.image,
      qty: 1,
      isCombo: false
    });
  }

  saveCart();
  renderCart();
  openCart();
  showToast(`Added 1x ${product.name} (${variantWeight}) to bag! 🛍️`, "success");
}

function updateCartQty(productId, variantWeight, delta) {
  const itemIndex = cart.findIndex(x => x.id === productId && x.variantWeight === variantWeight);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    const removedName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    showToast(`Removed ${removedName} from bag.`, "info", "🗑️");
  }

  saveCart();
  renderCart();
  renderProducts();
  renderFeaturedProducts();
  renderBestSellers();
  renderNewArrivals();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  let freeShipping = subtotal >= storeConfig.freeDeliveryThreshold;

  // Coupon calculations
  if (appliedCoupon && COUPONS[appliedCoupon]) {
    const c = COUPONS[appliedCoupon];
    if (c.freeShipping) {
      freeShipping = true;
    }
    if (c.discountPercent && subtotal >= (c.minOrder || 0)) {
      discount = Math.round((subtotal * c.discountPercent) / 100);
    } else if (c.discountFlat && subtotal >= (c.minOrder || 0)) {
      discount = c.discountFlat;
    }
  }

  const shipping = (subtotal === 0 || freeShipping) ? 0 : storeConfig.standardShippingFee;
  const grandTotal = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, grandTotal, freeShipping };
}

function renderCart() {
  const count = cart.reduce((sum, x) => sum + x.qty, 0);
  const { subtotal, discount, shipping, grandTotal } = calculateCartTotals();

  // Header badges
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = count;

  const drawerCount = document.getElementById("drawerItemCount");
  if (drawerCount) drawerCount.textContent = `${count} item${count === 1 ? '' : 's'}`;

  // Summary lines
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRow = document.getElementById("discountRow");
  const discountEl = document.getElementById("cartDiscount");
  const shippingEl = document.getElementById("cartShipping");
  const grandTotalEl = document.getElementById("cartGrandTotal");
  const checkoutBtnEl = document.getElementById("cartTotalBtn");

  if (subtotalEl) subtotalEl.textContent = money(subtotal);
  if (discountEl) discountEl.textContent = `-${money(discount)}`;
  if (discountRow) discountRow.style.display = discount > 0 ? "flex" : "none";
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : money(shipping);
  if (grandTotalEl) grandTotalEl.textContent = money(grandTotal);
  if (checkoutBtnEl) checkoutBtnEl.textContent = money(grandTotal);

  // Free shipping progress bar
  const shippingText = document.getElementById("freeShippingText");
  const progressFill = document.getElementById("shippingProgressFill");
  if (shippingText && progressFill) {
    const threshold = storeConfig.freeDeliveryThreshold;
    if (subtotal >= threshold) {
      shippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Delivery!</strong>`;
      progressFill.style.width = "100%";
      progressFill.classList.add("complete");
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      shippingText.innerHTML = `Add <strong>${money(remaining)}</strong> more for <strong>FREE Delivery!</strong>`;
      progressFill.style.width = `${pct}%`;
      progressFill.classList.remove("complete");
    }
  }

  // Cart item lines
  const cartContainer = document.getElementById("cartItems");
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart-view">
        <p style="font-size: 2.8rem; margin-bottom: 12px;">🛍️</p>
        <h4 style="font-size: 1.2rem; margin-bottom: 6px;">Your shopping bag is empty</h4>
        <p style="color: var(--muted); margin-bottom: 20px;">Explore pure Vedic A2 ghee, stone chakki flours, and cold-pressed oils.</p>
        <button class="primary-btn" id="startShoppingBtn">Start Shopping</button>
      </div>
    `;
    const startBtn = document.getElementById("startShoppingBtn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        closeCart();
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
      });
    }
    return;
  }

  cartContainer.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-variant">${item.variantWeight} · ${money(item.price)} each</div>
        
        <div class="cart-item-bottom">
          <div class="cart-qty-ctrl">
            <button data-qty-change="${item.id}" data-variant="${item.variantWeight}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button data-qty-change="${item.id}" data-variant="${item.variantWeight}" data-delta="1">+</button>
          </div>
          <span class="cart-item-price">${money(item.price * item.qty)}</span>
        </div>

        <button class="remove-item-btn" data-remove-item="${item.id}" data-variant="${item.variantWeight}">
          Remove
        </button>
      </div>
    </div>
  `).join("");

  // Attach controls
  cartContainer.querySelectorAll("[data-qty-change]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.qtyChange);
      const v = btn.dataset.variant;
      const delta = Number(btn.dataset.delta);
      updateCartQty(id, v, delta);
    });
  });

  cartContainer.querySelectorAll("[data-remove-item]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.removeItem);
      const v = btn.dataset.variant;
      updateCartQty(id, v, -999);
    });
  });
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("show");
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
}

// ==========================================================================
// 16. Coupon System
// ==========================================================================
function applyCouponCode(code) {
  const cleanCode = (code || "").trim().toUpperCase();
  const msgEl = document.getElementById("couponMessage");
  const inputEl = document.getElementById("couponInput");

  if (!cleanCode) {
    if (msgEl) {
      msgEl.className = "coupon-msg error";
      msgEl.textContent = "Please enter a valid coupon code.";
    }
    return;
  }

  const { subtotal } = calculateCartTotals();
  const coupon = COUPONS[cleanCode];

  if (!coupon) {
    if (msgEl) {
      msgEl.className = "coupon-msg error";
      msgEl.textContent = `Coupon "${cleanCode}" is invalid or expired.`;
    }
    return;
  }

  if (coupon.minOrder && subtotal < coupon.minOrder) {
    if (msgEl) {
      msgEl.className = "coupon-msg error";
      msgEl.textContent = `Minimum order of ${money(coupon.minOrder)} required for ${cleanCode}.`;
    }
    return;
  }

  appliedCoupon = cleanCode;
  if (inputEl) inputEl.value = cleanCode;
  if (msgEl) {
    msgEl.className = "coupon-msg success";
    msgEl.textContent = `✓ Coupon ${cleanCode} applied! (${coupon.desc})`;
  }

  renderCart();
  showToast(`Coupon ${cleanCode} applied successfully! 🎉`, "success");
}

function setupCouponCopyButtons() {
  document.querySelectorAll(".copy-coupon-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.coupon;
      if (!code) return;

      navigator.clipboard.writeText(code).then(() => {
        btn.classList.add("copied");
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span>✓</span> Copied!`;
        
        showToast(`Copied code ${code} to clipboard! 📋`, "success");
        applyCouponCode(code);

        setTimeout(() => {
          btn.classList.remove("copied");
          btn.innerHTML = originalText;
        }, 2500);
      }).catch(() => {
        applyCouponCode(code);
      });
    });
  });
}

function setupCountdownTimer() {}

// ==========================================================================
// 18. Customer Testimonials Section Filter
// ==========================================================================
function renderTestimonials(filterCat = "all") {
  const container = document.getElementById("testimonialsGrid");
  if (!container) return;

  const filtered = filterCat === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === filterCat);

  container.innerHTML = filtered.map(t => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(t.stars)}</div>
      <p class="review-text">"${t.quote}"</p>
      
      <div class="reviewer">
        <div class="reviewer-meta">
          <div class="reviewer-avatar">${t.avatar}</div>
          <div>
            <strong>${t.name}</strong>
            <small>${t.city} • Verified Buyer</small>
            <div style="font-size: 0.72rem; color: var(--green); font-weight: 600; margin-top: 2px;">
              Bought: ${t.product}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function setupTestimonialsFilter() {
  document.querySelectorAll(".test-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".test-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTestimonials(btn.dataset.testCat);
    });
  });
}

// ==========================================================================
// 19. Order Storage, Management & Seeding Engine
// ==========================================================================
function initOrderStorage() {
  const existing = localStorage.getItem("organicStoreOrders");
  if (!existing) {
    const sampleOrders = [
      {
        id: "ORG-84920",
        date: "Today, 10:30 AM",
        customerName: "Aditi Sharma",
        phone: "9876543210",
        email: "aditi@example.com",
        address: "Flat 402, Green Meadows, Bandra West, Mumbai - 400050",
        paymentMethod: "UPI",
        items: [
          { name: "Pure Desi Cow Ghee (A2 Bilona Churned)", variantWeight: "1 Litre", price: 1499, qty: 1, image: "images/cow-ghee.jpg" },
          { name: "Desi Sharbati Wheat & Chakki Fresh Atta", variantWeight: "5 kg", price: 349, qty: 1, image: "images/wheat.jpg" }
        ],
        subtotal: 1848,
        discount: 100,
        coupon: "WELCOME100",
        shipping: 0,
        grandTotal: 1748,
        status: "Packed",
        timeline: [
          { step: "Order Received & Verified", date: "Today, 10:30 AM", done: true },
          { step: "Fresh Harvest Batch Packed in Eco-Jars", date: "Today, 12:45 PM", done: true },
          { step: "Handed over to Express Courier (BlueDart)", date: "In Transit", done: false },
          { step: "Delivered to Doorstep", date: "Est. 2 Business Days", done: false }
        ]
      }
    ];
    localStorage.setItem("organicStoreOrders", JSON.stringify(sampleOrders));
  }
}

function createOrderRecord(details = {}) {
  const { subtotal, discount, shipping, grandTotal } = calculateCartTotals();
  const orderId = "ORG-" + Math.floor(10000 + Math.random() * 90000);
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' });

  const orderRecord = {
    id: orderId,
    date: `${dateStr}, ${timeStr}`,
    customerName: details.name || "Customer",
    phone: details.phone || "",
    email: details.email || "",
    address: `${details.address || ""}, ${details.city || ""} - ${details.pincode || ""}`,
    paymentMethod: details.paymentMethod || "UPI",
    items: cart.map(i => ({ ...i })),
    subtotal,
    discount,
    coupon: appliedCoupon || null,
    shipping,
    grandTotal,
    status: "Confirmed",
    timeline: [
      { step: "Order Placed & Confirmed", date: `${dateStr}, ${timeStr}`, done: true },
      { step: "Small-Batch Purity Packing at Farm", date: "In Progress", done: false },
      { step: "Dispatch via Express Courier", date: "Pending", done: false },
      { step: "Out for Delivery", date: "Pending", done: false }
    ]
  };

  try {
    const orders = JSON.parse(localStorage.getItem("organicStoreOrders") || "[]");
    orders.unshift(orderRecord);
    localStorage.setItem("organicStoreOrders", JSON.stringify(orders));
  } catch (e) {
    console.error("Failed saving order", e);
  }

  return orderRecord;
}

// ==========================================================================
// 20. Order Tracking Search Engine
// ==========================================================================
function setupOrderTracking() {
  const input = document.getElementById("trackQueryInput");
  const btn = document.getElementById("searchOrderBtn");
  const container = document.getElementById("trackOrderResults");

  if (!input || !btn || !container) return;

  function doTrack() {
    const rawQuery = input.value.trim();
    if (!rawQuery) {
      container.innerHTML = `<div style="color: var(--terracotta); font-size: 0.88rem; padding: 12px 0;">⚠️ Please enter your 10-digit mobile number or Order ID (e.g. ORG-84920).</div>`;
      return;
    }

    const query = rawQuery.toLowerCase();
    const orders = JSON.parse(localStorage.getItem("organicStoreOrders") || "[]");
    const matched = orders.filter(o => {
      const matchId = o.id && o.id.toLowerCase().includes(query);
      const matchPhone = o.phone && o.phone.replace(/\D/g, "").includes(rawQuery.replace(/\D/g, ""));
      return matchId || matchPhone;
    });

    if (matched.length === 0) {
      container.innerHTML = `
        <div style="background-color: var(--cream); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 20px; text-align: center; margin-top: 14px;">
          <p style="font-size: 2rem; margin-bottom: 8px;">🔍</p>
          <strong style="color: var(--ink); display: block; margin-bottom: 6px; font-size: 1.05rem;">No Matching Farm Order Found</strong>
          <p class="small-text" style="color: var(--muted); margin-bottom: 16px;">We couldn't locate an order with "<strong>${rawQuery}</strong>". Please check your 10-digit mobile number or Order ID (e.g. ORG-84920).</p>
          <a href="https://wa.me/${storeConfig.whatsappNumber}?text=Hi!%20I%20need%20help%20tracking%20my%20order%20(${encodeURIComponent(rawQuery)})" target="_blank" class="primary-btn" style="display: inline-block; padding: 9px 18px; font-size: 0.82rem;">
            💬 Ask Support on WhatsApp
          </a>
        </div>
      `;
      return;
    }

    container.innerHTML = matched.map(order => {
      const statusPillClass = order.status === "Delivered" ? "status-delivered" :
                              order.status === "Dispatched" ? "status-dispatched" :
                              order.status === "Packed" ? "status-packed" : "status-pending";

      const itemsList = order.items.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding: 6px 0; border-bottom: 1px dashed var(--border-light); font-size: 0.84rem;">
          <span>• ${item.name} (${item.variantWeight || item.weight || 'Pack'}) x ${item.qty}</span>
          <strong>${money(item.price * item.qty)}</strong>
        </div>
      `).join("");

      const timelineSteps = (order.timeline || []).map(t => `
        <div class="timeline-step ${t.done ? 'completed' : ''}">
          <div class="timeline-step-title">${t.step}</div>
          <div class="timeline-step-date">${t.date}</div>
        </div>
      `).join("");

      return `
        <div class="order-track-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 8px; flex-wrap: wrap;">
            <div>
              <strong style="font-size: 1.05rem; color: var(--green);">${order.id}</strong>
              <div style="font-size: 0.78rem; color: var(--muted);">${order.date} • ${order.customerName}</div>
            </div>
            <span class="track-status-pill ${statusPillClass}">${order.status}</span>
          </div>

          <div style="background:#ffffff; border-radius: var(--radius-sm); padding: 12px; border: 1px solid var(--border-light); margin-bottom: 14px;">
            <div style="font-size: 0.76rem; color: var(--muted); text-transform: uppercase; font-weight: 700; margin-bottom: 6px;">Order Items</div>
            ${itemsList}
            <div style="display:flex; justify-content:space-between; margin-top: 8px; font-weight: 700; color: var(--green); font-size: 0.92rem;">
              <span>Total (${order.paymentMethod}):</span>
              <span>${money(order.grandTotal)}</span>
            </div>
          </div>

          <div class="track-timeline">
            ${timelineSteps}
          </div>

          <div style="margin-top: 16px; text-align: right;">
            <a href="https://wa.me/${storeConfig.whatsappNumber}?text=Hi!%20I%20am%20inquiring%20about%20Order%20${order.id}" target="_blank" class="secondary-btn" style="padding: 6px 14px; font-size: 0.78rem;">
              💬 Direct WhatsApp Update
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  btn.addEventListener("click", doTrack);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") doTrack();
  });
}

// ==========================================================================
// 21. Newsletter Subscription Form
// ==========================================================================
function setupNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const revealBox = document.getElementById("newsletterCouponReveal");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = (emailInput ? emailInput.value : "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email || !emailRegex.test(email)) {
      showToast("Please enter a valid email address.", "info", "⚠️");
      return;
    }

    try {
      const subscribers = JSON.parse(localStorage.getItem("storeSubscribers") || "[]");
      if (!subscribers.includes(email.toLowerCase())) {
        subscribers.push(email.toLowerCase());
        localStorage.setItem("storeSubscribers", JSON.stringify(subscribers));
      }
    } catch (err) {
      console.warn("Could not save subscriber", err);
    }

    if (revealBox) {
      revealBox.classList.add("show");
    }

    applyCouponCode("WELCOME100");
    showToast("Welcome! ₹100 OFF applied to your cart 🎉", "success");
    if (emailInput) emailInput.value = "";
  });
}

// ==========================================================================
// 22. Store Owner / Admin Dashboard Engine
// ==========================================================================
function setupAdminDashboard() {
  const tabs = document.querySelectorAll(".admin-tab");
  const panes = {
    orders: document.getElementById("adminTabOrders"),
    settings: document.getElementById("adminTabSettings"),
    products: document.getElementById("adminTabProducts")
  };

  // Tab Switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetTab = tab.dataset.tab;
      Object.keys(panes).forEach(k => {
        if (panes[k]) panes[k].classList.remove("active");
      });
      if (panes[targetTab]) panes[targetTab].classList.add("active");

      if (targetTab === "orders") renderAdminOrders();
      if (targetTab === "settings") loadAdminSettings();
      if (targetTab === "products") renderAdminProducts();
    });
  });

  // Search orders
  const searchInput = document.getElementById("adminOrderSearch");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderAdminOrders(searchInput.value.trim().toLowerCase());
    });
  }

  // Export CSV
  const exportBtn = document.getElementById("exportOrdersCsv");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportOrdersToCSV);
  }

  // Settings form submission
  const settingsForm = document.getElementById("adminSettingsForm");
  if (settingsForm) {
    settingsForm.addEventListener("submit", e => {
      e.preventDefault();
      storeConfig.storeName = document.getElementById("settingStoreName").value.trim() || DEFAULT_CONFIG.storeName;
      storeConfig.whatsappNumber = document.getElementById("settingWhatsApp").value.trim() || DEFAULT_CONFIG.whatsappNumber;
      storeConfig.upiId = document.getElementById("settingUpiId").value.trim() || DEFAULT_CONFIG.upiId;
      storeConfig.freeDeliveryThreshold = Number(document.getElementById("settingFreeDelivery").value) || DEFAULT_CONFIG.freeDeliveryThreshold;
      storeConfig.standardShippingFee = Number(document.getElementById("settingShippingFee").value) || DEFAULT_CONFIG.standardShippingFee;
      storeConfig.announcementText = document.getElementById("settingAnnouncement").value.trim() || DEFAULT_CONFIG.announcementText;

      localStorage.setItem("organicStoreConfig", JSON.stringify(storeConfig));

      // Refresh UI
      const storeNameDisplay = document.getElementById("storeNameDisplay");
      const footerStoreName = document.getElementById("footerStoreName");
      const copyrightName = document.getElementById("copyrightName");
      if (storeNameDisplay) storeNameDisplay.textContent = storeConfig.storeName;
      if (footerStoreName) footerStoreName.textContent = storeConfig.storeName;
      if (copyrightName) copyrightName.textContent = storeConfig.storeName;

      renderCart();
      showToast("Store settings updated successfully! ⚙️", "success");
    });
  }

  // Initial load
  renderAdminOrders();
  loadAdminSettings();
  renderAdminProducts();
}

function renderAdminOrders(searchQuery = "") {
  const tbody = document.getElementById("adminOrdersTableBody");
  const countEl = document.getElementById("adminOrdersCount");
  if (!tbody) return;

  const orders = JSON.parse(localStorage.getItem("organicStoreOrders") || "[]");
  if (countEl) countEl.textContent = orders.length;

  const filtered = orders.filter(o => {
    if (!searchQuery) return true;
    return (
      (o.id && o.id.toLowerCase().includes(searchQuery)) ||
      (o.customerName && o.customerName.toLowerCase().includes(searchQuery)) ||
      (o.phone && o.phone.includes(searchQuery))
    );
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 24px; color: var(--muted);">No orders found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td style="font-size: 0.8rem; color: var(--muted);">${o.date}</td>
      <td>
        <strong>${o.customerName}</strong><br>
        <small style="color: var(--muted);">${o.phone}</small>
      </td>
      <td style="font-size: 0.8rem;">
        ${o.items.map(i => `${i.name} (${i.variantWeight || 'Std'}) x${i.qty}`).join('<br>')}
      </td>
      <td><strong>${money(o.grandTotal)}</strong></td>
      <td><span class="pay-tag">${o.paymentMethod || 'UPI'}</span></td>
      <td>
        <select class="admin-status-select" data-order-id="${o.id}">
          <option value="Confirmed" ${o.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
          <option value="Packed" ${o.status === "Packed" ? "selected" : ""}>Packed</option>
          <option value="Dispatched" ${o.status === "Dispatched" ? "selected" : ""}>Dispatched</option>
          <option value="Delivered" ${o.status === "Delivered" ? "selected" : ""}>Delivered</option>
        </select>
      </td>
      <td>
        <a href="https://wa.me/${o.phone ? '91' + o.phone.replace(/\D/g, '').slice(-10) : storeConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(o.customerName)},%20update%20on%20your%20organic%20order%20${o.id}" target="_blank" class="secondary-btn" style="padding: 4px 8px; font-size: 0.72rem;">
          WhatsApp
        </a>
      </td>
    </tr>
  `).join("");

  tbody.querySelectorAll(".admin-status-select").forEach(sel => {
    sel.addEventListener("change", e => {
      const orderId = sel.dataset.orderId;
      const newStatus = e.target.value;
      const allOrders = JSON.parse(localStorage.getItem("organicStoreOrders") || "[]");
      const target = allOrders.find(x => x.id === orderId);
      if (target) {
        target.status = newStatus;
        if (target.timeline && target.timeline.length >= 4) {
          if (newStatus === "Packed") target.timeline[1].done = true;
          if (newStatus === "Dispatched") {
            target.timeline[1].done = true;
            target.timeline[2].done = true;
          }
          if (newStatus === "Delivered") {
            target.timeline.forEach(t => t.done = true);
          }
        }
        localStorage.setItem("organicStoreOrders", JSON.stringify(allOrders));
        showToast(`Order ${orderId} updated to ${newStatus}`, "success");
      }
    });
  });
}

function loadAdminSettings() {
  const storeNameInput = document.getElementById("settingStoreName");
  const waInput = document.getElementById("settingWhatsApp");
  const upiInput = document.getElementById("settingUpiId");
  const freeDelInput = document.getElementById("settingFreeDelivery");
  const shippingInput = document.getElementById("settingShippingFee");
  const annInput = document.getElementById("settingAnnouncement");

  if (storeNameInput) storeNameInput.value = storeConfig.storeName || DEFAULT_CONFIG.storeName;
  if (waInput) waInput.value = storeConfig.whatsappNumber || DEFAULT_CONFIG.whatsappNumber;
  if (upiInput) upiInput.value = storeConfig.upiId || DEFAULT_CONFIG.upiId;
  if (freeDelInput) freeDelInput.value = storeConfig.freeDeliveryThreshold || DEFAULT_CONFIG.freeDeliveryThreshold;
  if (shippingInput) shippingInput.value = storeConfig.standardShippingFee || DEFAULT_CONFIG.standardShippingFee;
  if (annInput) annInput.value = storeConfig.announcementText || DEFAULT_CONFIG.announcementText;
}

function renderAdminProducts() {
  const container = document.getElementById("adminProductList");
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="admin-prod-row" style="background:#ffffff; border: 1px solid var(--border); border-radius: var(--radius-sm); margin-bottom: 10px;">
      <div style="display: flex; align-items: center; gap: 14px;">
        <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 4px;">
        <div>
          <strong style="font-size: 0.9rem; color: var(--green);">${p.name}</strong>
          <div style="font-size: 0.76rem; color: var(--muted);">${p.category} · Base Pack: ${p.variants[0].weight}</div>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <label style="font-size: 0.8rem; font-weight: 600;">Price (₹):</label>
        <input type="number" class="admin-prod-price-input" data-prod-id="${p.id}" value="${p.variants[0].price}" style="width: 85px; padding: 5px 8px; font-size: 0.85rem; border: 1px solid var(--border); border-radius: 4px;">
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".admin-prod-price-input").forEach(input => {
    input.addEventListener("change", e => {
      const pId = Number(input.dataset.prodId);
      const newPrice = Number(e.target.value);
      const prod = products.find(p => p.id === pId);
      if (prod && newPrice > 0) {
        prod.variants[0].price = newPrice;
        renderProducts();
        renderCart();
        showToast(`Updated price of ${prod.name} to ₹${newPrice}`, "success");
      }
    });
  });
}

function exportOrdersToCSV() {
  const orders = JSON.parse(localStorage.getItem("organicStoreOrders") || "[]");
  if (orders.length === 0) {
    showToast("No orders available to export.", "info");
    return;
  }

  const headers = ["Order ID", "Date", "Customer Name", "Phone", "Address", "Payment Method", "Items", "Grand Total", "Status"];
  const rows = orders.map(o => [
    o.id,
    `"${o.date}"`,
    `"${o.customerName}"`,
    `"${o.phone}"`,
    `"${(o.address || '').replace(/"/g, '""')}"`,
    o.paymentMethod,
    `"${o.items.map(i => `${i.name} (${i.variantWeight}) x${i.qty}`).join('; ')}"`,
    o.grandTotal,
    o.status
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `organic_orders_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("Orders exported as CSV! 📊", "success");
}

// ==========================================================================
// 21. Quick View Modal Engine
// ==========================================================================
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  const currentVariant = getProductSelectedVariant(product);

  const variantsHTML = product.variants.map((v, idx) => `
    <option value="${idx}" ${(selectedProductVariants[product.id] || 0) === idx ? "selected" : ""}>
      ${v.weight} — ${money(v.price)}
    </option>
  `).join("");

  content.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="quick-view-img">
    </div>

    <div class="qv-details">
      <span class="qv-category">${product.category}</span>
      <h3>${product.name}</h3>
      
      <div class="product-rating-bar" style="margin-bottom: 12px;">
        <span class="rating-stars">★★★★★</span>
        <span class="rating-count"><strong>${product.rating}</strong> / 5.0 (${product.reviewsCount} verified reviews)</span>
      </div>

      <div class="price-container" style="margin-bottom: 16px;">
        <span class="current-price" id="qvPriceDisplay" style="font-size: 1.6rem;">${money(currentVariant.price)}</span>
        ${currentVariant.originalPrice ? `<span class="original-price" id="qvOldPriceDisplay">${money(currentVariant.originalPrice)}</span>` : ''}
      </div>

      <p class="qv-desc">${product.description}</p>

      <ul class="qv-features">
        <li>✓ <strong>Purity Standard:</strong> ${product.purity}</li>
        <li>✓ <strong>Origin:</strong> Directly sourced from certified organic farms</li>
        <li>✓ <strong>Packaging:</strong> Food-grade glass jar / tin / kraft paper</li>
        <li>✓ <strong>Guarantee:</strong> 100% Replacement Guarantee if not delighted</li>
      </ul>

      <div class="variant-selector-wrapper" style="margin-bottom: 20px;">
        <label class="variant-label">Select Pack Size:</label>
        <select class="variant-select" id="qvVariantSelect">
          ${variantsHTML}
        </select>
      </div>

      <div style="display: flex; gap: 12px; align-items: center;">
        <button class="primary-btn" id="qvAddBagBtn" style="flex: 1;">
          Add to Shopping Bag 🛍️
        </button>
        <button class="secondary-btn" id="qvWishlistBtn">
          ${wishlist.includes(product.id) ? '❤️ Saved' : '🤍 Save'}
        </button>
      </div>
    </div>
  `;

  // Attach Quick View internal events
  const sel = document.getElementById("qvVariantSelect");
  if (sel) {
    sel.addEventListener("change", e => {
      const idx = Number(e.target.value);
      selectedProductVariants[product.id] = idx;
      const v = product.variants[idx];
      const curPrice = document.getElementById("qvPriceDisplay");
      const oldPrice = document.getElementById("qvOldPriceDisplay");
      if (curPrice) curPrice.textContent = money(v.price);
      if (oldPrice && v.originalPrice) oldPrice.textContent = money(v.originalPrice);
      renderProducts();
      renderFeaturedProducts();
      renderBestSellers();
      renderNewArrivals();
    });
  }

  const addBtn = document.getElementById("qvAddBagBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const v = getProductSelectedVariant(product);
      addToCart(product.id, v.weight, v.price);
      modal.classList.remove("show");
    });
  }

  const wishBtn = document.getElementById("qvWishlistBtn");
  if (wishBtn) {
    wishBtn.addEventListener("click", () => {
      toggleWishlist(product.id);
      wishBtn.textContent = wishlist.includes(product.id) ? '❤️ Saved' : '🤍 Save';
    });
  }

  modal.classList.add("show");
}

// ==========================================================================
// 22. Policy Modal & Store Policies Content
// ==========================================================================
const POLICIES = {
  shipping: {
    title: "Shipping & Delivery Policy",
    body: `
      <h4>1. Pan-India Delivery Coverage</h4>
      <p>We deliver to over 26,000+ pincodes across all Indian states and Union Territories through top express courier partners (BlueDart, Delhivery, DTDC, India Post SpeedPost).</p>
      
      <h4>2. Delivery Timelines</h4>
      <p>• <strong>Metro Cities (Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Kolkata):</strong> 2 to 3 business days.<br>
      • <strong>Tier 2 & 3 Cities / Rest of India:</strong> 3 to 5 business days.<br>
      • <strong>Same Day Dispatch:</strong> Orders placed before 1:00 PM IST are dispatched from our warehouse on the same day.</p>

      <h4>3. Safe Eco-Packaging</h4>
      <p>All A2 Desi Cow Ghee and Raw Wild Honey jars are packaged in custom-molded shockproof eco-cushioning. In the rare event of transit damage, we provide immediate free replacement.</p>
      
      <h4>4. Shipping Charges</h4>
      <p>• <strong>Orders Above ₹799:</strong> 100% FREE Delivery.<br>
      • <strong>Orders Below ₹799:</strong> Nominal flat shipping fee of ₹60.</p>
    `
  },
  refund: {
    title: "Return, Replacement & Refund Guarantee",
    body: `
      <h4>100% Purity & Satisfaction Guarantee</h4>
      <p>We stand behind the authenticity and taste of every harvest staple we package. If you are not completely satisfied with the quality, freshness, or aroma, we offer a hassle-free replacement or full refund.</p>

      <h4>Eligibility for Replacement / Refund</h4>
      <p>• Transit damage or broken seals upon delivery.<br>
      • Quality defect or unsatisfactory natural aroma.<br>
      • Incorrect product or variant received.</p>

      <h4>How to Request Support</h4>
      <p>Simply message our customer desk on WhatsApp at <strong>+91 95113 55866</strong> or email <strong>support@vedicroots.in</strong> with your Order ID and photo within 7 days of delivery. Refunds are credited via original UPI/Bank within 2 business days.</p>
    `
  },
  privacy: {
    title: "Privacy Policy & Customer Security",
    body: `
      <h4>Customer Data Protection</h4>
      <p>Your personal details (name, delivery address, phone number, and email) are strictly used for order processing, logistics delivery, and invoice delivery. We never sell, rent, or trade your data to third-party telemarketers.</p>

      <h4>Secure Direct UPI & Card Payments</h4>
      <p>All online payments are processed through secure 256-bit encrypted gateways. We do not store your UPI MPIN or debit/credit card numbers on our servers.</p>
    `
  },
  terms: {
    title: "Terms & Conditions of Service",
    body: `
      <h4>Organic Agricultural Sourcing</h4>
      <p>Our products are natural, seasonal agricultural harvests. Minor natural variations in honey color, ghee grain texture, or flour moisture can occur due to seasonal weather, reflecting genuine lack of artificial stabilizers and industrial standardization.</p>

      <h4>FSSAI & Regulatory Compliance</h4>
      <p>Vedic Roots Organics operates in full compliance with FSSAI regulations, Jaivik Bharat organic certification norms, and Legal Metrology packaging guidelines.</p>
    `
  }
};

function openPolicyModal(type) {
  const policy = POLICIES[type];
  if (!policy) return;

  const modal = document.getElementById("policyModal");
  const title = document.getElementById("policyModalTitle");
  const body = document.getElementById("policyModalBody");

  if (!modal || !title || !body) return;

  title.textContent = policy.title;
  body.innerHTML = policy.body;
  modal.classList.add("show");
}

function setupPolicyButtons() {
  const shippingBtn = document.getElementById("footerShippingBtn");
  const refundBtn = document.getElementById("footerRefundBtn");
  const privacyBtn = document.getElementById("footerPrivacyBtn");
  const termsBtn = document.getElementById("footerTermsBtn");
  const closeBtn = document.getElementById("policyClose");
  const modal = document.getElementById("policyModal");

  if (shippingBtn) shippingBtn.onclick = () => openPolicyModal("shipping");
  if (refundBtn) refundBtn.onclick = () => openPolicyModal("refund");
  if (privacyBtn) privacyBtn.onclick = () => openPolicyModal("privacy");
  if (termsBtn) termsBtn.onclick = () => openPolicyModal("terms");

  if (closeBtn && modal) {
    closeBtn.onclick = () => modal.classList.remove("show");
  }
}

// ==========================================================================
// 23. WhatsApp Order Formatting
// ==========================================================================
function getOrderText(details = {}, orderId = "") {
  const { subtotal, discount, shipping, grandTotal } = calculateCartTotals();
  const lines = cart.map(item => `• ${item.name} (${item.variantWeight}) x ${item.qty} = ${money(item.price * item.qty)}`);

  return `🌿 *ORDER REQUEST — VEDIC ROOTS ORGANICS* 🌿\n\n` +
    (orderId ? `*Order ID:* ${orderId}\n\n` : '') +
    `*Order Items:*\n${lines.join("\n")}\n\n` +
    `*Subtotal:* ${money(subtotal)}\n` +
    (discount > 0 ? `*Discount (${appliedCoupon}):* -${money(discount)}\n` : '') +
    `*Delivery Charges:* ${shipping === 0 ? "FREE" : money(shipping)}\n` +
    `*Grand Total:* ${money(grandTotal)}\n\n` +
    `*Customer Delivery Details:*\n` +
    `• Name: ${details.name || "Customer"}\n` +
    `• Phone: ${details.phone || ""}\n` +
    `• Address: ${details.address || ""}\n` +
    `• City & PIN: ${details.city || ""} - ${details.pincode || ""}\n` +
    (details.notes ? `• Special Notes: ${details.notes}\n` : '') +
    `• Preferred Payment: ${details.paymentMethod || "UPI"}\n\n` +
    `Please confirm dispatch timeline and send payment QR code. Thank you!`;
}

function sendWhatsAppOrder(details = {}, orderId = "") {
  if (!cart.length) {
    showToast("Your shopping bag is empty.", "info", "🛍️");
    return;
  }
  const text = getOrderText(details, orderId);
  const url = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// ==========================================================================
// 24. Initialization & Event Binding
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize order storage with verified seed data
  initOrderStorage();

  // Sync Brand & Copyright
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const storeNameDisplay = document.getElementById("storeNameDisplay");
  if (storeNameDisplay) storeNameDisplay.textContent = storeConfig.storeName;

  // Render initial components
  renderCategoryChips();
  setupCountdownTimer();
  renderCombos();
  setupCouponCopyButtons();
  renderFeaturedProducts();
  renderBestSellers();
  renderNewArrivals();
  renderFilters();
  renderProducts();
  renderCart();
  updateWishlistUI();
  renderTestimonials();
  setupTestimonialsFilter();
  setupHeaderSearch();
  setupNewsletterForm();
  setupPolicyButtons();
  setupOrderTracking();
  setupAdminDashboard();

  // Search input inside shop section
  const shopSearchInput = document.getElementById("searchInput");
  if (shopSearchInput) {
    shopSearchInput.addEventListener("input", () => {
      const headerInput = document.getElementById("headerSearchInput");
      if (headerInput) headerInput.value = shopSearchInput.value;
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", renderProducts);
  }

  // Clear filters button
  const clearBtn = document.getElementById("clearFiltersBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", resetAllFilters);
  }

  // Cart Drawer open / close
  const cartOpenBtn = document.getElementById("cartOpen");
  const cartCloseBtn = document.getElementById("cartClose");
  const overlay = document.getElementById("cartOverlay");

  if (cartOpenBtn) cartOpenBtn.onclick = openCart;
  if (cartCloseBtn) cartCloseBtn.onclick = closeCart;
  if (overlay) {
    overlay.onclick = () => {
      closeCart();
      closeWishlist();
    };
  }

  // Wishlist Drawer open / close
  const wishlistOpenBtn = document.getElementById("wishlistOpen");
  const wishlistCloseBtn = document.getElementById("wishlistClose");
  const mobileWishlistBtn = document.getElementById("mobileWishlistBtn");

  if (wishlistOpenBtn) wishlistOpenBtn.onclick = openWishlist;
  if (wishlistCloseBtn) wishlistCloseBtn.onclick = closeWishlist;
  if (mobileWishlistBtn) {
    mobileWishlistBtn.onclick = e => {
      e.preventDefault();
      closeMobileMenu();
      openWishlist();
    };
  }

  // Coupon apply button inside cart
  const applyCouponBtn = document.getElementById("applyCouponBtn");
  const couponInput = document.getElementById("couponInput");
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener("click", () => {
      applyCouponCode(couponInput.value);
    });
    couponInput.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        applyCouponCode(couponInput.value);
      }
    });
  }

  // WhatsApp order button inside cart
  const whatsappCartBtn = document.getElementById("whatsappCart");
  if (whatsappCartBtn) {
    whatsappCartBtn.addEventListener("click", () => sendWhatsAppOrder());
  }

  // Checkout modal opener
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutClose = document.getElementById("checkoutClose");

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener("click", () => {
      if (!cart.length) {
        showToast("Your shopping bag is empty.", "info", "🛍️");
        return;
      }
      closeCart();

      // Update checkout summary preview
      const preview = document.getElementById("checkoutSummaryPreview");
      const { subtotal, discount, shipping, grandTotal } = calculateCartTotals();
      if (preview) {
        preview.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>Subtotal (${cart.reduce((s, x) => s + x.qty, 0)} items):</span>
            <strong>${money(subtotal)}</strong>
          </div>
          ${discount > 0 ? `
            <div style="display:flex; justify-content:space-between; margin-bottom:4px; color:#278f4b;">
              <span>Discount (${appliedCoupon}):</span>
              <strong>-${money(discount)}</strong>
            </div>
          ` : ''}
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>Delivery:</span>
            <strong>${shipping === 0 ? "FREE" : money(shipping)}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:1.05rem; font-weight:700; color:var(--green); border-top:1px dashed var(--border); padding-top:6px; margin-top:6px;">
            <span>Grand Total:</span>
            <span>${money(grandTotal)}</span>
          </div>
        `;
      }

      const placeTotalEl = document.getElementById("placeOrderBtnTotal");
      if (placeTotalEl) placeTotalEl.textContent = money(grandTotal);

      checkoutModal.classList.add("show");
    });
  }

  if (checkoutClose && checkoutModal) {
    checkoutClose.addEventListener("click", () => checkoutModal.classList.remove("show"));
  }

  // Checkout form submit
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", e => {
      e.preventDefault();
      const formData = new FormData(checkoutForm);
      const details = Object.fromEntries(formData);
      const order = createOrderRecord(details);
      sendWhatsAppOrder(details, order.id);
      cart = [];
      saveCart();
      renderCart();
      renderProducts();
      if (checkoutModal) checkoutModal.classList.remove("show");
      showToast(`Order ${order.id} placed! Tracking details saved 🌾`, "success", "📲");
    });
  }

  // Quick View close
  const quickViewModal = document.getElementById("quickViewModal");
  const quickViewClose = document.getElementById("quickViewClose");
  if (quickViewClose && quickViewModal) {
    quickViewClose.addEventListener("click", () => quickViewModal.classList.remove("show"));
  }

  // Track Order modal opener
  const trackNavBtn = document.getElementById("trackOrderNavBtn");
  const trackMobileBtn = document.getElementById("mobileTrackBtn");
  const trackFooterBtn = document.getElementById("footerTrackBtn");
  const trackModal = document.getElementById("trackOrderModal");
  const trackClose = document.getElementById("trackOrderClose");

  const openTrack = e => {
    if (e) e.preventDefault();
    closeMobileMenu();
    if (trackModal) trackModal.classList.add("show");
  };

  if (trackNavBtn) trackNavBtn.onclick = openTrack;
  if (trackMobileBtn) trackMobileBtn.onclick = openTrack;
  if (trackFooterBtn) trackFooterBtn.onclick = openTrack;
  if (trackClose && trackModal) {
    trackClose.onclick = () => trackModal.classList.remove("show");
  }

  // Mobile drawer toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMobileMenuBtn = document.getElementById("closeMobileMenu");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  function openMobileMenu() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add("open");
  }

  function closeMobileMenu() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove("open");
  }

  if (mobileMenuBtn) mobileMenuBtn.onclick = openMobileMenu;
  if (closeMobileMenuBtn) closeMobileMenuBtn.onclick = closeMobileMenu;

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Admin Portal Modal Opener
  const openAdminBtn = document.getElementById("openAdminBtn");
  const mobileAdminBtn = document.getElementById("mobileAdminBtn");
  const adminModal = document.getElementById("adminModal");
  const adminClose = document.getElementById("adminClose");

  const openAdmin = e => {
    if (e) e.preventDefault();
    closeMobileMenu();
    if (adminModal) adminModal.classList.add("show");
  };

  if (openAdminBtn) openAdminBtn.onclick = openAdmin;
  if (mobileAdminBtn) mobileAdminBtn.onclick = openAdmin;
  if (adminClose && adminModal) {
    adminClose.onclick = () => adminModal.classList.remove("show");
  }

  // Keyboard shortcut '/' to search
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      const headerInput = document.getElementById("headerSearchInput");
      if (headerInput) headerInput.focus();
    }
    if (e.key === "Escape") {
      closeCart();
      closeWishlist();
      if (quickViewModal) quickViewModal.classList.remove("show");
      if (checkoutModal) checkoutModal.classList.remove("show");
      if (trackModal) trackModal.classList.remove("show");
      const policyModal = document.getElementById("policyModal");
      if (policyModal) policyModal.classList.remove("show");
      if (adminModal) adminModal.classList.remove("show");
      const dropdown = document.getElementById("searchDropdownMenu");
      if (dropdown) dropdown.classList.remove("show");
    }
  });
});
