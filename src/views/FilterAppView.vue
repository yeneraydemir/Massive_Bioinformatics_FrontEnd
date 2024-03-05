<template>
  <div class="mt-responsive">
    <h1>Massive Filter-App</h1>
    <div class="mb-3">
      <label for="filterInput" class="form-label">Filter Name:</label>
      <input type="text" class="form-control" v-model="filterText" id="filterInput" placeholder="Enter filter name">
      <p>Filter Text: {{ filterText }}</p>
    </div>
    <div class="mb-3">
      <label for="filterInputAge" class="form-label">Filter Age:</label>
      <input type="text" class="form-control" v-model="filterAgeText" id="filterInputAge" placeholder="Enter filter age">
      <p>Filter Age Text: {{ filterAgeText }}</p>
    </div>
    <div class="mb-3">
      <label for="sortOptions" class="form-label">Sort Data:</label>
      <select class="form-select" v-model="sortOption" id="sortOptions">
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="email">Email</option>
      </select><br>
      <button @click="sortData" class="btn btn-primary">Sort</button>
    </div>
    <div class="mb-3">
      <label for="pageSize" class="form-label">Page Size:</label>
      <select class="form-select" v-model="pageSize" id="pageSize">
        <option v-for="size in pageSizes" :value="size">{{ size }}</option>
      </select><br>
      <!-- <button @click="paginate" class="btn btn-primary">Paginate</button> -->
    </div>
    <br>
    <div id="results">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click="prevPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" aria-label="Next" @click="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: '',
      filterAgeText: '', // Changed from filterAge to filterAgeText
      sortOption: 'id',
      pageSize: 10,
      pageSizes: [5, 10, 15, 20],
      currentPage: 1,
      data: [
        { id: 1, name: 'Yener Aydemir', age: 22, email: 'iletisim@yeneraydemir.com' },
        { id: 2, name: 'Mark Henry', age: 33, email: 'markhenry@mail.com' },
        { id: 3, name: 'Ahmet ', age: 22, email: 'iletisim@yeneraydemir.com' },
        { id: 4, name: 'Mehmet ', age: 31, email: 'markhenry@mail.com' },
        { id: 5, name: 'Aydemir', age: 32, email: 'iletisim@yeneraydemir.com' },
        { id: 6, name: 'Ayse', age: 43, email: 'example@mail.com' },
        { id: 7, name: 'Fatma', age: 90, email: 'example@mail.com' },
        { id: 8, name: 'Sila', age: 3, email: 'example@mail.com' },
        { id: 9, name: 'Lucy', age: 22, email: 'example@mail.com' },
        { id: 10, name: 'Chester', age: 33, email: 'example@mail.com' },
        { id: 11, name: 'Helga', age: 22, email: 'example@mail.com' },
        { id: 12, name: 'Jeniffer', age: 33, email: 'example@mail.com' }
      ]
    }
  },
  computed: {
    filteredData() {
      let filtered = this.data;
      if (this.filterText) {
        filtered = filtered.filter(item => item.name.toLowerCase().includes(this.filterText.toLowerCase()));
      }
      if (this.filterAgeText) { // Changed from filterAge to filterAgeText
        filtered = filtered.filter(item => item.age === parseInt(this.filterAgeText));
      }
      return filtered;
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.pageSize);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredData.slice(startIndex, endIndex);
    }
  },
  methods: {
    sortData() {
      console.log("Sort Option:", this.sortOption);
      if (this.sortOption === 'ascending') {
        console.log("Ascending sort selected");
        this.filteredData.sort((a, b) => a.id - b.id);
      } else if (this.sortOption === 'descending') {
        console.log("Descending sort selected");
        this.filteredData.sort((a, b) => b.id - a.id);
      } else if (this.sortOption === 'id') {
        console.log("Sort by ID selected");
        this.filteredData.sort((a, b) => a.id - b.id);
      } else if (this.sortOption === 'name') {
        console.log("Sort by name selected");
        this.filteredData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOption === 'age') {
        console.log("Sort by age selected");
        this.filteredData.sort((a, b) => a.age - b.age);
      } else if (this.sortOption === 'email') {
        console.log("Sort by email selected");
        this.filteredData.sort((a, b) => a.email.localeCompare(b.email));
      } else {
        console.error("Invalid sort option:", this.sortOption);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .mt-responsive {
    margin-top: 20px;
  }
}
</style>
