
   function toggleTranslate(lang) {
  localStorage.setItem("lang",JSON.stringify({lang:lang})); 
  window.location.reload()
}
window.onload = () => {
    const $ = (selector) => document.querySelector(selector);
    const langStorage = JSON.parse(localStorage.getItem("lang"))
    const lang = langStorage.lang
    const location = window.location.pathname
  if (lang == "ar") {
    $("#translate").style.transform =$("#translate-slide").style.transform = "translateX(2rem)";
   
    updateArabic($, location);
  } else {
    $("#translate").style.transform =$("#translate-slide").style.transform = "translateX(0rem)";
    updateEnglish($, location);
  }
}
function updateArabic($, location) {
  updateArabicForNavBarAndSlider($);
  location.includes("index")
    ? updateArabicForIndex($)
    : location.includes("About")
    ? updateArabicForAbout($)
    : location.includes("Inspections")
    ? updateArabicForInspection($)
    : location.includes("Training")
    ? updateArabicForTraining($)
    : location.includes("Approvals")
    ? updateArabicForApprovals($)
    : location.includes("Gallery")
    ? updateArabicForGallery($)
    : location.includes("Contact")
    ? updateArabicForContact($):""
}

function updateEnglish($, location) {
  updateEnglishForNavBarAndSlider($);
  location.includes("index")
  ? updateEnglishForIndex($)
  : location.includes("About")
  ? updateEnglishForAbout($)
  : location.includes("Inspections")
  ? updateEnglishForInspection($)
  : location.includes("Training")
  ? updateEnglishForTraining($)
  : location.includes("Approvals")
  ? updateEnglishForApprovals($)
  : location.includes("Gallery")
  ? updateEnglishForGallery($)
  : location.includes("Contact")
  ? updateEnglishForContact($):""
}

function updateArabicForNavBarAndSlider($) {
  // NavBar - SlideBar Update content for Arabic
  $("#profile-slide").innerText =
    $("#profile").innerText =
    $("#link1").innerText =
      Arabic.navLinks.companyProfile;
  $("#about").innerText =
    $("#about-slide").innerText =
    $("#link2").innerText =
      Arabic.navLinks.aboutUs;
  $("#inspections").innerText =
    $("#inspections-slide").innerText =
    $("#link3").innerText =
      Arabic.navLinks.inspectionsAndCertifications;
  $("#training").innerText =
    $("#training-slide").innerText =
    $("#link4").innerText =
      Arabic.navLinks.training;
  $("#approval").innerText =
    $("#approval-slide").innerText =
    $("#link5").innerText =
      Arabic.navLinks.approval;
  $("#gallery").innerText =
    $("#gallery-slide").innerText =
    $("#link6").innerText =
      Arabic.navLinks.gallery;
  $("#contact").innerText =
    $("#contact-slide").innerText =
    $("#link7").innerText =
      Arabic.navLinks.contactUs;
}
function updateEnglishForNavBarAndSlider($) {
  // NavBar - SlideBar Update content for English
  $("#profile-slide").innerText =
    $("#profile").innerText =
    $("#link1").innerText =
      English.navLinks.companyProfile;
  $("#about").innerText =
    $("#about-slide").innerText =
    $("#link2").innerText =
      English.navLinks.aboutUs;
  $("#inspections").innerText =
    $("#inspections-slide").innerText =
    $("#link3").innerText =
      English.navLinks.inspectionsAndCertifications;
  $("#training").innerText =
    $("#training-slide").innerText =
    $("#link4").innerText =
      English.navLinks.training;
  $("#approval").innerText =
    $("#approval-slide").innerText =
    $("#link5").innerText =
      English.navLinks.approval;
  $("#gallery").innerText =
    $("#gallery-slide").innerText =
    $("#link6").innerText =
      English.navLinks.gallery;
  $("#contact").innerText =
    $("#contact-slide").innerText =
    $("#link7").innerText =
      English.navLinks.contactUs;
}

