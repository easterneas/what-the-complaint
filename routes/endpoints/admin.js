const adminEndpoints = require('express').Router()

// ini buat manage users
const UserController = require('../../controllers/UserController')
// ini buat manage complaints
// isinya: update status complaint, tambah notes ke dalam complaint,
//         sama hapus complaint kalau sudah solved/done
const ComplaintController = require('../../controllers/ComplaintController')

adminEndpoints
.get()
.get('/', UserController.showUser)
.get('/complaint/:id', UserController.seeComplaint)
.get('/:id/edit', UserController.editComplaintForm)
.post('/:id/edit', UserController.editComplaint)
.get('/:id/delete', UserController.deleteComplaint)

.get('/admin', UserController.showUser)
.get('/admin/user/:id', UserController.seeComplaint)

module.exports = adminEndpoints