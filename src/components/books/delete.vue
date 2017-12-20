<template>
    <div>
        <b-button variant="danger" @click="showModal">
            <i class="fa fa-times" aria-hidden="true"></i>
        </b-button>
        <b-modal :close-on-backdrop=false
                  hide-footer
                  ref="myModalRef"
                  size="sm"
                  title="Confirmación"
                  class="modal-danger">
            <div class="d-block text-center">
                <p>Confirma que desea eliminar: <br> <strong>{{obj.name}}</strong> de <strong>{{obj.author}}</strong></p>
            </div>
        <div class="text-right">
            <b-btn class="mt-3" variant="danger" @click="onDelete">Aceptar</b-btn>
            <b-btn class="mt-3" @click="hideModal">Cancelar</b-btn>
        </div>
        </b-modal>
    </div>
</template>
<script>
import Book from '@/utils/resources/Book'
import Notifications from '@/utils/notifications'

export default {
  name: 'book-delete',
  props: ['obj'],
  methods: {
    onDelete () {
      let promise = Book.delete(this.obj._id)
      promise.then((response) => {
        Notifications.success('Los datos han sido eliminados con éxito')
        this.$emit('success')
      }, (error) => {
        console.error(error)
        Notifications.error('Ha ocurrido un error al intentar eliminar los datos')
      })
      this.hideModal()
    },
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>

