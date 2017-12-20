<template>
  <div>
    <b-button variant="warning" @click="showModal">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </b-button>
    <b-modal :close-on-backdrop=false
              id="edit"
              title="Actualizar información"
              header-bg-variant="warning"
              hide-footer
              ref="myModalRef"
              class="text-left">

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
      <div class="text-right">
        <b-btn class="mt-3" @click="hideModal">Cancelar</b-btn>
        <b-btn class="mt-3" variant="primary" @click="onSubmit">Aceptar</b-btn>
      </div>
    </b-modal>
  </div>
</template>
<script>
import Book from '@/utils/resources/Book'

export default {
  name: 'book_edit',
  props: ['obj'],
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
      let promise = Book.put(data._id, data)
      promise.then((response) => {
        this.$emit('success')
        this.model = {}
      }, (error) => {
        console.log(error)
      })
      this.hideModal()
    },
    copyModel () {
      this.model = Object.assign({}, this.obj)
    }
  },
  created () {
    this.copyModel()
  }
}
</script>
