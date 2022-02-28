<template>
  <div class="header-container">
    <div class="back-container">
      <svg class="icon">
        <use xlink:href="./../../assets/img/icons.svg#back"></use>
      </svg>
    </div>
    <div class="header">
      <div class="logo-container">
        <img alt="Logo" src="./../../assets/img/expedite_ico_web.svg">
      </div>
      <div class="name-container">
        <span class="title">Forecasting:</span>
        <span class="name">Opportunity Name</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .header-container {
    height: 60px;
    width: 100%;
    background-color: #0A0A0A;
    display: flex;
    align-items: center;
    .back-container {
      height: 100%;
      width: 49px;
      border-right: 1px solid #414141;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        width: 24px;
        height: 24px;
        fill: #acacac;
      }
    }
    .header {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 24px;
      .logo-container {
        width: 40px;
        height: 21px;
      }
      .name-container {
        margin-left: 15px;
        .title {
          font-size: 13px;
          color: #acacac;
        }
        .name {
          font-size: 16px;
          font-weight: bold;
          color: #ffffff;
          padding-left: 6px;
        }
      }
    }
  }
</style>
