const jsonServer = require('json-server');
const multer = require('multer');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        let date = new Date();
        let imageFilename = date.getTime() + '_' + file.originalname;
        req.body.imageFilename = imageFilename;
        cb(null, imageFilename);
    }
  })
  
const bodyParser = multer({ storage: storage }).any();

server.use(bodyParser);
server.post('/products', (req, res, next) => {
    let date = new Date();
    req.body.createdAt = date.toISOString();

    if (req.body.price) {
        req.body.price = Number(req.body.price);
    }

    let hasErrors = false;
    let errors = {}

    if (req.body.name.length < 2) {
        hasErrors = true;
        errors.name = 'The name length should be at least 2 characters.' 
    }

    if (req.body.brand.length < 2) {
        hasErrors = true;
        errors.brand = 'The brand length should be at least 2 characters.' 
    }

    if (req.body.category.length < 2) {
        hasErrors = true;
        errors.category = 'The category length should be at least 2 characters.' 
    }

    if (req.body.price < 0) {
        hasErrors = true;
        errors.price = 'The price value should be at greater than 0.' 
    }

    if (req.body.description.length < 15) {
        hasErrors = true;
        errors.description = 'The description length should be at least 15 characters' 
    }

    if (hasErrors) {
        res.status(400).jsonp(errors);

        return
    }

    next();
})

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running.');
});
