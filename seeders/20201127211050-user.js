'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'prueba@gmail.com',
            password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
            rol: 'Administrador',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};


// 'use strict';
// //crear registros en la BD
// module.exports = {
//     up: async(queryInterface, Sequelize) => {
//         return queryInterface.bulkInsert('users', [{
//             name: 'carlos',
//             email: 'ejemplo@gmail.com',
//             password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
//             createdAt: new Date(),
//             updatedAt: new Date(),

//             name: 'Felipe',
//             email: 'luisf5588@gmail.com',
//             password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
//             rol: 'Administrador',
//             createdAt: new Date(),
//             updatedAt: new Date(),

//             name: 'Douglas',
//             email: 'luisf5588@gmail.com',
//             password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
//             createdAt: new Date(),
//             updatedAt: new Date(),

//             name: 'Fabian',
//             email: 'luisf5588@gmail.com',
//             password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
//             createdAt: new Date(),
//             updatedAt: new Date(),

//             name: 'Santiago',
//             email: 'luisf5588@gmail.com',
//             password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
//             rol: 'Vendedor',
//             createdAt: new Date(),
//             updatedAt: new Date(),

//             name: 'Felipe',
//             email: 'luisf5588@gmail.com',
//             password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
//             rol: 'Administrador',
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         }]);
//     },

//     down: async(queryInterface, Sequelize) => {
//         return queryInterface.bulkDelete('users', null, {});

//     }
// };