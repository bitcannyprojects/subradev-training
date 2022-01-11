const chai = require('chai')
const chatHttp = require('chai-http')
const chaiPromised = require('chai-as-promised')
const expect = chai.expect
const server = require('../index')
const config = require('./test.config')
const { response } = require('express')


chai.use(chatHttp)
chai.use(chaiPromised)

describe('API Task', function () {
    it('sum check', function () {
        let sum = 10
        expect(sum).to.be.equal(10)
        expect(sum).to.be.a('number')
    })


    //test GET Route
    describe("Test GET Route", function () {

        describe("GET /get/all", function () {
            it('it expect all user', function (done) {
                chai.request(server)
                    .get("/get/all")
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record.rows[0]).to.have.all.keys('id', 'name', 'email', 'comment', 'createdAt', 'updatedAt')
                        done()
                    })
            })
        })

        describe("GET /get/id/:id", function () {
            it('it expect 1 user', function (done) {
                chai.request(server)
                    .get("/get/id/" + 1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record.id).to.be.equal(config.getid)
                        expect(response.body.record).to.have.all.keys('id', 'name', 'email', 'comment', 'createdAt', 'updatedAt')
                        done()
                    })
            })
        })

        describe("GET /get/name/:name", function () {
            it('it expect 1 user', function (done) {
                chai.request(server)
                    .get(`/get/name/${config.getname}`)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record.name).to.be.equal(`${config.getname}`)
                        expect(response.body.record).to.have.all.keys('id', 'name', 'email', 'comment', 'createdAt', 'updatedAt')
                        done()
                    })
            })
        })

        describe("GET /get/email/:email", function () {
            it('it expect 1 user', function (done) {
                chai.request(server)
                    .get(`/get/email/${config.getemail}`)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record.email).to.be.equal(`${config.getemail}`)
                        expect(response.body.record).to.have.all.keys('id', 'name', 'email', 'comment', 'createdAt', 'updatedAt')
                        done()
                    })
            })

        })

    })


    //test POST Route
    describe("Test Post Route", function () {

        describe("POST /query", function () {
            it('expect to POST new user by query', function (done) {
                chai.request(server)
                    .post("/post/query" + "?" + config.postquery)
                    //.send()
                    .end((err, response) => {
                        expect(response.status).to.be.equal(201)
                        expect(response.body.record).to.have.all.keys('id', 'name', 'email', 'comment', 'createdAt', 'updatedAt')
                        done()
                    })
            })
        })

        describe("POST /body", function () {
            it('expect to POST new user by body', function (done) {
                chai.request(server)
                    .post("/post/body")
                    .send(config.postbody)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(201)
                        expect(response.body.record).to.have.all.keys('id', 'name', 'email', 'comment', 'createdAt', 'updatedAt')
                        done()
                    })
            })
        })


    })


    //test PATCH Route
    describe("Test PATCH Route", function () {

        describe("PATCH /namebyid/:id/:name", function () {
            it("expect to update user name by id", function (done) {
                chai.request(server)
                    .patch("/update/namebyid/" + config.patchid1 + "/" + config.patchname1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record[0]).to.be.equal(1)
                        done()
                    })
            })
        })

        describe("PATCH /nameby/:name1/:name2", function () {
            it("expect to update user name by name", function (done) {
                chai.request(server)
                    .patch("/update/name/" + config.patchname2 + "/" + config.patchname3)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record[0]).to.be.equal(1)
                        done()
                    })
            })
        })

        describe("PATCH /emailbyid/:id/:email", function () {
            it("expect to update user email by id", function (done) {
                chai.request(server)
                    .patch("/update/emailbyid/" + config.patchid2 + "/" + config.patchemail1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record[0]).to.be.equal(1)
                        done()
                    })
            })
        })

        describe("PATCH /email/:name/:email", function () {
            it("expect to update user email by name", function (done) {
                chai.request(server)
                    .patch("/update/email/" + config.patchname4 + "/" + config.patchemail2)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record[0]).to.be.equal(1)
                        done()
                    })
            })
        })

        describe("PATCH /comment/:id/:comment", function () {
            it("expect to update user comment by id", function done() {
                chai.request(server)
                    .patch("/update/comment/" + config.patchid3 + "/" + config.patchcomment1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record[0]).to.be.equal(1)
                        done()
                    })
            })
        })

        describe("PATCH /comment/:name/:comment", function () {
            it("expect to update user comment by name", function (done) {
                chai.request(server)
                    .patch("/update/commentbyname/" + config.patchname5 + "/" + config.patchcomment2)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record[0]).to.be.equal(1)
                        //console.log(response.body);
                        done()
                    })
            })
        })

    })



    //test DELETE Route
    describe("Test DELETE Route", function () {

        describe("DELETE /id/:id", function () {
            it("expect to delete existing user", function (done) {
                chai.request(server)
                    .delete("/delete/id/" + config.deleteid)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record).to.be.equal(1)
                        //console.log(response.body.record);
                        done()
                    })
            })

            it("expect to not found user", function (done) {
                chai.request(server)
                    .delete("/delete/id/" + config.deleteid1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(404)
                        expect(response.body.record).to.be.equal(0)
                        //console.log(response.body.record);
                        done()
                    })
            })
        })


        describe("DELETE /name/:name", function () {
            it("expect to delete existing user", function (done) {
                chai.request(server)
                    .delete("/delete/name/" + config.deletename)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record).to.be.equal(1)
                        //console.log(response.body.record);
                        done()
                    })
            })

            it("expect to not found user", function (done) {
                chai.request(server)
                    .delete("/delete/name/" + config.deletename1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(404)
                        expect(response.body.record).to.be.equal(0)
                        //console.log(response.body.record);
                        done()
                    })
            })
        })


        describe("DELETE /email/:email", function () {
            it("expect to delete existing user", function (done) {
                chai.request(server)
                    .delete("/delete/email/" + config.deleteemail)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body.record).to.be.equal(1)
                        //console.log(response.body.record);
                        done()
                    })
            })

            it("expect to not found user", function (done) {
                chai.request(server)
                    .delete("/delete/email/" + config.deleteemail1)
                    .end((err, response) => {
                        expect(response.status).to.be.equal(404)
                        expect(response.body.record).to.be.equal(0)
                        //console.log(response.body.record);
                        done()
                    })
            })
        })
    })

})