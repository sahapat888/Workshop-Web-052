// const สร้างตัวแปรที่ไม่สามารถกำหนดค่าใหม่ภายหลังได้
// let ใช้ประกาศตัวแปรที่สามารถเปลี่ยนค่าได้ภายหลัง

// ข้อมูลสัตว์เลี้ยง
const pets = [
  {
    id: 1,
    name: "โกลเด้น รีทรีฟเวอร์",
    breed: "Golden Retriever",
    category: "สุนัข",
    lifespan: "10-12 ปี",
    size: "ใหญ่ (25-32 กก.)",
    temperament: "เป็นมิตร ฉลาด และภักดี",
    care: "ออกกำลังกายสูง, หวีขนทุกวัน",
    image:
      "https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzY3NTk1MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "สุนัขพันธุ์โกลเด้นเป็นสุนัขที่เป็นมิตรและรักครอบครัวมาก เหมาะสำหรับครอบครัวที่มีเด็ก มีสติปัญญาสูงและฝึกได้ง่าย",
  },
  {
    id: 2,
    name: "ไซบีเรียน ฮัสกี้",
    breed: "Siberian Husky",
    category: "สุนัข",
    lifespan: "12-14 ปี",
    size: "กลาง-ใหญ่ (16-27 กก.)",
    temperament: "กระตือรือร้น เป็นมิตร และดื้อรั้น",
    care: "ออกกำลังกายสูงมาก, หวีขนบ่อย",
    image:
      "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZ3xlbnwxfHx8fDE3Njc1OTU5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "สุนัขพันธุ์ไซบีเรียน ฮัสกี้มีต้นกำเนิดจากไซบีเรีย มีความทนทานต่ออากาศหนาว มีพลังงานสูงและต้องการการออกกำลังกายมาก",
  },
  {
    id: 3,
    name: "แมวสยาม",
    breed: "Siamese Cat",
    category: "แมว",
    lifespan: "12-20 ปี",
    size: "เล็ก-กลาง (2.5-5.5 กก.)",
    temperament: "เปิดเผย ร้องเสียงดัง และผูกพันกับเจ้าของ",
    care: "ดูแลง่าย, หวีขนสัปดาห์ละครั้ง",
    image:
      "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0fGVufDF8fHx8MTc2NzYyOTIxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "แมวสยามเป็นแมวพันธุ์ไทย มีลักษณะเด่นคือสีขาวครีมและจุดสีเข้มที่ใบหน้า หู ขา และหาง ชอบพูดคุยและเข้ากับคนได้ง่าย",
  },
  {
    id: 4,
    name: "แมวเปอร์เซีย",
    breed: "Persian Cat",
    category: "แมว",
    lifespan: "12-17 ปี",
    size: "กลาง (3-6 กก.)",
    temperament: "สงบ นิ่งๆ และอ่อนโยน",
    care: "หวีขนทุกวัน, ดูแลตาเป็นพิเศษ",
    image:
      "https://images.unsplash.com/photo-1585137173132-cf49e10ad27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0fGVufDF8fHx8MTc2NzY2ODgzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "แมวเปอร์เซียมีขนยาวและหนานุ่ม ใบหน้าแบนและตาโต นิสัยสงบและชอบอยู่ในบ้าน ต้องการการดูแลขนเป็นพิเศษ",
  },
  {
    id: 5,
    name: "นกแก้วแมคคอว์",
    breed: "Macaw Parrot",
    category: "นก",
    lifespan: "50-80 ปี",
    size: "ใหญ่ (900-1500 กรัม)",
    temperament: "ฉลาด เปิดเผย และชอบเข้าสังคม",
    care: "ต้องการกรงใหญ่, ปฏิสัมพันธ์ทุกวัน",
    image:
      "https://images.unsplash.com/photo-1584888890205-9b49eaf0c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnJvdCUyMGJpcmR8ZW58MXx8fHwxNzY3Njc2Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "นกแก้วแมคคอว์เป็นนกขนาดใหญ่ที่มีสีสันสวยงาม สามารถเลียนเสียงคนพูดได้ มีอายุยืนมากและต้องการความใส่ใจอย่างมาก",
  },
  {
    id: 6,
    name: "ปลาทอง",
    breed: "Goldfish",
    category: "ปลา",
    lifespan: "10-20 ปี",
    size: "เล็ก-กลาง (5-20 ซม.)",
    temperament: "สงบ เป็นมิตร",
    care: "เปลี่ยนน้ำสม่ำเสมอ, ให้อาหารวันละ 1-2 ครั้ง",
    image:
      "https://images.unsplash.com/photo-1592072467526-0506c6530493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZmlzaCUyMGFxdWFyaXVtfGVufDF8fHx8MTc2NzYzNTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "ปลาทองเป็นสัตว์เลี้ยงที่ดูแลง่ายและเหมาะสำหรับผู้เริ่มต้น มีหลายสายพันธุ์ให้เลือก ต้องการพื้นที่ว่ายน้ำที่เพียงพอ",
  },
  {
    id: 7,
    name: "กระต่าย",
    breed: "Rabbit",
    category: "สัตว์เลี้ยงขนาดเล็ก",
    lifespan: "8-12 ปี",
    size: "เล็ก-กลาง (1-3 กก.)",
    temperament: "อ่อนโยน ขี้อาย และเป็นมิตร",
    care: "ดูแลขนบ่อย, ให้อาหารหญ้าและผัก",
    image:
      "https://images.unsplash.com/photo-1622349817799-067c32295df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBidW5ueSUyMHBldHxlbnwxfHx8fDE3Njc2NTQyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "กระต่ายเป็นสัตว์เลี้ยงที่น่ารักและเหมาะกับครอบครัว ชอบกินหญ้าและผัก ต้องการพื้นที่ในการกระโดดและวิ่งเล่น",
  },
  {
    id: 8,
    name: "หนูแฮมสเตอร์",
    breed: "Hamster",
    category: "สัตว์เลี้ยงขนาดเล็ก",
    lifespan: "2-3 ปี",
    size: "เล็กมาก (20-200 กรัม)",
    temperament: "กระตือรือร้น ขี้เล่น และอยู่กลางคืน",
    care: "ทำความสะอาดกรงสัปดาห์ละครั้ง, ให้วงล้อวิ่ง",
    image:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zdGVyfGVufDF8fHx8MTc2NzY3NjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "แฮมสเตอร์เป็นสัตว์เลี้ยงขนาดเล็กที่เหมาะสำหรับผู้ที่มีพื้นที่จำกัด กระตือรือร้นในเวลากลางคืนและชอบเก็บอาหาร",
  },
];

