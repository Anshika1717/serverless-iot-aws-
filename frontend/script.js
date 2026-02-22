const apiUrl = "YOUR_API_GATEWAY_URL";

async function fetchData() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.length > 0) {
        const latest = data[data.length - 1];

        document.getElementById("temperature").innerText = latest.temperature + " °C";
        document.getElementById("humidity").innerText = latest.humidity + " %";
        document.getElementById("light").innerText = latest.light;
        document.getElementById("air_quality").innerText = latest.air_quality;
        document.getElementById("timestamp").innerText = "Last Updated: " + new Date(latest.timestamp * 1000).toLocaleString();
    }
}

setInterval(fetchData, 5000);
fetchData();
