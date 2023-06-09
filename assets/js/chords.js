let tones = ['C','C#', 'D','D#', 'E','F','F#', 'G','G#', 'A','A#', 'B' ];
let sizeNames = [ 'M', 'm', 'aug', 'dim', 'sus4', 'sus2', '7', 'M7','m7', 'm7b5', 'dim7', '9', 'M9', 'm9', '11', 'M11', 'm11', '13', 'M13', 'm13' ]
let $keys = [];
let operatingTones = [];

let sizes = {
    'M': [4,3],
    'm': [3,4],
    'aug': [4, 4],
  'dim': [3, 3],
  'sus4': [5, 2],
  'sus2': [2, 5],
  '7': [4, 3, 3],
  'M7': [4, 3, 4],
  'm7': [3, 4, 3],
  'm7b5': [3, 3, 4],
  'dim7': [3, 3, 3],
  '9': [4, 3, 3, 4],
  'M9': [4, 3, 4, 3],
  'm9': [3, 4, 3, 4],
  '11': [4, 3, 3, 4, 3],
  'M11': [4, 3, 4, 3, 4],
  'm11': [3, 4, 3, 4, 3],
  '13': [4, 3, 3, 4, 3, 4],
  'M13': [4, 3, 4, 3, 4, 3],
  'm13': [3, 4, 3, 4, 3, 4]
};

const standartTune = [4, 11, 7, 2, 9, 4];

let $tonesList = document.querySelector('.tone-select');
let $sizesList = document.querySelector('.size-select')
let $keyboard = document.querySelector('.layout');
let $capoList = document.querySelector('.capo');

// initial function 
let init = () => {
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < 12; j++) {
            if (tones[j].includes('#')) {
              let  key = createKey('black', tones[j], i)
                
                let emptySpace = document.createElement('div')
                emptySpace.className = 'empty-space'
                emptySpace.appendChild(key)
                $keyboard.appendChild(emptySpace)
            } else {

            let key = createKey('white', tones[j], i)
            
            $keyboard.appendChild(key);
            }
           

        }
    }
  
}

//список позиций каподастра
function createCapoList() {
    
    for (let i=1;i<20;i++) {
        $capoList.append(capoFret(i));
    }
    return $capoList;
}

function capoFret(fret) {
    let fretNumber = document.createElement('option');
    fretNumber.value = fret;
    fretNumber.innerHTML = fret;
    return fretNumber;
}

//выводим сведения о текущем строе 

function showStringTune(tune) {
    let stringTone = document.createElement('span');
    
    stringTone.className = "chosen";
    stringTone.innerHTML = tones[tune];
    return stringTone;

}

function showTune() {
    let $tuneDisplay = document.querySelector('.tune-display');
    $tuneDisplay.innerHTML = '';
    let operatingTune = [];

   

    for(let i = 0; i < standartTune.length; i++) {
        operatingTune = [...standartTune];
        let toneIndex = (operatingTune[i] + Number($capoList.value)) % tones.length;
        $tuneDisplay.append(showStringTune(toneIndex));
        
    }
}

//формируем аккорды для отрисовки

