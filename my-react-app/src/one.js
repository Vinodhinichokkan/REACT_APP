const Data = {
    name: "Vino",
    age: 24,
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Data);
        }, 2000);
    });

}


fetchData().then((data) => {
    console.log("Fetched Data:", data);
}).catch((error) => {
    console.error("Error fetching data:", error);
});
