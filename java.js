function horasTrabalhadas(){
    // pegando valores e convertendo em [hora,minutos]
    let e1 = document.getElementById("entrada1").value.split(":").map(Number);
    let s1 = document.getElementById("saida1").value.split(":").map(Number);
    let e2 = document.getElementById("entrada2").value.split(":").map(Number);
    let s2 = document.getElementById("saida2").value.split(":").map(Number);

    // verificando se todos os dados estão preenchidos.

    if(!isNaN(e1) || !isNaN(s1) || !isNaN(e2) || !isNaN(s2)){
        alert(`Por favor, preencha todos os dados abaixo!!!`)
        return;
    }

    // criando objeto Date();

    let d1entrada = new Date();
    d1entrada.setHours(e1[0],e1[1],0,0);

    let d1saida = new Date();
    d1saida.setHours(s1[0],s1[1],0,0);

    let d2entrada = new Date();
    d2entrada.setHours(e2[0],e2[1],0,0);

    let d2saida = new Date();
    d2saida.setHours(s2[0],s2[1],0,0);

    //Calculando tempo de trabalho nos dois periodos
    
    let periodo1 = d1saida - d1entrada;
    
    let periodo2 = d2saida - d2entrada;
    
    let totalMs = periodo1 + periodo2;

    // verificar se fez menos de 1h e 10 min de intervalo

    let intervaloMs = d2entrada - d1saida;
    
    if(intervaloMs < 70 * 60 * 1000){
        alert(`Seu intervalo foi menor que 1h e 10 min, por favor não repitar isso de novo!!!! `)
        return;
    }
    
    // convertendo para horas e minutos.

    let totalMin = Math.floor(totalMs / 60000);

   

    //limite de trabalho normal: 7:20 = 440 Minutos

    let limite = 440; // minutos
    let extraMin = totalMin - limite
    
    
    // Mostrando o resultado
    
    let resultado = document.getElementById("res")
    
    // verifica se vez horas extras

    if(extraMin > 0){
        
        let horas = Math.floor(extraMin / 60);
    
        let minutos = extraMin % 60;

    resultado.innerHTML = `Você fez ${horas} Horas e ${minutos} Minutos de hora extra`

}else if( totalMin < 440){

    // verifica se esta devendo horas 

    let minutosDevidos = 440 - totalMin;
    let horasDevido = Math.floor(minutosDevidos / 60);
    let minutosDevendo = minutosDevidos % 60;
    resultado.innerHTML = `Você está devendo ${horasDevido} Horas e ${minutosDevendo} Minutos. `
}

else{

    //se estiver tudo certo, não devendo e não fez hora extra.

    resultado.innerHTML =`Nenhuma hora extra feira ` 

}

}


