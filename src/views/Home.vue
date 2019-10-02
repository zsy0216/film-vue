<template>
  <div class="home">
    <h2>这里是首页</h2>

    <div class="container homepage">
      <div class="row">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">最新发布</h3>
          </div>
        </div>
      </div>

      <article class="media excerpt" v-for="movie in film" v-bind:key="movie.id">
        <div class="media-left">
          <a :href="movie.url" class="focus">
            <img class="media-object thumb" :src="movie.img" :alt="movie.name" />
          </a>
        </div>
        <!-- media-left end. -->
        <div class="media-right">
          <header>
            <a class="cat" href="javascript:void(0)">
              最新发布
              <i></i>
            </a>
            <h2>
              <a target="_blank" :href="movie.url" :title="movie.name ">{{ movie.name }}</a>
            </h2>
          </header>

          <p class="meta">
            <time>
              <i class="fa fa-clock-o"></i>2019-09-25
            </time>
            <a class="pc" :href="movie.url">
              <i class="fa fa-eye" aria-hidden="true"></i>查看(26)
            </a>
          </p>

          <p
            class="note"
          >公仔杀人事件经媒体报道后，引发制作“楚其”的玩具公司对市场前景的担忧，玩具公司将楚其的残骸收回并加以修复，试图向股东证明杀人玩具不过是谣言一场，然而在修复完成时，楚其随即复活，它引发混乱，并最终逃脱。另一方面，安迪（艾力克斯·文森特 Alex Vincent 饰）和母亲分别接受心理治疗，一对好心夫妇暂时照顾安迪。根据灵魂转移的符咒要求，楚其如果要避免与公仔一...</p>
        </div>
        <!-- media-right end. -->
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      film: [
        // {
        //   img: "",
        //   name: "",
        //   id: "",
        //   url: ""
        // }
      ],
      api: {
        hot:
          "/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=5&page_start=0",
        movie: "https://movie.douban.com/subject/"
      }
    };
  },
  created() {
    this.axios
      .get(this.api.hot)
      .then(response => {
        console.log(response.data.subjects);
        const movies = response.data.subjects;
        console.log(movies[0].cover);
        // console.log(movies.length)
        for (let i = 0; i < movies.length; i++) {
          this.film.push({
            img: movies[i].cover,
            name: movies[i].title,
            id: movies[i].id,
            url: movies[i].url
          });
          console.log(this.film[0].img);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style scoped>
article {
  display: flex;
}
.media-right {
  display: flex;
  flex-direction: column;
}
.media-right header {
  text-align: left;
}
.media-right p {
  text-align: left;
}

.excerpt .thumb {
  width: 100px;
  height: 140px;
}
.excerpt header {
  margin-bottom: 10px;
}
.excerpt .cat {
  color: #fff;
  background-color: #45bcf9;
  padding: 3px 6px;
  font-size: 12px;
  display: inline-block;
  position: relative;
  top: -2px;
  margin-right: 6px;
}
.excerpt h2 {
  display: inline;
  font-size: 18px;
  line-height: 1.4;
  font-weight: bold;
}
.excerpt h2 a:hover {
  color: #45b6f7;
}
.excerpt h2 a {
  color: #555;
}
</style>>
