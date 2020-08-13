<template>
    <div>
        <b-col>
          <b-card
          :title = "name" 
          img-src= "../../../images/Tsunami_by_hokusai_19th_century.jpg"
          img-alt = "Job-info"
          img-top
          tag = "article"
          style = "max-width:20rem"
          class = "mb-2"
          footer = "Card Footer"
          >
            <b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere omnis eum dignissimos alias sequi nulla ratione atque repudiandae officiis ducimus vero, rem esse perferendis unde non. Omnis, molestiae neque!</b-card-text>
            <b-button variant="primary">Apply</b-button>          
          </b-card>
        </b-col>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="scss" scoped>

</style>