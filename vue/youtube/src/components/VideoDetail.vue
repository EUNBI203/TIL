<template>
  <div v-if="video">
    <h3>비디오</h3>
    <iframe :src="videoUrl" width="560" height="315" allow="autoplay;"></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: {
      type: Object
    }
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`
    }
  }
}
</script>

<style>

</style>