function updateArabicForIndex($) {
  // index Update content for Arabic
  $("#p1").innerHTML = `<div dir='rtl' class="my-5 ">${
    Arabic.index.section1.heading + " "
  } ${Arabic.index.section1.description}</div>`;
  $("#t1-p1").innerText = "الملف";
  $("#t2-p1").innerText = " للشركه";
  $(
    "#p2"
  ).innerHTML = `<div dir='rtl' class="my-6 "><span class="font-extrabold ">ABS’s</span>${Arabic.index.section2.heading}
    <ul dir='rtl' class=" list-decimal list-inside pl-6">
    <li>${Arabic.index.section2.points[0]}</li>
    <li>${Arabic.index.section2.points[1]}</li>
    <li>${Arabic.index.section2.points[2]}</li>
    <li>${Arabic.index.section2.points[3]}</li>
  </ul>

    تقوم  بإجراء استشارات حول أنظمة إدارة الجودة ونظام الإدارة البيئية والتدريب والاستشارات على نظام إدارة السلامة <span class=" font-extrabold ">ABS’s</span></div>`;
  $("#t1-p2").innerText = "اهتمام";
  $("#t2-p2").innerText = " الأعمال";
  $("#t3-p2").innerText = " الرئيسية";
  $("#p3-h").innerText = Arabic.index.section3.heading;
  $("#p3").innerHTML = ` <div dir='rtl' class="font-bold ">
   ${Arabic.index.section3.description1}
   </div>
   <div dir='rtl' class="font-bold  my-5">
    ${Arabic.index.section3.description1}
   </div>
   <div dir='rtl' class="font-bold">
    ${Arabic.index.section3.description2}
   </div>`;
  $("#p4").innerHTML = `<div class=" lg:w-3/12 lg:px-3 ">
   <div class=" flex justify-center">
     <img src="../images/krane.jpeg" class="w-60 h-52 rounded-3xl" alt="abs">
    </div>
    <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.index.section3.subsections[0].title}</div>
    <div class="font-bold">
     <div class=" text-center text-xl font-extrabold">
    في ابو ظبي  Abs مكتب </div>
     <div dir='rtl' class=" pl-5 lg:p-0 ">
     ${Arabic.index.section3.subsections[0].description1}
     </div>
     <div dir='rtl' class="mt-4 pl-5 lg:p-0 ">
     ${Arabic.index.section3.subsections[0].description2}
     </div>
    </div>
   </div>
   <div class=" lg:w-3/12 lg:px-3  ">
     <div class=" flex justify-center">
       <img src="../images/green worker.jpeg" class="w-60 h-52  rounded-3xl" alt="abs">
      </div>
      <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.index.section3.subsections[1].title}</div>
      <div dir='rtl' class="font-bold  pl-5 lg:p-0 ">
      ${Arabic.index.section3.subsections[1].description}
      </div>
     </div>
     <div class=" lg:w-3/12 lg:px-3 ">
       <div class=" flex justify-center">
         <img src="../images/green_crane.png" class="w-60 h-52  rounded-3xl" alt="abs">
        </div>
        <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.index.section3.subsections[2].title}</div>
        <div dir='rtl' class="font-bold  pl-5 lg:p-0 ">
       
        ${Arabic.index.section3.subsections[2].description}

        </div>
       </div>
       <div class=" lg:w-3/12 lg:px-3 ">
         <div class=" flex justify-center">
           <img src="../images/etihad.jpeg" class="w-60 h-52 rounded-3xl" alt="abs">
          </div>
          <div class=" text-3xl font-bold text-center my-2" style="color: #024160;"> ${Arabic.index.section3.subsections[0].title}</div>
          <div class="font-bold">
          <div class=" text-center text-xl font-extrabold">
          في ابو ظبي  Abs مكتب </div>
           <div dir='rtl' class=" pl-5 lg:p-0 ">
           ${Arabic.index.section3.subsections[0].description1}

           </div>
           <div dir='rtl' class="mt-4  pl-5 lg:p-0">
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
  ).innerHTML = `<span class="font-extrabold ">ABS’s</span>main core businesses are in the following items
    <ul class=" list-decimal pl-6">
      <li>Inspection, testing and examination of lifting appliances and lifting gears.</li>
      <li>Inspection, testing and examination of Earth moving machinery, Industrial</li>
      <li>Examination the competency of the above mentioned equipment and machines operators and conducting safe
        use of the equipment training courses for them.</li>
      <li>Conducting safety & Vocational training courses.</li>
    </ul>
    <span class=" font-extrabold ">ABS’s</span> is doing consultation on Quality Management Systems,
    Environmental Management System and Safety Management System training & Consultancy.`;
  $("#t1-p2").innerText = "Main";
  $("#t2-p2").innerText = " Business ";
  $("#t3-p2").innerText = " Interest";
  $("#p3-h").innerText = English.index.section3.heading;
  $("#p3").innerHTML = ` <div class="font-bold">
    <span class="font-extrabold">ABS</span>
   ${English.index.section3.description1}
   </div>
   <div class="font-bold  my-5">
    <span class="font-extrabold">ABS</span>
    ${English.index.section3.description1}
   </div>
   <div class="font-bold ">
    <span class="font-extrabold">ABS</span>
    ${English.index.section3.description2}
   </div>`;
  $("#p4").innerHTML = `<div class=" lg:w-3/12 lg:px-3 ">
   <div class=" flex justify-center">
     <img src="../images/krane.jpeg" class="w-60 h-52 rounded-3xl" alt="abs">
    </div>
    <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${English.index.section3.subsections[0].title}</div>
    <div class="font-bold">
     <div class=" text-center text-xl font-extrabold">
    في ابو ظبي  Abs مكتب </div>
     <div class=" pl-5 lg:p-0 ">
     ${English.index.section3.subsections[0].description1}
     </div>
     <div class="mt-4 pl-5 lg:p-0">
     ${English.index.section3.subsections[0].description2}
     </div>
    </div>
   </div>
   <div class=" lg:w-3/12 lg:px-3  ">
     <div class=" flex justify-center">
       <img src="../images/green worker.jpeg" class="w-60 h-52  rounded-3xl" alt="abs">
      </div>
      <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${English.index.section3.subsections[1].title}</div>
      <div class="font-bold  pl-5 lg:p-0 ">
      ${English.index.section3.subsections[1].description}
      </div>
     </div>
     <div class=" lg:w-3/12 lg:px-3 ">
       <div class=" flex justify-center">
         <img src="../images/green_crane.png" class="w-60 h-52  rounded-3xl" alt="abs">
        </div>
        <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${English.index.section3.subsections[2].title}</div>
        <div class="font-bold  pl-5 lg:p-0 ">
       
        ${English.index.section3.subsections[2].description}

        </div>
       </div>
       <div class=" lg:w-3/12 lg:px-3 ">
         <div class=" flex justify-center">
           <img src="../images/etihad.jpeg" class="w-60 h-52 rounded-3xl" alt="abs">
          </div>
          <div class=" text-3xl font-bold text-center my-2" style="color: #024160;"> ${English.index.section3.subsections[0].title}</div>
          <div class="font-bold">
          <div class=" text-center text-xl font-extrabold">
          في ابو ظبي  Abs مكتب </div>
           <div class=" pl-5 lg:p-0 ">
           ${English.index.section3.subsections[0].description1}

           </div>
           <div class="mt-4  pl-5 lg:p-0 ">
           ${English.index.section3.subsections[0].description2}
           </div>
          </div>
         </div>`;
}

function updateArabicForAbout($) {
  $(
    "#p1-about"
  ).innerHTML = `<div dir='rtl'>${Arabic.about.section1.description}</div>`;
  $(
    "#p2-about"
  ).innerHTML = `<div dir='rtl'>${Arabic.about.section2.description}</div>`;
  $("#t1-p1-about").innerText = "الملف";
  $("#t2-p1-about").innerText = " للشركه";
  $("#t1-p2-about").innerText = "رسالة";
  $("#t2-p2-about").innerText = "رئيس مجلس الإدارة";
  $(
    "#p3-about"
  ).innerHTML = `<div dir='rtl'>${Arabic.about.section3.description}</div>`;
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
function updateArabicForInspection($) {
  $("#t-inspection").innerHTML = Arabic.inspection.section1.heading;
  $("#p1-inspection").innerHTML = Arabic.inspection.section1.description;
  $("#t2-inspection").innerHTML = Arabic.inspection.section2.heading;
  $("#p2-inspection").innerHTML = Arabic.inspection.section2.description;
  $("#ul-inspection").innerHTML = Arabic.inspection.section2.list;
}
function updateEnglishForInspection($) {
  $("#t-inspection").innerHTML = English.inspection.section1.heading;
  $("#p1-inspection").innerHTML = English.inspection.section1.description;
  $("#t2-inspection").innerHTML = English.inspection.section2.heading;
  $("#p2-inspection").innerHTML = English.inspection.section2.description;
  $("#ul-inspection").innerHTML = English.inspection.section2.list;
}

function updateArabicForTraining($) {
  $("#t-training").innerHTML = Arabic.training.section1.heading;
  $("#p1-training").innerHTML = Arabic.training.section1.description;
  $("#p2-training").innerHTML = Arabic.training.section1.description2;
  $("#ul-traning").innerHTML = Arabic.training.section2.list;
}

function updateEnglishForTraining($) {
  $("#t-training").innerHTML = English.training.section1.heading;
  $("#p1-training").innerHTML = English.training.section1.description;
  $("#p2-training").innerHTML = English.training.section1.description2;
  $("#ul-traning").innerHTML = English.training.section2.list;
}
function updateArabicForApprovals($) {
  $("#t-approvals").innerHTML = Arabic.approvals.title;
}

function updateEnglishForApprovals($) {
  $("#t-approvals").innerHTML = English.approvals.title;
}
function updateArabicForGallery($) {
  $("#t1-gallery").innerHTML = Arabic.gallery.section1.title1;
  $("#t2-gallery").innerHTML = Arabic.gallery.section1.title2;
  $("#h2-gallery").innerHTML = Arabic.gallery.section2.heading;
  $("#t3-gallery").innerHTML = Arabic.gallery.section2.title1;
  $("#t4-gallery").innerHTML = Arabic.gallery.section2.title2;
  $("#t5-gallery").innerHTML = Arabic.gallery.section2.description;
}

function updateEnglishForGallery($) {
  $("#t1-gallery").innerHTML = English.gallery.section1.title1;
  $("#t2-gallery").innerHTML = English.gallery.section1.title2;
  $("#h2-gallery").innerHTML = English.gallery.section2.heading;
  $("#t3-gallery").innerHTML = English.gallery.section2.title1;
  $("#t4-gallery").innerHTML = English.gallery.section2.title2;
  $("#t5-gallery").innerHTML = English.gallery.section2.description;
}

function updateArabicForContact($) {
  $("#t1-contact").innerHTML = Arabic.contact.title1;
  $("#t2-contact").innerHTML = Arabic.contact.title2;
}

function updateEnglishForContact($) {
  $("#t1-contact").innerHTML = English.contact.title1;
  $("#t2-contact").innerHTML = English.contact.title2;
}
