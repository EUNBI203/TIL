<template>
  <div id="app">
    <search-bar @input-change-event="onInputChange"></search-bar>
    <video-detail :video="selectVideo"></video-detail>
    <video-list @video-select-event="selectedVideo" :videos="videos"></video-list>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
const API_KEY = process.env.VUE_APP_API_KEY

export default {
  name: 'app',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectVideo: null
    } // SFC에서는 반드시 data는 함수로 작성하고, 오브젝트를 리턴하도록 작성
  },
  methods: {
    onInputChange(value) {
      console.log('==app==')
      console.log(value)
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: value
        }
      })
      .then(response => {
        this.videos = response.data.items
      })
      .catch(error => {
        console.log(error)
      })
    },
    selectedVideo(video) {
      console.log('app 도착')
      this.selectVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
