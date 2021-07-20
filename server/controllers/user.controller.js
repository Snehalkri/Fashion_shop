const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const User = mongoose.model('User');
const nodemailer = require('nodemailer');
module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.mobile = req.body.mobile;
    user.dob = req.body.dob;
    user.address = req.body.address;
   
    user.save((err, doc) => {
        if (!err) {
            async function main() {
                // Generate test SMTP service account from ethereal.email
                // Only needed if you don't have a real mail account for testing


                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: "snehalkumdh@gmail.com", // generated ethereal user
                        pass: "$nehalkri@104", // generated ethereal password
                    },
                });

                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Fashion Shop" <snehalkumdh@gmail.com>', // sender address
                    to: doc.email, // list of receivers
                    subject: "Successfully Registered to Fashion Shop!", // Subject line
                    text: "Hi User,", // plain text body
                    html: '<b>Welcome to Fashion Shop!</b><p>You have successfully registered.Thank you for reaching us.</p><p>Happy Shopping!</p><p>Thanks & Regards,<br>Snehal Kumari',
                });
            }

            main().catch(console.error);
            res.send(doc);

        } else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else {
                //lodash_.pick fuction:pick name,email,mb,dob from the object
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email', 'mobile', 'dob', 'address','img']) });
            }
        }
    );
}

module.exports.update = (req,res)=>{
    let userData = req.body;
    console.log(userData);
    User.findByIdAndUpdate({_id:req._id} , userData , (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.status(200).send(result)
        }
    })
}

