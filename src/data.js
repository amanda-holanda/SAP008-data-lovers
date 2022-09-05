const dataFunctions = {
    
    filtrarPorStatus: function (characters, status) {
        const filtro = characters.filter(function(personagem) {        
            const statusFiltrado = personagem.status.toLowerCase() === status;         
            return statusFiltrado; 

        });             

        return filtro;  
    },
     
    filtrarPorEspecie: function (characters, species) {
        const filtro = characters.filter(function(personagem) {
            const especieFiltrado = personagem.species.toLowerCase() === species;
            return especieFiltrado;   

        });

        return filtro;
        
    },

    filtrarPorGenero: function (characters, gender) {
        const filtro = characters.filter(function(personagem) {
            const generoFiltrado = personagem.gender.toLowerCase() === gender;
            return generoFiltrado;

        });
        return filtro;

    },

    ordenarCrescente: function(characters) {
        const ordem = characters.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }else {
              return -1;
            }            
            
          });          
        return ordem;

    },   

    ordenarDecrescente: function(characters) {
        const ordem = characters.sort(function (a, b) {            
            if (a.name > b.name) {
              return -1;
            }else {
              return 1;
            }            
            
          });          
        return ordem;

    },   

    ordenar: function(characters, sortBy) {        
        const copy = [...characters]; 

        if(sortBy === "ascending") {
            return dataFunctions.ordenarCrescente(copy)
        }
        else if(sortBy === "descending" ) {
            return dataFunctions.ordenarDecrescente(copy)
        }

    },

    buscarPorNome: function (characters, name) {
        const filtro = characters.filter(function(personagem) {
            const buscaFiltrada = personagem.name.toLowerCase().includes(name.toLowerCase());
            return buscaFiltrada;
        });
        return filtro;
    }, 
       
    calcularPorcentagem: function(tamanhoList, tamanhoListaFiltrada) {            

        return Math.round((tamanhoListaFiltrada*100)/tamanhoList); 
               
    }
    
};  

export default dataFunctions;