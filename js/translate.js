function toggleTranslate(lang) {
  localStorage.setItem("lang", lang);
  const $ = (selector) => document.querySelector(selector);
  const langStorage = localStorage.getItem("lang");
  console.log(langStorage);

  if (lang == "ar") {
     $("#translate").style.transform = "translateX(2rem)";
     $("#translate-slide").style.transform = "translateX(2rem)";
     updateArabic($);
  } else {
     $("#translate").style.transform = "translateX(0rem)";
     $("#translate-slide").style.transform = "translateX(0rem)";
     updateEnglish($);
  }
}

async function updateArabic($) {
  updateArabicForNavBarAndSlider($);
  updateArabicForAbout($);
  updateArabicForIndex($);
}

async function updateEnglish($) {
  updateEnglishForNavBarAndSlider($);
  updateEnglishForAbout($);
  updateEnglishForIndex($);
}

 
function updateArabicForNavBarAndSlider($) {
 // NavBar - SlideBar Update content for Arabic
  $("#profile-slide").innerText = $("#profile").innerText =
    Arabic.navLinks.companyProfile;
  $("#about").innerText = $("#about-slide").innerText =
    Arabic.navLinks.aboutUs;
  $("#inspections").innerText = $("#inspections-slide").innerText =
    Arabic.navLinks.inspectionsAndCertifications;
  $("#training").innerText = $("#training-slide").innerText =
    Arabic.navLinks.training;
  $("#approval").innerText = $("#approval-slide").innerText =
    Arabic.navLinks.approval;
  $("#gallery").innerText = $("#gallery-slide").innerText =
    Arabic.navLinks.gallery;
  $("#contact").innerText = $("#contact-slide").innerText =
    Arabic.navLinks.contactUs;

  
}
function updateEnglishForNavBarAndSlider($) { 
   // NavBar - SlideBar Update content for English
  $("#profile-slide").innerText = $("#profile").innerText =
    English.navLinks.companyProfile;
  $("#about").innerText = $("#about-slide").innerText =
    English.navLinks.aboutUs;
  $("#inspections").innerText = $("#inspections-slide").innerText =
    English.navLinks.inspectionsAndCertifications;
  $("#training").innerText = $("#training-slide").innerText =
    English.navLinks.training;
  $("#approval").innerText = $("#approval-slide").innerText =
    English.navLinks.approval;
  $("#gallery").innerText = $("#gallery-slide").innerText =
    English.navLinks.gallery;
  $("#contact").innerText = $("#contact-slide").innerText =
    English.navLinks.contactUs;
   
 }


function updateArabicForIndex($) {

 

  // index Update content for Arabic
  $("#p1").innerHTML = `<div class="my-5 flex text-right">${Arabic.index.section1.heading + " "
    } ${Arabic.index.section1.description}</div>`;
  $("#t1-p1").innerText = "الملف";
  $("#t2-p1").innerText = " للشركه";
  $("#p2").innerHTML = `<div class="my-6 text-right"><span class="font-extrabold ">ABoS’s</span>${Arabic.index.section2.heading}
    <ul class=" pl-6 flex-col  text-right">
    <li>${Arabic.index.section2.points[0]}</li>
    <li>${Arabic.index.section2.points[1]}</li>
    <li>${Arabic.index.section2.points[2]}</li>
    <li>${Arabic.index.section2.points[3]}</li>
  </ul>

    تقوم  بإجراء استشارات حول أنظمة إدارة الجودة ونظام الإدارة البيئية والتدريب والاستشارات على نظام إدارة السلامة <span class=" font-extrabold ">ABoS’s</span></div>`;
  $("#t2-p1").innerText = "اهتمام";
  $("#t2-p2").innerText = " الأعمال";
  $("#t3-p2").innerText = " الرئيسية";
  $("#p3-h").innerText = Arabic.index.section3.heading;
  $("#p3").innerHTML = ` <div class="font-bold text-right">
   ${Arabic.index.section3.description1}
   </div>
   <div class="font-bold text-right my-5">
    ${Arabic.index.section3.description1}
   </div>
   <div class="font-bold text-right">
    ${Arabic.index.section3.description2}
   </div>`;
  $("#p4").innerHTML = `<div class=" lg:w-3/12 lg:px-3 ">
   <div class=" flex justify-center">
     <img src="../images/krane.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
    </div>
    <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.index.section3.subsections[0].title}</div>
    <div class="font-bold">
     <div class=" text-center text-xl font-extrabold">
    في ابو ظبي  Abos مكتب </div>
     <div class=" pl-5 lg:p-0 text-right">
     ${Arabic.index.section3.subsections[0].description1}
     </div>
     <div class="mt-4 pl-5 lg:p-0 text-right">
     ${Arabic.index.section3.subsections[0].description2}
     </div>
    </div>
   </div>
   <div class=" lg:w-3/12 lg:px-3  ">
     <div class=" flex justify-center">
       <img src="../images/green worker.jpeg" class="w-60 h-52  rounded-3xl" alt="abos">
      </div>
      <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.index.section3.subsections[1].title}</div>
      <div class="font-bold  pl-5 lg:p-0 text-right">
      ${Arabic.index.section3.subsections[1].description}
      </div>
     </div>
     <div class=" lg:w-3/12 lg:px-3 ">
       <div class=" flex justify-center">
         <img src="../images/green_crane.png" class="w-60 h-52  rounded-3xl" alt="abos">
        </div>
        <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.index.section3.subsections[2].title}</div>
        <div class="font-bold  pl-5 lg:p-0 text-right">
       
        ${Arabic.index.section3.subsections[2].description}

        </div>
       </div>
       <div class=" lg:w-3/12 lg:px-3 ">
         <div class=" flex justify-center">
           <img src="../images/etihad.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
          </div>
          <div class=" text-3xl font-bold text-center my-2" style="color: #024160;"> ${Arabic.index.section3.subsections[0].title}</div>
          <div class="font-bold">
          <div class=" text-center text-xl font-extrabold">
          في ابو ظبي  Abos مكتب </div>
           <div class=" pl-5 lg:p-0 text-right">
           ${Arabic.index.section3.subsections[0].description1}

           </div>
           <div class="mt-4  pl-5 lg:p-0 text-right">
           ${Arabic.index.section3.subsections[0].description2}
           </div>
          </div>
         </div>`;


}

