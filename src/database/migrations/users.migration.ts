export class UsersMigration {
    static up(queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            name: Sequelize.STRING,
            isBetaMember: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }
        });
    }

    static down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
}