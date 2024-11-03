<script setup lang="ts">

const origem = ref();
const selecionado = ref(10);
const binario = ref("0");
const octal = ref("0");
const decimal = ref("0");
const hexadecimal = ref("0");

watch(selecionado, () => {
    converte();
})

function converte(){
    binario.value = converteBinario(origem.value);
    octal.value = converteOctal(origem.value);
    decimal.value = converteDecimal(origem.value);
    hexadecimal.value = converteHexaDecimal(origem.value);
}

function converteBinario(num: number) : string {
    if(!num){
        return "0";
    }
    num = parseInt(num.toString(), selecionado.value);
    let retorno = (num >>> 0).toString(2)
    return retorno;
}
function converteOctal(num: number) : string {
    if(!num){
        return "0";
    }
    num = parseInt(num.toString(), selecionado.value);
    let retorno = (num >>> 0).toString(8)
    return retorno;
}

function converteDecimal(num: number) : string {
    if(!num){
        return "0";
    }
    let retorno = parseInt(num.toString(), selecionado.value)
    if(isNaN(retorno)){
        return "0";
    }
    return retorno.toString();
}

function converteHexaDecimal(num: number) : string {
    if(!num){
        return "0";
    }
    num = parseInt(num.toString(), selecionado.value);
    return (num >>> 0).toString(16);
}

</script>

<template>
    <div class="px-3 px-sm-0">
        <!-- <div class="row">

            <div class="col-auto">
                <div class="lateral-e"></div>
            </div>
            <div class="col">
            </div>
        </div> -->
        <div class="container container-principal mt-5">
            <h1 class="mb-4">Conversor de bases numéricas</h1>
            <div class="row pt-1 mb-4">
                <div class="col">
                    <div class="mb-2">
                        <h3 class="mb-3">Origem</h3>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="origem" id="radioBin" :value="2" v-model="selecionado">
                            <label class="form-check-label" for="origem">
                                Binário
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="origem" id="radioDec" :value="10" v-model="selecionado">
                            <label class="form-check-label" for="origem">
                                Decimal
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="origem" id="radioOct" :value="8" v-model="selecionado">
                            <label class="form-check-label" for="origem">
                                Octal
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="origem" id="radioHex" :value="16" v-model="selecionado">
                            <label class="form-check-label" for="origem">
                                Hexadecimal
                            </label>
                        </div>
                    </div>
                    <input class="form-control" placeholder="Insira o número aqui" name="origem" id="origem" v-model="origem" @input="converte"></input>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <div>
                        <h3 class="mb-3">Resultado</h3>
                        <table>
                            <tr>
                                <td>Binário: </td>
                                <td id="resultadoBinario" class="ps-3">{{ binario }}</td>
                            </tr>
                            <tr>
                                <td>Decimal: </td>
                                <td id="resultadoDecimal" class="ps-3">{{ decimal }}</td>
                            </tr>
                            <tr>
                                <td>Octal: </td>
                                <td id="resultadoOctal" class="ps-3">{{ octal }}</td>
                            </tr>
                            <tr>
                                <td>Hexadecimal: </td>
                                <td id="resultadoHexaDecimal" class="ps-3">{{ hexadecimal }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
