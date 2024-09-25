const footbalplayer = [
    { name: "Uğurcan Cakir", country: "Türkiye" },
    { name: "Batista Mendy", country: "Fransa" },
    { name: "Edin Visca", country: "Bosna" }
];

const list = () => {
    // forEach ile her bir futbolcunun ismini yazdır
    footbalplayer.forEach(player => {
        console.log(player.name);
    });
};

const addPlayer = (newPlayer) => {
    return new Promise((resolve, reject) => {
        // Yeni futbolcuyu ekleyin
        footbalplayer.push(newPlayer);
        resolve(footbalplayer); // Promise'ı çözümlüyoruz
    });
};

async function getData() {
    try {
        // Yeni futbolcu ekleniyor
        await addPlayer({ name: "Gökdeniz Karadeniz", country: "Türkiye" });
        list(); // Kayıt ekledikten sonra listeyi yazdır
    } catch (err) {
        console.log("err reached.");
    }
}

getData();
