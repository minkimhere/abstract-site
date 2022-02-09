class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        // Case1: 엘리먼트로 검사해서 추가하기
        if (this.boards.find((element) => element.name === board.name)) throw new error('에러입니다.');
        board.addBoard = true;
        this.boards.push(board);

        // Case2: 인덱스로 검사해서 추가하기
        // const boardIndex = this.boards.findIndex((i) => i.name === board.name);
        // if (boardIndex === -1) {
        //     board.addBoard = true;
        //     this.boards.push(board);
        // } else {
        //     throw new error('에러입니다.');
        // }
    }

    findBoardByName(board) {
        // Case1: 바로 엘리먼트 찾는 방법
        return this.boards.find((element) => element.name === board);

        // Case2: 인덱스 찾고 배열[인덱스]해서 엘리먼트 찾는 방법
        // const boardIndex = this.boards.findIndex((i) => i.name === board);
        // return this.boards[boardIndex];
    }
}

class Board {
    constructor(name) {
        if (!name) throw new error('에러입니다');
        this.name = name;
        this.articles = [];
    }

    publish(article) {
        if (!this.addBoard) throw new error('에러입니다.');
        article.publish = true;
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    }

    getAllArticles(article) {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (!subject || !content || !author) throw new error('에러입니다.');
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    reply(comment) {
        if (!this.publish) throw new error('에러입니다.');
        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (!content || !author) throw new error('에러입니다.');
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
