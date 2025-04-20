// تعريف دالة إنشاء التخطيط الشبكي
function createGridLayout() {
  // إنشاء العنصر الأب
  const parent = document.createElement("div");
  parent.className = "parent";

  // إضافة أسلوب Grid للعنصر الأب باستخدام JavaScript
  parent.style.display = "grid";
  parent.style.gridTemplateColumns = "repeat(4, 1fr)";
  parent.style.gridTemplateRows = "repeat(2, 1fr)";
  parent.style.gap = "8px";

  // مصفوفة مسارات الصور الخلفية لكل عنصر
  const backgroundImages = [
    "url('./images/mobile.png')", // الصورة للعنصر 1
    "url('./images/mobile3.webp')", // الصورة للعنصر 2
    "url('./images/mobile2.webp')", // الصورة للعنصر 3
    "url('./images/oclock.webp')", // الصورة للعنصر 4
    "url('./images/oclock.webp')", // الصورة للعنصر 5
    "url('./images/airpods.webp')", // الصورة للعنصر 6
  ];

  // إنشاء العناصر الفرعية
  for (let i = 1; i <= 6; i++) {
    const div = document.createElement("div");
    div.className = `div${i}`;

    // إنشاء حاوية للنصوص
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    // إضافة العنوان الرئيسي
    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "أحدث المنتجات";
    mainTitle.className = "main-title";
    textContainer.appendChild(mainTitle);

    // إضافة الوصف
    const description = document.createElement("p");
    description.textContent = "اكتشف معنا عالم جديد من احدث المنتجات";
    description.className = "description";
    textContainer.appendChild(description);

    // إضافة زر التسوق
    const shopButton = document.createElement("button");
    shopButton.textContent = "تسوق الآن";
    shopButton.className = "shop-button";
    textContainer.appendChild(shopButton);

    // إضافة حاوية النصوص إلى العنصر
    div.appendChild(textContainer);

    // تطبيق صورة خلفية لكل عنصر
    div.style.backgroundImage = backgroundImages[i - 1];
    div.style.backgroundSize = "cover"; // لتغطية كامل العنصر بالصورة
    div.style.backgroundPosition = "center"; // لوضع الصورة في المنتصف

    // إضافة العنصر للأب
    parent.appendChild(div);
  }

  // إعادة العنصر الأب
  return parent;
}

// دالة لتطبيق تخطيط شبكي حسب حجم الشاشة
function applyGridLayout(parent) {
  // الحصول على عرض النافذة
  const windowWidth = window.innerWidth;
  
  // الحصول على جميع العناصر الفرعية
  const items = parent.querySelectorAll("div[class^='div']");
  
  // إعادة تعيين خصائص جميع العناصر
  items.forEach(item => {
    item.style.gridRow = "auto";
    item.style.gridColumn = "auto";
    item.style.gridColumnStart = "auto";
    item.style.gridRowStart = "auto";
  });

  // تطبيق تخطيط مختلف حسب عرض الشاشة
  if (windowWidth >= 1200) {
    // تخطيط للشاشات الكبيرة
    parent.style.gridTemplateColumns = "repeat(4, 1fr)";
    parent.style.gridTemplateRows = "repeat(2, 1fr)";
    
    // div2 (المنتج الرئيسي 1)
    items[1].style.gridRow = "span 2 / span 2";
    items[1].style.gridColumnStart = "2";
    items[1].style.gridRowStart = "1";
    
    // div3
    items[2].style.gridColumnStart = "1";
    items[2].style.gridRowStart = "2";
    
    // div4
    items[3].style.gridColumnStart = "3";
    items[3].style.gridRowStart = "1";
    
    // div5
    items[4].style.gridColumnStart = "3";
    items[4].style.gridRowStart = "2";
    
    // div6 (المنتج الرئيسي 2)
    items[5].style.gridRow = "span 2 / span 2";
    items[5].style.gridColumnStart = "4";
    items[5].style.gridRowStart = "1";
    
  } else if (windowWidth >= 768 && windowWidth < 1200) {
    // تخطيط للأجهزة اللوحية
    parent.style.gridTemplateColumns = "repeat(2, 1fr)";
    parent.style.gridTemplateRows = "repeat(4, 1fr)";
    
    // div2 (المنتج الرئيسي 1)
    items[1].style.gridRow = "span 2 / span 2";
    items[1].style.gridColumnStart = "2";
    items[1].style.gridRowStart = "1";
    
    // div6 (المنتج الرئيسي 2)
    items[5].style.gridRow = "span 2 / span 2";
    items[5].style.gridColumnStart = "2";
    items[5].style.gridRowStart = "3";
    
  } else {
    // تخطيط للجوال
    parent.style.gridTemplateColumns = "1fr";
    parent.style.gridTemplateRows = "repeat(6, auto)";
    // ترتيب العناصر بشكل خطي للشاشات الصغيرة
  }
}

