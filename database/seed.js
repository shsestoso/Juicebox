const {client} = require ('./index');

async function testDB() {
    try { 
        client.connect ();
        const { rows } = await client.query(`SELECT * FROM users;`);

        // for now, logging is a fine way to see what's up
        console.log(rows);
    } catch (error) {
        console.log(error);
    } finally{
        client.end();
    }
}
testDB();