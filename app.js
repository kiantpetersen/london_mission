console.log('General Kenobi')
const app = Vue.createApp({
    // data, functinos
    // template: '<h2>I am the template </h2>'
    data() {
        return {
            url: 'https://www.kiantpetersen.com',
            showBooks: true,
            // title: 'Ready Player One',
            // author: 'Ernest Cline',
            // age: 51,
            books: [
                {
                    title: 'Ready Player One',
                    author: 'Ernest Cline',
                    age: 52,
                    img: 'assets/image_1.jpg',
                    isFav: true,
                },
                {
                    title: 'Green Lights',
                    author: 'Matthew McConaughy',
                    age: 53,
                    img: 'assets/image_3.jpg',
                    isFav: false,


                }

                ,
                {
                    title: 'Chaus Rising',
                    author: 'Timothy Zahn',
                    age: 72,
                    img: 'assets/image_2.jpg',
                    isFav: true,


                }
            ],
            x: 0,
            y: 0,
        }
    },
    methods: {
        toggleFav(book) {
            book.isFav = !book.isFav
        },
        changeTitle(title) {

            this.title = title
            this.author = 'Matthew McConaughy'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log('Event', e, e.type)
            data ? console.log(data) : null;
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }

    }
    ,
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')