// หมวดหมู่
// สำหรับเก็บข้อมูลหมวดหมู่สัตว์เลี้ยง โดยจัดเก็บในรูปแบบ Array ที่ภายในประกอบด้วย Object หลายรายการ

const categories = [
  { name: "ทั้งหมด", value: "all", icon: "🏠" },
  { name: "สุนัข", value: "สุนัข", icon: "🐕" },
  { name: "แมว", value: "แมว", icon: "🐱" },
  { name: "นก", value: "นก", icon: "🦜" },
  { name: "ปลา", value: "ปลา", icon: "🐟" },
  { name: "สัตว์เลี้ยงขนาดเล็ก", value: "สัตว์เลี้ยงขนาดเล็ก", icon: "🐰" },
];

// สถานะ
// ตอนเริ่มต้นให้แสดงสัตว์เลี้ยงทุกหมวดหมู่
let selectedCategory = "all";

// สร้าง SVG icons
const icons = {
  clock:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  ruler:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 17 3 3 17 5"></polyline><line x1="17" y1="5" x2="21" y2="1"></line><line x1="7" y1="7" x2="3" y2="11"></line></svg>',
  heart:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
};

// =============================================
// (1) เริ่มต้น
// =============================================

// โค้ดส่วนนี้ทำหน้าที่ รอให้โครงสร้าง HTML โหลดเสร็จก่อน แล้วจึงแสดงหมวดหมู่ แสดงข้อมูลสัตว์เลี้ยง และเตรียมฟอร์มให้ตอบสนองเมื่อผู้ใช้กดส่งข้อมูล

// document หมายถึงเอกสาร HTML ของหน้าเว็บ
// addEventListener() ใช้กำหนดให้โปรแกรมรอเหตุการณ์บางอย่าง
// 'DOMContentLoaded' คือเหตุการณ์ที่เกิดขึ้นเมื่อเบราว์เซอร์อ่านและสร้างโครงสร้าง HTML หรือ DOM เสร็จแล้ว
// function() { ... } คือฟังก์ชันที่จะทำงานเมื่อเหตุการณ์นั้นเกิดขึ้น

document.addEventListener("DOMContentLoaded", function () {
  // รอให้โครงสร้าง HTML โหลดเสร็จ
  // เมื่อโครงสร้าง HTML พร้อมใช้งานแล้ว ให้ทำคำสั่งทั้งหมดที่อยู่ภายในฟังก์ชันนี้
  // เรียก renderCategories() เพื่อแสดงหมวดหมู่
  renderCategories();
  renderPets();
});

// =============================================
// (2) แสดงหมวดหมู่
// ====================================================

