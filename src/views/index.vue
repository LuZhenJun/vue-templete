<template>
  <div class="quickLearning">
    <div class="quickLearning_menu">
      <div v-for="(item, index) in menuData" :key="index + 'menu'"
        :class="[menuActive === index ? 'menu_step_active' : '', 'menu_step']"
        @click="$_click_menu(index)">
        <span>{{ item }}</span>
        <i class="icon-star"></i>
      </div>
    </div>
    <div class="quickLearning_content w-100 mb-20">
      <!--  给右边遍历生成的元素，每个加上一个ref的值'content' + index-->
      <div v-for="(item, index) in quickLearningData" :ref="'content' + index"  :key="index + 'qL'" class="d-flex flex-column mb-36 content_div">
        <span class="text-xl">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      menuActive: 0,
      distanceData: [],
      menuData: ['品牌识别', '规范指南', '资源提交', '联系我们'],
      quickLearningData: []
    }
  },
  mounted () {
    this.$_initData()
    // 此处监听滚动条事件
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    $_initData () {
      this.menuActive = 0
      //      quickLearning().then(result => {
      // 此处内容应该是放在数据请求成功之内的
      this.quickLearningData = ['品牌识别1', '规范指南', '资源提交', '联系我们']
      // 在数据请求成功之后，遍历右侧楼梯层数，然后将每一层的offsetTop高度分别保存到数据distanceData中
      this.$nextTick(() => {
        for (let i = 0; i < this.quickLearningData.length; i++) {
          this.distanceData[i] = this.$refs['content' + i][0].offsetTop - 106
        }
      })
      //      })
    },
    // 这个里面包含的是动画效果
    $_click_menu (index) {
      const offsetTop = this.$refs['content' + index][0].offsetTop - 106
      let step = offsetTop / 50
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      let time = null
      const moveUp = () => {
        if (distance > offsetTop) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          time = setTimeout(moveUp, 10)
        } else {
          document.body.scrollTop = offsetTop
          document.documentElement.scrollTop = offsetTop
          time = null
        }
      }
      const moveDown = () => {
        if (distance < offsetTop) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          time = setTimeout(moveDown, 10)
        } else {
          document.body.scrollTop = offsetTop
          document.documentElement.scrollTop = offsetTop
          time = null
        }
      }
      this.menuActive = index
      if (offsetTop > distance) {
        moveDown()
      } else {
        let newoffsetTop = distance - offsetTop
        step = newoffsetTop / 50
        moveUp()
      }
    },
    // 当滑动条滚动时，监听页面document.body.scrollTop，判断该值在哪个楼层中间，然后将该楼层对应的左侧菜单激活
    onScroll () {
      const scrolled = (document.documentElement.scrollTop || document.body.scrollTop)
      for (let i = 0; i < this.distanceData.length; i++) {
        if (scrolled >= this.distanceData[i]) {
          this.menuActive = i
        }
      }
    }
  }
}
</script>
