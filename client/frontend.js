import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'

new Vue({
     el: '#app',
     data() {
          return {
               form: {
                    name: '',
                    value: '',
               },
               contacts: [
                    {id: 1, name: 'Nazar', value: '+1234567890', marked: false},
               ]
          }
     },
     computed: {
          canCreate(){
               return this.form.name.trim() && this.form.value.trim()
          }
     },
     methods: {
          createContact(){
               const {...contact} = this.form

               this.contacts.push({...contact, id: Date.now(), marked: false})

               this.form.name = this.form.value = '' // clear the form
          },
          markContact(id){
               const contact = this.contacts.find(a => a.id === id);
               contact.marked = true;
          },
          removeContact(id){
               this.contacts = this.contacts.filter(a => a.id !== id)
          }
     }
})