Vue.component ('change-font', {
    props: [],
    data() {
        return {
            fontNumber: 16,
        }
    },
    template: `
		<div>
		<div id="body" v-bind:style="{ fontSize: computedFont }" ></div>
			<a class="button" v-on:click="changeFontBigger()">
				Increase font size
			</a>
			&nbsp;&nbsp;&nbsp;
			<a class="button" v-on:click="changeFontSmaller()">
				Decrease font size
			</a>
				  
			<p v-bind:style="{ fontSize: computedFont }">
				Font size is: {{ computedFont }}
			</p>
		</div>
    `,
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
})



//     propos: [],
//     data() {
//         return {
//             color: '#673AB7',
//         }
//     }
// })
//     props: [],
//     data () {
//         return {
//             tcolor: null,
//             colontrasts: [
//                 {
//                     contrastID: 0,
//                     textColor: '#3B9C9C',
//                     bgColor: '#f4f4f4'
//                 },
//                 {
//                     contrastID: 1,
//                     textColor: 'black',
//                     bgColor: 'white'
//                 }
//             ]
//         }
//     },
//     template: `
//     <div v-for="colcontrast in colcontrasts" :key="colcontrast.contrastID">
// 	<a class=button v-on:click="updateColor(colcontrast.textColor)">Color Contrast Mode</a>
// 	Black text + white background for stronger contrast.
// 				</div>`,
//     methods: {
//         updateColor(textColor) {
//             this.tcolor = textColor;
//             return this.tColor
//         }
//     }
// })

Vue.component ('change-color', {
    data() {
        return {
            available: true,
            nearby: false
        }
    },
    template: `
    <div  v-on:click="available = !available" v-bind:class="{available: available}">
	    <span>Click HERE for black background + white text for stronger contrast.</span>
	</div>`
})

var app = new Vue({
    el: '#app',
    // data: {
    //     available: true,
    //     nearby: false
    // }
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