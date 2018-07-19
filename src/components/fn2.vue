<template>
  <div>
    <template>
      <div>
        <div>
          <el-date-picker
            v-model="aaa"
            type="date"
            format="yyyy-MM" value-format="yyyy-MM"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div style="display: flex;padding: 0 3%">

          <!-- 销售订单数量 -->
          <div style="flex: 1;">
            <div id="OrderQuantityLine" style="width:100%; height:500px;"></div>
          </div>
          <!-- 销售订单金额 -->
          <div style="flex: 1;">
            <div id="OrderTotalLine" style="width:100%; height:500px;"></div>
          </div>
        </div>
        <!--<el-button @click="QuantityLineChart" type="primary">点击</el-button>-->
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {}
    },
    methods: {
      getCurTime() {

      }
    },
    created() {
      this.getCurTime()
    },
    computed: {}
  }
</script>

<style scoped>

</style>
