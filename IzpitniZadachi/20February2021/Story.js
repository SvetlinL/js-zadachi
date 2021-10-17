// noinspection DuplicatedCode

class Story{
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.likesCount = Number(0);
        this.idCount = Number(0);
        this.sameId = 0;
        this.replyId = 0.0;
    }


    get likes() {
        if (this._likes.length === 0){
            return `${this.title} has 0 likes`;
        }else if (this.likesCount === 1){
            return `${this._likes[0]} likes this story!`
        }else {
            return `${this._likes[0]} and ${this.likesCount-1} others like this story!`;
        }
    }

    like(username){
        if (this._likes.some(user=> user === username)){
            throw new Error("You can't like the same story twice!");
        }else if (username === this.creator){
            throw new Error("You can't like your own story!");
        }else {
            this._likes.push(username);
            this.likesCount++;
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username){
        if (this._likes.some(user=> user === username)){
            this.likesCount --;
            let index = this._likes.indexOf(username);
            this._likes.splice(index,1);
            return `${username} disliked ${this.title}`;
        }else {
            throw new Error("You can't dislike this story!");
        }
    }

    wtf(entryId) {
        if (this.sameId === entryId){
            this.replyId += 0.1;
            return entryId + this.replyId;
        }else {
            this.sameId = entryId;
            this.replyId = 0.0;
            this.replyId += 0.1;
            return entryId + this.replyId;
        }
    }

    comment(username, content , id){
        if (id === undefined || !this._comments.some(entry => entry.id === id )){
            this.idCount++;
            this._comments.push({
                id: this.idCount,
                username: username,
                content: content,
                replies: []
            });
            return `${username} commented on ${this.title}`;
        }else {
            this._comments.forEach(entry=> {
               if (entry.id === id){
                   entry.replies.push({
                       id: this.wtf(entry.id),
                       username: username,
                       content: content
                   });
               }
            });
            return "You replied successfully";
        }


    }

    toString(sortingType){

        let resultString = '';
        resultString += `Title: ${this.title}\n`;
        resultString += `Creator: ${this.creator}\n`;
        resultString += `Likes: ${this.likesCount}\n`;
        resultString += `Comments:\n`;

        if (this._comments.length === 0){
            return resultString.trim();
        }

        if (sortingType === 'asc'){
            this._comments.sort((a,b)=> a.id-b.id)
                .forEach((entry)=> {
                    resultString += `-- ${entry.id}. ${entry.username}: ${entry.content}\n`;
                    if (entry.replies.length !== 0){
                        let replyString = '';
                        entry.replies.sort((a,b)=> a.id-b.id)
                            .forEach((reply) =>{
                                resultString += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                            });
                        resultString += replyString.trim();
                   }
                });
            return resultString.trim();

        }else if (sortingType === 'desc'){
            this._comments.sort((a,b)=> b.id - a.id)
                .forEach((entry)=> {
                    resultString += `-- ${entry.id}. ${entry.username}: ${entry.content}\n`;
                    if (entry.replies.length !== 0){
                        let replyString = '';
                        entry.replies.sort((a,b)=> b.id-a.id)
                            .forEach((reply) =>{
                                resultString += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                            });
                        resultString += replyString.trim();
                    }
                });
            return resultString.trim();

        }else if (sortingType === 'username'){
            this._comments.sort((a,b)=> a.username.localeCompare(b.username))
                .forEach((entry)=> {
                    resultString += `-- ${entry.id}. ${entry.username}: ${entry.content}\n`;
                    if (entry.replies.length !== 0){
                        let replyString = '';
                        entry.replies.sort((a,b)=> a.username.localeCompare(b.username))
                            .forEach((reply) =>{
                                resultString += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                            });
                        resultString += replyString.trim();
                    }
                });
            return resultString.trim();
        }
    }
}