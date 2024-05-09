const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoSanatize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const GameRouter = require('./Routes/Game');
const BannerRouter = require('./Routes/Banner');
const PlatformRouter = require('./Routes/Platform');
const GenreRouter = require('./Routes/Genre');
const GameLandingRouter = require('./Routes/GameLanding');
const TopGames = require('./Routes/TopGames');
const RandomGame = require('./Routes/RandomGame');
const ErrorHandler = require('./Middlewares/ErrorHandler');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// 1 ) Enviroment

dotenv.config({ path: './config.env' });

// 2) MiddleWares Globals

app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));
app.use(cors());

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true, trim: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3 Middleware Routes

app.use('/api/game', GameRouter);
app.use('/api/banner', BannerRouter);
app.use('/api/gamelanding', GameLandingRouter);
app.use('/api/platform', PlatformRouter);
app.use('/api/genre', GenreRouter);
app.use('/api/topGames', TopGames);
app.use('/api/randomGame', RandomGame);
app.use(ErrorHandler);
// 4 ) helmet Securety http header , Data Sanitazion against NOSQL Query Injection , Data Sanitazion against XSS

app.use(mongoSanatize());
app.use(xss());
app.use(hpp());
app.use(helmet());

// 5 ) Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Game API',
      version: '1.0.0',
      description: 'API Documentation for Game Backend',
      contact: {
        name: 'Alireza Khodadadi',
      },
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Local development server(Web Game)',
      },
      {
        url: 'https://web-game-backed.vercel.app',
        description: 'Production server(Web Game)',
      },
    ],
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'https',
          schema: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./doc.yaml'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
