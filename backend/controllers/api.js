getAPI = (req, res, next) => {
    res.status(200).send({"temp data": 'JORDAN IS GAY'});
  };
  
  module.exports = { getAPI };