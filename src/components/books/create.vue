<template>
  <div>
    <b-btn v-b-modal.create variant="success">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </b-btn>
    <b-modal :close-on-backdrop=false
              id="create"
              title="Agregar nuevo libro"
              size="lg"
              @ok="onSubmit"
              header-bg-variant="info"
              header-text-variant="light"
              footer-bg-variant="info"
              cancel-title="Cancelar"
              cancel-variant="dark"
              ok-title="Enviar"
              ok-variant="light"
              ref="create"
              class="text-left modal-compact">

    <div class="form-group">
      <label class="control-label" for="name">
          Nombre:
      </label>
      <input type="text"
              class="form-control"
              v-model="model.name"
              id="name"
              aria-selected="true">
    </div>
    <div class="form-group">
      <label class="control-label" for="author">
          Autor:
      </label>
      <input type="text"
              class="form-control"
              v-model="model.author"
              id="author"
              aria-selected="true">
    </div>
    <div class="form-group">
      <label class="control-label" for="isbn">
          ISBN:
      </label>
      <input type="text"
              class="form-control"
              v-model="model.isbn"
              id="isbn"
              aria-selected="true">
    </div>
    <div class="form-group">
      <label class="control-label" for="genre">
        Categoria:
      </label>
      <select id="genre"
              name="genre"
              v-model="model.genre"
              class="form-control"
              size="1">
        <option value="">----------</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Humor">Humor</option>
        <option value="Poetry">Poetry</option>
      </select>
    </div>
    </b-modal>
  </div>
</template>
<script>
import Book from '@/utils/resources/Book'
import Notifications from '@/utils/notifications'

export default {
  name: 'book_create',
  data: () => {
    return {
      model: {},
      formstate: {}
    }
  },
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    onSubmit () {
      let data = this.model
      let promise = Book.post(data)
      promise.then((response) => {
        Notifications.success('Los datos han sido almacenados con éxito')
        this.$emit('success')
      }, (error) => {
        console.log(error)
        Notifications.error('Ha ocurrido un error al intentar almacenar los datos')
      })
      this.model = {}
    }
  }
}
</script>
