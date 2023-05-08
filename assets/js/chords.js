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

let $tonesList = document.querySelector('.tone-select');
let $sizesList = document.querySelector('.size-select')

let $keyboard = document.querySelector('.layout');

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



document.addEventListener('DOMContentLoaded', createTonesList(tones));
document.addEventListener('DOMContentLoaded', createSizesList(sizeNames));
document.addEventListener('DOMContentLoaded', init());
$tonesList.addEventListener('change', () => {
    moveTones(tones, $tonesList.value);
    showTonic();
    console.log(operatingTones);
});
$sizesList.addEventListener('change', () => {
    showChord();
})


