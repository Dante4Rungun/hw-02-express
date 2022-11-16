const utils = require('../utils/utils')

exports.validate = (schema) => (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json(
      utils.createResponse("400", "missing fields", true).data
    )
  }
  else {
    const {
      error
    } = schema.validate(req.body);
    if (error) {
      res.status(400)
        .send(
          utils.createResponse("400",error.details[0].message,true) 
        );
    } else {
      next();
    }
  }
};