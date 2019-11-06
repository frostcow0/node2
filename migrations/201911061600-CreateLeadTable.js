'use strict'
module.exports = {
    up:(queryInterface,Sequelize)=> {
        return queryInterface.createTable('Leads', {
            id: {
                allowNull:false,
                primaryKey:true,
                type:Sequelize.UUID,
                defaultValue:Sequlieze.UUIDV4,
            },
            createdAt: {
                allowNull:false,
                type:Sequlize.DATE,
            },
            updatedAt: {
                allowNull:false,
                type:Sequlize.DATE,
            },
            email: {
                allowNull:false,
                type:Sequlieze.STRING,
            },
        });
    },
    down:(queryInterface,Sequelize)=>{
        return queryInterface.dropTable('Leads');
    }
};