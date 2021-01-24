import express from 'express';
import bodyParser from 'body-parser';
let timediff=require('timediff');

const startDate = new Date();
/**
 * Simple Web App that have only 2 endpoint:
 *
 * - hello?name=Somebody: print "hello Somebody" in text format
 * - health : print a response "I am alive"
 */

(async () => {

    // Init the Express application
    const app = express();

    // Set the network port
    const port = process.env.PORT || 8080;

    // Use the body parser middleware for post requests
    app.use(bodyParser.json());

    /**
     * Say hello.
     *
     */
    app.get('/hello', async (req, res) => {
        let {name} = req.query;
        if (!name) {
            name = 'Unknown';
        }
        res.status(200).send(`Hello ${name}`);
    });

    app.get('/health', async (req, res) => {
        let dt: any = timediff(startDate, new Date());
        let fmt: string=`Uptime server: ${dt.years} Years ${dt.months} Months ${dt.weeks} Weeks ${dt.days} Days ${dt.hours} Hours ${dt.minutes} Minutes ${dt.seconds} Seconds ${dt.milliseconds} Milliseconds`;
        // res.status(200).send(dt);
        let upobj:object =  {
            start: startDate,
            uptime: fmt
        }
        res.status(200).send(upobj);
    });

    app.get('/', async (req, res) => {
        res.status(200).send('try GET /hello?name=ANameThatYouWant or GET /health');
    });


    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