function findChordShapes(chordScheme, tonic, firstFret, fretsRange, currentTuning) {
    let shape = [];
    const chordNotes = getChordNotes(chordScheme, tonic);
   let chordMatrix = [];
   

   //Если в конечной аппликатуре есть все ноты из аккорда, то он проходит проверку
   function isSubset(array, subset) {

    return subset.every(item => array.includes(item));
  }

  function findTonesNotInRange() {
    for (let i = 0; i < shape.length;i++) {
        if(!chordNotes.includes(shape[i]+currentTuning[i])%12) {
           
            return true;
            
        }
        
    }
  }

   //этой функцией мы проверяем содержатся ли в аппликатуре все звуки аккорда
   function isFullChord(fingering, tuning, notes) {
    let tonesInChord = []
//если до конца fretsRange на струне не взять звук из аккорда, струна не играется
    for (let i=0;i<tuning.length;i++) {
        let fretSymbol = (fingering[i] !== 'x') ? (fingering[i]+tuning[i])%12 : 'x';
        tonesInChord.push(fretSymbol);       
    }
        console.log(tonesInChord, notes);
        console.log(isSubset(tonesInChord,notes))
      if(isSubset(tonesInChord,notes)) {
        return true;
      }
} 

//функция, которая считает количество определенных значений в массиве
function countPressedStrings(array, value) {
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        count += 1;
      }
    }
  
    return count;
  }
   
   //проходим каждый лад по струнам. 
   //Если зажатая на этом ладу струна соответствует звуку в аккорде, струне в массиве присваивается номер лада.
   //Если нет - ставится крестик
   //Масивов формируется по количеству fretsRange. 
    for(let i = firstFret;i<fretsRange;i++) {
        let fret = [];
        for(let j = 0;j<currentTuning.length;j++) {
        if(chordNotes.includes(currentTuning[j])) {
                    fret[j] = 0;
                       } else 
                if(chordNotes.includes((currentTuning[j]+i)% 12)) {
                fret[j] = i;
                     }   
                else {
                        fret[j] = 'x';
                }
                }
                // console.log(fret)
        chordMatrix.push(fret);
        
       
    }
        
    for (let i = 0;i<chordMatrix.length;i++) {
        console.log(chordMatrix)
        if (shape.length<chordMatrix[i].length && countPressedStrings(chordMatrix[i], 1)>2 && i==0) {
            shape = [1,1,1,1,1,1];
            console.log(isFullChord(shape,currentTuning,chordNotes))
        }else if (shape.length<chordMatrix[i].length && i==0) {
            shape = chordMatrix[i];
            
        } 
           
       if  ( i>0 && (!isFullChord(shape,currentTuning,chordNotes))  || (isFullChord(shape,currentTuning,chordNotes) && countPressedStrings(shape, 'x') >1) || (isFullChord(shape,currentTuning,chordNotes) && findTonesNotInRange())) {
        console.log('i am here');
        for (let j=0;j<6;j++) {
         console.log(shape[j]);
            if (typeof(shape[j]) !== 'number' || (!chordNotes.includes((currentTuning[j]+shape[j])% 12))) {
                console.log(currentTuning[j] + ',' + shape[j])
                // console.log(chordMatrix[i]);
                shape[j] = chordMatrix[i][j];
                
                console.log(shape);
                drawChord(shape)
            } else {
                // console.log(shape);
                drawChord(shape);
            }
        } 
        
       } else {
        console.log(shape);
        // console.log(chordNotes);
        // drawChord(shape);
    };
    }


    // Идея следующая: если на первом ладу больше двух единиц, значит все значения на первом ладу равны единице.
    // Если Аккорд неполный и проверяемая струна на первом ладу не в аккорде, то заменяем ее на то цифровое значение, которое больше.
    // Если к концу fretsRange струна так и не совпала с тоном в аккорде, ставим крестик.
    // Дальше проверяем пальцы: если в получившемся аккорде две единицы, и разница между их индексами больше 1, и в аккорде больше одной тройки, тогда:
    // Получаем массив со значениями звуков при зажатом аккорде;
    // Если в получившемся массиве два и более одинаковых элементов, то если элемент того же индекса в массиве с аппликатурой равен 3, то значение заменяется 
    // на крестик либо единицу(при условии, что при зажатом первом ладу получившийся тон есть в аккорде)




    

    // const getSuitableFrets = (chordNotes, stringTune) =>
    //   chordNotes
    //     .map((note) => (12 + note - stringTune) % 12)
    //     .filter((fret) => fret >= firstFret || fret == 0)
    //     .sort((a, b) => a - b);
  
    // const allSuitableFrets = tuning.map((stringTune) =>
    //   getSuitableFrets(chordNotes, stringTune)
    // );
  
    // const generateCombinations = (shape, stringIndex) => {
    //   if (stringIndex < 0) {
    //     shapes.push(shape.slice());
    //     return;
    //   }
  
    //   const frets = allSuitableFrets[stringIndex];
    //   for (let fret of frets) {
    //     if (fret > fretsRange) {
    //       break;
    //     }
  
    //     const newShape = shape.slice();
    //     newShape[stringIndex] = fret;
  
    //     const isValidShape = validateShape(newShape);
    //     if (isValidShape) {
    //       generateCombinations(newShape, stringIndex - 1);
    //     }
    //   }
    // };
  
    // const validateShape = (shape) => {
    //     console.log(shape);
    //   const openStrings = tuning.map(() => 'x');
    //   const frettedStrings = shape.map((fret) => (fret !== 0 ? fret : 'x'));
    //   const combinedStrings = openStrings.concat(frettedStrings).slice(-tuning.length);
    //   const hasRequiredNotes = chordNotes.every((note) =>
    //   combinedStrings.includes((12 + note - tonic) % 12)
    // );
    //   for (let i = tuning.length; i > 0; --i) {
    //     const stringNote = (12 + tuning[i] - tonic) % 12;
    //     const isStringInChord = chordNotes.includes(stringNote);
  
    //     if (!isStringInChord){
    //     //   if (combinedStrings[i] !== 'x') {
    //     //     return false;
    //     //   }
  
    //     //   if (i === tuning.length - 1 && combinedStrings.slice(-2).filter((fret) => fret !== 'x').length >= 2) {
    //     //     return false;
    //     //   }
    //     tuning[i] = 'x';
        
        
    //     return true;
    //     } else {
         
    //       if (hasRequiredNotes) {
    //        console.log('[eq')
    //       }
    //     }
    //   }
  
    // //   return true;
    // };
  
    // generateCombinations(new Array(tuning.length).fill('x'), tuning.length - 1);
    // console.log(shapes);
    // return shapes;
  }

  // отбираем в отдельный массив номера тонов

  function getChordNotes(chordScheme, tonic) {
    const notesArray = [ tonic ];
    let distanceFromTonic = 0;
  
    for (interval of chordScheme) {
     
      distanceFromTonic += interval;
      let note = (tonic + distanceFromTonic) % 12;
      notesArray.push(note);
    }
    // drawChord([9,0,4]);
    
    return notesArray;
  }

