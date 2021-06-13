import {logger} from "./utils/Logger.js";
import express from "express";

logger.info('Session manager starting');

const app = express();

app.get('/', (req, res, next) => {
	logger.info('Default get route hit')
	res.send('Hello client');
})

app.listen(8080)