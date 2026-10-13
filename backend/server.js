const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
const bcrypt = require("bcrypt")
const multer = require("multer")
const fs=require("fs")

const mongoPath = "mongodb://kamaljeetkaur78144_db_user:Ty5jjV7Dskv9naPa@ac-ogrurtz-shard-00-00.w46tf9k.mongodb.net:27017,ac-ogrurtz-shard-00-01.w46tf9k.mongodb.net:27017,ac-ogrurtz-shard-00-02.w46tf9k.mongodb.net:27017/?ssl=true&replicaSet=atlas-uwy0od-shard-0&authSource=admin&appName=projectCluster/VegetableStore"



app.set("etag", false)
app.use(express.json())

const corsOptions = {
    origin: ["https://project-nine-alpha-32.vercel.app", "http://localhost:5173"],
    credentials: true
}
app.use(cors(corsOptions))
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private")
    next()
})
app.listen(9000, () => { console.log("server is runnig") })
mongoose.connect(mongoPath)
    .then(() => { console.log("database is connected") })
    .catch((err) => { console.log(err) })

const detail = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    Role: String
})

const register = mongoose.model("Register", detail, "Regiter")

// register api


app.post("/api/post", async (req, res) => {
    const finduser = await register.findOne({ email: req.body.email })
    if (finduser) {
        res.send({ statuscode: 2, msg: "email is already registered" })

    }
    else {

        const hashpass = bcrypt.hashSync(req.body.password, 10)
        const result = await register({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashpass,
            Role: "User"
        })
        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1, msg: "Registeration successfull" })
        }
        else {
            res.send({ statuscode: 0, msg: "an error occured " })
        }
    }



})


// get api created from register schema and model and applied in user.jsx

app.get("/api/user", async (req, res) => {
    const userdata = await register.find()
    if ( userdata) {
        res.send({
            statuscode: 1, registeruser:  userdata
        })
    }
    else {
        res.send({
            statuscode: 0
        })
    }
})


// delete api  of user.jsx

app.delete("/api/deleteuser/:id", async (req, res) => {
    const del = await register.deleteOne({ _id: req.params.id })
    if (del) {
        res.send({ statuscode: 1, })
    }
    else {
        res.send({ statuscode: 0, })
    }
})






// login api

app.post("/api/login", async (req, res) => {



    if (req.body.email == "Admin@gmail.com" && req.body.password == "Admin@123") {
        res.send({ statuscode: 3, msg: "welcome admin" })
    } else {
        const userfind = await register.findOne({ email: req.body.email })

        if (userfind) {
            const hashpass = userfind.password
            const matchpass = bcrypt.compareSync(req.body.password, hashpass)

            if (matchpass) {
                res.send({ statuscode: 1, msg: "Login successful", role: "User", id: userfind._id })
            }
            else {
                res.send({ statuscode: 0, msg: "incorrect password" })
            }
        }
        else {
            res.send({ statuscode: 2, msg: "no user found register first " })
        }
    }

})


const contact = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
})

const help = mongoose.model("contact", contact, "contact")


// contact api

app.post("/api/contact", async (req, res) => {
    const result = await help({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })
    const response = await result.save()
    if (response) {
        res.send({ statuscode: 1, msg: "message is sent successfully" })

    }
    else {
        res.send({ statuscode: 0, msg: "an error occured" })
    }
})


// complaint get api create by using schema and model of contact api and applied in complaint.jsx

app.get("/api/complaint", async (req, res) => {
    const comp = await help.find()
    if (comp) {
        res.send({
            statuscode: 1, complaintdata:comp
        })
    }
    else {
        res.send({
            statuscode: 0
        })
    }

})





// multer setup


let image;

const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../project/public/uploads")
    },
    filename: (req, file, cb) => {
        image = Date.now() + "-" + file.originalname
        cb(null, image)
    }
})

const upload = multer({ storage: mystorage })

const category = mongoose.Schema({
    catname: String,
    catimg: String
}, { versionKey: false })

const catmodel = mongoose.model("Category", category, "Category")

// Category post api

app.post("/api/addcategory", upload.single("image"), async (req, res) => {
    const result = await catmodel({
        catname: req.body.catname,
        catimg: image
    })
    const response = await result.save()
    if (response) {
        res.send({ statuscode: 1, msg: "catergory stored" })
    }
    else {
        res.send({ statuscode: 0, msg: "catergory is not stored" })
    }
})

// category get api 

app.get("/api/getcategory", async (req, res) => {
    const foundcat = await catmodel.find()
    if (foundcat) {
        res.send({
            statuscode: 1, category: foundcat
        })
    }
    else {
        res.send({
            statuscode: 0
        })
    }

})



// delete api  of category

