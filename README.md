# element-table

> table component with pagination

## How to use

```js
/* ignore this if you include element-table.js by <script> tag from a cdn, such as unpkg */
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ElTablePage from 'el-table-page'
import Page from 'el-table-page/src/utils/page.js'

Vue.use(Element)
Vue.component('el-table-page', ElTablePage)

// Vue.use(ElementTablePagination)
Vue.use(Page)
```

```html
<el-table-page
  :page="page"
  :search="getSearchModel"
  :url="url">
    <!-- content goes here -->
    <el-table :data="page.list">
    <el-table-column label="模版名称" prop="templateName" show-overflow-tooltip>
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
  </el-table>
</el-table-page>
```
## API

#### element-table component attributes:

| Attr. Name | Description | Required | Type |Default Value |
|-----|-----|-----|-----|-----|
| auto           | 自动开始分页查询       | N | Boolean | true|
| page           | 分页值               | Y | Object   | new this.$page() |
| needPagination | 是否展示分页          | N | Boolean  | true |
| url            | 表格加载路径          | N | String   | '' |
| options        | 请求方法里传的参数     | N | Object   | {} |
| method         | 请求方法             | N | String   | 'get' |
| search         | 表格搜索字段          | N | Function | function |
| processData    | 数据格式处理          | N | Function | function |
| showClear      | 是否展示清空筛选条件按钮| N | Boolean  | true |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
