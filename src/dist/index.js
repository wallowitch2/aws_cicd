var $c5L0i$sequelize = require("sequelize");
var $c5L0i$express = require("express");
var $c5L0i$path = require("path");
var $c5L0i$bodyparser = require("body-parser");
var $c5L0i$expresssession = require("express-session");
var $c5L0i$sessionfilestore = require("session-file-store");
var $c5L0i$methodoverride = require("method-override");
var $c5L0i$multer = require("multer");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireef3d"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireef3d"] = parcelRequire;
}
parcelRequire.register("5HTly", function(module, exports) {

var $427be69b332eaca5$require$DataTypes = $c5L0i$sequelize.DataTypes;
module.exports = (sequelize)=>{
    const User = sequelize.define("users", {
        id: {
            type: $427be69b332eaca5$require$DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: $427be69b332eaca5$require$DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: $427be69b332eaca5$require$DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: $427be69b332eaca5$require$DataTypes.STRING,
            allowNull: false
        },
        accounttype: {
            type: $427be69b332eaca5$require$DataTypes.STRING,
            allowNull: false
        },
        tel: {
            type: $427be69b332eaca5$require$DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: $427be69b332eaca5$require$DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false // timestamps 옵션을 false로 설정
    });
    return User;
};

});

parcelRequire.register("dChBU", function(module, exports) {

var $9e9c7c0d5e77e9a9$require$DataTypes = $c5L0i$sequelize.DataTypes;
module.exports = (sequelize)=>{
    const Product = sequelize.define("Products", {
        id: {
            type: $9e9c7c0d5e77e9a9$require$DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: $9e9c7c0d5e77e9a9$require$DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: $9e9c7c0d5e77e9a9$require$DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: $9e9c7c0d5e77e9a9$require$DataTypes.FLOAT,
            allowNull: false
        },
        image_url: {
            type: $9e9c7c0d5e77e9a9$require$DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: true // timestamps 옵션을 false로 설정
    });
    return Product;
};

});

parcelRequire.register("2oKQF", function(module, exports) {

var $1bf229ca14470b7e$require$DataTypes = $c5L0i$sequelize.DataTypes;
module.exports = (sequelize)=>{
    const Order = sequelize.define("Orders", {
        id: {
            type: $1bf229ca14470b7e$require$DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: $1bf229ca14470b7e$require$DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: $1bf229ca14470b7e$require$DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: $1bf229ca14470b7e$require$DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: $1bf229ca14470b7e$require$DataTypes.STRING,
            allowNull: false
        },
        order_date: {
            type: $1bf229ca14470b7e$require$DataTypes.DATE,
            defaultValue: $1bf229ca14470b7e$require$DataTypes.NOW
        }
    }, {
        timestamps: true // timestamps 옵션을 false로 설정
    });
    return Order;
};

});

parcelRequire.register("iKQpc", function(module, exports) {

var $da752c7b3dc3d0df$require$DataTypes = $c5L0i$sequelize.DataTypes;
module.exports = (sequelize)=>{
    const Delivery = sequelize.define("Delivery", {
        id: {
            type: $da752c7b3dc3d0df$require$DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: $da752c7b3dc3d0df$require$DataTypes.STRING,
            allowNull: false
        },
        memo: {
            type: $da752c7b3dc3d0df$require$DataTypes.STRING
        },
        order_id: {
            type: $da752c7b3dc3d0df$require$DataTypes.INTEGER,
            allowNull: false
        },
        delivery_address: {
            type: $da752c7b3dc3d0df$require$DataTypes.STRING,
            allowNull: false
        },
        delivery_date: {
            type: $da752c7b3dc3d0df$require$DataTypes.DATE,
            defaultValue: $da752c7b3dc3d0df$require$DataTypes.NOW
        },
        delivery_id: {
            type: $da752c7b3dc3d0df$require$DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false // timestamps 옵션을 false로 설정
    });
    return Delivery;
};

});

var $43d7963e56408b24$var$__dirname = "";





const $43d7963e56408b24$var$FileStore = $c5L0i$sessionfilestore($c5L0i$expresssession);

var $0f8d4f116da5b290$exports = {};

var $4525bc4cfeed6e03$exports = {};
$4525bc4cfeed6e03$exports = JSON.parse('{"username":"node","password":"","database":"shop","host":"192.168.219.31","dialect":"mysql"}');


const $0f8d4f116da5b290$var$sequelize = new $c5L0i$sequelize($4525bc4cfeed6e03$exports.database, $4525bc4cfeed6e03$exports.username, $4525bc4cfeed6e03$exports.password, {
    host: $4525bc4cfeed6e03$exports.host,
    dialect: $4525bc4cfeed6e03$exports.dialect,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
const $0f8d4f116da5b290$var$db = {};
$0f8d4f116da5b290$var$db.Sequelize = $c5L0i$sequelize;
$0f8d4f116da5b290$var$db.sequelize = $0f8d4f116da5b290$var$sequelize;

// 모델 파일들을 임포트하고 객체에 추가하세요
$0f8d4f116da5b290$var$db.User = (parcelRequire("5HTly"))($0f8d4f116da5b290$var$sequelize, $c5L0i$sequelize);

$0f8d4f116da5b290$var$db.Product = (parcelRequire("dChBU"))($0f8d4f116da5b290$var$sequelize, $c5L0i$sequelize);

$0f8d4f116da5b290$var$db.Order = (parcelRequire("2oKQF"))($0f8d4f116da5b290$var$sequelize, $c5L0i$sequelize);

$0f8d4f116da5b290$var$db.Delivery = (parcelRequire("iKQpc"))($0f8d4f116da5b290$var$sequelize, $c5L0i$sequelize);
$0f8d4f116da5b290$exports = $0f8d4f116da5b290$var$db;


var $a7f3433243898403$exports = {};

const $a7f3433243898403$var$router = $c5L0i$express.Router();

var $a7f3433243898403$require$User = $0f8d4f116da5b290$exports.User;
$a7f3433243898403$var$router.get("/login", (req, res)=>{
    // Render login page
    res.render("login");
});
$a7f3433243898403$var$router.post("/login", async (req, res)=>{
    // Handle user login
    const { username: username , password: password  } = req.body;
    try {
        const user = await $a7f3433243898403$require$User.findOne({
            where: {
                username: username,
                password: password
            },
            attributes: [
                "id",
                "username",
                "accounttype",
                "email"
            ]
        });
        console.log(user.username);
        if (user) {
            req.session.is_logined = true;
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.accounttype = user.accounttype;
            req.session.email = user.email;
            console.log(req.session.username);
            console.log("Session after login:", req.session); // 추가된 로그
            res.redirect("/");
        } else {
            console.log("login failed");
            res.redirect("/auth/login");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$a7f3433243898403$var$router.get("/logout", (req, res)=>{
    // Handle user logout
    req.session.destroy();
    res.redirect("/auth/login");
});
// Render the registration page
$a7f3433243898403$var$router.get("/register", (req, res)=>{
    res.render("register");
});
// Handle user registration
$a7f3433243898403$var$router.post("/register", async (req, res)=>{
    const { username: username , password: password , email: email , accounttype: accounttype , tel: tel , address: address  } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await $a7f3433243898403$require$User.findOne({
            where: {
                username: username
            }
        });
        if (existingUser) res.status(409).send("User already exists");
        else {
            // Create a new user
            const newUser = await $a7f3433243898403$require$User.create({
                username: username,
                password: password,
                email: email,
                accounttype: accounttype,
                tel: tel,
                address: address
            });
            // Redirect to the login page after successful registration
            res.redirect("/auth/login");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$a7f3433243898403$exports = $a7f3433243898403$var$router;


var $8403459c76d65f50$exports = {};

const $8403459c76d65f50$var$router = $c5L0i$express.Router();


var $8403459c76d65f50$require$Product = $0f8d4f116da5b290$exports.Product;
const $8403459c76d65f50$var$storage = $c5L0i$multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/images");
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const $8403459c76d65f50$var$upload = $c5L0i$multer({
    storage: $8403459c76d65f50$var$storage
});
$8403459c76d65f50$var$router.get("/", async (req, res)=>{
    try {
        const products = await $8403459c76d65f50$require$Product.findAll({
            where: {
                user_id: user_id
            }
        });
        res.render("products", {
            products: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$8403459c76d65f50$var$router.post("/", $8403459c76d65f50$var$upload.single("image_url"), async (req, res)=>{
    try {
        const { name: name , description: description , price: price  } = req.body;
        const image_url = req.file.filename;
        await $8403459c76d65f50$require$Product.create({
            name: name,
            description: description,
            price: price,
            image_url: image_url
        });
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$8403459c76d65f50$var$router.put("/:id", async (req, res)=>{
    try {
        const { id: id  } = req.params;
        const { name: name , price: price  } = req.body;
        await $8403459c76d65f50$require$Product.update({
            name: name,
            price: price
        }, {
            where: {
                id: id
            }
        });
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$8403459c76d65f50$var$router.delete("/:id", async (req, res)=>{
    try {
        const { id: id  } = req.params;
        await $8403459c76d65f50$require$Product.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$8403459c76d65f50$var$router.get("/add", (req, res)=>{
    res.render("add-product");
});
$8403459c76d65f50$exports = $8403459c76d65f50$var$router;


var $a1c49736cbdcab60$exports = {};

const $a1c49736cbdcab60$var$router = $c5L0i$express.Router();

var $a1c49736cbdcab60$require$Order = $0f8d4f116da5b290$exports.Order;
$a1c49736cbdcab60$var$router.get("/", async (req, res)=>{
    if (req.session.user_id) try {
        const user_id = req.session.user_id;
        let orders = null;
        if (req.session.accounttype === "delivery") {
            const state = "준비중";
            orders = await $a1c49736cbdcab60$require$Order.findAll({
                where: {
                    state: state
                }
            });
        } else orders = await $a1c49736cbdcab60$require$Order.findAll({
            where: {
                user_id: user_id
            }
        });
        res.render("orders", {
            orders: orders,
            user: req.session.username,
            accounttype: req.session.accounttype,
            user_id: req.session.user_id
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$a1c49736cbdcab60$var$router.post("/", async (req, res)=>{
    try {
        const { user_id: user_id , product_id: product_id , quantity: quantity  } = req.body;
        await $a1c49736cbdcab60$require$Order.create({
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        });
        res.redirect("/orders");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$a1c49736cbdcab60$var$router.put("/:id", async (req, res)=>{
    try {
        const { id: id  } = req.params;
        const { user_id: user_id , product_id: product_id , quantity: quantity  } = req.body;
        await $a1c49736cbdcab60$require$Order.update({
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        }, {
            where: {
                id: id
            }
        });
        res.redirect("/orders");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$a1c49736cbdcab60$var$router.delete("/:id", async (req, res)=>{
    try {
        const { id: id  } = req.params;
        await $a1c49736cbdcab60$require$Order.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/orders");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$a1c49736cbdcab60$exports = $a1c49736cbdcab60$var$router;


var $33eef66a573187f8$exports = {};

const $33eef66a573187f8$var$router = $c5L0i$express.Router();

var $33eef66a573187f8$require$Delivery = $0f8d4f116da5b290$exports.Delivery;

var $33eef66a573187f8$require$Order = $0f8d4f116da5b290$exports.Order;

var $33eef66a573187f8$require$User = $0f8d4f116da5b290$exports.User;
$33eef66a573187f8$var$router.get("/", async (req, res)=>{
    try {
        delivery_id = req.session.user_id;
        const deliveries = await $33eef66a573187f8$require$Delivery.findAll({
            where: {
                delivery_id: delivery_id
            }
        });
        res.render("deliveries", {
            deliveries: deliveries
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$33eef66a573187f8$var$router.post("/", async (req, res)=>{
    try {
        const { order_id: order_id  } = req.body;
        const status = "배송 중";
        const order = await $33eef66a573187f8$require$Order.findOne({
            where: {
                id: order_id
            }
        });
        if (order) {
            const user_id = order.user_id;
            console.log(user_id);
            user_info = await $33eef66a573187f8$require$User.findOne({
                where: {
                    id: user_id
                },
                attributes: [
                    "address",
                    "tel"
                ]
            });
            const delivery_address = user_info.dataValues.address;
            const delivery_tel = user_info.dataValues.tel;
            const delivery_id1 = req.session.user_id;
            console.log(delivery_id1);
            const memo = "";
            await $33eef66a573187f8$require$Delivery.create({
                status: status,
                memo: memo,
                order_id: order_id,
                delivery_address: delivery_address,
                delivery_tel: delivery_tel,
                delivery_id: delivery_id1
            });
            await $33eef66a573187f8$require$Order.update({
                state: status
            }, {
                where: {
                    id: order_id
                }
            });
        }
        res.redirect("/orders");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$33eef66a573187f8$var$router.put("/:id", async (req, res)=>{
    try {
        const { id: id  } = req.params;
        const { status: status , order_id: order_id , delivery_address: delivery_address  } = req.body;
        console.log(req.body);
        console.log(req.body.order_id);
        // If the status is '배송 완료', update the order state to '배송 완료'
        if (status === "배송 완료" || status === "보류") {
            await $33eef66a573187f8$require$Order.update({
                state: status
            }, {
                where: {
                    id: order_id
                }
            });
            await $33eef66a573187f8$require$Delivery.update({
                status: status
            }, {
                where: {
                    id: id
                }
            });
        }
        res.redirect("/deliveries");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$33eef66a573187f8$var$router.delete("/:id", async (req, res)=>{
    try {
        const { id: id  } = req.params;
        await $33eef66a573187f8$require$Delivery.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/deliveries");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
$33eef66a573187f8$exports = $33eef66a573187f8$var$router;



var $43d7963e56408b24$require$Product = $0f8d4f116da5b290$exports.Product;
const $43d7963e56408b24$var$app = $c5L0i$express();
const $43d7963e56408b24$var$port = 3000;
$0f8d4f116da5b290$exports.sequelize.sync().then(()=>{
    console.log("Database synced");
}).catch((error)=>{
    console.error("Error syncing database:", error);
});
$43d7963e56408b24$var$app.use($c5L0i$expresssession({
    secret: "keroro2424.",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));
$43d7963e56408b24$var$app.use($c5L0i$methodoverride("_method")); // post 요청을 put으로 변경 필요시 사용 html form 에서 '_method'를 이용하여 put으로 변경
$43d7963e56408b24$var$app.set("views", $c5L0i$path.join($43d7963e56408b24$var$__dirname, "views"));
$43d7963e56408b24$var$app.set("view engine", "ejs");
$43d7963e56408b24$var$app.use($c5L0i$express.static("public"));
$43d7963e56408b24$var$app.use($c5L0i$bodyparser.urlencoded({
    extended: false
}));
$43d7963e56408b24$var$app.use("/auth", $a7f3433243898403$exports);
$43d7963e56408b24$var$app.use("/products", $8403459c76d65f50$exports);
$43d7963e56408b24$var$app.use("/orders", $a1c49736cbdcab60$exports);
$43d7963e56408b24$var$app.use("/deliveries", $33eef66a573187f8$exports);
$43d7963e56408b24$var$app.use((req, res, next)=>{
    if (req.session.username || req.path === "/auth/login") next();
    else res.redirect("/auth/login");
});
$43d7963e56408b24$var$app.get("/", (req, res)=>{
    if (req.session.username) {
        console.log("Session in /index route:", req.session);
        res.redirect("/index");
    } else res.redirect("/auth/login");
});
$43d7963e56408b24$var$app.get("/index", async (req, res)=>{
    if (req.session.username) try {
        const products = await $43d7963e56408b24$require$Product.findAll();
        console.log("Session in /index route:", req.session);
        res.render("index", {
            user: req.session.username,
            accounttype: req.session.accounttype,
            products: products,
            user_id: req.session.user_id
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
    else res.redirect("/auth/login");
});
module.exports = function() {
    return new Promise((resolve, reject)=>{
        const server = $43d7963e56408b24$var$app.listen($43d7963e56408b24$var$port, ()=>{
            console.log(`Server running at http://localhost:${$43d7963e56408b24$var$port}`);
            resolve(server);
        });
    });
}; /*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/ 


//# sourceMappingURL=index.js.map
