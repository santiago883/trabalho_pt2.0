    const bnt = document.querySelector(".bnt_subimit")


    bnt.addEventListener("click", () =>{

       let Q1 = document.querySelector('input[name=quest_1]:checked').value;
       let Q2 = document.querySelector('input[name=quest_2]:checked').value;
       let Q3 = document.querySelector('input[name=quest_3]:checked').value;
       let Q4 = document.querySelector('input[name=quest_4]:checked').value;
       let Q5 = document.querySelector('input[name=quest_5]:checked').value;
       let Q6 = document.querySelector('input[name=quest_6]:checked').value;
       let Q7 = document.querySelector('input[name=quest_7]:checked').value;
       let Q8 = document.querySelector('input[name=quest_8]:checked').value;
       let Q9 = document.querySelector('input[name=quest_9]:checked').value;
       let Q10 = document.querySelector('input[name=quest_10]:checked').value;
   
      var contador = 0;
      
      if(Q1 == 'r4'){
         contador++
      }
      if(Q2 == 'r1'){
         contador++
      }
      if(Q3 == 'r1'){
         contador++
      }
      if(Q4 == 'r1'){
         contador++
      }
      if(Q5 == 'r3'){
         contador++
      }
      if(Q6 == 'r2'){
         contador++
      }
      if(Q7 == 'r3'){
         contador++
      }
      if(Q8 == 'r3'){
         contador++
      }
      if(Q9 == 'r2'){
         contador++
      }
      if(Q10 == 'r1'){
         contador++
      }

      if(contador <= 5){
         var corNota = '#fc0303'
      }else if(contador <= 7){
         var corNota = '#fce303'
      }else{
         var corNota = '#28fc03'
      };

      let resul = document.querySelector('.resul')


      var h2 = document.querySelector('.nota_cor')

      h2.innerHTML = `${contador}`

      h2.style.color = `${corNota}`

      let corpoP = document.querySelector('.container_quests');
      
      let horario = document.querySelector('.horario')


      let date = new Date();

      let tempo = `${date.getHours()}:${date.getMinutes}:${date.getSeconds}`;

      horario.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

      corpoP.style.display = 'none';
      
      let corpof = document.querySelector('.container_resul');
      
      corpof.style.display = 'block';


      
    })