app.delete("/api/deletedata/:id", async (req, res) => {
    const del = await catmodel.deleteOne({ _id: req.params.id })
    if (del) {
        res.send({ statuscode: 1, msg: "data is deleted" })
    }
    else {
        res.send({ statuscode: 0, msg: "an error occurred" })
    }
})


// update api of category

app.put("/api/updatedata/:id",upload.single("image"), async (req, res) => { 
    if(!req.file){
        catimg=req.body.oldpic
    }
    else{
        fs.unlink("./public/uploads"+req.body.oldpic,(err)=>{
            if(err){
                console.log("file is not deleted")
            }
            else{
                console.log("file is deleted ")
            }
        })
    }






    const up = await catmodel.findByIdAndUpdate({_id:req.params.id }, {
        $set: {
            catname: req.body.name,
            catimg:image

        }
    })
    if (up) {
        res.send({ statuscode: 1})
    }
    else { res.send({ statuscode: 0 }) }
})


// product schema and model

const productSchema = mongoose.Schema({
    categoryname: String,
    name: String,
    price: String,
    detail: String,
    image: String
}, { versionKey: false })

const productModel = mongoose.model("Product", productSchema, "Product")

// addproduct api 

app.post("/api/addproduct", upload.single("image"), async (req, res) => {
    {

        const result = new productModel({
            categoryname: req.body.catname,
            name: req.body.name,
            price: req.body.price,
            detail: req.body.detail,
            image: image
        })

        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1 })
        } else {
            res.send({ statuscode: 0 })
        }
    }
})

// add product get api 

app.get("/api/getproduct", async (req, res) => {
    {
        const foundproduct = await productModel.find()
        if (foundproduct) {
            res.send({ statuscode: 1, product: foundproduct, foundproduct: foundproduct })
        } else {
            res.send({ statuscode: 0 })
        }
    }
})


// Add product delete api 

app.delete("/api/deleteproduct/:id", async (req, res) => {
    const del = await productModel.deleteOne({ _id: req.params.id })
    if (del) {
        res.send({ statuscode: 1 })
    }
    else {
        res.send({ statuscode: 0 })
    }
})





//find products by category 

app.get("/api/productfind/:id", async (req, res) => {

    const findproduct = await productModel.find({ categoryname: req.params.id })
    if (findproduct.length > 0) {
        res.send({ statuscode: 1, products: findproduct })
    }
    else {
        res.send({ statuscode: 0 })
    }
})


// find product by detail

app.get("/api/detail/:id", async (req, res) => {
    const productdetail = await productModel.findOne({ _id: req.params.id })
    console.log(req.params.id)
    if (productdetail) {
        res.send({ statuscode: 1, product: productdetail })
    }
    else {
        res.send({ statuscode: 0 })
    }
})

// get api of fruits created by product model ,schema and applied in home.jsx 


app.get("/api/fruits", async (req, res) => {
    const frt = await productModel.find({categoryname:"6aa7921f7a3a7819a2e2feed"})
    if ( frt.length>0) {
        res.send({
            statuscode: 1, fruitsdata:  frt
        })
    }
    else {
        res.send({
            statuscode: 0
        })
    }
})


// get api of vegetables created by product model ,schema and applied in home.jsx 


app.get("/api/vegetables", async (req, res) => {
    const veg = await productModel.find({categoryname:"6abb3c33e2d6e230da8f5b68"})
    if ( veg.length>0) {
        res.send({
            statuscode: 1, vegetablesdata: veg
        })
    }
    else {
        res.send({
            statuscode: 0
        })
    }
})





// add to cart schema,model,apis


const cart = mongoose.Schema({
    userid: String,
    productid: String,
    name: String,
    price: Number,
    image: String,
    quantity: Number
})

const addtocart = mongoose.model("Addtocart", cart, "Addtocart")


// check cart then post api of add to cart  and apply on detail page 

app.post("/api/addtocart", async (req, res) => {
    const findcart = await addtocart.findOne({ productid: req.body.productid })
    if (findcart && findcart.userid == req.body.userid) {
        res.send({ statuscode: 3 })
       
    }
    else {
      
        const add = await addtocart({
            userid: req.body.userid,
            productid: req.body.productid,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            quantity: req.body.quantity
        })

        const cart = await add.save()
        if (cart) {
            res.send({ statuscode: 1})
        }
        else { res.send({ statuscode: 0 }) }
    }



})


// get api of add to cart by using  apply on add to cart

app.get("/api/addtocart/:id", async (req, res) => {
    const cart = await addtocart.find({ userid: req.params.id })


    if (cart) {
        res.send({ statuscode: 1, alldataa: cart })
    }
    else {
        res.send({ statuscode: 0 })
    }
})


// delete api of add to cart and it will apply in add to cart page 


