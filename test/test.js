const request = require("supertest")
const app = require("../app")

describe("API Test",()=>{

    it("GET / should return message", async()=>{

        const res = await request(app).get("/")

        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe("DevSecOps Mini Project Running")

    })

})