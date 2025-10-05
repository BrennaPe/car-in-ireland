function verificar(){
    //Get all selected radio buttons
    let resposta1 = document.querySelector('input[name="q1"]:checked');
    let resposta2 = document.querySelector('input[name="q2"]:cheked');
    let resposta3 = document.querySelector('input[name="q3"]:checked');

    //Create an array to hold the respostas
    let respostas = [resposta1, resposta2, resposta3];

    //Step 3: Create an object to hold the scores
    let scores = {
        minivan: 0,
        hatchck: 0,
        pickup: 0,
        sedan: 0,
        suv: 0
    }

    if (resposta1 !== null){
        let tipo1 = resposta1.value;
        scores[tipo1] = scores[tipo1] + 1;
    }

    if (resposta2 !== null){
        let tipo2 = resposta2.value;
        scores[tipo2] = scores[tipo2] + 1;
    }

    if (resposta3 !== null){
        let tipo3 = resposta3.value;
        scores[tipo3] = scores[tipo3] + 1;
    }

    //Find the car type with the highest score

    let maxScore = 0;
    let idealCar = "";

    
    
}

