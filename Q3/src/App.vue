<template>
    <div id="app">
        <div class="container">
            <div class="input-group input-group-sm">
                <input
                    type="text"
                    class="form-control"
                    placeholder="輸入數字1"
                    aria-describedby="輸入數字1"
                    v-model="param1"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                />
                <input
                    type="text"
                    class="form-control"
                    placeholder="輸入數字2"
                    aria-describedby="輸入數字2"
                    v-model="param2"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                    :disabled="this.isSingle"
                />

                <button
                    type="submit"
                    class="btn btn-danger"
                >
                    計算
                </button>
            </div>
            <Calculator
                param1=""
                param2=""
                @output="getOutput"
            />
            <div class="input-group input-group-sm">
                <input
                    type="text"
                    class="form-control"
                    placeholder="輸出"
                    aria-describedby="輸出"
                    disabled
                />
            </div>
        </div>
    </div>
</template>

<script>

//需求:完成元件Calculator，使計算機功能正常，需顯示錯誤alert，在選擇平方及開根號時右方input需disabled
//Calculator上的參數可增加
//example video: https://streamable.com/i80qfn
import Calculator from "./components/Calculator.vue";

export default {
    name: "App",
    components: {
        Calculator,
    },
    data() {
        return {
          
        };
    },
    methods: {
        getOutput: function () {

        },

    },
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
