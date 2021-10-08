class SortedList{
    constructor(){
        this.size = 0;
        this.numbers = [];
    }

    add(number){
        this.numbers.push(number);
        this.numbers.sort((a,b)=> a-b);
        this.size += 1;
    }

    get(index){
        if (index < 0 || index >= this.numbers.length){
            throw  new Error('No such index in list');
        }
        return this.numbers[index];
    }

    remove(index){
        if (index < 0 || index >= this.numbers.length){
            throw  new Error('No such index in list');
        }
        this.numbers.splice(index,1);
        this.size -= 1;
    }
}