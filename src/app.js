import {logger} from "./utils/Logger.js";
import express from "express";
import {v4 as uuidv4} from "uuid"
import {error} from "winston";

logger.info('Session manager starting');

const app = express();
app.use(express.json())

const correlationId = express.Router();

correlationId.all('*', (req, res, next) => {
	if(req.body){
		if(!req.body.correlationId) {
			let cId = uuidv4();
			logger.debug('Correlation id being appended to request: '+ cId);
			req.body.correlationId = cId;
		}
		next()
	} else {
		logger.error('No body in request')
		throw new Error('Request has no body')
	}
})

app.use(correlationId)

app.get('/', (req, res, next) => {
	logger.info('Default get route hit...')
	res.send('Hello client');
})

app.listen(8080)