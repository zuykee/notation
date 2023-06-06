/**
 * Соответствие нот типу Note
 * C  - 0
 * C# - 1
 * D  - 2
 * D# - 3
 * E  - 4
 * F  - 5
 * F# - 6
 * G  - 7
 * G# - 8
 * A  - 9
 * B  - 10
 * H  - 11
 */

/** 
 * Параметры
 * chordScheme: number[] - схема аккорда, массив интервалов между соседними 
 *                         звуками аккорда в порядке увеличения высоты звуков
 * 
 * tonic: Note           - тоника
 * 
 * tuning: Note[]        - гитарный строй, массив нот на которые настроены струны в порядке от 6й до 1й
 * 
 * firstFret: number     - номер крайнего левого порожка аппликатуры (нулевой не считаем)
 * 
 * fretsRange: number    - максимальная ширина аппликатуры аккорда (обычно 3 или 4)
 * 
 * Возвращаемое значение: 
 * 
 * number[][]            - Массивы всех номеров порожков (всегда включая первый) для струны подходящих под аккорд 
 *                         в заданном диапазоне, сложенные в массив в порядке от 6й струны до 1й
 */
const getAllPlacesOnFrets = ({
  chordScheme,
  tonic,
  tuning,
  firstFret,
  fretsRange
}) => {
  console.log(tuning)
  const chordNotes = getChordNotes(chordScheme, tonic);
  const allSuitableFrets = tuning.map((stringTune) => getSuitableFrets(chordNotes, stringTune))

  const suitableFretsInRange = allSuitableFrets.map(
    (stringFrets) => getFretsInRangeOnly(
      chordScheme,
      tonic,
      stringFrets,
      {
        minFret: firstFret,
        maxFret: fretsRange,
        withOpenString: true
      }
    )
  );

  return suitableFretsInRange;
}

const getChordNotes = (chordScheme, tonic) => {
  const notesArray = [ tonic ];
  let distanceFromTonic = 0;

  for (interval of chordScheme) {
    distanceFromTonic += interval;
    let note = (tonic + distanceFromTonic) % 12;
    notesArray.push(note);
  }

  return notesArray;
}

// У нас есть ноты аккорда, нам нужно определить, на каком ладу они на этой струне
// Т.к. stringTune + fretNumber = fretNote, то номер порожка, соответствующий ноте,
// мы определяем так: fretNumber = fretNote - stringTune; при этом fretNote === chordNote
// плюс мы делаем допущение, что используем только первые 11 порожков + открытые струны.
// Если это допущение не делать, то формулой выше просто так не воспользуешься, расчёт станет хитрее

const getSuitableFrets = (chordNotes, stringTune) => chordNotes.map((note) => (12 + note - stringTune) % 12).sort((a, b) => a - b);


const getFretsInRangeOnly = (chordScheme, tonic, fretsList, {minFret, maxFret, withOpenString}) => {
  const resultFretsList = [];
  for (let fret of fretsList) {
    function isSubset(array, subset) {
      return subset.every(item => array.includes(item));
    }
    console.log(isSubset(resultFretsList,getChordNotes(chordScheme, tonic)),resultFretsList,getChordNotes(chordScheme, tonic));
    // console.log(isSubset(getChordNotes,resultFretsList))
    
    if (fret === 0 && withOpenString) {
      
      resultFretsList.push(fret);
    }

    if (fret >= minFret && fret <= maxFret) {
      
      resultFretsList.push(fret);
    }
  }

  return resultFretsList;
}





/**
 * Блок тестирования
 */

/**
 * Тестируем функцию getAllPlacesOnFrets
 */

// const resultAmFingering = getAllPlacesOnFrets({
//   chordScheme: [3,4], // chord "m"
//   tonic: 9, //A
//   tuning: [4, 9, 2, 7, 11, 4], //EADGHA
//   firstFret: 1,
//   fretsRange: 3
// });

// const expectedAmFingering = [[0], [0, 3], [2], [2], [1], [0]];

// console.log('\nAm:');
// console.log('expected', expectedAmFingering);
// console.log('result  ', resultAmFingering);

// const resultEmFingering = getAllPlacesOnFrets({
//   chordScheme: [3,4], // chord "m"
//   tonic: 4, //E
//   tuning: [4, 9, 2, 7, 11, 4], //EADGHA
//   firstFret: 1,
//   fretsRange: 3
// });

