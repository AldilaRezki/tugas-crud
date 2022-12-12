module.exports = {
    fetchData: (db, callback) => {
        db.query("SELECT * FROM mahasiswa", callback);
    },
    getById: (db, id, callback) => {
        db.query("SELECT * FROM mahasiswa WHERE id = ", id, callback);
    },
    insertData: (db, data, callback) => {
        db.query("INSERT INTO mahasiswa SET ?", data, callback);
    },
    updateData: (db, id, data, callback) => {
        db.query("UPDATE mahasiswa SET ? WHERE id = " + id, data, callback);
    },
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM mahasiswa WHERE id = " + id, callback);
    }
}