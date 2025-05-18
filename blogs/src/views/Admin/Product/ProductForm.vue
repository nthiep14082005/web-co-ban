<select v-model="product.categoryId" class="form-control">
  <option value="">Chọn danh mục</option>
  <option v-for="category in categories" :key="category.id" :value="category.id">
    {{ category.name }}
  </option>
</select> 