// const expectedEmFingering = [[0,3], [2], [2], [0], [0], [0,3]];

// console.log('\nEm:');
// console.log('expected', expectedEmFingering);
// console.log('result  ', resultEmFingering);

// const resultH7Fingering = getAllPlacesOnFrets({
//   chordScheme: [4,3,3], // chord "7"
//   tonic: 11, //H
//   tuning: [4, 9, 2, 7, 11, 4], //EADGHA
//   firstFret: 1,
//   fretsRange: 4
// });

// const expectedH7Fingering = [[2], [0, 2], [1, 4], [2, 4], [0, 4], [2]];

// console.log('\nH7:');
// console.log('expected', expectedH7Fingering);
// console.log('result  ', resultH7Fingering);








/**
 * Следующий этап - строим реальные аппликатуры
 * 
 * На вход принимаем выход функции getAllPlacesOnFrets,
 * на выходе получаем массив аппликатур
 */
const getAllFingerings = (allPlacesOnFrets) => {
  const fingerings = addStringFretsToFingerings(allPlacesOnFrets, 0, []);

  return fingerings;
}

const addStringFretsToFingerings = (allPlacesOnFrets, stringIndex, currentFingering) => {
  const fingeringVariants = allPlacesOnFrets[stringIndex].map((fret) => [...currentFingering, fret]);

  if (stringIndex >= 5) {
    return fingeringVariants.filter(( fingering) => isFingeringValid(fingering));
    
  }

  return fingeringVariants.reduce((accumulator, fingering) => [
    ...accumulator, ...addStringFretsToFingerings(allPlacesOnFrets, stringIndex + 1, fingering)
  ], []);
}


const isFingeringValid = (fingering) => {
  const fingersCount = getNeededFingersCount(fingering);


  if (fingersCount <= 4) {
    return true;
  }

  if (getLongBarreFretNumber(fingering)) {
    return true;
  }

  return false;
}

const getNeededFingersCount = (fingering) => {
  const fingeringStatistics = countOfFretNumbers(fingering);

  let fingerCount = 0;

  for (let [fretNumber, count] of fingeringStatistics) {
    if (fretNumber !== 0) {
      fingerCount += count;
    }
  }

  return fingerCount;
}

// Логика простая - если на самом нижнем порожке есть не меньше 3х зажатых струн, то объявляем, 
// что их можно зажать с помощью барре 
const getLongBarreFretNumber = (fingering) => {
  const fingeringStatistics = countOfFretNumbers(fingering);

  let [fretNumber, count] = fingeringStatistics[0];

  if (count >= 3) {
    return fretNumber;
  }

  return null;
}

/**
 * На вход принимает аппликатуру
 * Возвращает статистику по ладам: массив пар [fretNumber, count]
 */
const countOfFretNumbers = (fingering) => {
  let result = [];
  for (let fretNumber of fingering) {
    result[fretNumber] = (result[fretNumber] || 0) + 1;
  }
  console.log(result.map((count, index) => [index, count]).filter((item) => !!item))
  return result.map((count, index) => [index, count]).filter((item) => !!item);
}

/**
 * Блок тестирования
 */

console.log('\nAm:');
console.log(
  getAllFingerings(
    getAllPlacesOnFrets({
      chordScheme: [3,4], // chord "m"
      tonic: 9, //A
      tuning: [4, 9, 2, 7, 11, 4], //EADGHA
      firstFret: 2,
      fretsRange: 5

    })
  )
);

console.log('\nDm');
console.log(
  getAllFingerings(
    getAllPlacesOnFrets({
      chordScheme: [3,4], // chord "m"
      tonic: 2, //D
      tuning: [4, 9, 2, 7, 11, 4], //EADGHA
      firstFret: 1,
      fretsRange: 4
    })
  )
);

console.log('\nH7');
console.log(
  getAllFingerings(
    getAllPlacesOnFrets({
      chordScheme: [4,3,3], // chord "7"
      tonic: 11, //H
      tuning: [4, 9, 2, 7, 11, 4], //EADGHA
      firstFret: 1,
      fretsRange: 4
    })
  )
);