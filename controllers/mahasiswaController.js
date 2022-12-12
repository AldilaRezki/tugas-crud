const flash = require('express-flash');
const Mahasiswa = require ('../models/mahasiswaModel');

module.exports = {
    index:  (req, res) => {
        Mahasiswa.fetchData(req.db, (err, rows) => {
            if (err) {
                req.flash('error', `${error.message}`)
                res.render('mahasiswa/index', { data: ''});
            } else {
                res.render('mahasiswa/index', { data: rows })
            }
        })
    },
    store: (req, res) => {
        const { nama, email, jurusan } = req.body;
        var form_data = {
            nama,
            email, 
            jurusan,
        }

        Mahasiswa.insertData(req.db, form_data, (err, result) => {
            if (err) {
                req.flash('error', `${error.message}`);
                res.redirect('/mahasiswa');
            } else {
                req.flash('success', 'Data berhasil dimasukkan ke database');
                res.redirect('/mahasiswa')
            }
        })
    },
    update: (req, res) => {
        const { id, nama, email, jurusan } = req.body;
        var form_data = {
            nama, 
            email, 
            jurusan
        }
        Mahasiswa.updateData(req.db, id, form_data, (err, result) => {
            if (err) {
                req.flash('error', `${error.message}`);
                res.redirect('/mahasiswa');
            } else {
                req.flash('success', 'Data berhasil di update');
                res.redirect('/mahasiswa');
            }
        })
    },
    delete: (req, res) => {
        const { id } = req.params;
        Mahasiswa.deleteData(req.db, id, (err) => {
            if (err) {
                req.flash('error', `${error.message}`);
                res.redirect('/mahasiswa')
            } else {
                req.flash('success', 'Data berhasil dihapus');
                res.redirect('/mahasiswa');
            }
        })
    }
}