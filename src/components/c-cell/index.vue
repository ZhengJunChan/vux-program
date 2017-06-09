<template>
  <div class="c_cell_component">    
    <div class="weui-cell weui-cell_access">
      <div class="center">
        <slot name="center"></slot>
      </div>

      <div class="left">
        <slot name="left"></slot>
      </div>

      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import './c-cell.less';
</style>
