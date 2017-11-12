import {QueryInterface, Sequelize} from 'sequelize';

const UserSeed = {
    up: (queryInterface: QueryInterface, sequelize: Sequelize) =>
        queryInterface.bulkInsert(
            'users',
            [
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'demo@demo.com'
                }
            ],
            {}
        ),
    down: (queryInterface: QueryInterface, sequelize: Sequelize) =>
        queryInterface.bulkDelete('users', null, {})
};

export default UserSeed;