<template>
  <div class="home">
    <!-- <iframe src="../../public/mineSweeper.html" frameborder="0"></iframe> -->
    <section>
      <el-row :gutter="16">
        <el-col :xs="24" :sm="12" :md="6">
          <el-card>
            <div slot="header">
              <span>访问量</span>
              <el-tag>日</el-tag>
            </div>
            <div class="card-body">
              <div class="view-number">25,848</div>
              <div class="info-text">
                <span
                  >日同比
                  <span class="increase">12.5%</span>
                  <i class="el-icon-caret-top small-red"></i>
                </span>
                <span
                  >周同比
                  <span class="increase">5%</span>
                  <i class="el-icon-caret-bottom small-green"></i>
                </span>
              </div>
            </div>
            <div class="card-footer">
              <span>总访问量</span>
              <span class="right">280 万</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <el-card>
            <div slot="header">
              <span>销售额</span>
              <el-tag type="success">月</el-tag>
            </div>
            <div class="card-body">
              <div class="view-number">¥ 12,000</div>
              <div class="info-text">
                <el-progress :show-text="false" :percentage="60" :stroke-width="10"></el-progress>
              </div>
            </div>
            <div class="card-footer">
              <span>总销售额</span>
              <span class="right">68 万</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <el-card>
            <div slot="header">
              <span>订单量</span>
              <el-tag type="danger">周</el-tag>
            </div>
            <div class="chart card-body">
              <div class="view-number">1,680</div>
              <div class="">
                <Linechart chartId="chart_1"></Linechart>
              </div>
            </div>
            <div class="card-footer">
              <span>转化率</span>
              <span class="right">60%</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <el-card>
            <div slot="header">
              <span>新增用户</span>
              <i class="el-icon-loading" style="float: right"></i>
            </div>
            <div class="card-body">
              <div class="view-number flex">
                128
                <span>位</span>
              </div>
              <div class="info-text flex">
                <el-tooltip
                  v-once
                  v-for="(user, index) of newUser"
                  :key="index"
                  class="tooltip-item"
                  effect="dark"
                  :content="user.name"
                  placement="top"
                >
                  <el-avatar :size="23" :src="user.img"></el-avatar>
                </el-tooltip>
                <span class="more-user">+3</span>
              </div>
            </div>
            <div class="card-footer">
              <span>总用户</span>
              <span class="right">10800 人</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="16" class="small-card-padding" v-once>
        <el-col v-for="item of renderData.iconCard" :key="item.key" :xs="12" :sm="6" :md="3">
          <el-card class="icon-card">
            <i :class="item.icon + ' ' + item.color"></i>
            <div class="text">{{ item.name }}</div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <section class="table-section">
      <el-card class="table-card">
        <div slot="header" class="header">
          <div class="left-header">
            <i class="el-icon-s-data blue"></i>
            访问量
          </div>
          <div class="right-header">
            <el-link :underline="false" @click="setToday">今日</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" @click="setMonth">本月</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" @click="setYear">今年</el-link>
            <div class="date-picker">
              <el-date-picker
                v-model="date"
                type="daterange"
                :unlink-panels="true"
                range-separator="-"
                start-placeholder="选择开始日期"
                end-placeholder="选择结束日期"
                size="small"
                value-format="timestamp"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="body">
          <el-row :gutter="16">
            <el-col :xs="24" :sm="24" :md="16">
              <Barchart></Barchart>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8">
              <div class="ranking">
                <div class="head">访问量排行</div>
                <div>
                  <div v-for="(item, index) of rankList" :key="index" class="item">
                    <span>{{ index }}</span>
                    <span>{{ item.name }}</span>
                    <span>{{ item.data }}</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </section>
    <section>
      <el-row :gutter="16">
        <el-col :xs="24" :sm="24" :md="12">
          <el-card class="table-card" style="min-height: 512px">
            <div slot="header" class="header">
              <div class="left-header">
                <i class="el-icon-search purple"></i>
                热门搜索
              </div>
              <div class="right-header">
                <el-dropdown>
                  <i class="el-icon-more rotate"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>操作一</el-dropdown-item>
                    <el-dropdown-item>操作二</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="search-body">
              <el-row :gutter="8">
                <el-col :xs="24" :sm="12" :md="12">
                  <div class="text">
                    搜索用户数
                    <el-tooltip effect="dark" content="指标说明" placement="top">
                      <i class="el-icon-info"></i>
                    </el-tooltip>
                  </div>
                  <div>
                    <span class="search-number">23,378</span>
                    <span class="small-text">
                      <span>16.8</span>
                      <i class="el-icon-caret-top small-red"></i>
                    </span>
                  </div>
                  <div class="line-chart-1">
                    <Linechart
                      chartId="chart_2"
                      height="40px"
                      :option="{ data: [850, 980, 900, 1000, 760, 910, 780], itemStyleColor: '#1495eb', areaStyleColor: '#d0eafb' }"
                    >
                    </Linechart>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12">
                  <div class="text">
                    人均搜索次数
                    <el-tooltip effect="dark" content="指标说明" placement="top">
                      <i class="el-icon-info"></i>
                    </el-tooltip>
                  </div>
                  <div>
                    <span class="number">3.1</span>
                    <span class="small-text">
                      <span>8.5</span>
                      <i class="el-icon-caret-bottom small-green"></i>
                    </span>
                  </div>
                  <div class="line-chart-2">
                    <Linechart
                      chartId="chart_3"
                      height="40px"
                      :option="{ data: [850, 980, 900, 999, 760, 910, 780], itemStyleColor: '#1495eb', areaStyleColor: '#d0eafb' }"
                    >
                    </Linechart>
                  </div>
                </el-col>
              </el-row>
              <div class="table">
                <el-table :data="tableData" size="small">
                  <el-table-column type="index" label="排名"> </el-table-column>
                  <el-table-column prop="searchKey" label="搜索关键词"> </el-table-column>
                  <el-table-column prop="userNum" label="用户数" sortable align="center"> </el-table-column>
                  <el-table-column label="周涨幅" sortable align="right">
                    <template slot-scope="scope">
                      <span style="margin-right: 3px">{{ scope.row.weekIncrease }}</span>
                      <i :class="scope.row.increase ? 'small-red el-icon-caret-top' : 'small-green el-icon-caret-bottom'"></i>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination :page-size="5" :pager-count="5" layout="prev, pager, next" :total="50" class="page"></el-pagination>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12">
          <el-card class="table-card" style="min-height: 512px">
            <div slot="header" class="header">
              <div class="left-header">
                <i class="el-icon-user-solid orange"></i>
                用户画像
              </div>
              <div class="right-header">
                <el-tooltip effect="dark" content="下载数据" placement="top">
                  <i class="el-icon-download"></i>
                </el-tooltip>
              </div>
            </div>
            <div class="body">
              <div class="gender-icon">
                <div class="item">
                  <div class="bk-lg-icon blue">
                    <i class="el-icon-male"></i>
                  </div>
                  <div class="blue-color">男性65%</div>
                </div>
                <div class="item">
                  <div class="bk-lg-icon purple">
                    <i class="el-icon-female"></i>
                  </div>
                  <div class="purple-color">女性25%</div>
                </div>
                <div class="item">
                  <div class="bk-lg-icon gray">
                    <i class="el-icon-user"></i>
                  </div>
                  <div class="gray-color">未知10%</div>
                </div>
              </div>
              <div class="gender-rate">
                <span v-for="item of 100" :key="item" class="item" :class="item < 65 ? 'blue-bg' : item < 90 ? 'purple-bg' : 'gray-bg'"></span>
              </div>
              <div class="gender-img"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <!-- <iView></iView> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Linechart from '@/components/charts/Linechart.vue'
