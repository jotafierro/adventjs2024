function compile(instructions) {
  let values = {}
  let index = 0

  const handlers = {
    MOV: (arg1, arg2) => {
      values[arg2] = isNaN(arg1) ? (values[arg1] ?? 0) : Number(arg1);
    },
    INC: (arg1) => {
      values[arg1] = (values[arg1] ?? 0) + 1;
    },
    DEC: (arg1) => {
      values[arg1] = (values[arg1] ?? 0) - 1;
    },
    JMP: (arg1, arg2) => {
      if (values[arg1] === 0 || values[arg1] === undefined) {
        index = Number(arg2) - 1; // -1 because we increment after
      }
    }
  };

  while (index < instructions.length) {
    const [action, ...args] = instructions[index].split(' ');

    handlers[action](...args);

    index++;
  }

  return values['A']
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

console.log(compile([
  'MOV 0 A',
  'INC A'
])) // -> 1

console.log(compile([
  'MOV 0 A',
  'INC A',
  'INC A',
  'INC A',
  'INC A',
  'INC A',
  'INC A',
])) // -> 7

console.log(compile([
  'INC A',
  'INC A',
  'DEC A',
  'MOV A B',
]))