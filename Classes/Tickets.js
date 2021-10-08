function solve (tickets, criteria){
    class Ticket{

        constructor(destination, price , status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const ticketObejects = [];

    tickets.forEach((entry) => {
        const [destination , price , status] = entry.split('|');
        ticketObejects.push(new Ticket(destination, Number(price), status));
    })

    if (criteria === 'destination'){
        ticketObejects.sort((a,b)=> {
            return a.destination.localeCompare(b.destination);
        })
    }else if (criteria === 'status'){
        ticketObejects.sort((a,b)=> {
            return a.status.localeCompare(b.status);
        })
    }else if (criteria === 'price'){
        ticketObejects.sort((a,b)=> {
            return a.price - b.price;
        })
    }

    return ticketObejects;

}