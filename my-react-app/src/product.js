const express = Require('express');
const {getproducts} = require('./controllers/productController');

const router = express.Router();

router.route('/products').get(getproducts);
router.route('/products/:id').get(getproducts);

module.exports = router;






    




