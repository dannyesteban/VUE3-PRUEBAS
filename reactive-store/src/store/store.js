import { reactive } from "vue";

const store = reactive({
    saldo:5000,
    addSaldo(){
        this.saldo+=100
    },
    disSaldo(){
        this.saldo -=30
    }
});

export default store