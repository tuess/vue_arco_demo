<template>
    <a-table :columns="columns" :data="data" :stripe="true" :pagination="pagin" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import type { PaginationProps } from '@arco-design/web-vue'

const data = ref([])



const pagin = ref<PaginationProps>({})

const getList = () => {
    axios.get('/base/facFactoryType/list?use=1',{
        headers:{
            'Authorization':'Bearer fb19f13d-2063-45a3-a858-860064364e13'
        }
    }).then(res => {
        data.value = res.data.data
        pagin.value.hideOnSinglePage = true;
    })
}
getList()



const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'code',
        dataIndex: 'code',
    },
    {
        title: 'createTime',
        dataIndex: 'createTime',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];


</script>