// คำว่า render ในการพัฒนาเว็บไซต์หมายถึงการนำข้อมูลมาสร้างและแสดงผลบนหน้าเว็บ
// const สร้างตัวแปรที่ไม่ต้องการกำหนด Element ใหม่
// categoryFilter ชื่อตัวแปรที่ใช้เก็บ Element
// document หมายถึงเอกสาร HTML
// getElementById() ค้นหา Element จาก id

// categories คือ Array ที่เก็บข้อมูลหมวดหมู่
// map() จะวนผ่านข้อมูลทุกสมาชิก และเปลี่ยนข้อมูลแต่ละ Object ให้เป็นข้อความ HTML ของปุ่ม
// แต่ละรอบ ตัวแปร category จะเก็บ Object ปัจจุบัน
/*
        category = {
            name: 'สุนัข',
            value: 'สุนัข',
            icon: '🐕'
            };
        */
// เป็น Arrow function ที่รับ Parameter ชื่อ category

/*
        function(category) {
            return `...`;
        }
        */
// Backtick:   ` =  Template literal
// เขียนข้อความหลายบรรทัดได้
// แทรกค่าตัวแปรด้วย ${...} ได้
// เหมาะกับการสร้าง HTML ใน JavaScript

function renderCategories() {
  const categoryFilter = document.getElementById("categoryFilter");

  if (!categoryFilter) return;

  categoryFilter.innerHTML = categories
    .map(
      (category) => `
        <button type="button"
          class="category-btn ${selectedCategory === category.value ? "active" : ""}"
          data-category="${category.value}"
          aria-pressed="${selectedCategory === category.value}">
          <span>${category.icon}</span>
          <span>${category.name}</span>
        </button>
        `,
    )
    .join("");

  categoryFilter.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function () {
      selectCategory(this.dataset.category);
    });
  });
}

// 1. ค้นหาพื้นที่แสดงหมวดหมู่   ค้นหา Element ใน HTML ที่มี id="categoryFilter"
// 2. สร้างเนื้อหา HTML - ในกรณีนี้เป็นการนำปุ่มทั้งหมดไปใส่ใน categoryFilter
// innerHTML ใช้อ่านหรือกำหนดเนื้อหา HTML ที่อยู่ภายใน Element

// categoryFilter.innerHTML = "HTML String";
// innerHTML ต้องการ String ของ HTML
// แต่ map() ได้ Array:
// จึงใช้ .join('') เพื่อแปลง Array → String

//### สรุป ฟังก์ชันจะสร้างปุ่มหมวดหมู่ภายใน <div>
/*  
<div id="categoryFilter">
    <button class="category-btn active">🏠 ทั้งหมด</button>
    <button class="category-btn">🐕 สุนัข</button>
    <button class="category-btn">🐱 แมว</button>
    <button class="category-btn">🦜 นก</button>
    <button class="category-btn">🐟 ปลา</button>
    <button class="category-btn">🐰 สัตว์เลี้ยงขนาดเล็ก</button>
</div>

*/

//### ฟังก์ชันนี้ทำงานตามลำดับดังนี้:
//1. ค้นหา Element ที่มี id="categoryFilter"
//2. ใช้ map() วนผ่านข้อมูลทุกหมวดหมู่
//3. เปลี่ยนข้อมูลแต่ละหมวดหมู่ให้เป็นปุ่ม HTML
//4. เพิ่ม Class active ให้หมวดหมู่ที่กำลังถูกเลือก
//5. กำหนดให้คลิกปุ่มแล้วเรียก selectCategory()
//6. ใช้ join('') รวมปุ่มทั้งหมดเป็นข้อความเดียว
//7. นำปุ่มทั้งหมดไปแสดงผ่าน innerHTML

// =============================================
// (3) เลือกหมวดหมู่
// =============================================

// เปลี่ยนหมวดหมู่สัตว์ที่ผู้ใช้เลือก แล้วสั่งให้หน้าเว็บแสดงผลใหม่
// 1) สร้างฟังก์ชันชื่อ selectCategory โดยรับข้อมูลเข้ามา 1 ตัว คือcategory
// 2) นำค่าที่รับมาเก็บไว้ในตัวแปร selectedCategory
// 3) เรียกฟังก์ชัน renderCategories() เพื่อสร้างปุ่มหมวดหมู่ใหม่อีกครั้ง เหตุผลสำคัญคือ มีโค้ด
// class="category-btn ${selectedCategory === category.value ? 'active' : ''}"
// 4) เรียกฟังก์ชัน renderPets() เพื่อกรองและแสดงสัตว์ตามหมวดหมู่ที่เลือก

