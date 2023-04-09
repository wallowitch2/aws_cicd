const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const methodOverride = require('method-override');

const db = require('./models');
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/product');
const ordersRouter = require('./routes/orders');
const deliveriesRouter = require('./routes/deliveries');

const { Product } = require('./models');

const app = express();
const port = 80;

db.sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.use(session({
  secret: 'keroro2424.', // 세션 암호화에 사용되는 비밀키
  resave: false, // 변경이 없어도 세션을 항상 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장할지 여부
  cookie: { secure: false }, // 쿠키 설정 (https를 사용하는 경우 secure: true로 설정)

}));
  
app.use(methodOverride('_method'));   // post 요청을 put으로 변경 필요시 사용 html form 에서 '_method'를 이용하여 put으로 변경

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/deliveries', deliveriesRouter);

app.use((req, res, next) => {
  if (req.session.username || req.path === '/auth/login') {
    next();
  } else {
    res.redirect('/auth/login');
  }
});

app.get('/', (req, res) => {
  if (req.session.username) {
    console.log('Session in /index route:', req.session);
    res.redirect('/index');
  } else {
    res.redirect('/auth/login');
  }
});

app.get('/index', async (req, res) => {
  if (req.session.username) {
    try {
      const products = await Product.findAll();
      console.log('Session in /index route:', req.session);
      res.render('index', { user: req.session.username, accounttype: req.session.accounttype, products, user_id : req.session.user_id});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  } else {
    res.redirect('/auth/login');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
