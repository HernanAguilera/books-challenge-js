import Vue from 'vue'
import Router from 'vue-router'
import bookList from '@/components/books/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'books_list',
      component: bookList
    }
  ]
})