function selectCategory(category) {
  selectedCategory = category;
  renderCategories();
  renderPets();
}

// =============================================
// (4) แสดงสัตว์เลี้ยง
// ===============================================

// 1) บอก JavaScript ว่า Card สัตว์จะเอาไปใส่ตรงไหน
// 2) ถ้า selectedCategory เป็น all ให้ใช้สัตว์ทั้งหมด
// แต่ถ้าไม่ใช่ all ให้กรองสัตว์ตามหมวดที่เลือก
// Ternary Operator==>   เงื่อนไข ? ถ้าเป็นจริง : ถ้าเป็นเท็จ
// 3) เอาข้อมูลที่กรองแล้วมาสร้าง Card
// .join('') เอาสมาชิกทุกตัวมาต่อกัน โดยไม่ใส่อะไรคั่น รวมให้เป็น HTML String เดียว
// 4) เอา HTML ไปใส่ในหน้าเว็บ petGrid.innerHTML = ..

function renderPets() {
  const petGrid = document.getElementById("petGrid");
  if (!petGrid) return;

  const filteredPets =
    selectedCategory === "all"
      ? pets
      : pets.filter((pet) => pet.category === selectedCategory);

  petGrid.innerHTML = filteredPets.map((pet) => createPetCard(pet)).join("");
}

// =============================================
// (5) สร้างการ์ดสัตว์เลี้ยง
// ================================================
function createPetCard(pet) {
  return `
        <div class="pet-card">
            <div class="pet-image-container">
                <img src="${pet.image}" alt="${pet.name}" class="pet-image">
                <div class="pet-category-badge">${pet.category}</div>
            </div>
            <div class="pet-content">
                <h3 class="pet-name">${pet.name}</h3>
                <p class="pet-breed">${pet.breed}</p>
               
                <div class="pet-info">
                    <div class="pet-info-item" style="color: #3b82f6;">
                        ${icons.clock}
                        <span>อายุขัย: ${pet.lifespan}</span>
                    </div>
                    <div class="pet-info-item" style="color: #10b981;">
                        ${icons.ruler}
                        <span>ขนาด: ${pet.size}</span>
                    </div>
                    <div class="pet-info-item" style="color: #ef4444;">
                        ${icons.heart}
                        <span>นิสัย: ${pet.temperament}</span>
                    </div>
                </div>
               
                <button class="pet-btn" onclick="toggleDetails(${pet.id})">
                    ${icons.info}
                    <span id="btn-text-${pet.id}">ดูรายละเอียด</span>
                </button>
               
                <div id="details-${pet.id}" class="pet-details hidden">
                    <div class="pet-details-section">
                        <h4 class="pet-details-title">📝 รายละเอียด</h4>
                        <p class="pet-details-text">${pet.description}</p>
                    </div>
                    <div class="pet-details-section">
                        <h4 class="pet-details-title">🏥 การดูแล</h4>
                        <p class="pet-details-text">${pet.care}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// =============================================
// (6) Toggle รายละเอียด
// ==========================================

// 1. รับ petId เข้ามา (petId คือ รหัสของสัตว์ที่ผู้ใช้กดดูรายละเอียด)
// 2. หา Element ที่เป็นรายละเอียด แล้วนำ Element นี้มาเก็บไว้ในตัวแปร
// 3. หา Text ของปุ่ม แล้วนำ Element นี้มาเก็บไว้ในตัวแปร
// 4. ตรวจสอบว่ารายละเอียดถูกซ่อนอยู่หรือไม่
// ตรวจสอบว่า Element นี้มี class ชื่อ hidden อยู่หรือไม่
// <div id="details-101" class="hidden">
// 5. ถ้าถูกซ่อนอยู่ → ให้แสดง
// <div id="details-101" class="hidden">
// ลบ class hidden จึงทำให้รายละเอียดกลับมาแสดง
// แล้วเปลี่ยนข้อความปุ่ม btnText.textContent = 'ซ่อนรายละเอียด';

// 6. ถ้าไม่ได้ซ่อน → ให้ซ่อน
// เพิ่ม class: hidden ทำให้รายละเอียดถูกซ่อน
// จากนั้นเปลี่ยนข้อความปุ่มกลับเป็น btnText.textContent = 'ดูรายละเอียด';

function toggleDetails(petId) {
  const details = document.getElementById(`details-${petId}`);
  const btnText = document.getElementById(`btn-text-${petId}`);

  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
    btnText.textContent = "ซ่อนรายละเอียด";
  } else {
    details.classList.add("hidden");
    btnText.textContent = "ดูรายละเอียด";
  }
}

function selectCategory(category) {
  selectedCategory = category;
  renderCategories();
  renderPets();
} 