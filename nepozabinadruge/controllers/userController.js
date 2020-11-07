var request = require('request');

module.exports = {

    /*create: function (req, res) {
        const ec = new ecdsa.ec('secp256k1');
        var key = ec.genKeyPair();
        var privateKey = key.getPrivate().toString(16);
        var publicKey=key.getPublic().encode('hex');
        var user = new userModel({
			name : req.body.name,
			surname : req.body.surname,
			username : req.body.username,
			password : req.body.password,
            email : req.body.email,
            publicKey: publicKey,
            privateKey: privateKey,
            money: 0

        });

        bcrypt.hash(user.password, 10, function (err, hash) {
            user.password = hash;
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when creating user',
                        error: err
                    });
                }
                request.get("http://127.0.0.1:5000/peers", function(err, res, peers){
                    peers=JSON.parse(peers);
                    var url="http://127.0.0.1:"+peers[0].port+"/blocks/";
                    request.post(url, function(err, res,  data){}).form({type:0, address:user.publicKey});
                });
                req.session.userId = user._id;
                var loged = {userid: req.session.userId};
                var data = {t1:loged};
                return res.render('user/home', data);
            });
        });    
    },*/

    /*update: function (req, res) {
        userModel.findOne({_id: req.session.userId}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.name = req.body.name ? req.body.name : user.name;
			user.surname = req.body.surname ? req.body.surname : user.surname;
            user.username = req.body.username ? req.body.username : user.username;
            user.email = req.body.email ? req.body.email : user.email;
            if(req.body.password){
                bcrypt.hash(req.body.password, 10, function (err, hash) {
                    user.password = hash;
                    user.save(function (err, user) {
                        if (err) {
                            return res.status(500).json({
                                message: 'Error when updating user.',
                                error: err
                            });
                        }
        
                        return res.redirect('profil');
                    });
                }); 
            }
        });
    },*/

    /*remove: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },*/

    /*login: function (req, res, next) {
        userModel.authenticate(req.body.username, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong username or password.');
                err.status = 401;
                return res.render('user/login', {error:"Napačno geslo!"});
            } else {
                req.session.userId = user._id;
                var loged = {userid: req.session.userId};
                var data = {t1:loged};
                return res.render('user/home', data);
            }
        })
    },*/

    /*logout: function (req, res, next) {
        if (req.session) {
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('../../');
                }
            });
        }
    },*/

    showLogin: function (req, res) {
        res.render('user/login');
    },

    showRegister: function (req, res) {
        res.render('user/register');
    },

    /*showProfil: function (req, res) {
        userModel.findOne({_id: req.session.userId}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            req.session.userId = user._id;
            var loged = {userid: req.session.userId};
            var data = {t1:loged, t2:user};
            res.render('user/profil', data);
        });  
    },*/

    /*showHome: function (req, res) {
        var loged = {userid: req.session.userId};
        var data = {t1:loged};
        res.render('user/home', data);
    }*/
};
