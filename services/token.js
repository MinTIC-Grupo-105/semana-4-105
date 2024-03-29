const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const models = require('../models');

const checkToken = async(token) =>{
    let localID = null;
    try {
        const { id } = await token.decode(token);
        localID = id;
    } catch (error) {
    }
    const user= await models.user.findOne({where:{
        id: localID,
        estado: 1
    }});
    if(user){
        const token = encode(user);
        return {
            token,
            rol: user.rol
        }
    }else{
        return false
    }
};

module.exports = {
    encode: async(user)=>{
        const token = jwt.sign({
            id: user.id, 
            name: user.nombre, 
            email: user.email,
            rol: user.rol,
            status: user.estado
        }, 'config.secret', {
            expiresIn: 86400, // expires in 24 hours
        });
        return token;
    },
    decode: async(token)=>{
        try {
            const { id } = await jwt.verify(token, 'config.secret');
            const user = await models.user.findOne({where:{
                id: id,
                estado: 1
            }});
            if(user) {
                return user;
            } else {
                return false;
            }

        } catch (error) {
            const newToken = await checkToken(token)
            return newToken
        }

    }

}