const {client} = require ('./index');

async function testDB() {
    try { 
        client.connect ();
        const result = await client.query(`SELECT * FROM users;`);

        // for now, logging is a fine way to see what's up
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally{
        client.end();
    }
}
testDB();