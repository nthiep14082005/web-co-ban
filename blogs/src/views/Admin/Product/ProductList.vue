<tbody>
  <tr v-for="product in products" :key="product.id">
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.category?.name }}</td>
    <td>
      <img :src="product.image" :alt="product.name" class="product-image" />
    </td>
    <td>
      <button @click="editProduct(product)" class="btn btn-primary btn-sm">
        <i class="fas fa-edit"></i>
      </button>
      <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">
        <i class="fas fa-trash"></i>
      </button>
    </td>
  </tr>
</tbody> 