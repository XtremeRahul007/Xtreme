fetch('https://api.countapi.xyz/hit/xtremerahul007.github.io/Xtreme')
    .then(response => response.json())
    .then(data => {
        console.log("Visit count:", data.value); // Optional for debugging
        document.getElementById("visit-count").innerText = data.value;
    });