<template>
    <div class="box">
        <a class="items" v-for="(item, index) in list1" :key="index" onmouseover="this.style.color = 'blue'"
            onmouseout="this.style.color = 'black'" @click="changePage(item)">
            {{ item.name }}
        </a>
    </div>
</template>


<script>
import router from '@/routes/router';

export default {
    data() {
        return {
            list1: [
                { name: "首页", index: 1 },
                { name: "机票", index: 2 },
                { name: "今日航班信息", index: 3 },
                { name: "登录/注册", index: 4 },
            ],
        }
    },

    methods: {
        changePage(item) {
            if (item.index == 1) {
                router.push('/');
            }

            if (item.index == 2) {
                router.push('/flight');
            }

            if (item.index == 3) {
                router.push('/checkflight');
            }

            if(item.index == 4)
            {
                router.push('/login');
            }

         


        }
    }

}


</script>


<style>
.items {
    display: inline-block;
    height: 41px;
    text-decoration: none;
    color: #4c4c4c;
    padding: 0 20px;
}

.box {
    height: 45px;
    font-size: 17px;
    line-height: 41px;
}
</style>