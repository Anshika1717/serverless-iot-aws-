const apiUrl = "YOUR_API_GATEWAY_URL";

async function fetchData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById("data").innerHTML = JSON.stringify(data, null, 2);
}

setInterval(fetchData, 5000);
