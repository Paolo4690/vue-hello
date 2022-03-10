const app = new Vue({
    el: '#containerApp',
    data: {
        title: 'Foto di Lorem Picsum',
        srcImage: 'https://picsum.photos/400/300',
        altImage: 'Foto di Lorem Picsum',
    },
    methods: {
        reload: function() {
            location.reload()
        }
    }
});