exports.validate = (schema) => (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({"message": "missing fields"})
  }  
  else {
    const {
      error
    } = schema.validate(req.body);
    if (error) {
      res.status(400).json(error.details[0].message)
    } else {
      next();
    }
  }
};