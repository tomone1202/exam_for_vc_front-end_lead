<template>
    <div class="justify-end">
        <div class="form-check d-flex my-3" v-for="(item, index) in operator" :key="index">
            <input
                class="form-check-input"
                type="radio"
                :name="item.code"
                v-model="selectOperator"
                :value="item.code"
                :id="item.code"
            />
            <label class="form-check-label px-3" :for="item.code"> {{ item.name }} </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "Calculator",
    props: {
    },
    data() {
        return {
            operator: [
                {name:"加",code:"plus"},
                {name:"減",code:"minus"},
                {name:"乘",code:"multiply"},
                {name:"除",code:"divided"},
                {name:"平方",code:"squared"},
                {name:"n次方",code:"nSquared"},
                {name:"開根號",code:"root"},
                {name:"開n根號",code:"nRoot"},
            ],
            selectOperator: null,
        };
    },
    watch: {

    },
    methods: {
        cal: function () {

        },
    },
};
</script>

