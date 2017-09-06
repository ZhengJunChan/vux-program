<template>
<nav class="pagination_component">
    <ul class="pagination" v-if="pagination.last_page > 0" :class="sizeClass">
        <li v-if="showPrevious()" :class="{ 'disabled' : pagination.current_page <= 1 }">
            <span v-if="pagination.current_page <= 1">
                <span aria-hidden="true">{{ config.previousText }}</span>
            </span>
            
            <a v-if="pagination.current_page > 1 " :aria-label="config.ariaPrevioius" @click.prevent="changePage(pagination.current_page - 1)">
                <span aria-hidden="true">{{ config.previousText }}</span>
            </a>
        </li>

        <li v-if="showFirst()" class="quickBtn">
            <a @click.prevent="changePage(1)">1</a>
            <span><i class="right_0">...</i></span>
        </li>

        <li v-for="num in array" :class="{ 'active': num === pagination.current_page }">
            <a @click.prevent="changePage(num)">{{ num }}</a>
        </li>

        <li v-if="showLast()" class="quickBtn">
            <span><i class="left_0">...</i></span>
            <a @click.prevent="changePage(pagination.last_page)">{{ pagination.last_page }}</a>
        </li>

        <li v-if="showNext()" :class="{ 'disabled' : pagination.current_page === pagination.last_page || pagination.last_page === 0 }">
            <span v-if="pagination.current_page === pagination.last_page || pagination.last_page === 0">
                <span aria-hidden="true">{{ config.nextText }}</span>
            </span>
            
            <a v-if="pagination.current_page < pagination.last_page" :aria-label="config.ariaNext" @click.prevent="changePage(pagination.current_page + 1)">
                <span aria-hidden="true">{{ config.nextText }}</span>
            </a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true
    },
    callback: {
      type: Function,
      required: true
    },
    configs: {
      type: Object
    },
    size: {
      type: String
    }
  },
  computed: {
    array () {
      if (this.pagination.last_page <= 0) {
        return []
      }

      let arr = []
      let to = this.getTo()
      let from = this.getFrom()

      while (from <= to) {
        arr.push(from)
        from++
      }

      return arr
    },
    config () {
      return Object.assign({
        offset: 3,
        ariaPrevious: 'Previous',
        ariaNext: 'Next',
        previousText: '«',
        nextText: '»',
        alwaysShowPrevNext: false
      }, this.configs)
    },
    sizeClass () {
      if (this.size === 'large') {
        return 'pagination-lg'
      } else if (this.size === 'small') {
        return 'pagination-sm'
      } else {
        return ''
      }
    }
  },
  watch: {
    'pagination.per_page' (newVal, oldVal) {
      if (+newVal !== +oldVal) {
        this.callback()
      }
    }
  },
  methods: {
    showPrevious () {
      return this.config.alwaysShowPrevNext || this.pagination.current_page > 1
    },
    showNext () {
      return this.config.alwaysShowPrevNext || this.pagination.current_page < this.pagination.last_page
    },
    showFirst () {
      return this.pagination.pageCount > this.getBtnLength() && this.pagination.currentPage >= this.getBtnLength()
    },
    showLast () {
      let to = this.getTo()

      return to < this.pagination.last_page - 1
    },
    changePage (page) {
      if (this.pagination.current_page === page) {
        return
      }

      this.$set(this.pagination, 'current_page', page)
      this.callback()
    },
    getFrom () {
      let from = this.pagination.current_page - this.config.offset
      let maxFrom = this.pagination.last_page - this.config.offset * 2

      if (from > maxFrom) {
        from = maxFrom
      }

      if (from < 1) {
        from = 1
      }

      return from
    },
    getTo () {
      let from = this.getFrom()
      let to = from + (this.config.offset * 2)

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page
      }

      return to
    },
    getBtnLength () {
      return this.config.offset * 2 + 1
    }
  }
}
</script>

<style lang="less">
@import './pagination.less';
</style>
