class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': Number(200),
            'photo': Number(50),
            'item': Number(250)
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle (articleModel, articleName, quantity){
        let found = false;
        if (articleModel.toLowerCase() !== 'picture' && articleModel.toLowerCase() !== 'photo' && articleModel.toLowerCase() !== 'item'){
            throw new Error('This article model is not included in this gallery!');
        }
        this.listOfArticles.forEach((article) =>{
           if (article.articleModel === articleModel.toLowerCase() && article.articleName === articleName){
               article.quantity += Number(quantity);
               found = true;
           }
        });
        if (!found) {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: Number(quantity)
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality){
        this.guests.forEach((guest) => {
            if (guest.guestName === guestName){
                throw new Error(`${guestName} has already been invited.`)
            }
        });
        if (personality === 'Vip'){
            this.guests.push({
                guestName: guestName,
                points: Number(500),
                purchaseArticle: Number(0)
            });
        }else if (personality === 'Middle'){
            this.guests.push({
                guestName: guestName,
                points: Number(250),
                purchaseArticle: Number(0)
            });
        }else {
            this.guests.push({
                guestName: guestName,
                points: Number(50),
                purchaseArticle: Number(0)
            });
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle (articleModel, articleName, guestName) {
        let foundArticle = false;
        this.listOfArticles.forEach((article) => {
            if (article.articleModel === articleModel.toLowerCase() && article.articleName === articleName) {
                foundArticle = true;
            }
        });
        if (!foundArticle) {
            throw new Error('This article is not found.');
        }
        this.listOfArticles.forEach((article) => {
            if (article.quantity === 0) {
                return `The ${articleName} is not available.`
            }
        });
        let foundGuest = false;
        this.guests.forEach((guest) => {
            if (guest.guestName === guestName) {
                foundGuest = true;
            }
        });
        if (!foundGuest){
            return `This guest is not invited.`;
        }
        let indexGuest;
        for (let i = 0; i < this.guests.length; i++) {
            if (this.guests[i].guestName === guestName){
                indexGuest = i;
                break;
            }
        }
        let indexArticle;
        for (let i = 0; i < this.listOfArticles.length; i++) {
            if (this.listOfArticles[i].articleName === articleName){
                indexArticle = i;
                break;
            }
        }

        if (this.guests[indexGuest].points >= this.possibleArticles[articleModel]){
            this.guests[indexGuest].points -= this.possibleArticles[articleModel];
            this.guests[indexGuest].purchaseArticle ++;
            this.listOfArticles[indexArticle].quantity --;
        }else {
            return 'You need to more points to purchase the article.'
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

    };

    showGalleryInfo(criteria){
        let returnString = '';
        if (criteria === 'article'){
            returnString += `Articles information:\n`;
            this.listOfArticles.forEach((e)=> {
                returnString += `${e.articleModel} - ${e.articleName} - ${e.quantity}\n`;
            });
        }else if (criteria === 'guest'){
            returnString += `Guests information:\n`;
            this.guests.forEach((e)=> {
                returnString += `${e.guestName} - ${e.purchaseArticle}\n`;
            });
        }
        return returnString.trim();
    }
}




