class Response {

    constructor(private status: string, private code: number,
        private mesg: string,
        private respBody: object) {

    }

    get message() {
        return this.mesg;
    }

    set message(msg: string) {
        this.mesg = msg;
    }

    get responseBody() {
        return this.respBody;
    }

    set responseBody(respBody: object) {
        this.respBody = respBody;
    }
}

export default Response