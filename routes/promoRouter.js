const express = require('express');
const bodyParser = require('body-parser');
const Promotions = require('../models/promotions');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.get((req,res,next) => {
  Promotions.find({})
  .then((promotions) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promotions);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  Promotions.create(req.body)
  .then((promotion) => {
      console.log('Promotion Created ', promotion);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promotion);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
  Promotions.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
});
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  // .get((req, res, next) => {
  //   res.end('Will send all the promotiones to you!');
  // })
  // .post((req, res, next) => {
  //   res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
  // })
  // .put((req, res, next) => {
  //   res.statusCode = 403;
  //   res.end('PUT operation not supported on /promotiones');
  // })
  // .delete((req, res, next) => {
  //   res.end('Deleting all promotiones');
  // });

promotionRouter.route('/:promotionId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send promotion ${req.params.promotionId} to you!`);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for this route');
  })
  .put((req, res, next) => {
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
  })
  .delete((req, res, next) => {
    res.end(`Deleting promotion ${req.params.promotionId}`);
  });

module.exports = promotionRouter;