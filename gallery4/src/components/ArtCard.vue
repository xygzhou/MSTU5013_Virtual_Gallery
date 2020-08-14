<template>
    <div>
        <b-col>
          <!--  -->
          <b-card
          :title = "name"
          :header = "'Medium: ' + medium"
          :sub-title = "'Artist: ' + artist"
          :img-src = "link"
          img-alt = "Job-info"
          img-top
          tag = "article"
          style = "max-width:20rem"
          class = "mb-2"
          :footer = "year + ', ' + region"
          >
            <b-button :href="hyper" target="_blank" variant="light blue">View More</b-button>          
          </b-card>
        </b-col>
    </div>
</template>

<script>
export default {
    props: ['name', 'medium', 'artist', 'year', 'region', 'link', 'hyper']
}
</script>

<style lang="scss" scoped>

</style>