// لیست محصولات
const allProducts = [
    {
        id: 1,
        name: "مانستر500 / MoNsTeR",
        price: 200,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/M500.jpg?w=250&h=180",
        category: "drinks"
    },
    {
        id: 2,
        name: "مانستر250 / MoNsTeR",
        price: 100,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/M250.jpg",
        category: "drinks"
    },
    {
        id: 3,
        name: "هتک / Attack",
        price: 80,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ATTACK_Big.jpg",
        category: "drinks"
    },
    {
        id: 4,
        name: "هتک / Attack",
        price: 40,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ATTACK.jpg",
        category: "drinks"
    },
    {
        id: 5,
        name: "الکوزی / Alcokozay",
        price: 40,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ALCOKOZAY_B.jpg",
        category: "drinks"
    },
    {
        id: 6,
        name: "الکوزی / Alcokozay",
        price: 40,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ALCOKOZAY_Z.jpg",
        category: "drinks"
    },
    {
        id: 7,
        name: "الکوزی / Alcokozay",
        price: 40,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ALCOKOZAY_S.jpg",
        category: "drinks"
    },
    {
        id: 8,
        name: "الکوزی / Alcokozay",
        price: 40,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ALCOKOZAY_A.jpg",
        category: "drinks"
    },
    {
        id: 9,
        name: "الکوزی / Breeze",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/breeze-Ai.jpg",
        category: "drinks"
    },
    {
        id: 10,
        name: "الکوزی / Cola",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/cola_Ai-light.jpg",
        category: "drinks"
    },
    {
        id: 11,
        name: "الکوزی / Cola",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/cola_Ai.jpg",
        category: "drinks"
    },
    {
        id: 12,
        name: "الکوزی / cola",
        price: 10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/cola_bootal.jpg",
        category: "drinks"
    },
    {
        id: 13,
        name: "الکوزی / Magic",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/Magic.jpg",
        category: "drinks"
    },
    {
        id: 14,
        name: "الکوزی / WOW ",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/WOW_Ai.jpg",
        category: "drinks"
    },
    {
        id: 15,
        name: "الکوزی / WOW ",
        price: 60,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/WOW_BOOTAL-BIG.jpg",
        category: "drinks"
    },
    {
        id: 16,
        name: "آب جو / 3HORSES",
        price: 40,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/3Horses.jpg",
        category: "drinks"
    },
    {
        id: 17,
        name: "کوکاکولا / CocaCola",
        price: 50,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/COCA-COLA_BOOTAL.jpg",
        category: "drinks"
    },
    {
        id: 18,
        name: "کوکاکولا / CocaCola",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/coca_colaAi.jpg",
        category: "drinks"
    },
    {
        id: 19,
        name: "کوکاکولا / CocaCola",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/coca-colAi.jpg",
        category: "drinks"
    },
    {
        id: 20,
        name: "فانتا / Fanta",
        price: 50,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/fanta_Bootal-big.jpg",
        category: "drinks"
    },
    {
        id: 21,
        name: "فانتا / Fanta",
        price: 10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/fanta_bootal.jpg",
        category: "drinks"
    },
    {
        id: 22,
        name: "گلدن لایف / GoldenLife",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/GoldenLife-Ai.jpg",
        category: "drinks"
    },
    {
        id: 22,
        name: "گلدن لایف / GoldenLife",
        price: 50,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/GoldenLife-BOOTAL_BIG.jpg",
        category: "drinks"
    },
    {
        id: 23,
        name: "گلدن لایف / GoldenLife",
        price: 10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/GoldenLife-bootal.jpg",
        category: "drinks"
    },
    {
        id: 24,
        name: "HAPPY",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/happy.jpg",
        category: "drinks"
    },
    {
        id: 25,
        name: "HAPPY / MASSiVE",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/happyM.jpg",
        category: "drinks"
    },
    {
        id: 26,
        name: "HIT / گازدار",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/HiT_blue.jpg",
        category: "drinks"
    },
    {
        id: 27,
        name: "HIT / بدون گاز",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/HiT_green.jpg",
        category: "drinks"
    },
    {
        id: 28,
        name: "HIT / ریشه",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/HiT_rish.jpg",
        category: "drinks"
    },
    {
        id: 29,
        name: "PREDATOR",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/predator.jpg",
        category: "drinks"
    },
    {
        id: 30,
        name: "PERFECT",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/PERFECT_B.jpg",
        category: "drinks"
    },
    {
        id: 31,
        name: "PERFECT / ریشه",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/PERFECT_A.jpg",
        category: "drinks"
    },
    {
        id: 32,
        name: "PERFECT",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/PERFECT_300.jpg",
        category: "drinks"
    },
    {
        id: 33,
        name: "PERFECT / + ",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/PERFECT_+.jpg",
        category: "drinks"
    },
    {
        id: 34,
        name: "PERFECT",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/PERFECT_Z.jpg",
        category: "drinks"
    },
    {
        id: 35,
        name: "ملکول با طعم قهوه",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/milkool_cafi.jpg",
        category: "drinks"
    },
    {
        id: 36,
        name: "ملکول با طعم شیرکاکو",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/milkool_caco.jpg",
        category: "drinks"
    },
    {
        id: 37,
        name: "ملکول با طعم شیر پسته",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/milkool_pstachy.jpg",
        category: "drinks"
    },
    {
        id: 38,
        name: "ریشه / Ginseng",
        price: 60,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/ginseng.jpg",
        category: "drinks"
    },
    {
        id: 39,
        name: "Diblang",
        price: 100,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/diblang.jpg",
        category: "drinks"
    },
    {
        id: 40,
        name: "Carabao / کربو",
        price: 60,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/carabao.jpg",
        category: "drinks"
    },
    {
        id: 41,
        name: "X_bUll / گازدار",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/X_b-G.jpg",
        category: "drinks"
    },
    {
        id: 42,
        name: "X_bUll / بدون گاز",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/X_b-green.jpg",
        category: "drinks"
    },
    {
        id: 43,
        name: "X_bUll / ریشه",
        price: 60,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/X-b_Ginseng.jpg",
        category: "drinks"
    },
    {
        id: 44,
        name: "STING",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/STING_A.jpg",
        category: "drinks"
    },
    {
        id: 45,
        name: "STING",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/STING_gold.jpg",
        category: "drinks"
    },
    {
        id: 46,
        name: "STING",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/STING_red.jpg",
        category: "drinks"
    },
    {
        id: 47,
        name: "پارادایس الورا",
        price: 30,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/paradise_alavera.jpg",
        category: "drinks"
    },
    {
        id: 48,
        name: "رانی / پارادایس / هالو",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/rani_o.jpg",
        category: "drinks"
    },
    {
        id: 49,
        name: "رانی / پارادایس / ام",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/rani_mingo.jpg",
        category: "drinks"
    },
    {
        id: 50,
        name: "رانی / پارادایس / پورتغال",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/rani_oringe.jpg",
        category: "drinks"
    },
    {
        id: 51,
        name: "RedBull",
        price: 90,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/red_bull.jpg",
        category: "drinks"
    },
    {
        id: 52,
        name: "شفاآنار",
        price: 60,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/sh_BOOTAL-anarBIG.jpg",
        category: "drinks"
    },
    {
        id: 53,
        name: "شفاآنار",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/sh_Ai-anar.jpg",
        category: "drinks"
    },
    {
        id: 54,
        name: "شفالمونات",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/sh_limonade-Ai.jpg",
        category: "drinks"
    },
    {
        id: 55,
        name: "شفالمونات",
        price: 20,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/Sh_Limonade.jpg",
        category: "drinks"
    },
    {
        id: 56,
        name: "پیپسی",
        price: 50,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/Pepsi-BOOTAL.jpg",
        category: "drinks"
    },
    {
        id: 57,
        name: "پارادایس آنار",
        price:10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/paradise_anar.jpg",
        category: "drinks"
    },
    {

        id: 58,
        name: "پارادایس سیب",
        price: 10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/paradise_apple.jpg",
        category: "drinks"
    },
    {
        id: 59,
        name: "پارادایس لیمونعنا",
        price: 10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/paradise_lmonat.jpg",
        category: "drinks"
    },
    {
        id: 60,
        name: "پارادایس لیمونات",
        price: 10,
        image: "https://cdn.jsdelivr.net/gh/ramin00shlbiy/Image.Subdirector@main/zaman/paradise_lmonat.jpg",
        category: "drinks"
        
    },
    {
        id: 91,
        name: "چیپس سیب‌زمینی",
        price: 40,
        image: "https://via.placeholder.com/300x200?text=چیپس+سیب‌زمینی",
        category: "snacks"
    },
    {
        id: 92,
        name: "شامپو سر",
        price: 120,
        image: "https://via.placeholder.com/300x200?text=شامپو+سر",
        category: "hygiene"
    },
    {
        id: 3,
        name: "شیرینی شکلاتی",
        price: 80,
        image: "https://via.placeholder.com/300x200?text=شیرینی+شکلاتی",
        category: "foods"
        
    }
];
