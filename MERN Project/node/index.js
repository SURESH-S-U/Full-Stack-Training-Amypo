// Import the Build in HTTP Modules
const http = require("http");

// Define the PORT no. (Common Backend port is 5000)
const PORT = 5000;

// Create a server
const server = http.createServer((req,res) => {

    // Every response have this ---->    header(status code(success , failed)  , Type of the body like json or plaintext)          and content

    // Set Response Header with status code.
    res.writeHead(200, {
        "content-type" : "application/JSON"
    });

    // Set Response content body to client.
    res.end(JSON.stringify(
        {
            name: "Suresh",
            age: "20",
            role: "MERN Developer"
        }
    ));

    
})

// Listening the port
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});