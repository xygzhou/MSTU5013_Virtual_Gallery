Vue.component ('font', {
    props: ['app'],
    data() {
        return {
            fontNumber: 16,
        }
    }
})



var app = new Vue({
    el: '#app',
    data: {
        fontNumber: 16,
    },
    computed: {
        computedFont: function () {
            return this.fontSize();
        }
    },
    methods: {
        fontSize: function (fontNumber) {
            return this.fontNumber.toString() + 'px'
        },
        changeFontBigger: function (event) {
            this.fontNumber++
        },
        changeFontSmaller: function (event) {
            this.fontNumber--
        }
    }
        // return {
        //     fontSize: 10
        // }
})

// Vue.component ('color-contrast', {
//     props: ['title', 'body'],
//     data: {color: '#673AB7'}, 
//     template: 
//     `
//     <article class="color-contrast" v-show="isVisible">
//     <div class="color-contrast-header">
//       {{ title }}
//       <button type="button" @click="isVisible = false">x</button>
//     </div>
//     <div class="color-contrast-body">
//       {{ body }}
//     </div>
//     </article>
//     `
// });