import Barchart from '@/components/charts/Barchart.vue'
// import iView from '@/views/iView.vue'

export default {
  name: 'home',
  components: {
    Linechart,
    Barchart,
    // iView,
  },
  data() {
    return {
      newUser: [
        {
          name: 'Man Han',
          img: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
        },
        {
          name: 'Steve Jobs',
          img: 'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
        },
        {
          name: 'Jackson Gate',
          img: 'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
        },
        {
          name: 'Marin Loin',
          img: 'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
        },
        {
          name: 'Tim Coke',
          img: 'https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar',
        },
        {
          name: 'Some One',
          img: 'https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar',
        },
      ],
      renderData: {
        iconCard: [
          {
            key: '1',
            icon: 'el-icon-user-solid',
            color: 'blue',
            name: '用户',
          },
          {
            key: '2',
            icon: 'el-icon-s-data',
            color: 'green',
            name: '分析',
          },
          {
            key: '3',
            icon: 'el-icon-shopping-cart-full',
            color: 'orange',
            name: '商品',
          },
          {
            key: '4',
            icon: 'el-icon-s-order',
            color: 'purple',
            name: '订单',
          },
          {
            key: '5',
            icon: 'el-icon-wallet',
            color: 'light-yellow',
            name: '票据',
          },
          {
            key: '6',
            icon: 'el-icon-message',
            color: 'light-blue',
            name: '消息',
          },
          {
            key: '7',
            icon: 'el-icon-collection-tag',
            color: 'pink',
            name: '标签',
          },
          {
            key: '8',
            icon: 'el-icon-set-up',
            color: 'yellow',
            name: '配置',
          },
        ],
      },
      date: '',
      rankList: [
        {
          name: '东直门 1 号',
          data: '456,789',
        },
        {
          name: '东直门 2 号',
          data: '325,231',
        },
        {
          name: '东直门 3 号',
          data: '89,789',
        },
        {
          name: '东直门 4 号',
          data: '36,700',
        },
        {
          name: '东直门 5 号',
          data: '9,559',
        },
        {
          name: '东直门 6 号',
          data: '3,589',
        },
        {
          name: '东直门 7 号',
          data: '1,703',
        },
      ],
    }
  },
  computed: {
    tableData: () => {
      const tempArr = []
      for (let i = 0; i < 5; i++) {
        tempArr.push({
          searchKey: `搜索关键词-${i}`,
          userNum: Math.floor(Math.random() * 1000),
          weekIncrease: `${Math.floor(Math.random() * 100)}%`,
          increase: Math.floor(Math.random() * 100) % 2 === 0,
        })
      }
      return tempArr
    },
  },
  mounted() {},
  methods: {
    setToday() {
      const start = new Date()
      const end = new Date()
      this.date = [start.getTime(), end.getTime()]
    },
    setMonth() {
      const curMonth = new Date().getMonth() + 1
      const start = new Date(`2020-${curMonth}-1`)
      const end = new Date()
      this.date = [start.getTime(), end.getTime()]
    },
    setYear() {
      const curYear = new Date().getFullYear()
      const start = new Date(`${curYear}-1-1`)
      const end = new Date()
      this.date = [start.getTime(), end.getTime()]
    },
  },
}
</script>

