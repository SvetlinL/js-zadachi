class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: Number(150),
            student: Number(300),
            collegian: Number(500)
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money){
        if (!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(entry=> entry.name === name)){
            return `The ${name} is already registered at the camp.`
        }
        if (this.priceForTheCamp.hasOwnProperty(condition)){
            if (this.priceForTheCamp[condition] > money){
                return `The money is not enough to pay the stay at the camp.`;
            }
        }

        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: Number(100),
            wins: Number(0)
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name){

        if (!this.listOfParticipants.some(entry=> entry.name === name)){
            throw new Error (`The ${name} is not registered in the camp.`);
        }else {
            let index;
            this.listOfParticipants.forEach((entry)=>{
               if (entry.name === name){
                   index  = this.listOfParticipants.indexOf(entry);
               }
            });
            this.listOfParticipants.splice(index,1);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, participant1, participant2){
        let indexPlayer1;
        let indexPlayer2;
        this.listOfParticipants.forEach((entry)=>{
            if (entry.name === participant1){
                indexPlayer1  = this.listOfParticipants.indexOf(entry);
            }
            if (entry.name === participant2){
                indexPlayer2 = this.listOfParticipants.indexOf(entry);
            }
        });
        if (typeOfGame === 'WaterBalloonFights'){
            if (!this.listOfParticipants.find(entry=> entry.name === participant1 || entry.name === participant2)){
                throw new Error("Invalid entered name/s.");
            }

            if (this.listOfParticipants[indexPlayer1].condition !== this.listOfParticipants[indexPlayer2].condition){
                throw new Error(`Choose players with equal condition.`);
            }
            if (this.listOfParticipants[indexPlayer1].power > this.listOfParticipants[indexPlayer2].power){
                this.listOfParticipants[indexPlayer1].wins ++;
                return `The ${this.listOfParticipants[indexPlayer1].name} is winner in the game ${typeOfGame}.`;

            }else if (this.listOfParticipants[indexPlayer2].power > this.listOfParticipants[indexPlayer1].power){
                this.listOfParticipants[indexPlayer2].wins ++;
                return `The ${this.listOfParticipants[indexPlayer2].name} is winner in the game ${typeOfGame}.`;
            }else {
                return `There is no winner.`;
            }
        }else if(typeOfGame === 'Battleship'){
            if (!this.listOfParticipants.find(entry=> entry.name === participant1)){
                throw new Error("Invalid entered name/s.");
            }
            this.listOfParticipants[indexPlayer1].power += 20;
            return `The ${this.listOfParticipants[indexPlayer1].name} successfully completed the game ${typeOfGame}.`
        }
    }

    toString(){
        let returnString = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.sort((a,b)=> {
            return b.wins - a.wins;
        }).forEach(entry=> {
           returnString += `${entry.name} - ${entry.condition} - ${entry.power} - ${entry.wins}\n`;
        });

        return returnString.trim();
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
