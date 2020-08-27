const adminEndpoints = require('express').Router()

// ini buat manage users
const UserController = require('../../controllers/UserController')
// ini buat manage complaints
// isinya: update status complaint, tambah notes ke dalam complaint,
//         sama hapus complaint kalau sudah solved/done
const ComplaintController = require('../../controllers/ComplaintController')

adminEndpoints
.get()

module.exports = adminEndpoints