<style lang="less">
.home {
  font-size: 14px;
  // color: #303133;
  .chart {
    position: relative;
    .info-text {
      position: absolute;
      top: -10px;
      left: -20px;
    }
  }
  .el-col {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .el-tag {
    float: right;
    margin-top: -5px;
  }
  .card-body {
    border-bottom: 1px solid #ebeef5;
    height: 77px;
  }
  .card-footer {
    margin: 0.8rem 1px 0 1px;
  }
  .right {
    float: right;
  }
  .view-number {
    font-size: 30px;
    color: #515a6e;
    margin: 0 1px;

    span {
      margin: 0 2px;
      font-size: 25px;
    }
  }
  .tooltip-item {
    margin-right: -5px !important;
    box-shadow: 3px 3px 3px 0px #cecccc;
    &:hover {
      cursor: pointer;
    }
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .more-user {
    border-radius: 50%;
    color: rgb(245, 106, 0);
    background: rgb(253, 227, 207);
    padding: 3px;
    &:hover {
      cursor: pointer;
    }
  }
  .info-text {
    font-weight: 200;
    margin: 0.8rem 0;
    > span {
      margin: 0 3px 0 1px;
    }
  }
  .increase {
    padding: 0 2px;
  }
  .small-red {
    color: rgb(245, 84, 84);
    font-size: smaller;
  }
  .small-green {
    color: rgb(84, 245, 111);
    font-size: smaller;
  }
  .small-card-padding {
    .el-card__body {
      padding: 0.8rem;
    }
    .icon-card {
      text-align: center;
      // box-shadow: none;
      &:hover {
        cursor: pointer;
        // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        transform: scale(1.02);
        transition: transform 0.3s ease-in-out;
      }
      // padding: 0.5rem;
      i {
        font-size: xx-large;
      }
      .blue {
        color: rgb(105, 192, 255);
      }
      .green {
        color: #95de64;
      }
      .orange {
        color: #ff9c6e;
      }
      .purple {
        color: #b37feb;
      }
      .light-yellow {
        color: #ffd666;
      }
      .light-blue {
        color: #5cdbd3;
      }
      .pink {
        color: #ff85c0;
      }
      .yellow {
        color: #ffc069;
      }
      .text {
        margin-top: 0.6rem;
      }
    }
  }
  .table-section {
    padding: 8px 0;
    .el-card__body {
      padding: 10px;
    }
  }
  .table-card {
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .left-header {
      display: inline-block;
      i {
        border-radius: 50%;
        padding: 5px;
      }
    }
    .blue {
      color: rgb(24, 144, 255);
      background: rgb(230, 247, 255);
    }
    .orange {
      color: rgb(250, 173, 20);
      background: rgb(255, 251, 230);
    }
    .purple {
      color: #7e34d1;
      background-color: #f9f0ff;
    }
    .gray {
      color: rgb(186, 189, 195);
      background-color: rgb(230, 237, 245);
    }
    .blue-color {
      color: rgb(24, 144, 255);
    }
    .purple-color {
      color: #7e34d1;
    }
    .gray-color {
      color: rgb(186, 189, 195);
    }
    .blue-bg {
      background-color: rgb(138, 195, 248);
    }
    .purple-bg {
      background-color: rgb(208, 143, 252);
    }
    .gray-bg {
      background-color: rgb(214, 218, 226);
    }
    .rotate {
      transform: rotate(0.25turn);
      font-size: 15px;
    }
    .gender-icon {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 0.5rem;

      .item {
        display: flex;
        flex-flow: column;
        align-items: center;
      }

      .bk-lg-icon {
        font-size: 1.5rem;
        border-radius: 50%;
        padding: 0.3rem 0.4rem;
        margin-bottom: 5px;
      }
    }
    .gender-rate {
      display: flex;
      flex-wrap: wrap;
      margin: 1rem 0;
      .item {
        width: 22px;
        height: 22px;
        box-sizing: border-box;
        border-radius: 3px;
        margin: 2px;
      }
    }
    .gender-img {
      height: 190px;
      background-image: url('../assets/user-preference.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    .el-icon-info {
      color: #999;
    }
    .search-body {
      color: #808695;
      position: relative;
      .text {
        margin-bottom: 8px;
      }
      .search-number {
        font-size: x-large;
        color: #333;
      }
      .small-text {
        margin-left: 3rem;
        i {
          margin: 0 0.3rem;
        }
      }
      .line-chart-1 {
        margin-top: 5px;
      }
      .line-chart-2 {
        margin-top: 15px;
      }
      .table {
        margin-top: 0.8rem;
      }
      .page {
        float: right;
        margin: 5px 0;
        font-weight: 200;
      }
    }
    .date-picker {
      display: inline-block;
      margin-left: 0.8rem;
      .el-date-editor {
        width: 260px;
      }
    }
    @media screen and (max-width: 767px) {
      .date-picker {
        display: block;
        margin: 0.5rem 0 0 0;
        .el-date-editor {
          width: 100%;
        }
      }
      .right-header {
        text-align: center;
      }
    }
  }
  .ranking {
    .head {
      font-weight: 600;
      margin: 0.3rem 0 0.8rem 0.5rem;
    }
    .item {
      margin: 1.3rem 0;
      span:nth-child(1) {
        border-radius: 50%;
        background: rgb(230, 247, 255);
        color: rgb(24, 144, 255);
        margin: 0 1rem 0 0.5rem;
        padding: 5px 10px;
      }
      span:nth-child(3) {
        float: right;
        margin: 0 1rem;
      }
    }
  }
}
</style>
