import Resource from './Resource'

class Book extends Resource{

  constructor () {
    super('/books/')
  }
}

export default new Book()