// Create key
let createKey = (type, note, octave) => {
    let key = document.createElement('button')
    key.className = `key piano__key--${type}`
    key.dataset.key = note;
    key.dataset.octave = octave;
    $keys.push(key)
    return key;

}

//создаем список тоник

function createTonesList(arr) {
   
    for (let tone of arr) {
       $tonesList.append(getTones(tone));   
    }
}

function getTones(toneStr) {
    let $option = document.createElement('option');
    $option.value = toneStr;
    $option.innerHTML = toneStr;
    return $option;
};

//создаем список типов аккордов 

function createSizesList(arr) {
    
    for (let size of arr) {
        
            $sizesList.append(getSizes(size));
          }         
    
}

function getSizes(sizeStr) {
    
    let $option = document.createElement('option');
    $option.value = sizeStr;
    $option.innerHTML = sizeStr;
    return $option;
};

//создаем маркер для обозначения используемых клавиш

function createMarker(chosenKey) {
    let marker = document.createElement('div');
    marker.classList.add('chosen');
    console.log(chosenKey);
    marker.textContent = chosenKey.dataset.key;
    return marker;
}

//очищаем экран от устаревших маркеров

function cleanField(){
    let oldMarkers = document.querySelectorAll('.chosen');

    oldMarkers.forEach((marker) => {
        marker.remove();
    });
}

// при выборе тоники программа показывает ее на клавиатуре

function showTonic() {
    let tonic = Array.from($keys).find(key => key.dataset.key == $tonesList.value);
    cleanField();
   if ($tonesList.value !== '-' && $sizesList.value == '-') { 
    tonic.append(createMarker(tonic));
    
   } else if ($tonesList.value !== '-' && $sizesList.value !== '-') {
    showChord();
   }

   return tonic;
}

