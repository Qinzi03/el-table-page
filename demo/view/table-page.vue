<template>
  <el-table-page ref="table" :page="page" :search="getSearchModel" :url="url" :method ="method" @clear="clear">
      <div slot="other">
        <div class="lr-table--messager">
          <div class="lr-table--messager--left">展示其他</div>
        </div>
      </div>
      <div slot="search">
        <el-row>
          <el-form :model="searchModel" :inline="true" label-width="70px">
            <el-form-item label="模版名称:">
              <el-input
                v-model.trim="searchModel.name"
                placeholder="请输入模版名称"
                class="width280"
                @keyup.enter.native="handleDoTemplateNameSearch">
                <!-- <i
                  slot="suffix"
                  class="el-input__icon icon-ic_search_normal iconfont cursorP"
                  @click="handleDoTemplateNameSearch"/> -->
              </el-input>
            </el-form-item>
          </el-form>
        </el-row>
      </div>

      <el-table :data="page.list" class="lr-table-esp">
        <el-table-column label="模版名称" prop="templateName" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="模版名称" prop="templateName" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="模版名称" prop="templateName" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
      </el-table>
  </el-table-page>
</template>
<script>
export default {
  name: 'TablePage',
  filters: {
    formatStatus(row) {
      let flag = ''
      if (row.isValid) {
        if (row.status) {
          flag = '可用'
        } else {
          flag = '不可用'
        }
      } else {
        flag = '无效'
      }
      return flag
    },
    formatTempalte(tempalte, signature) {
      return `${tempalte} 【${signature}】`
    },
    formatDate(timestamp) {
      timestamp = Number(timestamp)
      return moment(timestamp).format('YYYY-MM-DD')
    }
  },
  data() {
    return {
      message: {
        used: 0,
        leftSms: 0,
        smsNumber: 0,
        percentage: 0
      },
      progressColor: '#6CBED4',
      url: '',
      method: 'get',
      page: new this.$page(),
      searchModel: { // 搜索条件
        name: '',
        createTimeStart: '',
        createTimeEnd: ''
      }
    }
  },
  computed: {
  },
  mounted() {
    this.$nextTick(_ => {
      this.doSearch()
      this.getMessageNote()
    })
  },
  methods: {
    // 清除搜索条件
    doDateClear() {
      this.$refs['lr-data-picker'].doClear()
    },
    // 获取短信剩余
    getMessageNote() {
      // const url = ''
      // this.$http.get(url)
      //   .then(res => {
        const res = {
          list: [],
          page: 0,
          pageSize: 10,
          total: 0
          }
          const smsNumber = res.smsTotal
          const leftSms = res.smsLeft
          const used = res.smsTotal - res.smsLeft
          let percentage = 0
          // 剩余小于等于0
          if (used <= 0) {
            percentage = 0
          } else if (smsNumber !== used) {
            percentage = parseFloat(used / smsNumber).toFixed(2) * 100
            this.progressColor = '#6CBED4'
          } else{
            percentage = parseFloat(used / smsNumber).toFixed(2) * 100
            this.progressColor = '#f56c6c'
          }
          this.message = {
            used,
            smsNumber,
            leftSms,
            percentage
          }
        // })
        // .catch(err => {
        //   this.$message.error(err.message)
        // })
    },
    clear() {
      this.searchModel = {
        name: '',
        createTimeStart: '',
        createTimeEnd: ''
      }
      this.doDateClear()
      this.$message.success('重置成功')
    },
    // 模版名称搜索
    handleDoTemplateNameSearch() {
      this.$nextTick(_ => {
        this.doSearch()
      })
    },
    getSearchModel() {
      const params = {
        ...this.searchModel
      }
      if (!params.createTimeStart) {
        delete params.createTimeStart
        delete params.createTimeEnd
      }
      return params
    },
    doSearch() { // 点击按钮触发搜索
      this.$refs.table.doSearch()
    }
  }
}
</script>

<style lang="scss" >
  // @import '@/styles/variables.scss';
  /* 表格没有操作按钮样式 */
  .lr-slot-action-empty {
    margin-top: -12px;
  }
  .lr-table--messager{
    // color:$font-color-normal;
    .lr-table--messager--progress{
      .el-progress{
        width:170px;
        display: inline-block;
        .el-progress-bar__outer{
          height: 10px !important;
        }
        .el-progress-bar__inner{
          background-color:#6CBED4;
        }
      }
    }
    .lr-table--messager--exp{
      font-size: 14px;
      display: inline-block;
      margin-left:10px;
      // color:$font-color-normal;
    }
    .lr-table--messager--left{
      font-size: 14px;
      margin-top:5px;
    }
  }
</style>
