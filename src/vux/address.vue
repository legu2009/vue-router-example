<template>
  <popup-picker :columns="columns" :data="list" :title="title" :value.sync="value" show-name ></popup-picker>
</template>
<script>
import name2value from 'VUX/../filters/name2value'
import PopupPicker from 'VUX/popup-picker'
export default {
  components: {
    PopupPicker
  },
  props: {
    title: {
      type: String,
      required: true
    },
    columns: {
      type: Number,
      default() {
        return 3;
      }
    },
    value: {
      type: Array,
      twoWay: true,
      default () {
        return []
      }
    },
    rawValue: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      required: true
    }
  },
  beforeCompile () {
    if (this.value.length && this.rawValue) {
      this.value = name2value(this.value, this.list).split(' ')
    }
  }
}
</script>