// تنفيذ الدوال عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  // تنفيذ كود التبويب
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");

      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // إنشاء التخطيط الشبكي
  const gridLayout = createGridLayout();
  document.body.appendChild(gridLayout);
  
  // تطبيق الستايل على التخطيط
  applyGridLayout(gridLayout);
  
  // إضافة مستمع لحدث تغيير حجم النافذة
  window.addEventListener("resize", function() {
    applyGridLayout(gridLayout);
  });
  
  // إضافة الأنماط
  const style = document.createElement("style");
  style.textContent = `
    .parent {
      width: 100%;
      max-width: 1280px;
      margin: auto;
      height: auto;
      min-height: 500px;
      direction: rtl;
      padding: 10px;
      box-sizing: border-box;
    }
    
    .parent > div {
      border: none;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      color: white;
      min-height: 200px;
    }
    
    .parent > div:hover {
      transform: scale(1.01);
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }

    .parent > div:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1;
      transition: background-color 0.99s;
    }

    .parent > div:hover::before {
      background-color: transparent;
    }

    .text-container {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      position: absolute;
      top: 0;
      padding: 20px;
    }
      
    .main-title {
      margin: 0 0 8px 0;
      font-size: 1.6rem;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
    }
  
    .description {
      margin: 0 0 12px 0;
      font-size: 0.9rem;
      opacity: 0.9;
      line-height: 1.4;
    }
    
    .shop-button {
      background-color: #0084C4;
      color: white;
      border: none;
      padding: 8px 20px;
      border-radius: 8px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s;
      font-weight: 500;
    }
    
    .shop-button:hover {
      background-color: #006699;
    }
    
    .div2 .main-title, .div6 .main-title {
      font-size: 2rem;
    }
    
    .div2 .description, .div6 .description {
      font-size: 1.1rem;
    }
    
    .div2 .shop-button, .div6 .shop-button {
      padding: 10px 24px;
      font-size: 1.1rem;
    }
    
    /* تعديلات ريسبونسيف إضافية للشاشات المتوسطة */
    @media (max-width: 1200px) {
      .parent {
        gap: 10px;
      }
      
      .main-title {
        font-size: 1.4rem;
      }
      
      .description {
        font-size: 0.85rem;
      }
      
      .div2 .main-title, .div6 .main-title {
        font-size: 1.8rem;
      }
      
      .div2 .description, .div6 .description {
        font-size: 1rem;
      }
    }
    
    /* تعديلات ريسبونسيف للجوال */
    @media (max-width: 768px) {
      .parent > div {
        min-height: 180px;
        margin-bottom: 10px;
      }
      
      .main-title {
        font-size: 1.2rem;
      }
      
      .description {
        font-size: 0.8rem;
      }
      
      .shop-button {
        padding: 6px 16px;
        font-size: 0.8rem;
      }
      
      .div2 .main-title, .div6 .main-title {
        font-size: 1.5rem;
      }
      
      .div2 .description, .div6 .description {
        font-size: 0.9rem;
      }
      
      .div2 .shop-button, .div6 .shop-button {
        padding: 8px 20px;
        font-size: 1rem;
      }
      
      .text-container {
        padding: 15px;
      }
    }
    
    /* تعديلات للشاشات الصغيرة جداً */
    @media (max-width: 480px) {
      .parent > div {
        min-height: 150px;
      }
      
      .main-title {
        font-size: 1.1rem;
      }
      
      .description {
        font-size: 0.75rem;
        margin-bottom: 8px;
      }
      
      .shop-button {
        padding: 5px 14px;
        font-size: 0.75rem;
      }
    }
  `;

  document.head.appendChild(style);
});