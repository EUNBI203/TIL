<template>
  <div>
    <h2>영상 목록</h2>
    <ul class="list-group">
      <video-list-item @video-select-event='selectedVideo' 
      v-for='video in videos' :key="video.id.videoId" :video='video'></video-list-item>
    
    </ul>
  </div>
</template>



<script>
import VideoListItem from './VideoListItem.vue'

export default {
  name: 'VideoList',
  props: {
    videos: {
        type: Array,
        required: true
    }
  },
  components: {
    VideoListItem
  },
  methods: {
    selectedVideo(video) {
      this.$emit('video-select-event', video)
    }
  }
}
</script>

<style>

</style>