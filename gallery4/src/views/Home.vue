<template>
    <b-container>
      <b-row align-v="center">
        <art-card v-for="art in displayarts" :key="art.id" :name="art.name" :medium="art.medium" :artist="art.artist" :year="art.year" :region="art.region" :link="art.link" :hyper="art.hyper"></art-card>
      </b-row>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
    </b-container>
</template>

<script>
// @ is an alias to /src
import ArtCard from '@/components/ArtCard.vue';

export default {
  name: "Home",
  components: {"art-card": ArtCard},
  mounted(){
    this.fetchData();
  },
  data(){
    return {
      arts: [],
      displayarts: [],
      currentPage: 1,
      rows: 1,
      perPage: 3
    }
  },
  methods: {
    async fetchData(){
      const res = await fetch("arts.json");
      const val = await res.json();
      this.arts = val;
      this.displayarts = val.slice(0, 3);
      this.rows = this.arts.length;
      console.log(val);
    },
    paginate(currentPage){
      const start = (currentPage - 1) * this.perPage;
      this.displayarts = this.arts.slice(start, start+3);
    }
  }
};
</script>
