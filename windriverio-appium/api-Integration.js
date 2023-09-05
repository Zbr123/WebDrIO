const fetch = require('node-fetch');
let globalid = null;
class Integration {
    constructor() {
    }
    async createRun() {
        const response = await fetch('https://api.qase.io/v1/run/SHA', {
            method: 'POST',
            body: JSON.stringify({ title: 'automationRun-script2' }),
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Token: '00614d87aab83cdea86312855bd3919a38c90193ccce350f2f653ed125468271',
            },
        });
        const myJson = await response.json(); // extract JSON from the http response
        console.log('Running Create Run API');
        console.log(myJson);
        const data = JSON.stringify(myJson);
        const answer = JSON.parse(data);
        globalid = Number(answer.result.id);
        console.log(globalid);
        console.log(typeof globalid);
    }
    async afterMethodCall() {
        console.log('RUNNING AFTER METHOD');
        console.log('Running  Create Test API');
        await this.addCaseToTestRun(globalid);
        await console.log('Running  Complete Run API');
        await this.markRunWithCompleteStatus(globalid);
    }
    async markRunWithCompleteStatus(funcglobalid) {
        const response = await fetch('https://api.qase.io/v1/run/SHA/' + funcglobalid + '/complete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Token: '00614d87aab83cdea86312855bd3919a38c90193ccce350f2f653ed125468271',
            },
        });
        const myJson = await response.json();
        console.log(myJson);
    }
    async addCaseToTestRun(funcglobalid, status) {
        const response = await fetch('https://api.qase.io/v1/result/SHA/' + globalid, {
            method: 'POST',
            body: JSON.stringify({ status, case_id: 1 }),
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Token: '00614d87aab83cdea86312855bd3919a38c90193ccce350f2f653ed125468271',
            },
        });
        const myJson = await response.json(); // extract JSON from the http response
        console.log(myJson);
    }
    async createBulkTest() {
        const response = await fetch('https://api.qase.io/v1/result/SHA/24/bulk', {
            method: 'POST',
            body: JSON.stringify({
                results: [
                    {
                        case_id: 1,
                        status: 'passed',
                    }],
            }),
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Token: '00614d87aab83cdea86312855bd3919a38c90193ccce350f2f653ed125468271',
            },
        });
        const myJson = await response.json(); // extract JSON from the http response
        console.log(myJson);
    }
}
module.exports = new Integration();
