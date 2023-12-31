// Dependencies
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// Functions
// GET
// GET all terms
async function getUserById(id) {
    const rows = await db.query(
        `SELECT * FROM users WHERE id = ${id}`
    );
    const data = helper.emptyOrRows(rows);

    return {
        data,
    }
}


// POST
// POST new terms
async function newUser(user) {
    const result = await db.query(
        `INSERT INTO users
        (firstName, lastName, username, email, admin)
        VALUES
        ('${user.firstName}', '${user.lastName}', '${user.username}', '${user.email}', '${user.admin}')`
    );

    let message = 'Error adding new term!';

    if (result.affectedRows) {
        message = 'Term added successfully!';
    }

    return {message};
}

// PUT
// PUT terms
// async function updateUser() {
//     const result = await db.query(
//         `UPDATE terms
//         SET description="${term.description}", due_days="${term.due_days}", discount_days="${term.discount_days}", discount="${term.discount}"
//         WHERE code=${code}`
//     );

//     let message = 'Error updating term!';

//     if (result.affectedRows) {
//         message = 'Term updated successfully.';
//     }

//     return {message};
// }

/* ADD FUNCTIONS BELOW */

// DELETE
// async function deleteCustomerById(id) {
//     const result = await db.query(
//         `DELETE FROM customers WHERE id=${id}`
//     );

//     let message = 'Error deleting customer';

//     if (result.affectedRows) {
//         message = 'Customer deleted successfully';
//     }

//     return {message};
// }

module.exports = {
    getUserById,
    newUser,
}