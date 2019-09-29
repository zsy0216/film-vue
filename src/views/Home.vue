<template>
  <div class="home">
    <h2>这里是首页</h2>
    <a href="https://cn.vuejs.org/v2/guide/instance.html" target="_blank">你想要的vue</a>   <br/>
    <a href="https://movie.douban.com/" target="_blank">你想要的douban</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      film: [],
      api:[
        {}
      ]
    };
  }
};
</script>
