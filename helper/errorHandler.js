const errHandler=(err, req, res, next) => {
    (process.env.NODE_ENV == 'dev') ? res.status(err.status).json({ success: 0, message: err.message, stack: err.stack })
       : res.status(err.status).json({ success: 0, message: err.message })
   }
   module.exports=errHandler