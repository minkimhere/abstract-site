class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const boardIndex = this.boards.findIndex((i) => i.name === board.name);
        if (boardIndex === -1) {
            board.addBoard = true;
            this.boards.push(board);
        } else {
            throw new error('에러입니다.');
        }
    }

    findBoardByName(board) {
        return this.boards.find((element) => element.name === board);
    }
}

class Board {
    constructor(name) {
        if (name === null || name === '') {
            return error;
        } else {
            this.name = name;
            this.articles = [];
        }
    }

    publish(article) {
        if (!this.addBoard) {
            throw new error('에러입니다.');
        } else {
            article.publish = true;
            article.id = this.name + '-' + Math.random();
            article.createdDate = new Date().toISOString();
            this.articles.push(article);
        }
    }

    getAllArticles(article) {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if ((subject, content, author === null || subject, content, author === '')) {
            return new error('에러입니다.');
        } else {
            this.subject = subject;
            this.content = content;
            this.author = author;
            this.comments = [];
        }
    }

    reply(comment) {
        if (!this.publish) {
            throw new error('에러입니다.');
        } else {
            comment.createdDate = new Date().toISOString();
            this.comments.push(comment);
        }
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if ((content, author === null || content, author === '')) {
            throw new error('에러입니다.');
        } else {
            this.content = content;
            this.author = author;
        }
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
