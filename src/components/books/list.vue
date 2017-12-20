<template>
  <div>
    <div class="text-right" style="margin-bottom: 1em;">
      <book-create @success="load" />
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Autor</th>
          <th>Categoria</th>
          <th>isbn</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book._id">
          <td>{{book.name}}</td>
          <td>{{book.author}}</td>
          <td>{{book.genre}}</td>
          <td>{{book.isbn}}</td>
          <td><book-edit @success="load" :obj="book" /></td>
          <td><book-delete @success="load" :obj="book" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Book from '@/utils/resources/Book'
import BookCreate from './create'
import BookEdit from './edit'
import BookDelete from './delete'

export default {
  name: 'books_list',
  components: {
    BookCreate,
    BookEdit,
    BookDelete
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
