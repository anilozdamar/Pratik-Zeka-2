let lastCategory = '';
let lastTimeInfoTaken = {};

function toggleInfo(category) {
    var infoDiv = document.getElementById(category + "bilgi");
    if (!infoDiv.classList.contains("show-info")) {
        infoDiv.classList.add("show-info");
        if (category !== lastCategory) {
            if (!lastTimeInfoTaken[category] || canTakeInfoAgain(lastTimeInfoTaken[category])) {
                getNewFact(category);
                lastTimeInfoTaken[category] = new Date();
            } else {
                alert("Sadece bir gün içinde bir kez bilgi alabilirsiniz.");
            }
            lastCategory = category;
        }
    } else {
        alert("Bir gün içinde bir kez bilgi alabilirsiniz.");
    }
}

function canTakeInfoAgain(lastTimeTaken) {
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const currentTime = new Date().getTime();
    const lastTime = new Date(lastTimeTaken).getTime();
    return (currentTime - lastTime) >= oneDayInMilliseconds;
}

const dogaFacts = [
    "Dünya'daki en yüksek dağ, Everest Dağı'dır.",
    "Bir tavşan sıçrayarak koştuğunda, hızlı bir şekilde dönebilir.",
    "Amazon ormanları, dünyanın en büyük yağmur ormanıdır.",
    
];

const tarihFacts = [
    "Tutankamon'un mezarının keşfi 1922'de gerçekleşti.",
    "İnsanlık tarihinin bilinen en eski şehirleri Mezopotamya'da bulunmaktadır.",
    "Roma İmparatorluğu, tarih boyunca en geniş topraklara sahip olan imparatorluklardan biridir.",
    
];

const uzayFacts = [
    "Güneş Sistemi'ndeki en büyük gezegen Jüpiter'dir.",
    "Bir yıldızın patlaması, bir süpernova olarak adlandırılır.",
    "İlk insanlı Ay inişi, Apollo 11 görevi tarafından gerçekleştirildi.",
    
];

const sporFacts = [
    "Futbol dünyada en popüler sporlardan biridir.",
    "Tenis topu, en hızlı kaydedilen spor objesidir, saatte 263 km/s hıza ulaşabilir.",
    "Maraton, Antik Yunan'da Sparta ve Atina arasındaki mesafeyi koşan bir habercinin hikayesinden gelir.",
    
];

function getNewFact(category) {
    let fact;
    switch (category) {
        case 'doga':
            fact = dogaFacts[Math.floor(Math.random() * dogaFacts.length)];
            document.getElementById("dogabilgi").textContent = fact;
            break;
        case 'tarih':
            fact = tarihFacts[Math.floor(Math.random() * tarihFacts.length)];
            document.getElementById("tarihbilgi").textContent = fact;
            break;
        case 'uzay':
            fact = uzayFacts[Math.floor(Math.random() * uzayFacts.length)];
            document.getElementById("uzaybilgi").textContent = fact;
            break;
        case 'spor':
            fact = sporFacts[Math.floor(Math.random() * sporFacts.length)];
            document.getElementById("sporbilgi").textContent = fact;
            break;
        default:
            fact = "Bilgi bulunamadı.";
    }
}
