console.log('General Kenobi')
const app = Vue.createApp({
    // data, functinos
    // template: '<h2>I am the template </h2>'
    data() {
        return {
            showBooks: true,
            title: 'Ready Player One',
            author: 'Ernest Cline',
            age: 51
        }
    },
    methods: {
        changeTitle(title) {

            this.title = title
            this.author = 'Matthew McConaughy'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }

    }
})

app.mount('#app')