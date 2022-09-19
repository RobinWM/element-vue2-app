<template>
  <div>
    <RBTable :columns="columns" :tableData="tableData">
      <span slot="behind">
        <el-table-column prop="behind" label="前列" width="180"/>
      </span>
      <span slot="before">
        <el-table-column fixed="right" prop="before" label="后列" width="180"/>
      </span>
    </RBTable>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      columns: [
        {
          label: '测试1',
          prop: 'test1',
        },
        {
          label: '测试2',
          prop: 'test2',
          width: 200
        }
      ],
      tableData: [
        {
          test1: 'test1',
          test2: 'test2',
          behind: '前列',
          before: '2222222222'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
