<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#nav-toggle"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">{{ nav.project_name }}</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="nav-toggle">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">
                {{ nav.home }}
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about">{{ nav.about }}</router-link>
            </li>
            <li>
              <router-link to="/contact">{{ nav.contact }}</router-link>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Others
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="https://cn.vuejs.org/v2/guide/instance.html" target="_blank">Vue</a>
                </li>
                <li>
                  <a href="https://v3.bootcss.com/components/" target="_blank">Bootstrap</a>
                </li>
                <li>
                  <a href="https://github.com/zsy0216/film-vue" target="_blank">Github</a>
                </li>

                <li role="separator" class="divider"></li>
                <li>
                  <a href="http://www.jiaoran.net/" target="_blank">皎然影音乐</a>
                </li>
                <li>
                  <a href="https://movie.douban.com/" target="_blank">DouBan</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="https://www.json.cn/#" target="_blank">JSON解析</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <span class="input-group-btn">
                <router-link to="/detial" class="btn btn-default">{{ nav.search }}</router-link>
              </span>
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
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
</style>
