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
import Notifications from '@/utils/notifications'
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
      this.$store.commit('loading')
      let promise = Book.query()
      promise.then((response) => {
        this.$store.commit('loaded')
        console.log(response.data)
        this.books = response.data
      }, (error) => {
        this.$store.commit('loaded')
        Notifications.error('Ha ocurrido un error al intentar recuperar los elementos')
        console.error(error)
      })
    }
  },
  created () {
    this.load()
  }
}
</script>
