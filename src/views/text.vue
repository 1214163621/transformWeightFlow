<template>
  <div>
    <!-- 主页 -->
    <div class="container">
      <!-- <div class="handle-box">
        <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      </div> -->
      <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
        <el-table-column prop="id" label="物料" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="工艺" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="材质" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="工序" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="理算人" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="理算重量" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="理算时间" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="理算类别" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="供应商" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="实称仓库/实称人" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="实称重量（平均）" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="实称时间" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="偏差值" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="定价依据" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="重量单价	" width="100" align="center"></el-table-column>
        <el-table-column prop="id" label="单件单价" width="100" align="center"></el-table-column>
        <!-- <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column label="账户余额">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
          <template #default="scope">
            <el-image class="table-td-thumb" :src="scope.row.thumb" :preview-src-list="[scope.row.thumb]">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag :type="
              scope.row.state === '成功'
                ? 'success'
                : scope.row.state === '失败'
                  ? 'danger'
                  : ''
            ">{{ scope.row.state }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="注册时间"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <div class="pagination">
        <el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex"
          :page-size="query.pageSize" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { fetchData } from "../api/index";
export default {
  name: 'text',
  setup() {
    const query = reactive({
      address: "",
      name: "",
      pageIndex: 1,
      pageSize: 10,
    });
    const tableData = ref([]);
    const pageTotal = ref(0);
    // 获取表格数据
    const getData = () => {
      fetchData(query).then((res: { list: any[]; pageTotal: number; }) => {
        tableData.value = res.list;
        pageTotal.value = res.pageTotal || 50;
      });
    };
    getData();

    // 查询操作
    const handleSearch = () => {
      query.pageIndex = 1;
      getData();
    };
    // 分页导航
    const handlePageChange = (val: number) => {
      query.pageIndex = val;
      getData();
    };

    // 删除操作
    const handleDelete = (index: number) => {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          ElMessage.success("删除成功");
          tableData.value.splice(index, 1);
        })
        .catch(() => { });
    };

    // 表格编辑时弹窗和保存
    const editVisible = ref(false);
    let form = reactive({
      name: "",
      address: "",
    });
    let idx = -1;
    const handleEdit = (index: number, row: { [x: string]: any; }) => {
      idx = index;
      Object.keys(form).forEach((item) => {
        form[item] = row[item];
      });
      editVisible.value = true;
    };
    const saveEdit = () => {
      editVisible.value = false;
      ElMessage.success(`修改第 ${idx + 1} 行成功`);
      Object.keys(form).forEach((item) => {
        tableData.value[idx][item] = form[item];
      });
    };

    return {
      query,
      tableData,
      pageTotal,
      editVisible,
      form,
      handleSearch,
      handlePageChange,
      handleDelete,
      handleEdit,
      saveEdit,
    };
  },
}

</script>
<style lang="scss" scoped>
</style>