const { DBPool } = require("idb-pconnector");

async function getTodos() {
    const pool = new DBPool();
    const sql = "SELECT * FROM CTIMMONS1.TODOS"

    const result = await pool.prepareExecute(sql);
    console.log(result);
    return result.resultSet;
}

async function addTodo(desc) {
    const pool = new DBPool();
    const sql = "INSERT INTO CTIMMONS1.TODOS VALUES(?) WITH NC";

    const params = [desc];
    await pool.prepareExecute(sql, params);
    return true;
}

module.exports = {
    getTodos,
    addTodo,
}