//сдвигаем ступени при выборе тоники

function moveTones(arr, chosenTonic) {
    if (chosenTonic !== arr[0]) {
    const index = tones.indexOf(chosenTonic);
    const left = tones.slice(0, index);
    const right = tones.slice(index);
    
    operatingTones = right.concat(left);
    console.log(operatingTones);
    return operatingTones;
    } else {
        operatingTones = [...tones];
    }
    

  }

  //Строим аккорд от тоники

  function showChord() {
    let interval = sizes[$sizesList.value];
   
        let nextNote=0;
        let operatingKeys =  Array.from($keys);
        let  markedKey = operatingKeys.find(key => key.dataset.key == $tonesList.value);
    cleanField();
    if ($sizesList.value !== '-' && $tonesList.value !== '-') {
        
        console.log(markedKey);
        for(let i=0;i<interval.length+1;i++) {
            markedKey.append(createMarker(markedKey));
            operatingKeys = operatingKeys.slice(operatingKeys.indexOf(markedKey));
            console.log(operatingKeys);
            markedKey = operatingKeys[0+interval[i]];
           console.log(markedKey);
            
            nextNote = nextNote + Number(interval[i]);            
        }
    }   else {
        showTonic()
    }
        return markedKey;
  }

 //отрисовываем аккорд на грифе

function drawChord(chordArray) {
    // console.log(chordArray);
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
  
    // Определите параметры для отрисовки аккорда
    const stringSpacing = 20; // Промежуток между струнами
    const fretSpacing = 40; // Промежуток между ладами
    const fretColor = '#000000'; // Цвет порожков
    const stringColor = '#000000'; // Цвет струн
    const fingerColor = '#ff0000'; // Цвет пальцев
    const fingerRadius = 6; // Радиус пальцев
  
    // Очистите холст перед отрисовкой аккорда
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Отрисуйте порожки между ладами
    for (let fret = 1; fret < chordArray.length; fret++) {
      const x = canvas.width - fret * fretSpacing;
      ctx.fillStyle = fretColor;
      ctx.fillRect(x, 0, 1, stringSpacing*6);
    }
  
    // Отрисуйте струны
    for (let string = 0; string < chordArray.length; string++) {
      const y = (string + 0.5) * stringSpacing;
      ctx.fillStyle = stringColor;
      ctx.fillRect(100, y, fretSpacing*4, 1);
    }
  
    // Отрисуйте зажатые струны
    for (let string = 0; string < chordArray.length; string++) {
      const y = (string + 0.5) * stringSpacing;
      if (chordArray[string] !== 'x' && chordArray[string]>0) {
        const x = canvas.width - (chordArray[string] + 0.5) * fretSpacing;
        ctx.fillStyle = fingerColor;
        ctx.beginPath();
        ctx.arc(x, y, fingerRadius, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        ctx.fillStyle = fingerColor;
        ctx.beginPath();
        ctx.arc(0, y, fingerRadius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }


 document.addEventListener('DOMContentLoaded', createCapoList());
 document.addEventListener('DOMContentLoaded', showTune());
document.addEventListener('DOMContentLoaded', createTonesList(tones));
document.addEventListener('DOMContentLoaded', createSizesList(sizeNames));
document.addEventListener('DOMContentLoaded', init());
document.addEventListener('DOMContentLoaded', findChordShapes([3,4], 10, 1, 5, [4, 9, 2, 7, 11, 4]));
$tonesList.addEventListener('change', () => {
    moveTones(tones, $tonesList.value);
    showTonic();
    console.log(operatingTones);
});
$sizesList.addEventListener('change', () => {
    showChord();
   getChordNotes(sizes[$sizesList.value],tones.indexOf($tonesList.value));
})
$capoList.addEventListener('change', () => {
    showTune();
})




