<template>
    <div id="app" class="container"></div>
</template>

<script>
//API位置:https://for-vctest.herokuapp.com/Q2/index.php  可使用axios或jQ或其他方式get
//將remark跟list合併並顯示渲染上頁面
//要求:切換btn,角色圖片,角色table(需含title&remark,若isUseRed為true,使該角色角色table的remark呈紅字)
//不須美化，功能有出現即可
export default {
    name: "App",

};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
