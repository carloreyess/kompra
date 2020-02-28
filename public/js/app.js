(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/delivery/Deliver.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      menu: false,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      e6: 1,
      purchase: [],
      form: {
        po_id: '',
        dr_no: '',
        delivery_date: '',
        received_by: '',
        delivered_by: '',
        items: []
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('createDeliverDialog', function () {
      _this.dialog = true;

      _this.load_purchase();
    });
  },
  methods: {
    load_purchase: function load_purchase() {
      var _this2 = this;

      axios.get('../purchase/select-purchase').then(function (response) {
        _this2.purchase = response.data;
      });
    },
    onValueChange: function onValueChange() {
      var _this3 = this;

      axios.get("./delivery-items/".concat(this.form.po_id)).then(function (response) {
        _this3.form.items = response.data;
      });
    },
    save: function save() {
      var _this4 = this;

      axios.post('./store', this.form).then(function (response) {
        _this4.dialog = false;

        _this4.$root.$emit('loadData');
      });
    },
    remaining: function remaining(item, i) {
      var remaining = item.remaining_qty - item.ordered_qty;
      return Intl.NumberFormat({
        style: 'decimal'
      }).format(remaining);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/delivery/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Deliver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deliver */ "./resources/js/components/admin/delivery/Deliver.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      results: [],
      current: 1,
      items: [{
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Delivery Management',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }]
    };
  },
  components: {
    Deliver: _Deliver__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.loadData();
    this.$root.$on('loadData', function () {
      _this.loadData();
    });
  },
  methods: {
    deliver: function deliver() {
      this.$root.$emit('createDeliverDialog');
    },
    loadData: function loadData() {
      var _this2 = this;

      axios.get('../delivery/show').then(function (response) {
        _this2.results = response.data;
      });
    },
    total_amount: function total_amount(result) {
      var total = 0;
      result.items.forEach(function (val) {
        total += val.unit_cost * val.quantity;
      });
      return total;
    },
    total_qty: function total_qty(result) {
      var total = 0;
      result.items.forEach(function (val) {
        total += val.quantity;
      });
      return total;
    }
  },
  computed: {
    item_lists: function item_lists() {
      return this.results.slice(this.current * 10 - 10, this.current * 10);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.results.length / 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  // name: 'ComponentName',
  data: function data() {
    return {
      dialog: false,
      categories: [],
      suppliers: [],
      sizes: [],
      sub_categories: [],
      colors: [{
        'label': 'red',
        'value': 'red'
      }, {
        'label': 'blue',
        'value': 'blue'
      }, {
        'label': 'green',
        'value': 'green'
      }, {
        'label': 'orange',
        'value': 'orange'
      }],
      gender: [{
        'label': 'Male',
        'value': 'Male'
      }, {
        'label': 'Female',
        'value': 'Female'
      }, {
        'label': 'Both',
        'value': 'Both'
      }],
      form: {
        name: '',
        category: '',
        supplier: '',
        description: '',
        unit_cost: '',
        unit_price: '',
        color: '',
        gender: '',
        sub_category: '',
        code: '',
        photo: '',
        selected_sizes: []
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$root.$on('createItemDialog', function (val) {
      _this.dialog = true;
    });
  },
  methods: {
    load_categories: function load_categories() {
      var _this2 = this;

      axios.get('../categories/index').then(function (response) {
        _this2.categories = response.data;
      });
    },
    load_suppliers: function load_suppliers() {
      var _this3 = this;

      axios.get('../suppliers/supplier-select').then(function (response) {
        _this3.suppliers = response.data;
      });
    },
    load_sizes: function load_sizes() {
      var _this4 = this;

      axios.get('../sizes/sizes').then(function (response) {
        _this4.sizes = response.data;
      });
    },
    onValueChange: function onValueChange() {
      var _this5 = this;

      axios.get("../categories/sub-category/".concat(this.form.category)).then(function (response) {
        _this5.sub_categories = response.data;
      });
    },
    save: function save() {
      var _this6 = this;

      var formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("code", this.form.code);
      formData.append("category", this.form.category);
      formData.append("supplier", this.form.supplier);
      formData.append("description", this.form.description);
      formData.append("unit_cost", this.form.unit_cost);
      formData.append("unit_price", this.form.unit_price);
      formData.append("color", this.form.color);
      formData.append("gender", this.form.gender);
      formData.append("sub_category", this.form.sub_category);
      formData.append("photo", this.form.photo);
      formData.append("selected_sizes", JSON.stringify(this.form.selected_sizes));
      axios.post('./store', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this6.dialog = false;

        _this6.$root.$emit('loadData');
      });
    }
  },
  mounted: function mounted() {
    this.load_categories();
    this.load_suppliers();
    this.load_sizes();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  // name: 'ComponentName',
  data: function data() {
    return {
      dialog: false,
      categories: [],
      suppliers: [],
      sizes: [],
      sub_categories: [],
      colors: [{
        'label': 'red',
        'value': 'red'
      }, {
        'label': 'blue',
        'value': 'blue'
      }, {
        'label': 'green',
        'value': 'green'
      }, {
        'label': 'orange',
        'value': 'orange'
      }],
      gender: [{
        'label': 'Male',
        'value': 'Male'
      }, {
        'label': 'Female',
        'value': 'Female'
      }, {
        'label': 'Both',
        'value': 'Both'
      }],
      form: {
        name: '',
        category: '',
        supplier: '',
        description: '',
        unit_cost: '',
        unit_price: '',
        color: '',
        gender: '',
        sub_category: '',
        selected_sizes: []
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$root.$on('editItemDialog', function (val) {
      _this.dialog = true;
      _this.form.name = val.name;
      _this.form.category = val.category;
      _this.form.supplier = val.supplier;
      _this.form.description = val.description;
      _this.form.unit_cost = val.unit_cost;
      _this.form.unit_price = val.unit_price;
      _this.form.color = val.color;
      _this.form.gender = val.gender;
      _this.form.sub_category = val.sub_category;
      _this.form.selected_sizes = val.selected_sizes;
    });
  },
  methods: {
    load_categories: function load_categories() {
      var _this2 = this;

      axios.get('../categories/index').then(function (response) {
        _this2.categories = response.data;
      });
    },
    load_suppliers: function load_suppliers() {
      var _this3 = this;

      axios.get('../suppliers/supplier-select').then(function (response) {
        _this3.suppliers = response.data;
      });
    },
    load_sizes: function load_sizes() {
      var _this4 = this;

      axios.get('../sizes/sizes').then(function (response) {
        _this4.sizes = response.data;
      });
    },
    onValueChange: function onValueChange() {
      var _this5 = this;

      axios.get("../categories/sub-category/".concat(this.form.category)).then(function (response) {
        _this5.sub_categories = response.data;
      });
    },
    save: function save() {
      var _this6 = this;

      axios.post('./store', this.form).then(function (response) {
        _this6.dialog = false;

        _this6.$root.$emit('loadData');
      });
    }
  },
  mounted: function mounted() {
    this.load_categories();
    this.load_suppliers();
    this.load_sizes();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ "./resources/js/components/admin/items/Create.vue");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./resources/js/components/admin/items/Edit.vue");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./resources/js/components/admin/items/View.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      current: 1,
      items: [{
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Items Management',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }],
      results: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loadData();
    this.$root.$on('loadData', function () {
      _this.loadData();
    });
  },
  methods: {
    create: function create() {
      this.$root.$emit('createItemDialog');
    },
    loadData: function loadData() {
      var _this2 = this;

      axios.get('./show').then(function (response) {
        _this2.results = response.data;
      });
    },
    edit: function edit(val) {
      this.$root.$emit('editItemDialog', val);
    },
    view: function view(val) {
      this.$root.$emit('viewItemsDialog', val);
    }
  },
  components: {
    Create: _Create__WEBPACK_IMPORTED_MODULE_0__["default"],
    Edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"],
    ViewItems: _View__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    item_lists: function item_lists() {
      return this.results.slice(this.current * 10 - 10, this.current * 10);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.results.length / 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      image: '',
      name: '',
      color: '',
      created_at: '',
      code: '',
      category: '',
      description: '',
      results: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('viewItemsDialog', function (val) {
      _this.dialog = true;
      _this.image = val.image;
      _this.name = val.name;
      _this.color = val.color;
      _this.created_at = val.created_at;
      _this.code = val.code;
      _this.category = val.category_id;
      _this.description = val.description;

      _this.loadData();
    });
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      axios.get("./show-details/".concat(this.code)).then(function (response) {
        _this2.results = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pos/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/pos/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      results: [],
      categories: [],
      students: [],
      current: 1,
      items: [{
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Point of Sales',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }],
      form: {
        discount: 0,
        check_no: '',
        bank_name: '',
        amount_paid: 0,
        payment_type: '',
        student_id: '',
        selected_items: []
      }
    };
  },
  mounted: function mounted() {
    this.loadItems();
    this.loadCategories();
    this.loadStudents();
  },
  computed: {
    subtotal: function subtotal() {
      var total = 0;
      this.form.selected_items.forEach(function (val) {
        total += val.unit_price * val.quantity;
      });
      return total;
    },
    total_amount: function total_amount() {
      var total = 0;
      this.form.selected_items.forEach(function (val) {
        total += val.unit_price * val.quantity;
      });
      return total - this.form.discount;
    },
    item_lists: function item_lists() {
      return this.results.slice(this.current * 9 - 9, this.current * 9);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.results.length / 9);
    }
  },
  methods: {
    loadItems: function loadItems() {
      var _this = this;

      axios.get('../stocks/stock-items').then(function (response) {
        _this.results = response.data;
      });
    },
    loadStudents: function loadStudents() {
      var _this2 = this;

      axios.get('../students/select-students').then(function (response) {
        _this2.students = response.data;
      });
    },
    loadCategories: function loadCategories() {
      var _this3 = this;

      axios.get('../categories/index').then(function (response) {
        _this3.categories = response.data;
      });
    },
    categoryFilter: function categoryFilter(val) {
      var items = this.results.filter(function (items) {
        return items.category === val;
      });
    },
    add: function add() {
      axios.post('./store', this.form).then(function (response) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      menu: false,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      categories: [],
      suppliers: [],
      items: [],
      form: {
        po_id: '',
        expected_delivery_date: '',
        description: '',
        category: '',
        selected_items: [],
        supplier: '',
        remarks: '',
        quantity: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('createPurchaseDialog', function () {
      _this.dialog = true;

      _this.load_categories();

      _this.load_suppliers();
    });
  },
  methods: {
    load_categories: function load_categories() {
      var _this2 = this;

      axios.get('../categories/index').then(function (response) {
        _this2.categories = response.data;
      });
    },
    load_suppliers: function load_suppliers() {
      var _this3 = this;

      axios.get('../suppliers/supplier-select').then(function (response) {
        _this3.suppliers = response.data;
      });
    },
    onValueChange: function onValueChange() {
      var _this4 = this;

      axios.get("../items/supplier-items/".concat(this.form.supplier)).then(function (response) {
        _this4.items = response.data;
      });
    },
    add: function add() {
      var _this5 = this;

      axios.post('./store', this.form).then(function (response) {
        _this5.dialog = false;

        _this5.$root.$emit('loadData');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ "./resources/js/components/admin/purchase/Create.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      current: 1,
      results: [],
      items: [{
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Purchase Orders',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }]
    };
  },
  components: {
    Create: _Create__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.loadData();
    this.$root.$on('loadData', function () {
      _this.loadData();
    });
  },
  methods: {
    create: function create() {
      this.$root.$emit('createPurchaseDialog');
    },
    loadData: function loadData() {
      var _this2 = this;

      axios.get('./show').then(function (response) {
        _this2.results = response.data;
      });
    },
    total_amount: function total_amount(result) {
      var total = 0;
      result.items.forEach(function (val) {
        total += val.unit_cost * val.quantity;
      });
      return total;
    },
    total_qty: function total_qty(result) {
      var total = 0;
      result.items.forEach(function (val) {
        total += val.quantity;
      });
      return total;
    }
  },
  computed: {
    purchase_lists: function purchase_lists() {
      return this.results.slice(this.current * 10 - 10, this.current * 10);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.results.length / 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/stocks/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      items: [],
      details: [],
      form: {
        item_id: '',
        unit_cost: '',
        unit_price: '',
        quantity: '',
        existing: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('addStockDialog', function (val) {
      _this.dialog = true;

      _this.load_items();
    });
  },
  methods: {
    load_items: function load_items() {
      var _this2 = this;

      axios.get('../items/select-items').then(function (response) {
        _this2.items = response.data;
      });
    },
    item_details: function item_details() {
      var _this3 = this;

      axios.get("../items/item-details/".concat(this.form.item_id)).then(function (response) {
        _this3.form.unit_price = response.data.unit_price;
        _this3.form.unit_cost = response.data.unit_cost;
        _this3.form.existing = response.data.existing;
      });
    },
    add: function add() {
      var _this4 = this;

      axios.post('./store', this.form).then(function () {
        _this4.dialog = false;

        _this4.$root.$emit('loadData');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/History.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/stocks/History.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      results: [],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      form: {
        id: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('viewHistoryDialog', function (val) {
      _this.dialog = true;
      _this.form.id = val.id;

      _this.history();
    });
  },
  methods: {
    history: function history() {
      var _this2 = this;

      axios.get("../stocks_history/history/".concat(this.form.id)).then(function (response) {
        _this2.results = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/stocks/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History */ "./resources/js/components/admin/stocks/History.vue");
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add */ "./resources/js/components/admin/stocks/Add.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      results: [],
      current: 1,
      items: [{
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Stocks Management',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }]
    };
  },
  components: {
    History: _History__WEBPACK_IMPORTED_MODULE_0__["default"],
    Add: _Add__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.loadData();
    this.$root.$on('loadData', function () {
      _this.loadData();
    });
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      axios.get('./show').then(function (response) {
        _this2.results = response.data;
      });
    },
    view_history: function view_history(val) {
      this.$root.$emit('viewHistoryDialog', val);
    },
    add_stocks: function add_stocks() {
      this.$root.$emit('addStockDialog');
    }
  },
  computed: {
    item_lists: function item_lists() {
      return this.results.slice(this.current * 10 - 10, this.current * 10);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.results.length / 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/suppliers/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      form: {
        name: '',
        address: '',
        telephone: '',
        mobile: '',
        email: '',
        tin: '',
        contact_person: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('createSupplierDialog', function () {
      _this.dialog = true;
    });
  },
  methods: {
    add: function add() {
      var _this2 = this;

      axios.post('./store', this.form).then(function (response) {
        _this2.dialog = false;

        _this2.$root.$emit('loadData');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/suppliers/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      form: {
        id: '',
        name: '',
        address: '',
        telephone: '',
        mobile: '',
        email: '',
        tin: '',
        contact_person: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('editSupplierDialog', function (val) {
      _this.dialog = true;
      _this.form.id = val.id;
      _this.form.name = val.name;
      _this.form.address = val.address;
      _this.form.telephone = val.telephone;
      _this.form.mobile = val.mobile;
      _this.form.email = val.email;
      _this.form.tin = val.tin;
      _this.form.contact_person = val.contact_person;
    });
  },
  methods: {
    edit: function edit() {
      var _this2 = this;

      axios.post('./update', this.form).then(function (response) {
        _this2.dialog = false;

        _this2.$root.$emit('loadData');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/suppliers/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ "./resources/js/components/admin/suppliers/Create.vue");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./resources/js/components/admin/suppliers/Edit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      current: 1,
      breadcrumbs: [{
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      }, {
        text: 'Suppliers Management',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }],
      results: []
    };
  },
  components: {
    Create: _Create__WEBPACK_IMPORTED_MODULE_0__["default"],
    Edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    create: function create() {
      this.$root.$emit('createSupplierDialog');
    },
    loadData: function loadData() {
      var _this = this;

      axios.get('./show').then(function (response) {
        _this.results = response.data;
      });
    },
    edit: function edit(val) {
      this.$root.$emit('editSupplierDialog', val);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.loadData();
    this.$root.$on('loadData', function () {
      _this2.loadData();
    });
  },
  computed: {
    supplier_lists: function supplier_lists() {
      return this.results.slice(this.current * 10 - 10, this.current * 10);
    },
    totalPages: function totalPages() {
      return Math.ceil(this.results.length / 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      drawer: true,
      routes: window.Laravel.routes.routes,
      info: window.Laravel.routes.username,
      logout: window.Laravel.routes.logout,
      csrf: window.Laravel.csrfToken,
      switch1: true
    };
  },
  mounted: function mounted() {},
  created: function created() {
    this.$vuetify.theme.dark = this.switch1;
  },
  watch: {
    switch1: function switch1(val) {
      localStorage.switch1 = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-stepper[data-v-d17e5896]{\n    box-shadow: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=template&id=d17e5896&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/delivery/Deliver.vue?vue&type=template&id=d17e5896&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "900" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("New Delivery")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "elevation-0" },
            [
              _c(
                "v-stepper",
                {
                  staticStyle: {
                    "box-shadow": "none",
                    "background-color": "#1e1e1e"
                  },
                  attrs: { vertical: "" },
                  model: {
                    value: _vm.e6,
                    callback: function($$v) {
                      _vm.e6 = $$v
                    },
                    expression: "e6"
                  }
                },
                [
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e6 > 1, step: "1" } },
                    [
                      _vm._v(" Select Purchase Order\n                "),
                      _c("small", [_vm._v("First Step")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c("v-select", {
                        staticClass: "mt-1",
                        attrs: {
                          outlined: "",
                          items: _vm.purchase,
                          "item-text": "label",
                          "item-value": "value",
                          label: "PO ID",
                          placeholder: "PO ID"
                        },
                        on: { input: _vm.onValueChange },
                        model: {
                          value: _vm.form.po_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "po_id", $$v)
                          },
                          expression: "form.po_id"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.e6 = 2
                            }
                          }
                        },
                        [_vm._v("Continue")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "warning" },
                          on: {
                            click: function($event) {
                              _vm.e6 = 1
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e6 > 2, step: "2" } },
                    [_vm._v("Delivery Details")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "2" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                staticClass: "mr-1",
                                attrs: {
                                  label: "DR NO",
                                  placeholder: "DR NO",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.dr_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "dr_no", $$v)
                                  },
                                  expression: "form.dr_no"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-menu",
                                {
                                  ref: "menu",
                                  attrs: {
                                    "close-on-content-click": false,
                                    "return-value": _vm.date,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      _vm.date = $event
                                    },
                                    "update:return-value": function($event) {
                                      _vm.date = $event
                                    }
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label:
                                                    "Expected Date Delivery",
                                                  placeholder:
                                                    "Expected Date Delivery",
                                                  outlined: "",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.form.delivery_date,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "delivery_date",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form.delivery_date"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu,
                                    callback: function($$v) {
                                      _vm.menu = $$v
                                    },
                                    expression: "menu"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-date-picker",
                                    {
                                      attrs: { "no-title": "", scrollable: "" },
                                      model: {
                                        value: _vm.form.delivery_date,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_date",
                                            $$v
                                          )
                                        },
                                        expression: "form.delivery_date"
                                      }
                                    },
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "primary" },
                                          on: {
                                            click: function($event) {
                                              _vm.menu = false
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.menu.save(
                                                _vm.date
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("OK")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.e6 = 3
                            }
                          }
                        },
                        [_vm._v("Continue")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "warning" },
                          on: {
                            click: function($event) {
                              _vm.e6 = 2
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e6 > 3, step: "3" } },
                    [_vm._v("Select an item(s)")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "3" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-simple-table",
                            { attrs: { "fixed-header": "" } },
                            [
                              _c("thead", [
                                _c("th", [_vm._v("#")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Item")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Description")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Remaining Qty")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Ordered Qty")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Unit Cost")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Unit Price")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.form.items, function(item, i) {
                                  return _c("tr", { key: "item" + i }, [
                                    _c("td", [_vm._v(_vm._s(i + 1))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.name))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(item.description))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(_vm.remaining(item, i)))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("v-text-field", {
                                          staticClass: "mt-3",
                                          attrs: {
                                            label: "Ordered Quantity",
                                            placeholder: "Ordered Quantity",
                                            dense: "",
                                            outlined: ""
                                          },
                                          model: {
                                            value: item.ordered_qty,
                                            callback: function($$v) {
                                              _vm.$set(item, "ordered_qty", $$v)
                                            },
                                            expression: "item.ordered_qty"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.unit_cost))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.unit_price))])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.e6 = 4
                            }
                          }
                        },
                        [_vm._v("Continue")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "warning" },
                          on: {
                            click: function($event) {
                              _vm.e6 = 3
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-stepper-step", { attrs: { step: "4" } }, [
                    _vm._v("Last Step")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "4" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                staticClass: "mt-3",
                                attrs: {
                                  label: "Received by",
                                  placeholder: "Received by",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.received_by,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "received_by", $$v)
                                  },
                                  expression: "form.received_by"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                staticClass: "mt-3",
                                attrs: {
                                  label: "Delivered by",
                                  placeholder: "Delivered by",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.delivered_by,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "delivered_by", $$v)
                                  },
                                  expression: "form.delivered_by"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.save()
                            }
                          }
                        },
                        [_vm._v("Deliver")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", text: "" },
                  on: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Index.vue?vue&type=template&id=1e6eda3c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/delivery/Index.vue?vue&type=template&id=1e6eda3c& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("v-breadcrumbs", { attrs: { items: _vm.items } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ma-2 float-right",
                  attrs: { tile: "", color: "indigo", dark: "" },
                  on: {
                    click: function($event) {
                      return _vm.deliver()
                    }
                  }
                },
                [_vm._v("New Delivery")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("PO ID")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Order Description")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Total Quantity")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Total Amount")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Expected Delivery")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Settled / Total Item")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Actions")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.item_lists, function(result, i) {
                    return _c("tr", { key: "result" + i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.po_id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.description))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.total_qty(result)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.total_amount(result)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.delivery_date))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s())]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            ...\n                        "
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.totalPages, circle: "" },
            model: {
              value: _vm.current,
              callback: function($$v) {
                _vm.current = $$v
              },
              expression: "current"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("deliver")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Create.vue?vue&type=template&id=02a955d4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/Create.vue?vue&type=template&id=02a955d4& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "1200" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("New Item")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  { staticClass: "row  no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Name",
                            placeholder: "Name",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          staticClass: "mr-1",
                          attrs: {
                            outlined: "",
                            items: _vm.suppliers,
                            "item-text": "text",
                            "item-value": "value",
                            label: "Suppliers",
                            placeholder: "Supplier"
                          },
                          model: {
                            value: _vm.form.supplier,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "supplier", $$v)
                            },
                            expression: "form.supplier"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Code",
                            placeholder: "Code",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.code,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "code", $$v)
                            },
                            expression: "form.code"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          staticClass: "mr-1",
                          attrs: {
                            outlined: "",
                            items: _vm.categories,
                            "item-text": "label",
                            "item-value": "value",
                            label: "Categories",
                            placeholder: "Categories"
                          },
                          on: { input: _vm.onValueChange },
                          model: {
                            value: _vm.form.category,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "category", $$v)
                            },
                            expression: "form.category"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.sub_categories.length
                      ? _c(
                          "v-col",
                          [
                            _c("v-select", {
                              attrs: {
                                outlined: "",
                                items: _vm.sub_categories,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Sub Categories",
                                placeholder: "Sub Category"
                              },
                              model: {
                                value: _vm.form.sub_category,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "sub_category", $$v)
                                },
                                expression: "form.sub_category"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.form.category != 4
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c("v-text-field", {
                              staticClass: "mr-1",
                              attrs: {
                                label: "Description",
                                placeholder: "Description",
                                outlined: ""
                              },
                              model: {
                                value: _vm.form.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "description", $$v)
                                },
                                expression: "form.description"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-text-field", {
                              staticClass: "mr-1",
                              attrs: {
                                label: "Unit Cost",
                                placeholder: "Unit Cost",
                                outlined: ""
                              },
                              model: {
                                value: _vm.form.unit_cost,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "unit_cost", $$v)
                                },
                                expression: "form.unit_cost"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "Unit Price",
                                placeholder: "Unit Price",
                                outlined: ""
                              },
                              model: {
                                value: _vm.form.unit_price,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "unit_price", $$v)
                                },
                                expression: "form.unit_price"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.category === 4
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c("v-select", {
                              staticClass: "mr-1",
                              attrs: {
                                outlined: "",
                                items: _vm.sizes,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Sizes",
                                placeholder: "Sizes",
                                multiple: "",
                                "return-object": ""
                              },
                              model: {
                                value: _vm.form.selected_sizes,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "selected_sizes", $$v)
                                },
                                expression: "form.selected_sizes"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-select", {
                              staticClass: "mr-1",
                              attrs: {
                                outlined: "",
                                items: _vm.colors,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Colors",
                                placeholder: "Colors"
                              },
                              model: {
                                value: _vm.form.color,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "color", $$v)
                                },
                                expression: "form.color"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-select", {
                              attrs: {
                                outlined: "",
                                items: _vm.gender,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Gender",
                                placeholder: "Gender"
                              },
                              model: {
                                value: _vm.form.gender,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "gender", $$v)
                                },
                                expression: "form.gender"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.selected_sizes.length
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-simple-table",
                              { attrs: { "fixed-header": "" } },
                              [
                                _c("thead", [
                                  _c("th", [_vm._v("Size")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Description")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Unit Cost")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Unit Price")])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.form.selected_sizes, function(
                                    size,
                                    i
                                  ) {
                                    return _c("tr", { key: "sizes" + i }, [
                                      _c("td", [_vm._v(_vm._s(size.value))]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Description",
                                              placeholder: "Description",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: size.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  size,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression: "size.description"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Unit Cost",
                                              placeholder: "Unit Cost",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: size.unit_cost,
                                              callback: function($$v) {
                                                _vm.$set(size, "unit_cost", $$v)
                                              },
                                              expression: "size.unit_cost"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Unit Price",
                                              placeholder: "Unit Price",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: size.unit_price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  size,
                                                  "unit_price",
                                                  $$v
                                                )
                                              },
                                              expression: "size.unit_price"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-file-input", {
                          attrs: {
                            type: "file",
                            accept: "image/*",
                            label: "File input",
                            placeholder: "Photo",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.photo,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "photo", $$v)
                            },
                            expression: "form.photo"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1 text-white" },
                      on: {
                        click: function($event) {
                          return _vm.save()
                        }
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Edit.vue?vue&type=template&id=02a1e3a4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/Edit.vue?vue&type=template&id=02a1e3a4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "1200" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("New Item")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  { staticClass: "row  no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Name",
                            placeholder: "Name",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          attrs: {
                            outlined: "",
                            items: _vm.suppliers,
                            "item-text": "text",
                            "item-value": "value",
                            label: "Suppliers",
                            placeholder: "Supplier"
                          },
                          model: {
                            value: _vm.form.supplier,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "supplier", $$v)
                            },
                            expression: "form.supplier"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          staticClass: "mr-1",
                          attrs: {
                            outlined: "",
                            items: _vm.categories,
                            "item-text": "label",
                            "item-value": "value",
                            label: "Categories",
                            placeholder: "Categories"
                          },
                          on: { input: _vm.onValueChange },
                          model: {
                            value: _vm.form.category,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "category", $$v)
                            },
                            expression: "form.category"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.sub_categories.length
                      ? _c(
                          "v-col",
                          [
                            _c("v-select", {
                              attrs: {
                                outlined: "",
                                items: _vm.sub_categories,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Sub Categories",
                                placeholder: "Sub Category"
                              },
                              model: {
                                value: _vm.form.sub_category,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "sub_category", $$v)
                                },
                                expression: "form.sub_category"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.form.category != 4
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c("v-text-field", {
                              staticClass: "mr-1",
                              attrs: {
                                label: "Description",
                                placeholder: "Description",
                                outlined: ""
                              },
                              model: {
                                value: _vm.form.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "description", $$v)
                                },
                                expression: "form.description"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-text-field", {
                              staticClass: "mr-1",
                              attrs: {
                                label: "Unit Cost",
                                placeholder: "Unit Cost",
                                outlined: ""
                              },
                              model: {
                                value: _vm.form.unit_cost,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "unit_cost", $$v)
                                },
                                expression: "form.unit_cost"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "Unit Price",
                                placeholder: "Unit Price",
                                outlined: ""
                              },
                              model: {
                                value: _vm.form.unit_price,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "unit_price", $$v)
                                },
                                expression: "form.unit_price"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.category === 4
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c("v-select", {
                              staticClass: "mr-1",
                              attrs: {
                                outlined: "",
                                items: _vm.sizes,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Sizes",
                                placeholder: "Sizes",
                                multiple: "",
                                "return-object": ""
                              },
                              model: {
                                value: _vm.form.selected_sizes,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "selected_sizes", $$v)
                                },
                                expression: "form.selected_sizes"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-select", {
                              staticClass: "mr-1",
                              attrs: {
                                outlined: "",
                                items: _vm.colors,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Colors",
                                placeholder: "Colors"
                              },
                              model: {
                                value: _vm.form.color,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "color", $$v)
                                },
                                expression: "form.color"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("v-select", {
                              attrs: {
                                outlined: "",
                                items: _vm.gender,
                                "item-text": "label",
                                "item-value": "value",
                                label: "Gender",
                                placeholder: "Gender"
                              },
                              model: {
                                value: _vm.form.gender,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "gender", $$v)
                                },
                                expression: "form.gender"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.selected_sizes.length
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-simple-table",
                              { attrs: { "fixed-header": "" } },
                              [
                                _c("thead", [
                                  _c("th", [_vm._v("Size")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Description")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Unit Cost")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Unit Price")])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.form.selected_sizes, function(
                                    size,
                                    i
                                  ) {
                                    return _c("tr", { key: "sizes" + i }, [
                                      _c("td", [_vm._v(_vm._s(size.value))]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Description",
                                              placeholder: "Description",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: size.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  size,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression: "size.description"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Unit Cost",
                                              placeholder: "Unit Cost",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: size.unit_cost,
                                              callback: function($$v) {
                                                _vm.$set(size, "unit_cost", $$v)
                                              },
                                              expression: "size.unit_cost"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Unit Price",
                                              placeholder: "Unit Price",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: size.unit_price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  size,
                                                  "unit_price",
                                                  $$v
                                                )
                                              },
                                              expression: "size.unit_price"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1 text-white" },
                      on: {
                        click: function($event) {
                          return _vm.save()
                        }
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Index.vue?vue&type=template&id=d95b6ab0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/Index.vue?vue&type=template&id=d95b6ab0& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("v-breadcrumbs", { attrs: { items: _vm.items } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _vm.$permission("Items", "add")
                ? _c(
                    "v-btn",
                    {
                      staticClass: "ma-2 float-right",
                      attrs: { tile: "", color: "indigo", dark: "" },
                      on: { click: _vm.create }
                    },
                    [_vm._v("New Item")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Image")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Code")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Supplier")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Date created")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("...")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.item_lists, function(result, i) {
                    return _c("tr", { key: "result" + i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-img", {
                            staticClass: "grey lighten-2",
                            attrs: {
                              src: result.image,
                              "aspect-ratio": "1.3",
                              width: "80px"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.code))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.description))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.supplier))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.created_at))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-icon",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  return _vm.view(result)
                                }
                              }
                            },
                            [_vm._v("mdi-eye")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.totalPages, circle: "" },
            model: {
              value: _vm.current,
              callback: function($$v) {
                _vm.current = $$v
              },
              expression: "current"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("create"),
      _vm._v(" "),
      _c("edit"),
      _vm._v(" "),
      _c("view-items")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/View.vue?vue&type=template&id=2b282a82&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/items/View.vue?vue&type=template&id=2b282a82& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          staticClass: "mx-auto",
          attrs: { "max-width": "700" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-img",
                {
                  staticClass: "white--text align-end",
                  attrs: { height: "200px", src: _vm.image }
                },
                [_c("v-card-title", [_vm._v(_vm._s(_vm.name))])],
                1
              ),
              _vm._v(" "),
              _c("v-card-subtitle", { staticClass: "pb-0 mt-6" }, [
                _vm._v("Description: " + _vm._s(_vm.description))
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "text--primary" },
                [
                  _vm.category == 4
                    ? _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("#")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Size")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Color")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Description")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Unit Cost")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Unit Price")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.results, function(result, i) {
                            return _c("tr", { key: "result" + i }, [
                              _c("td", [_vm._v(_vm._s(i + 1))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.size))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.color))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.description))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.unit_cost))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.unit_price))])
                            ])
                          }),
                          0
                        )
                      ])
                    : _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("#")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Description")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Unit Cost")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Unit Price")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.results, function(result, i) {
                            return _c("tr", { key: "result" + i }, [
                              _c("td", [_vm._v(_vm._s(i + 1))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.description))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.unit_cost))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.unit_price))])
                            ])
                          }),
                          0
                        )
                      ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "orange", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                Close\n            ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pos/Index.vue?vue&type=template&id=8155f908&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/pos/Index.vue?vue&type=template&id=8155f908& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "row" },
      [_c("v-breadcrumbs", { attrs: { items: _vm.items } })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "v-col",
          { attrs: { cols: "8" } },
          [
            _c(
              "v-card",
              { attrs: { flat: "" } },
              [
                _c(
                  "v-container",
                  [
                    _c(
                      "v-row",
                      _vm._l(_vm.item_lists, function(result, i) {
                        return _c(
                          "v-col",
                          {
                            key: "result" + i,
                            staticClass: "d-flex child-flex",
                            attrs: { cols: "4" }
                          },
                          [
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-img",
                                  {
                                    staticClass: "white--text align-end",
                                    attrs: {
                                      src: result.image,
                                      gradient:
                                        "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                      height: "200px"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card-title",
                                      { staticClass: "body-2" },
                                      [_vm._v(_vm._s(result.item))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  _vm._l(result.items, function(item, i) {
                                    return _c("v-checkbox", {
                                      key: "item" + i,
                                      attrs: { label: item.size, value: item },
                                      model: {
                                        value: _vm.form.selected_items,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "selected_items",
                                            $$v
                                          )
                                        },
                                        expression: "form.selected_items"
                                      }
                                    })
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-pagination", {
                          attrs: { length: _vm.totalPages, circle: "" },
                          model: {
                            value: _vm.current,
                            callback: function($$v) {
                              _vm.current = $$v
                            },
                            expression: "current"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-tabs",
                      { attrs: { right: "" } },
                      _vm._l(_vm.categories, function(category, i) {
                        return _c(
                          "v-tab",
                          {
                            key: "category" + i,
                            on: {
                              click: function($event) {
                                return _vm.categoryFilter(category.value)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(category.label) +
                                "\n                        "
                            )
                          ]
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-col",
          { attrs: { cols: "4" } },
          [
            _c(
              "v-card",
              { attrs: { flat: "" } },
              [
                _c(
                  "v-list-item",
                  [
                    _c(
                      "v-list-item-content",
                      [
                        _c("v-subheader", [_vm._v("Selected item(s)")]),
                        _vm._v(" "),
                        _c(
                          "v-simple-table",
                          { attrs: { "fixed-header": "" } },
                          [
                            _c(
                              "tbody",
                              [
                                _vm._l(_vm.form.selected_items, function(
                                  item,
                                  i
                                ) {
                                  return _c("tr", { key: "item" + i }, [
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(item.name) +
                                          " " +
                                          _vm._s(item.size) +
                                          " " +
                                          _vm._s(item.color)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.unit_price))]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            placeholder: "Qty",
                                            size: "2px",
                                            dense: ""
                                          },
                                          model: {
                                            value: item.quantity,
                                            callback: function($$v) {
                                              _vm.$set(item, "quantity", $$v)
                                            },
                                            expression: "item.quantity"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ])
                                }),
                                _vm._v(" "),
                                _vm.form.selected_items.length
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { color: "green-6" } },
                                        [_vm._v("SUBTOTAL")]
                                      ),
                                      _vm._v(" "),
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(_vm._s(_vm.subtotal))
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.form.selected_items.length
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { color: "green-6" } },
                                        [_vm._v("DISCOUNT")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { attrs: { colspan: "2" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mr-1 text-right",
                                            staticStyle: {
                                              "text-align": "right"
                                            },
                                            attrs: {
                                              placeholder: "Discount",
                                              dense: "",
                                              size: "1px"
                                            },
                                            model: {
                                              value: _vm.form.discount,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "discount",
                                                  $$v
                                                )
                                              },
                                              expression: "form.discount"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.form.selected_items.length
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { color: "green-6" } },
                                        [_vm._v("TOTAL AMOUNT")]
                                      ),
                                      _vm._v(" "),
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(_vm._s(_vm.total_amount))
                                      ])
                                    ])
                                  : _vm._e()
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  [
                    _c(
                      "v-col",
                      [
                        _c(
                          "v-row",
                          { staticClass: "row no-gutters" },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    outlined: "",
                                    items: _vm.students,
                                    "item-text": "label",
                                    "item-value": "value",
                                    label: "Students",
                                    placeholder: "Students"
                                  },
                                  model: {
                                    value: _vm.form.student_id,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "student_id", $$v)
                                    },
                                    expression: "form.student_id"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          { staticClass: "row no-gutters" },
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        label: "Cash",
                                        color: "green",
                                        value: "Cash",
                                        "hide-details": ""
                                      },
                                      model: {
                                        value: _vm.form.payment_type,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "payment_type",
                                            $$v
                                          )
                                        },
                                        expression: "form.payment_type"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        label: "Installment",
                                        color: "blue",
                                        value: "Installment",
                                        "hide-details": ""
                                      },
                                      model: {
                                        value: _vm.form.payment_type,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "payment_type",
                                            $$v
                                          )
                                        },
                                        expression: "form.payment_type"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        label: "Check",
                                        color: "orange",
                                        value: "Check",
                                        "hide-details": ""
                                      },
                                      model: {
                                        value: _vm.form.payment_type,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "payment_type",
                                            $$v
                                          )
                                        },
                                        expression: "form.payment_type"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "Amount paid",
                                    placeholder: "Description",
                                    dense: "",
                                    outlined: ""
                                  },
                                  model: {
                                    value: _vm.form.amount_paid,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "amount_paid", $$v)
                                    },
                                    expression: "form.amount_paid"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "Check No",
                                    placeholder: "Check No",
                                    dense: "",
                                    outlined: ""
                                  },
                                  model: {
                                    value: _vm.form.check_no,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "check_no", $$v)
                                    },
                                    expression: "form.check_no"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "Bank Name",
                                    placeholder: "Bank Name",
                                    dense: "",
                                    outlined: ""
                                  },
                                  model: {
                                    value: _vm.form.bank_name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "bank_name", $$v)
                                    },
                                    expression: "form.bank_name"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "orange", text: "" },
                        on: {
                          click: function($event) {
                            return _vm.add()
                          }
                        }
                      },
                      [_vm._v(" Add ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Create.vue?vue&type=template&id=8a581e22&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Create.vue?vue&type=template&id=8a581e22& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "1200" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("New Purchase Orders")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  { staticClass: "row  no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "PO Number",
                            placeholder: "PO Number",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.po_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "po_id", $$v)
                            },
                            expression: "form.po_id"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c(
                          "v-menu",
                          {
                            ref: "menu",
                            attrs: {
                              "close-on-content-click": false,
                              "return-value": _vm.date,
                              transition: "scale-transition",
                              "offset-y": "",
                              "min-width": "290px"
                            },
                            on: {
                              "update:returnValue": function($event) {
                                _vm.date = $event
                              },
                              "update:return-value": function($event) {
                                _vm.date = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-text-field",
                                      _vm._g(
                                        {
                                          attrs: {
                                            label: "Expected Date Delivery",
                                            placeholder:
                                              "Expected Date Delivery",
                                            outlined: "",
                                            readonly: ""
                                          },
                                          model: {
                                            value:
                                              _vm.form.expected_delivery_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "expected_delivery_date",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.expected_delivery_date"
                                          }
                                        },
                                        on
                                      )
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.menu,
                              callback: function($$v) {
                                _vm.menu = $$v
                              },
                              expression: "menu"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-date-picker",
                              {
                                attrs: { "no-title": "", scrollable: "" },
                                model: {
                                  value: _vm.form.expected_delivery_date,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form,
                                      "expected_delivery_date",
                                      $$v
                                    )
                                  },
                                  expression: "form.expected_delivery_date"
                                }
                              },
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { text: "", color: "primary" },
                                    on: {
                                      click: function($event) {
                                        _vm.menu = false
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { text: "", color: "primary" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$refs.menu.save(_vm.date)
                                      }
                                    }
                                  },
                                  [_vm._v("OK")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row  no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-textarea", {
                          attrs: {
                            outlined: "",
                            label: "Description",
                            placeholder: "Description",
                            rows: "2"
                          },
                          model: {
                            value: _vm.form.description,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "description", $$v)
                            },
                            expression: "form.description"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row  no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          staticClass: "mr-1",
                          attrs: {
                            outlined: "",
                            items: _vm.categories,
                            "item-text": "label",
                            "item-value": "value",
                            label: "Categories",
                            placeholder: "Categories"
                          },
                          model: {
                            value: _vm.form.category,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "category", $$v)
                            },
                            expression: "form.category"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          attrs: {
                            outlined: "",
                            items: _vm.suppliers,
                            "item-text": "text",
                            "item-value": "value",
                            label: "Suppliers",
                            placeholder: "Suppliers"
                          },
                          on: { input: _vm.onValueChange },
                          model: {
                            value: _vm.form.supplier,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "supplier", $$v)
                            },
                            expression: "form.supplier"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-select", {
                          attrs: {
                            outlined: "",
                            items: _vm.items,
                            "item-text": "label",
                            "item-value": "value",
                            label: "List of Items",
                            placeholder: "List of Items",
                            multiple: "",
                            "small-chips": "",
                            "return-object": ""
                          },
                          model: {
                            value: _vm.form.selected_items,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "selected_items", $$v)
                            },
                            expression: "form.selected_items"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.form.selected_items.length
                  ? _c(
                      "div",
                      { staticClass: "row no-gutters" },
                      [
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-simple-table",
                              {
                                staticClass: "mb-5 ",
                                attrs: { "fixed-header": "" }
                              },
                              [
                                _c("thead", [
                                  _c("th", [_vm._v("#")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Item")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Description")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Qty")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Unit Cost")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Unit Price")])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.form.selected_items, function(
                                    item,
                                    i
                                  ) {
                                    return _c("tr", { key: "item" + i }, [
                                      _c("td", [_vm._v(_vm._s(i + 1))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.label))]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Description",
                                              placeholder: "Description",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression: "item.description"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Quantity",
                                              placeholder: "Quantity",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.quantity,
                                              callback: function($$v) {
                                                _vm.$set(item, "quantity", $$v)
                                              },
                                              expression: "item.quantity"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Unit Cost",
                                              placeholder: "Unit Cost",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.unit_cost,
                                              callback: function($$v) {
                                                _vm.$set(item, "unit_cost", $$v)
                                              },
                                              expression: "item.unit_cost"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "mt-3",
                                            attrs: {
                                              label: "Unit Price",
                                              placeholder: "Unit Price",
                                              dense: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.unit_price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "unit_price",
                                                  $$v
                                                )
                                              },
                                              expression: "item.unit_price"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row no-gutters" },
                  [
                    _c(
                      "v-col",
                      [
                        _c("v-textarea", {
                          attrs: {
                            outlined: "",
                            label: "Remarks",
                            placeholder: "Remarks",
                            rows: "2"
                          },
                          model: {
                            value: _vm.form.remarks,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "remarks", $$v)
                            },
                            expression: "form.remarks"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.add()
                        }
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Index.vue?vue&type=template&id=9bab60a2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Index.vue?vue&type=template&id=9bab60a2& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("v-breadcrumbs", { attrs: { items: _vm.items } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ma-2 float-right",
                  attrs: { tile: "", color: "indigo", dark: "" },
                  on: { click: _vm.create }
                },
                [_vm._v("New Purchase Order")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("PO ID")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Order Description")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Total Quantity")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Total Amount")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Expected Delivery")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Settled / Total Item")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Actions")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.purchase_lists, function(result, i) {
                    return _c("tr", { key: "result" + i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.po_id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.description))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.total_qty(result)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.total_amount(result)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.delivery_date))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s())]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.totalPages, circle: "" },
            model: {
              value: _vm.current,
              callback: function($$v) {
                _vm.current = $$v
              },
              expression: "current"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("create")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Add.vue?vue&type=template&id=421cedcc&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/stocks/Add.vue?vue&type=template&id=421cedcc& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "590" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Old Stocks")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { staticClass: "row no-gutters" },
                    [
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            staticClass: "mr-1",
                            attrs: {
                              outlined: "",
                              items: _vm.items,
                              "item-text": "label",
                              "item-value": "value",
                              label: "Items",
                              placeholder: "Items"
                            },
                            on: { input: _vm.item_details },
                            model: {
                              value: _vm.form.item_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "item_id", $$v)
                              },
                              expression: "form.item_id"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "row no-gutters" },
                    [
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            staticClass: "mr-1",
                            attrs: {
                              label: "Unit Cost",
                              placeholder: "Unit Price",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.unit_cost,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "unit_cost", $$v)
                              },
                              expression: "form.unit_cost"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            staticClass: "mr-1",
                            attrs: {
                              label: "Unit Price",
                              placeholder: "Unit Price",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.unit_price,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "unit_price", $$v)
                              },
                              expression: "form.unit_price"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "row no-gutters" },
                    [
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            staticClass: "mr-1",
                            attrs: {
                              label: "Quantity",
                              placeholder: "Quantity",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.quantity,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "quantity", $$v)
                              },
                              expression: "form.quantity"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.form.existing
                        ? _c(
                            "v-col",
                            [
                              _c(
                                "v-alert",
                                {
                                  attrs: {
                                    text: "",
                                    prominent: "",
                                    type: "error",
                                    icon: "mdi-cloud-alert"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                          Existing data in stocks. You want to merge it?\n                      "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n              Cancel\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.add }
                    },
                    [_vm._v("\n              Add\n          ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/History.vue?vue&type=template&id=037eab0d&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/stocks/History.vue?vue&type=template&id=037eab0d& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("History")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Item")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Quantity")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Stocks")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Nature Stocks")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Date Updated")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.results, function(result, i) {
                    return _c("tr", { key: "result" + i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.item))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.quantity))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.stocks))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.status))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.updated_at))])
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Index.vue?vue&type=template&id=110cb6ea&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/stocks/Index.vue?vue&type=template&id=110cb6ea& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("v-breadcrumbs", { attrs: { items: _vm.items } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ma-2 float-right",
                  attrs: { tile: "", color: "indigo", dark: "" },
                  on: {
                    click: function($event) {
                      return _vm.add_stocks()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-plus")]), _vm._v("Old Stocks")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Image")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Item")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Stocks")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Nature Stocks")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Date Updated")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Actions")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.item_lists, function(result, i) {
                    return _c("tr", { key: "result" + i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-img", {
                            staticClass: "grey lighten-2",
                            attrs: {
                              src: result.image,
                              "aspect-ratio": "1.3",
                              width: "80px"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.item))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.stocks))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.nature_stocks))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.updated_at))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-icon",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.view_history(result)
                                }
                              }
                            },
                            [_vm._v("mdi-history")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.totalPages, circle: "" },
            model: {
              value: _vm.current,
              callback: function($$v) {
                _vm.current = $$v
              },
              expression: "current"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("history"),
      _vm._v(" "),
      _c("add")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Create.vue?vue&type=template&id=381b1662&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/suppliers/Create.vue?vue&type=template&id=381b1662& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "800" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("New Supplier")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-col", [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Name",
                            placeholder: "Name",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Address",
                            placeholder: "Address",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.address,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "address", $$v)
                            },
                            expression: "form.address"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Telephone",
                            placeholder: "Telephone",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.telephone,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "telephone", $$v)
                            },
                            expression: "form.telephone"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            label: "Mobile",
                            placeholder: "Mobile",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.mobile,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "mobile", $$v)
                            },
                            expression: "form.mobile"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Email Address",
                            placeholder: "Email Address",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            label: "Tin Number",
                            placeholder: "Tin Number",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.tin,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "tin", $$v)
                            },
                            expression: "form.tin"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Contact Person",
                            placeholder: "Contact Person",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.contact_person,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "contact_person", $$v)
                            },
                            expression: "form.contact_person"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.add }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Edit.vue?vue&type=template&id=246f9d9d&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/suppliers/Edit.vue?vue&type=template&id=246f9d9d& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "800" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Edit Supplier")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-col", [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Name",
                            placeholder: "Name",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Address",
                            placeholder: "Address",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.address,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "address", $$v)
                            },
                            expression: "form.address"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Telephone",
                            placeholder: "Telephone",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.telephone,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "telephone", $$v)
                            },
                            expression: "form.telephone"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            label: "Mobile",
                            placeholder: "Mobile",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.mobile,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "mobile", $$v)
                            },
                            expression: "form.mobile"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          staticClass: "mr-1",
                          attrs: {
                            label: "Email Address",
                            placeholder: "Email Address",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            label: "Tin Number",
                            placeholder: "Tin Number",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.tin,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "tin", $$v)
                            },
                            expression: "form.tin"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label: "Contact Person",
                            placeholder: "Contact Person",
                            outlined: ""
                          },
                          model: {
                            value: _vm.form.contact_person,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "contact_person", $$v)
                            },
                            expression: "form.contact_person"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.edit }
                    },
                    [_vm._v("Update")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Index.vue?vue&type=template&id=a9886062&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/suppliers/Index.vue?vue&type=template&id=a9886062& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("v-breadcrumbs", { attrs: { items: _vm.breadcrumbs } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ma-2 float-right",
                  attrs: { tile: "", color: "indigo", dark: "" },
                  on: { click: _vm.create }
                },
                [_vm._v("New Supplier")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c("v-simple-table", { attrs: { "fixed-header": "" } }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Telephone")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Tin")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Mobile")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Contact")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Date Created")
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v("...")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.supplier_lists, function(result, i) {
                    return _c("tr", { key: "result" + i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.address))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.telephone))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.email))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.tin))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.mobile))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.contact_person))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(result.created_at))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-icon",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  return _vm.edit(result)
                                }
                              }
                            },
                            [_vm._v("mdi-pencil")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.totalPages, circle: "" },
            model: {
              value: _vm.current,
              callback: function($$v) {
                _vm.current = $$v
              },
              expression: "current"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("create"),
      _vm._v(" "),
      _c("edit")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminLayout.vue?vue&type=template&id=432ed138&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminLayout.vue?vue&type=template&id=432ed138& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          staticClass: "deep-purple accent-4",
          attrs: { app: "", dark: "", permanent: "", flat: "" },
          scopedSlots: _vm._u([
            {
              key: "prepend",
              fn: function() {
                return [
                  _c(
                    "v-list-item",
                    { attrs: { "two-line": "" } },
                    [
                      _c("v-list-item-avatar", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://kaklze-s3.s3-ap-southeast-1.amazonaws.com/users/2mspQwbSc0OR7is54nokhrb58YvI6DrbLGADOL9h.png"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(_vm._s(_vm.info.name))
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(_vm._s(_vm.info.email))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "append",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "pa-2" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            block: "",
                            onClick:
                              "event.preventDefault(); document.getElementById('logout-form').submit()"
                          }
                        },
                        [_vm._v("Logout")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticStyle: { display: "none" },
                      attrs: {
                        id: "logout-form",
                        action: _vm.logout,
                        method: "POST"
                      }
                    },
                    [
                      _c("input", {
                        attrs: { type: "hidden", name: "_token" },
                        domProps: { value: _vm.csrf }
                      })
                    ]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            [
              _vm._l(_vm.routes, function(route, i) {
                return _c(
                  "v-list-item",
                  {
                    key: "route" + i,
                    class: route.is_active
                      ? "v-item--active v-list-item--active"
                      : "",
                    attrs: { link: "", href: route.url }
                  },
                  [
                    _c(
                      "v-list-item-icon",
                      [_c("v-icon", [_vm._v(_vm._s(route.icon))])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [_c("v-list-item-title", [_vm._v(_vm._s(route.name))])],
                      1
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-switch", {
                        model: {
                          value: _vm.switch1,
                          callback: function($$v) {
                            _vm.switch1 = $$v
                          },
                          expression: "switch1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Dark Mode")])],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            color: "deep-purple accent-4",
            dense: "",
            dark: "",
            flat: ""
          }
        },
        [
          _c("v-app-bar-nav-icon"),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("KOMPRA")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("mdi-heart")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("mdi-magnify")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { left: "", bottom: "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g({ attrs: { icon: "" } }, on),
                        [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                [
                  _vm._l(5, function(n) {
                    return _c(
                      "v-list-item",
                      { key: n, on: { click: function() {} } },
                      [
                        _c("v-list-item-title", [_vm._v("Option " + _vm._s(n))])
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c("v-switch", {
                        attrs: { value: "true" },
                        model: {
                          value: _vm.switch1,
                          callback: function($$v) {
                            _vm.switch1 = $$v
                          },
                          expression: "switch1"
                        }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-content", [_c("v-col", [_vm._t("default")], 2)], 1),
      _vm._v(" "),
      _c(
        "v-footer",
        { staticClass: "black  text-center text-white" },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("div", [_vm._v("KOMPRA © " + _vm._s(new Date().getFullYear()))])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]);
Vue.component('admin-layout', __webpack_require__(/*! ./components/layouts/AdminLayout.vue */ "./resources/js/components/layouts/AdminLayout.vue")["default"]);
/** ITEMS */

Vue.component('items-index', __webpack_require__(/*! ./components/admin/items/Index.vue */ "./resources/js/components/admin/items/Index.vue")["default"]);
Vue.component('items-create', __webpack_require__(/*! ./components/admin/items/Create.vue */ "./resources/js/components/admin/items/Create.vue")["default"]);
Vue.component('items-edit', __webpack_require__(/*! ./components/admin/items/Edit.vue */ "./resources/js/components/admin/items/Edit.vue")["default"]); // Vue.component('items-view', require('./components/admin/items/View.vue').default);

/** SUPPLIERS */

Vue.component('suppliers-index', __webpack_require__(/*! ./components/admin/suppliers/Index.vue */ "./resources/js/components/admin/suppliers/Index.vue")["default"]);
Vue.component('suppliers-create', __webpack_require__(/*! ./components/admin/suppliers/Create.vue */ "./resources/js/components/admin/suppliers/Create.vue")["default"]);
/** PURCHASE ORDERS */

Vue.component('purchase-index', __webpack_require__(/*! ./components/admin/purchase/Index.vue */ "./resources/js/components/admin/purchase/Index.vue")["default"]);
/** DELIVERY */

Vue.component('delivery-index', __webpack_require__(/*! ./components/admin/delivery/Index.vue */ "./resources/js/components/admin/delivery/Index.vue")["default"]);
/** STOCKS */

Vue.component('stocks-index', __webpack_require__(/*! ./components/admin/stocks/Index.vue */ "./resources/js/components/admin/stocks/Index.vue")["default"]);
Vue.component('history', __webpack_require__(/*! ./components/admin/stocks/History.vue */ "./resources/js/components/admin/stocks/History.vue")["default"]);
Vue.component('add', __webpack_require__(/*! ./components/admin/stocks/Add.vue */ "./resources/js/components/admin/stocks/Add.vue")["default"]);
/** POINT OF SALES */

Vue.component('pos-index', __webpack_require__(/*! ./components/admin/pos/Index.vue */ "./resources/js/components/admin/pos/Index.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



Vue.use(vuetify__WEBPACK_IMPORTED_MODULE_0___default.a);
var vuetify = new vuetify__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (new vuetify__WEBPACK_IMPORTED_MODULE_0___default.a({
  theme: {
    dark: true
  }
}));

Vue.prototype.$permission = function (module, name) {
  var modules = window.Laravel.routes.username.permissions;
  var results = modules.find(function (val) {
    if (val.module === module) {
      return val;
    }
  });
  var settings = results.settings;
  var result = settings.find(function (val) {
    if (val.name === name) {
      return val;
    }
  });

  if (result) {
    return result.value;
  } else {
    return true;
  }
};

window.onload = function () {
  var app = new Vue({
    vuetify: vuetify,
    el: '#app'
  });
};

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/delivery/Deliver.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/delivery/Deliver.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Deliver_vue_vue_type_template_id_d17e5896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deliver.vue?vue&type=template&id=d17e5896&scoped=true& */ "./resources/js/components/admin/delivery/Deliver.vue?vue&type=template&id=d17e5896&scoped=true&");
/* harmony import */ var _Deliver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deliver.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/delivery/Deliver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css& */ "./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Deliver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Deliver_vue_vue_type_template_id_d17e5896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Deliver_vue_vue_type_template_id_d17e5896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d17e5896",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/delivery/Deliver.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/delivery/Deliver.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/delivery/Deliver.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deliver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=style&index=0&id=d17e5896&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_style_index_0_id_d17e5896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/delivery/Deliver.vue?vue&type=template&id=d17e5896&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/delivery/Deliver.vue?vue&type=template&id=d17e5896&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_template_id_d17e5896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deliver.vue?vue&type=template&id=d17e5896&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Deliver.vue?vue&type=template&id=d17e5896&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_template_id_d17e5896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deliver_vue_vue_type_template_id_d17e5896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/delivery/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/delivery/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_1e6eda3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1e6eda3c& */ "./resources/js/components/admin/delivery/Index.vue?vue&type=template&id=1e6eda3c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/delivery/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1e6eda3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_1e6eda3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/delivery/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/delivery/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/delivery/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/delivery/Index.vue?vue&type=template&id=1e6eda3c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/delivery/Index.vue?vue&type=template&id=1e6eda3c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1e6eda3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=1e6eda3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/delivery/Index.vue?vue&type=template&id=1e6eda3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1e6eda3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1e6eda3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/items/Create.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/items/Create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_02a955d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=02a955d4& */ "./resources/js/components/admin/items/Create.vue?vue&type=template&id=02a955d4&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/items/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_02a955d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_02a955d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/items/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/items/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/items/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/items/Create.vue?vue&type=template&id=02a955d4&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/items/Create.vue?vue&type=template&id=02a955d4& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_02a955d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=02a955d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Create.vue?vue&type=template&id=02a955d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_02a955d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_02a955d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/items/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/items/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_02a1e3a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=02a1e3a4& */ "./resources/js/components/admin/items/Edit.vue?vue&type=template&id=02a1e3a4&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/items/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_02a1e3a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_02a1e3a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/items/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/items/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/items/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/items/Edit.vue?vue&type=template&id=02a1e3a4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/items/Edit.vue?vue&type=template&id=02a1e3a4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_02a1e3a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=02a1e3a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Edit.vue?vue&type=template&id=02a1e3a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_02a1e3a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_02a1e3a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/items/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/items/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_d95b6ab0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=d95b6ab0& */ "./resources/js/components/admin/items/Index.vue?vue&type=template&id=d95b6ab0&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/items/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_d95b6ab0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_d95b6ab0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/items/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/items/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/items/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/items/Index.vue?vue&type=template&id=d95b6ab0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/items/Index.vue?vue&type=template&id=d95b6ab0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d95b6ab0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=d95b6ab0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/Index.vue?vue&type=template&id=d95b6ab0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d95b6ab0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d95b6ab0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/items/View.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/items/View.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_2b282a82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=2b282a82& */ "./resources/js/components/admin/items/View.vue?vue&type=template&id=2b282a82&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/items/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_2b282a82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_2b282a82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/items/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/items/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/items/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/items/View.vue?vue&type=template&id=2b282a82&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/items/View.vue?vue&type=template&id=2b282a82& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_2b282a82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=2b282a82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/items/View.vue?vue&type=template&id=2b282a82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_2b282a82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_2b282a82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/pos/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/pos/Index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_8155f908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=8155f908& */ "./resources/js/components/admin/pos/Index.vue?vue&type=template&id=8155f908&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/pos/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_8155f908___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_8155f908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/pos/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/pos/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/pos/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pos/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/pos/Index.vue?vue&type=template&id=8155f908&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/pos/Index.vue?vue&type=template&id=8155f908& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8155f908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=8155f908& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pos/Index.vue?vue&type=template&id=8155f908&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8155f908___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8155f908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/purchase/Create.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/purchase/Create.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_8a581e22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=8a581e22& */ "./resources/js/components/admin/purchase/Create.vue?vue&type=template&id=8a581e22&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/purchase/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_8a581e22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_8a581e22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/purchase/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/purchase/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/purchase/Create.vue?vue&type=template&id=8a581e22&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Create.vue?vue&type=template&id=8a581e22& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_8a581e22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=8a581e22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Create.vue?vue&type=template&id=8a581e22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_8a581e22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_8a581e22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/purchase/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/purchase/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_9bab60a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=9bab60a2& */ "./resources/js/components/admin/purchase/Index.vue?vue&type=template&id=9bab60a2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/purchase/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_9bab60a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_9bab60a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/purchase/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/purchase/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/purchase/Index.vue?vue&type=template&id=9bab60a2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Index.vue?vue&type=template&id=9bab60a2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9bab60a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=9bab60a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Index.vue?vue&type=template&id=9bab60a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9bab60a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9bab60a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/stocks/Add.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/stocks/Add.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_421cedcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=421cedcc& */ "./resources/js/components/admin/stocks/Add.vue?vue&type=template&id=421cedcc&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/stocks/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_421cedcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_421cedcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/stocks/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/stocks/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/stocks/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/stocks/Add.vue?vue&type=template&id=421cedcc&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/stocks/Add.vue?vue&type=template&id=421cedcc& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_421cedcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=421cedcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Add.vue?vue&type=template&id=421cedcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_421cedcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_421cedcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/stocks/History.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/stocks/History.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_037eab0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=037eab0d& */ "./resources/js/components/admin/stocks/History.vue?vue&type=template&id=037eab0d&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/stocks/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_037eab0d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_037eab0d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/stocks/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/stocks/History.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/stocks/History.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/stocks/History.vue?vue&type=template&id=037eab0d&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/stocks/History.vue?vue&type=template&id=037eab0d& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_037eab0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=037eab0d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/History.vue?vue&type=template&id=037eab0d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_037eab0d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_037eab0d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/stocks/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/stocks/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_110cb6ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=110cb6ea& */ "./resources/js/components/admin/stocks/Index.vue?vue&type=template&id=110cb6ea&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/stocks/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_110cb6ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_110cb6ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/stocks/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/stocks/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/stocks/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/stocks/Index.vue?vue&type=template&id=110cb6ea&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/stocks/Index.vue?vue&type=template&id=110cb6ea& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_110cb6ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=110cb6ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/stocks/Index.vue?vue&type=template&id=110cb6ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_110cb6ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_110cb6ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/suppliers/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Create.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_381b1662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=381b1662& */ "./resources/js/components/admin/suppliers/Create.vue?vue&type=template&id=381b1662&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/suppliers/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_381b1662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_381b1662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/suppliers/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/suppliers/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/suppliers/Create.vue?vue&type=template&id=381b1662&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Create.vue?vue&type=template&id=381b1662& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_381b1662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=381b1662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Create.vue?vue&type=template&id=381b1662&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_381b1662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_381b1662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/suppliers/Edit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Edit.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_246f9d9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=246f9d9d& */ "./resources/js/components/admin/suppliers/Edit.vue?vue&type=template&id=246f9d9d&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/suppliers/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_246f9d9d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_246f9d9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/suppliers/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/suppliers/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/suppliers/Edit.vue?vue&type=template&id=246f9d9d&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Edit.vue?vue&type=template&id=246f9d9d& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_246f9d9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=246f9d9d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Edit.vue?vue&type=template&id=246f9d9d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_246f9d9d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_246f9d9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/suppliers/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_a9886062___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=a9886062& */ "./resources/js/components/admin/suppliers/Index.vue?vue&type=template&id=a9886062&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/suppliers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_a9886062___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_a9886062___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/suppliers/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/suppliers/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/suppliers/Index.vue?vue&type=template&id=a9886062&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/suppliers/Index.vue?vue&type=template&id=a9886062& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a9886062___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=a9886062& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/suppliers/Index.vue?vue&type=template&id=a9886062&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a9886062___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a9886062___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/AdminLayout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/AdminLayout.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminLayout_vue_vue_type_template_id_432ed138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=template&id=432ed138& */ "./resources/js/components/layouts/AdminLayout.vue?vue&type=template&id=432ed138&");
/* harmony import */ var _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/AdminLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminLayout_vue_vue_type_template_id_432ed138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminLayout_vue_vue_type_template_id_432ed138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/AdminLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/AdminLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/AdminLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/AdminLayout.vue?vue&type=template&id=432ed138&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layouts/AdminLayout.vue?vue&type=template&id=432ed138& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_432ed138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLayout.vue?vue&type=template&id=432ed138& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminLayout.vue?vue&type=template&id=432ed138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_432ed138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_432ed138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp7\htdocs\kompra\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp7\htdocs\kompra\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);