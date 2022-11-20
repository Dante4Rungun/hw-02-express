const utils = require('../utils/utils')

exports.validate = (schema) => (req, res, next) => {
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
};