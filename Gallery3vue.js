// Vue.component('art-module', {
//     template: `
//         <div class="art-info">
//             <li v-for="artwork in gz1" style="text-align: center;">
//                 <p><big>{{ artwork.index + ". Title: " + artwork.name }}</big></p>
//                 <p>{{"Classification: " + artwork.classification +
//                             " || Medium: " + artwork.medium }}
//                 <p>{{"Year: " + artwork.year}}</p>
//                 <img :src= "artwork.link" height= "200" alt="I hate coding">
//             </li> 
//         </div>
//     `
        
//         data(){

//         }
//     props: ["art"],
//     // "link", "name", "classification", "index", "medium", "year"
//     data() {
//         return {
//             imgLoc: "images/bgimg.png",
//             capStyles: {
//                 color: "#323232"
//             }
//         }
//     },
//     // computed: {
        
//     // },
//     // template: `
//     // this is a test
//     // `
//     // methods: {

//     // }
//  })

var app = new Vue({
    el: "#app",
    data: {
       
            // gz1 == variants in that data in tutorial
        gz1: [
            {name: "Landscape", 
            classification: "drawing", 
            medium: "watercolor", 
            year: "2017", 
            index: 1, 
            link: "images/Art/Watercolor_landscape.jpg"}
        ],
        gz2: [
            {name: "Two Hats", classification: "crocheting", medium: "yarn", year: "2020", index: 2, link: "images/Art/Crochet_hats.jpg"
        }],
        gz3: [{
            name: "Jasmine", classification: "embroidery", medium: "fabric", year: "2020", index: 3, link: "images/Art/Embroidery_jasmine.jpg"
        }],
        gz4: [{
            name: "Newsprint Pillows", classification: "sewing", medium: "fabric", year: "2020", index: 4, link: "images/Art/Sewing_newsprint.jpg"
        }],
        gz5: [{
            name: "MADE WITH LOVE", classification: "collage", medium: "print", year: "2017", index: 5, link: "images/Art/Collage_madeWithLove.jpg"
        }],
        gz6: [{
            name: "Untitled", classification: "glass blowing", medium: "glass", year: "2019", index: 6, link: "images/Art/Glass3.jpg"
        }],
        gz7: [{
            name: "Still Life", classification: "Gouache", medium: "paper", year: "2012", index: 7, link: "images/Art/Gouache.jpg"
        }],
        gz8: [{
            name: "Bracelets", classification: "jewlery soldering", medium: "bronze & copper", year: "2019", index: 8, link: "images/Art/Jewelry_bracelets.jpg"
        }],
        gz9: [{
            name: "Yamdrok Lake", classification: "oil painting", medium: "canvas", year: "2016", index: 9, link: "images/Art/Oilpainting_YamdrokLake.jpg"
        }],
        gz10: [{
            name: "Centro Historico", classification: "sketch", medium: "paper", year: "2019", index: 10, link: "images/Art/PencilSketch_Quito.jpg"
        }
        ]
    }
})