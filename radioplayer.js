// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const container = document.getElementById("channels");

async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  const channels = data.channels;

  channels.forEach((radioChannel) => {
    const radioEl = document.createElement("div");
    radioEl.style.backgroundColor = `#${radioChannel.color}`;
    radioEl.className = "radioDiv";
    const audio = radioChannel.liveaudio.url;

    radioEl.innerHTML = `<img class="img" src="${radioChannel.image}"> <div class="radioDiv2"><h2 class="title" >${radioChannel.name}</h2>  <audio controls class="audio"> <source src="${audio}" type="audio/mpeg" /></audio></div> `;
    container.appendChild(radioEl);
  });

  console.log(data);
}

getRadio();