function updateEnglishForIndex($) {
 

  // index Update content for English
  $("#p1").innerHTML =
    ` <span class="  font-extrabold ">${English.index.section1.heading}</span>` +
    English.index.section1.description;
  $("#t1-p1").innerText = "Company";
  $("#t2-p1").innerText = "Profile";
  $(
    "#p2"
  ).innerHTML = `<span class="font-extrabold ">ABoS’s</span>main core businesses are in the following items
    <ul class=" list-decimal pl-6">
      <li>Inspection, testing and examination of lifting appliances and lifting gears.</li>
      <li>Inspection, testing and examination of Earth moving machinery, Industrial</li>
      <li>Examination the competency of the above mentioned equipment and machines operators and conducting safe
        use of the equipment training courses for them.</li>
      <li>Conducting safety & Vocational training courses.</li>
    </ul>
    <span class=" font-extrabold ">ABoS’s</span> is doing consultation on Quality Management Systems,
    Environmental Management System and Safety Management System training & Consultancy.`;
  $("#t1-p2").innerText = "Main";
  $("#t2-p2").innerText = " Business ";
  $("#t3-p2").innerText = " Interest";
  $("#p3-h").innerText = English.index.section3.heading;
  $("#p3").innerHTML = ` <div class="font-bold">
    <span class="font-extrabold">ABoS</span>
   ${English.index.section3.description1}
   </div>
   <div class="font-bold  my-5">
    <span class="font-extrabold">ABoS</span>
    ${English.index.section3.description1}
   </div>
   <div class="font-bold ">
    <span class="font-extrabold">ABoS</span>
    ${English.index.section3.description2}
   </div>`;
  $("#p4").innerHTML = `<div class=" lg:w-3/12 lg:px-3 ">
   <div class=" flex justify-center">
     <img src="../images/krane.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
    </div>
    <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${English.index.section3.subsections[0].title}</div>
    <div class="font-bold">
     <div class=" text-center text-xl font-extrabold">
    في ابو ظبي  Abos مكتب </div>
     <div class=" pl-5 lg:p-0 text-right">
     ${English.index.section3.subsections[0].description1}
     </div>
     <div class="mt-4 pl-5 lg:p-0 text-right">
     ${English.index.section3.subsections[0].description2}
     </div>
    </div>
   </div>
   <div class=" lg:w-3/12 lg:px-3  ">
     <div class=" flex justify-center">
       <img src="../images/green worker.jpeg" class="w-60 h-52  rounded-3xl" alt="abos">
      </div>
      <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${English.index.section3.subsections[1].title}</div>
      <div class="font-bold  pl-5 lg:p-0 text-right">
      ${English.index.section3.subsections[1].description}
      </div>
     </div>
     <div class=" lg:w-3/12 lg:px-3 ">
       <div class=" flex justify-center">
         <img src="../images/green_crane.png" class="w-60 h-52  rounded-3xl" alt="abos">
        </div>
        <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${English.index.section3.subsections[2].title}</div>
        <div class="font-bold  pl-5 lg:p-0 text-right">
       
        ${English.index.section3.subsections[2].description}

        </div>
       </div>
       <div class=" lg:w-3/12 lg:px-3 ">
         <div class=" flex justify-center">
           <img src="../images/etihad.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
          </div>
          <div class=" text-3xl font-bold text-center my-2" style="color: #024160;"> ${English.index.section3.subsections[0].title}</div>
          <div class="font-bold">
          <div class=" text-center text-xl font-extrabold">
          في ابو ظبي  Abos مكتب </div>
           <div class=" pl-5 lg:p-0 text-right">
           ${English.index.section3.subsections[0].description1}

           </div>
           <div class="mt-4  pl-5 lg:p-0 text-right">
           ${English.index.section3.subsections[0].description2}
           </div>
          </div>
         </div>`;


}


function updateArabicForAbout($) {
  $("#p1-about").innerHTML = `<div class="flex text-right">${Arabic.about.section1.description}</div>`;
  $("#p2-about").innerHTML = `<div class="flex text-right">${Arabic.about.section2.description}</div>`;
  $("#t1-p1-about").innerText = "الملف";
  $("#t2-p1-about").innerText = " للشركه";
  $("#t1-p2-about").innerText = "رسالة";
  $("#t2-p2-about").innerText = "رئيس مجلس الإدارة";
  $("#p3-about").innerHTML = `<div class="flex text-right">${Arabic.about.section3.description}</div>`;
  $("#ti-p3-about").innerHTML = `${Arabic.about.section3.heading}`;
}
function updateEnglishForAbout($) {
  $("#p1-about").innerHTML = English.about.section1.description;
  $("#p2-about").innerHTML = English.about.section2.description;
  $("#t1-p1-about").innerText = "Comany";
  $("#t2-p1-about").innerText = " Profile";
  $("#t1-p2-about").innerText = "Chairman’s";
  $("#t2-p2-about").innerText = "Message";
  $("#p3-about").innerHTML = English.about.section3.description;
  $("#ti-p3-about").innerHTML = `${English.about.section3.heading}`;
  
}
