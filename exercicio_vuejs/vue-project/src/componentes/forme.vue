<script setup>
const props = defineProps(["getNumber1","getNumber1","getOperador","resultado"]);
</script>

<template>
    <form class="text-center">
        <div class="row">
            <div class="col-6">
                <input type="number" placeholder="Digite um valor" class="form-control" @keyup="props.getNumber1"/>
            </div>
            <div class="col-6">
                <input type="number" placeholder="Digite um valor" class="form-control" @keyup="props.getNumber1"/>
            </div>
        </div>
        <div class="col-md-3 mb-5 text-center">
            <select class="form-control text-center">
                <option class="subtrair text-center" value="subtrair"><p>subtrair</p></option>
                <option class="somar text-center" value="somar"><p>somar</p></option>
                <option class="dividir text-center" value="dividir"><p>dividir</p></option>
                <option class="multiplicar text-center" value="multiplicar"><p>multiplicar</p></option>
            </select>
        </div>
        <div class="row">
            <div class="col">
                <h2 class="black-text">Resultado</h2>
            </div>
        </div>
    </form>
</template>
<style escoped>
.black-text{    
    color:#000;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin:0;
}

select{
    padding-left:50%;
    padding-right:50%;
}

</style>