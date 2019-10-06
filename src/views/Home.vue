<template>
  <div class="home container">
    <div class="row">
      <!-- 左侧内容 start-->
      <div class="col-md-9 con-left">
        <div class="panel panel-info" v-if="!this.cate">
          <div class="panel-heading">
            豆瓣新片榜
          </div>
        </div>
        <div class="panel panel-success" v-else>
           <div class="panel-heading">
            <span v-if="this.cate">豆瓣分类榜---{{ this.cate }}</span>
          </div>
        </div>
        <article class="media except" v-for="movie in film" :key="movie.id">
          <!-- 内容 -->
          <div class="media-left">
            <a :href="movie.url" target="_blank">
              <img class="media-object" :src="movie.img" :alt="movie.name" />
            </a>
          </div>
          <div class="media-body">
            <h3 class="media-heading">
              <a class="text-muted" :href="movie.url" target="_blank">{{ movie.name }}</a>
            </h3>
            <p>
              <span class="text-muted">导演：</span>
              {{ movie.directors }}
            </p>
            <p>
              <span class="text-muted">主演：</span>
              {{ movie.casts }}
            </p>
            <p>
              <span class="text-muted">评分：</span>
              {{ movie.rate }}
            </p>
          </div>
        </article>
        <!-- 分页 -->
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- 左侧内容 end -->
      <!-- 右侧内容 start-->
      <div class="col-md-3 con-right">
        <div class="panel panel-success">
          <div class="panel-heading">分类排行榜</div>
          <div class="list-group" v-for="cate in category" :key="cate.type">
            <button
              class="list-group-item list-group-item-danger"
              @click="getCateFilmList(cate.type)"
            >{{ cate.name }}</button>
          </div>
        </div>
      </div>
      <!-- 右侧内容 start-->
    </div>
  </div>
</template>

<script>
import { log } from "util";
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      movies: [],
      cate: "", //分类唯一标识符
      film: [
        // {
        //   img: "",
        //   name: "",
        //   id: "",
        //   url: "",
        //   rate: "",
        //   directors: [], //导演
        //   casts: [], //主演
        //
        // }
      ],
      api: {
        //https://movie.douban.com
        newFilm:
          "/j/new_search_subjects?sort=U&range=0,10&tags=%E7%94%B5%E5%BD%B1&start=0&year_range=2019,2019",
        cateFilm: {
          begin: "/j/chart/top_list?type=", //+type
          end: "&interval_id=100%3A90&action=&start=0&limit=20"
        }
      },
      category: [
        {
          name: "剧情",
          type: 11
        },
        {
          name: "喜剧",
          type: 24
        },
        {
          name: "动作",
          type: 5
        },
        {
          name: "爱情",
          type: 13
        },
        {
          name: "科幻",
          type: 17
        },
        {
          name: "动画",
          type: 25
        },
        {
          name: "悬疑",
          type: 10
        },
        {
          name: "惊悚",
          type: 19
        },
        {
          name: "恐怖",
          type: 20
        },
        {
          name: "纪录片",
          type: 1
        },
        {
          name: "短片",
          type: 23
        },
        {
          name: "情色",
          type: 6
        },
        {
          name: "同性",
          type: 26
        },
        {
          name: "音乐",
          type: 14
        },
        {
          name: "歌舞",
          type: 7
        },
        {
          name: "家庭",
          type: 28
        },
        {
          name: "儿童",
          type: 8
        },
        {
          name: "传记",
          type: 2
        },
        {
          name: "历史",
          type: 4
        },
        {
          name: "战争",
          type: 22
        },
        {
          name: "犯罪",
          type: 3
        },
        {
          name: "西部",
          type: 27
        },
        {
          name: "奇幻",
          type: 16
        },
        {
          name: "冒险",
          type: 15
        },
        {
          name: "灾难",
          type: 12
        },
        {
          name: "武侠",
          type: 29
        },
        {
          name: "古装",
          type: 30
        },
        {
          name: "运动",
          type: 18
        },
        {
          name: "黑色电影",
          type: 31
        }
      ]
    };
  },
  methods: {
    getCateFilmList(type) {
      this.cate = this.category.find(item => item.type === type).name;
      // console.log(this.cate);
      const url = this.api.cateFilm.begin + type + this.api.cateFilm.end;
      // console.log(url);
      this.axios
        .get(url)
        .then(response => {
          // this.movies= response.data;
          const movies = response.data;
          this.film.length = 0;
          for (let i = 0; i < movies.length; i++) {
            this.film.push({
              img: movies[i].cover_url,
              name: movies[i].title,
              id: movies[i].id,
              url: movies[i].url,
              rate: movies[i].rating[0],
              directors: movies[i].directors,
              casts: movies[i].actors, //演员
              release_date: movies[i].release_date,
              type: movies[i].types,
              regions: movies[i].regions[0]
            });
          }
          // console.log(this.film);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    // console.log(this.category.length);
    this.axios
      .get(this.api.newFilm)
      .then(response => {
        const movies = response.data.data;
        //console.log(movies);
        for (let i = 0; i < movies.length; i++) {
          this.film.push({
            img: movies[i].cover,
            name: movies[i].title,
            id: movies[i].id,
            url: movies[i].url,
            rate: movies[i].rate,
            directors: movies[i].directors,
            casts: movies[i].casts //主演
          });
        }
        // console.log(this.film);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.home {
  .con-left {
    // background-color: #fafa;
    padding: 10px;

    .media,
    .except {
      padding: 20px;
      display: flex;
      border: 1px solid #eaeaea;
      overflow: hidden;
      background-color: #fff;
      // margin-bottom: -1px;

      &:hover {
        background-color: #f9f9f9;
        position: relative;
        z-index: 2;
      }
      .media-left {
        img {
          width: 140px;
        }
      }
      .media-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        padding: 15px;
      }
      a {
        text-decoration: none;
        &:hover {
          color: #45b6f7;
        }
      }
    }
  }
  .con-right {
    padding: 10px 15px 0 10px;
    // background-color: #a1a1a1;
    .panel {
      .panel-heading {
      }
      .list-group {
        line-height: 10px;
        button {
          text-align: center;
        }
      }
    }
  }
}
</style>
