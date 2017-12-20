<template>
  <div>
    <book-create @success="load" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Autor</th>
          <th>Categoria</th>
          <th>isbn</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{book.name}}</td>
          <td>{{book.author}}</td>
          <td>{{book.genre}}</td>
          <td>{{book.isbn}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Book from '@/utils/resources/Book'
import BookCreate from './create'

export default {
  name: 'books_list',
  components: {
    BookCreate
  },
  data: () => {
    return {
      books: []
    }
  },
  methods: {
    load () {
      let promise = Book.query()
      promise.then((response) => {
        console.log(response.data)
        this.books = response.data
      }, (error) => {
        console.error(error)
      })
    }
  },
  created () {
    this.load()
  }
}
</script>