app.delete("/api/deletecart/:id", async (req, res) => {
    const del = await addtocart.deleteOne({ _id: req.params.id })
    if (del) {
        res.send({ statuscode: 1 })
    }
    else {
        res.send({ statuscode: 0 })
    }
})

// delete all cart api which will be applied in checkout page after order placesd and in cart page as well


app.delete("/api/emptycart/:id", async (req, res) => {
    const del = await addtocart.deleteMany({ userid: req.params.id })
    if (del.deletedCount>0) {
        res.send({ statuscode: 1 })
    }
    else {
        res.send({ statuscode: 0 })
    }
})




// schema and model of whislist 



const whis = mongoose.Schema({

    productid: String,
    userid: String,
    name: String,
    image: String,
    price: Number
})

const whismodel = mongoose.model("Whislist", whis, "Whislist")


// whislist post api  and apply in detail paage

app.post("/api/whislist", async (req, res) => {

    const getproo = await whismodel.findOne({ productid: req.body.productid, userid: req.body.userid })
    if (getproo) {
        res.send({ statuscode: 2 })
    }
    else {
        const whispro = await whismodel({
            userid: req.body.userid,
            productid: req.body.productid,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        })
        const result = await whispro.save()
        if (result) {
            res.send({ statuscode: 1 })
        }
        else {
            res.send({ statuscode: 0 })
        }
    }
})




// get api of whislist and apply on whislist page 

app.get("/api/getwhislist/:id", async (req, res) => {
    const getproo = await whismodel.find({ userid: req.params.id })


    if (getproo) {
        res.send({ statuscode: 1, getproduct: getproo })
    }
    else {
        res.send({
            statuscode: 0
        })

    }



})




//  delete api of whislist 

app.delete("/api/deletewhislist/:id", async (req, res) => {
    const del = await whismodel.deleteOne({ _id: req.params.id })
    if (del) {
        res.send({ statuscode: 1 })
    }
    else {
        res.send({ statuscode: 0 })
    }
})







// schema and model of checkout page 




const check = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    payment: String,
    userid: String,
    OrderId:String,
    Products:[{productid:String,productname:String,qnty:Number}],
    Totalprice:Number
})

const Checkoutmodel = mongoose.model("Checkout", check, "Checkout")


// post api of checkout page 

app.post("/api/checkout", async (req, res) => {
    try {
        const checkk = await Checkoutmodel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            payment: req.body.payment,
            userid: req.body.userid,
            OrderId:req.body.odrid,
            Products:req.body.productdata,
            Totalprice:req.body.grandtotal

        })
        const result = await checkk.save()
        if (result) {
            res.send({
                statuscode: 1
            })
        }
        else {
            res.send({
                statuscode: 0
            })
        }
    } catch (err) {
        res.send({
            statuscode: 0, msg: err.message
        })
    }
})


// get api of all orders page and its make by using checkout model,schema and applied in allorder.jsx

app.get("/api/allorders",async(req,res)=>{
    const order=await Checkoutmodel.find()
    if(order){
        res.send({statuscode:1, allorders:order})
    }
    else{
        res.send({statuscode:0})
    }
})

// get api of my orders page and its make by using checkout model,schema and applied in my orders page 

app.get("/api/myorders/:id", async (req, res) => {
    const myproo = await Checkoutmodel.find({ userid: req.params.id })


    if (myproo) {
        res.send({ statuscode: 1, myorderss: myproo })
    }
    else {
        res.send({
            statuscode: 0
        })

    }



})



// blog schema and model 

const blog=mongoose.Schema({

    blogtitle:String,
    detail:String,
    image:String,
    time:String,



},{versionKey:false})

const blogmodel=mongoose.model("Blog",blog,"Blog")


// post api of blog page 


app.post("/api/blog", upload.single("image"),async(req,res)=>{
const blogg=await blogmodel({
    blogtitle:req.body.title,
    detail:req.body.detail,
    image:image,
    time:new Date().toLocaleString()
})
const result=await blogg.save()
if(result){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})

// get api of blog from page blog.jsx  and applied in allblogs.jsx


app.get("/api/getblogs",async(req,res)=>{
    const getb=await blogmodel.find()
    if(getb){
        res.send({statuscode:1, getblogs:getb})
    }
    else{
        res.send({statuscode:0})
    }
})


// get api of blog from page blog.jsx  and applied in blogdetail.jsx


app.get("/api/blogdetail/:id",async(req,res)=>{
    try {
        const getde=await blogmodel.findOne({_id:req.params.id})
        if(getde){
            res.send({statuscode:1, blogdetails:getde})
        }
        else{
            res.send({statuscode:0})
        }
    }
    catch(err) {
        res.send({statuscode:0})
    }
})

