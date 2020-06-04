// Первый вариант

/*var catVasiliy = {
    name: 'Василий',
    birthday: new Date(),
    listOfFears: ['vacuum cleaner', 'beep'],
    listOfPositiveEvents: ['eat', 'play', 'walk', 'pet'],
    callACat: 'ksksks',
    meow() {
        console.log('Meow!');
    },
    purr() {
        console.log('Murrrrr! Murrrrr! Murrrrr!');
    },

    reaction(feeling) {
        if (this.listOfFears.indexOf(feeling) > -1) {
            this.meow();
            console.log('run from here!!!!')
        }
        if (this.listOfPositiveEvents.indexOf(feeling) > -1) {
            this.purr();
            if(feeling === 'pet') return;
            console.log('rub your feet and tag on your heels');
            if (feeling === 'eat') {
                setTimeout(function () {
                    console.log('go and lie down on a soft sofa!')
                }, 5000)
            }
        }
        if (feeling === this.callACat) {
            console.log('run to the caller');
            this.purr();
        }
    },
};*/


// Второй вариант
var catVasiliy = {
    name: 'Василий',
    birthday: new Date(),
    listOfFears: ['vacuum cleaner', 'beep'],
    meow() {
        console.log('Meow!');
    },
    reaction: function(feeling) {
        if (this.listOfFears.indexOf(feeling) > -1) {
            this.meow();
            console.log('run from here!!!!')
        }
    },
};

function reactionCat(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
        this.meow();
        console.log('run from here!!!!')
    }
    if (this.listOfPositiveEvents.indexOf(feeling) > -1) {
        this.purr();
        if(feeling === 'pet') return;
        console.log('rub your feet and tag on your heels');
        if (feeling === 'eat') {
            setTimeout(function () {
                console.log('go and lie down on a soft sofa!')
            }, 5000)
        }
    }
    if (feeling === this.callACat) {
        console.log('run to the caller');
        this.purr();
    }
}

function purringCat() {
    console.log('Murrrrr! Murrrrr! Murrrrr!');
}

catVasiliy.listOfPositiveEvents = ['eat', 'play', 'walk', 'pet'];
catVasiliy.callACat = 'ksksks';
catVasiliy.purr = purringCat;
catVasiliy.reaction = reactionCat;
catVasiliy.reaction('pet');