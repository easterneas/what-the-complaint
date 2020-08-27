const adminEndpoints = require('express').Router()

// // ini buat manage users
// const UserController = require('../../controllers/UserController')
// // ini buat manage complaints
// // isinya: update status complaint, tambah notes ke dalam complaint,
// //         sama hapus complaint kalau sudah solved/done
// const ComplaintController = require('../../controllers/ComplaintController')

adminEndpoints
.get('/', UserController.showUser)
.get('/complaints/:id', UserController.seeComplaint)
.get('/complaints/:id/edit', UserController.editComplaintForm)
.post('/complaints/:id/edit', UserController.editComplaint)
.get('/complaints/:id/delete', UserController.deleteComplaint)

.get('/users', UserController.showUser)
.get('/users/:id', UserController.seeComplaint)

module.exports = adminEndpoints