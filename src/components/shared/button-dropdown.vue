<template>
  <div class="button-dropdown">
    <button class="btn">{{buttonText}}</button>
    <div class="icon-wrap">
      <svg class="icon">
        <use xlink:href="./../../assets/img/icons.svg#caret-down"></use>
      </svg>
    </div>
    <div class="dropdown-items">
      <ul class="items">
        <li v-for="(item, index) in items" :key="index" class="item" :class="{'selected': item.selected}" @click="selectDropdownItem(index)">
          <svg class="icon">
            <use xlink:href="./../../assets/img/icons.svg#checkmark"></use>
          </svg>
          <span>{{item.displayName}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    dropdownItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      items: []
    }
  },
  watch: {
    dropdownItems () {
      this.items = this.dropdownItems
    }
  },
  mounted () {
    this.items = this.dropdownItems
  },
  methods: {
    selectDropdownItem (index) {
      let item = this.items[index]
      item.selected = !item.selected
      this.$set(this.items, index, item)

      this.$emit('on-select', item.key)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-dropdown {
    display: flex;
    height: 34px;
    margin: 0 0 0 auto;
    position: relative;
    .btn {
      width: 71px;
      color: #ffffff;
      background-color: #acacac;
      border: none;
      font-size: 11px;
      font-weight: bold;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-right: 1px solid #ededed;
      cursor: pointer;
    }
    .icon-wrap {
      width: 40px;
      display: flex;
      background-color: #acacac;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      cursor: pointer;
      .icon {
        width: 20px;
        height: 20px;
        fill: #ffffff;
      }
    }
    .dropdown-items {
      position: absolute;
      top: 34px;
      right: 0;
      display: none;
      z-index: 99;
      .items {
        width: 203px;
        background-color: #ffffff;
        border: 1px solid #f2f2f2;
        color: #5f5f5f;
        list-style: none;
        border-radius: 3px;
        padding: 0;
        margin: 0;
        .item {
          height: 42px;
          display: flex;
          align-items: center;
          padding: 0 0 0 40px;
          position: relative;
          cursor: pointer;
          .icon {
            fill: #acacac;
            position: absolute;
            left: 16px;
            width: 16px;
            height: 16px;
            display: none;
          }
          span {
            font-size: 13px;
          }
          &:first-child {
            border-bottom: 1px solid #f2f2f2;
          }
          &.selected {
            .icon {
              display: block;
            }
          }
        }
      }
    }
    &:hover {
      .btn, .icon-wrap {
        background-color: #5f5f5f;
      }
      .dropdown-items {
        display: block;
      }
    }
  }
</style>
