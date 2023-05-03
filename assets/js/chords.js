let tones = ['C','C#', 'D','D#', 'E','F','F#', 'G','G#', 'A','A#', 'B' ];
let sizeNames = [ 'M', 'm', 'aug', 'dim', 'sus4', 'sus2', '7', 'M7','m7', 'm7b5', 'dim7', '9', 'M9', 'm9', '11', 'M11', 'm11', '13', 'M13', 'm13' ]

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

// let sizes = {
//     1: {
//       name: 'M',
//       intervals: [4, 3]
//     },
//     2: {
//       name: 'm',
//       intervals: [3, 4]
//     },
//     3: {
//       name: 'aug',
//       intervals: [4, 4]
//     },
//     4: {
//       name: 'dim',
//       intervals: [3, 3]
//     },
//     5: {
//       name: 'sus4',
//       intervals: [5, 2]
//     },
//     6: {
//       name: 'sus2',
//       intervals: [2, 5]
//     },
//     7: {
//       name: '7',
//       intervals: [4, 3, 3]
//     },
//     8: {
//       name: 'M7',
//       intervals: [4, 3, 4]
//     },
//     9: {
//       name: 'm7',
//       intervals: [3, 4, 3]
//     },
//     10: {
//       name: 'm7b5',
//       intervals: [3, 3, 4]
//     },
//     11: {
//       name: 'dim7',
//       intervals: [3, 3, 3]
//     },
//     12: {
//       name: '9',
//       intervals: [4, 3, 3, 4]
//     },
//     13: {
//       name: 'M9',
//       intervals: [4, 3, 4, 3]
//     },
//     14: {
//       name: 'm9',
//       intervals: [3, 4, 3, 4]
//     },
//     15: {
//       name: '11',
//       intervals: [4, 3, 3, 4, 3]
//     },
//     16: {
//       name: 'M11',
//       intervals: [4, 3, 4, 3, 4]
//     },
//     17: {
//       name: 'm11',
//       intervals: [3, 4, 3, 4, 3]
//     },
//     18: {
//       name: '13',
//       intervals: [4, 3, 3, 4, 3, 4]
//     },
//     19: {
//       name: 'M13',
//       intervals: [4, 3, 4, 3, 4, 3]
//     },
//     20: {
//       name: 'm13',
//       intervals: [3, 4, 3, 4, 3, 4]
//     }
//   };

console.log(Array.from(Object.entries(sizes)));


let $tonesList = document.querySelector('.tone-select');
let $sizesList = document.querySelector('.size-select')
let $keys = document.querySelectorAll('.key');

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

function createMarker() {
    let marker = document.createElement('div');
    marker.classList.add('chosen');
    return marker;
}

// при выборе тоники программа показывает ее на клавиатуре

function showTonic() {
    let oldMarkers = document.querySelectorAll('.chosen');

    oldMarkers.forEach((marker) => {
        marker.remove();
    });
   if ($tonesList.value !== '-') {
    let tonic = Array.from($keys).find(key => key.dataset.key == $tonesList.value);
    tonic.append(createMarker());
    return tonic;
   }
    
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
    let oldMarkers = document.querySelectorAll('.chosen');

    oldMarkers.forEach((marker) => {
        marker.remove();
    });
    if ($sizesList.value !== '-' && $tonesList.value !== '-') {
        let interval = sizes[$sizesList.value];
        console.log(interval,interval.length);
        let markedKey;
        let nextNote=0;
        
        for(let i=0;i<interval.length+1;i++) {
            markedKey = Array.from($keys).find(key => key.dataset.key == operatingTones[nextNote]);

            console.log(tones[0+i],markedKey);
            markedKey.append(createMarker());
            nextNote = nextNote + Number(interval[i]);
        }
        return markedKey;
    }

  }



document.addEventListener('DOMContentLoaded', createTonesList(tones));
document.addEventListener('DOMContentLoaded', createSizesList(sizeNames));
$tonesList.addEventListener('change', () => {
    moveTones(tones, $tonesList.value);
    showTonic();
    console.log(operatingTones);
});
$sizesList.addEventListener('change', () => {
    showChord();
})


