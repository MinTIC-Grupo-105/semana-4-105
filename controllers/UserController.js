const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tokenServices = require('../services/token')
 //cambiamos METODO Login por signin segun requerimiento del reto

exports.login = async(req, res, next) =>{
    try {
        const user = await models.user.findOne({where: {email: req.body.email}});
        if(user){
           const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
           if(passwordIsValid){
               //const token = services.token(user);
               const token = await tokenServices.encode(user);
                res.status(200).send({ 
                    auth: true, 
                    tokenReturn: token 
                 })
            }else{
                 res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            }
        }else{
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error->'
        })
        next(error);
    }
};

exports.add = async(req, res, next) =>{
    try {
        const user = await models.user.findOne({where: {email: req.body.email}});
        if(user){
            res.status(409).send({
                message: 'Sorry your request has a conflict with our system state, maybe the email is already'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await models.user.create(req.body);
            res.status(200).json(user);
        }

    } catch (error){
        res.status(500).send({
            message: 'Error->'
        })
        next(error);

    }
};


exports.list = async(req, res, next) =>{
    try {
        const user = await models.user.findAll();
        if(user){

            res.status(200).json(user);
        }else{
            res.status(404).send({
                message: 'There is not user in the system'
            })
        }
    } catch (error){
        res.status(500).send({
            message: 'Error||'
        })
        next(error);

    }
};

exports.update = async(req, res, next) =>{
    try {
        const user = await models.user.findOne({where: {email: req.body.email}});
        if(user){
            const user = await models.user.update({name: req.body.name},
            {
                where: {
                    email: req.body.email
                },
            });
            res.status(200).json(user);
        }else{
            res.status(404).send({
                message: 'User not found.'
            })
        }
    } catch (error){
        res.status(500).send({
            message: 'Error.'
        });
        next(error);

    }
};


exports.activate = async(req, res, next) =>{
    try {
        const user = await models.user.update({estado: 1},
            {
                where: {
                    id: req.body.id
                },
            });
            res.status(200).json(user);
    } catch (error){
        res.status(500).send({
            message: 'Error.'
        });
        next(error);

    }
};

exports.deactivate = async(req, res, next) =>{
    try {
        const user = await models.user.update({estado: 0},
            {
                where: {
                    id: req.body.id
                },
            });
            res.status(200).json(user);
    } catch (error){
        res.status(500).send({
            message: 'Error.'
        });
        next(error);

    }
};