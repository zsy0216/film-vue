<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">{{ nav.project_name }}</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">{{ nav.home }}</router-link>
            </li>
            <li>
              <router-link to="/about">{{ nav.about }}</router-link>
            </li>
            <li>
              <router-link to="/contact">{{ nav.contact }}</router-link>
            </li>
            <li>
              <a href="https://cn.vuejs.org/v2/guide/instance.html" target="_blank">Vue</a>
            </li>
            <li>
              <a href="https://movie.douban.com/" target="_blank">DouBan</a>
            </li>
            <li>
               <a href="https://v3.bootcss.com/components/" target="_blank">Bootstrap</a>
            </li>
            <li>
               <a href="http://www.jiaoran.net/" target="_blank">皎然影音乐</a>
            </li>
            <li>
               <a href="https://www.json.cn/#" target="_blank">JSON解析</a>
            </li>
          </ul>
          <div id="search">
            <div class="container">
              <div class="form-group">
                <div class="col-lg-3" />
                <div class="col-lg-4">
                  <input class="form-control" type="text" placeholder="搜索电影" />
                </div>
                <!-- <div class="col-lg-2"> -->
                  <router-link to="/detial" class="search-btn">{{nav.search}}</router-link>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
        <!--/.nav-collapse -->
      </div>
      <!-- /.container -->
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data: function() {
    return {
      nav: {
        project_name: "爱看不看",
        home: "首页",
        about: "关于",
        contact: "联系我",
        search: "搜一下"
      }
    };
  },
  methods: {},
  components: {}
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding-top: 51px;
}

#search {
  margin-top: 10px;
  a {
    text-decoration: none;
  }
}

.search-btn {
  height: 34px;
  float: left;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
}
</style>
