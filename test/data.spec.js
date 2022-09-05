import dataFunctions from '../src/data.js';

const arrayTest = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "unknown"
  },

  {
    name: "Morty Smith",
    status: "Alive",
    species: "unknown",
    gender: "Male"
  },

  {
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female"
  },

  {
    name: "Tiny Rick",
    status: "Dead",
    species: "Alien",
    gender: "Female"
  } 
];

describe('dataFunctions', () => {

  it('dataFunctions is a object', () => {
    expect(typeof dataFunctions).toBe('object');
  });
});

describe('filtrarPorStatus', () => {
  it('é uma função', () => {
    expect(typeof dataFunctions.filtrarPorStatus).toBe('function');

  });

  it('filtra o status dos personagens mortos', () => {
    const expectedStatus = dataFunctions.filtrarPorStatus(arrayTest, "dead");
    expect(expectedStatus.length).toEqual(1);
    expect(expectedStatus).toEqual([arrayTest[3]]);
        
  });

  it('filtra o status dos personagens vivos', () => {
    const expectedStatus = dataFunctions.filtrarPorStatus(arrayTest, "alive");
    expect(expectedStatus.length).toEqual(3);
    expect(expectedStatus).toEqual([arrayTest[0],arrayTest[1],arrayTest[2]]);
  });

});

describe('filtrarPorEspecie', () => {

    it('é uma função', () => {
      expect(typeof dataFunctions.filtrarPorEspecie).toBe('function');
   });

   it('filtra a espécie dos personagens alienígenas', () => {
    const personagem = dataFunctions.filtrarPorEspecie(arrayTest, "alien");
    expect(personagem.length).toEqual(1);
    expect(personagem).toEqual([arrayTest[3]]);
    
   });

   it('filtra a espécie dos personagens desconhecidos', () => {
    const personagem = dataFunctions.filtrarPorEspecie(arrayTest, "unknown");
    expect(personagem.length).toEqual(1);
    expect(personagem).toEqual([arrayTest[1]]);

   });

});

describe('filtrarPorGenero', () => {
  it('é uma função', () => {
    expect(typeof dataFunctions.filtrarPorGenero).toBe('function');
  });


  it('filtra o gênero dos personagens femininos', () => {
    const personagem = dataFunctions.filtrarPorGenero(arrayTest, "female");
    expect(personagem.length).toEqual(2);
    expect(personagem).toEqual([arrayTest[2],arrayTest[3]]);    
  });
});

describe('ordenar', () => {
  it('é uma função', () => {
    expect(typeof dataFunctions.ordenar).toBe('function');

  });

  it('ordenar de forma crescente de A-Z', () => {
    const personagem = dataFunctions.ordenar(arrayTest, 'ascending')
    expect(personagem.length).toEqual(4); 
    expect(personagem).toEqual([arrayTest[2], arrayTest[1], arrayTest[0], arrayTest[3]]);
  });
     
  it('ordenar de forma decrescente de Z-A', () => {
    const personagem = dataFunctions.ordenar(arrayTest, 'descending')
    expect(personagem.length).toEqual(4); 
    expect(personagem).toEqual([arrayTest[3], arrayTest[0], arrayTest[1], arrayTest[2]]);
  });
 
});

describe('buscarPorNome', () => {

  it('é uma função', () => {
      expect(typeof dataFunctions.buscarPorNome).toBe('function');
  });

  it('deve buscar por um nome', () => {
      const personagens = dataFunctions.buscarPorNome(arrayTest, "Rick");
      expect(personagens.length).toEqual(2);
  });
  
});

describe('calcularPorcentagem', () => {

  it('é uma função', () => {
    expect(typeof dataFunctions.calcularPorcentagem).toBe('function');

  });

  it('deve calcular a média dos personagens vivos', () => {
    const porcentagem = dataFunctions.calcularPorcentagem(arrayTest.length, 3);
    expect(porcentagem).toEqual(75);

  });

  it('deve calcular a média dos personagens mortos', () => {
    const porcentagem = dataFunctions.calcularPorcentagem(arrayTest.length, 1);
    expect(porcentagem).toEqual(25);

  });

});