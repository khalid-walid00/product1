function toggleTranslate(lang) {
  localStorage.setItem("lang", lang);
  var btnTranslate = document.getElementById("translate");
  var translateslide = document.getElementById("translate-slide");
  var profile = document.getElementById("profile");
  var about = document.getElementById("about");
  var inspections = document.getElementById("inspections");
  var training = document.getElementById("training");
  var approval = document.getElementById("approval");
  var gallery = document.getElementById("gallery");
  var contact = document.getElementById("contact");
  var profileslide = document.getElementById("profile-slide");
  var Aboutslide = document.getElementById("about-slide");
  var Inspectionsslide = document.getElementById("inspections-slide");
  var Trainingslide = document.getElementById("training-slide");
  var Approvalslide = document.getElementById("approval-slide");
  var Galleryslide = document.getElementById("gallery-slide");
  var Contactslide = document.getElementById("contact-slide");
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var p3 = document.getElementById("p3");
  var t1p1 = document.getElementById("t1-p1");
  var t2p1 = document.getElementById("t2-p1");
  var t1p2 = document.getElementById("t1-p2");
  var t2p2 = document.getElementById("t2-p2");
  var t3p2 = document.getElementById("t3-p2");
  var p3h = document.getElementById("p3-h");
  var p4 = document.getElementById("p4");
  if (lang == "ar") {
      btnTranslate.style.transform = "translateX(2rem)";
      translateslide.style.transform = "translateX(2rem)";
      // Update content for Arabic
      profileslide.innerText = profile.innerText = Arabic.navLinks.companyProfile;
      about.innerText = Aboutslide.innerText = Arabic.navLinks.aboutUs;
      inspections.innerText = Inspectionsslide.innerText =  Arabic.navLinks.inspectionsAndCertifications;
      training.innerText = Trainingslide.innerText =  Arabic.navLinks.training;
      approval.innerText = Approvalslide.innerText =  Arabic.navLinks.approval;
      gallery.innerText = Galleryslide.innerText = Arabic.navLinks.gallery;
      contact.innerText = Contactslide.innerText = Arabic.navLinks.contactUs;
      p1.innerHTML =    `<div class="my-5 flex text-right">${Arabic.sections.section1.heading+" " } ${Arabic.sections.section1.description}</div>`
      t1p1.innerText = 'الملف';
      t2p1.innerText = ' للشركه';
      p2.innerHTML =`<div class="my-6 text-right"><span class="font-extrabold ">ABoS’s</span>${Arabic.sections.section2.heading}
      <ul class=" pl-6 flex-col  text-right">
      <li>${Arabic.sections.section2.points[0]}</li>
      <li>${Arabic.sections.section2.points[1]}</li>
      <li>${Arabic.sections.section2.points[2]}</li>
      <li>${Arabic.sections.section2.points[3]}</li>
    </ul>
    
      تقوم  بإجراء استشارات حول أنظمة إدارة الجودة ونظام الإدارة البيئية والتدريب والاستشارات على نظام إدارة السلامة <span class=" font-extrabold ">ABoS’s</span></div>`
      t1p2.innerText = 'اهتمام';
      t2p2.innerText = ' الأعمال';
      t3p2.innerText = ' الرئيسية';
      p3h.innerText = Arabic.sections.section3.heading;
      p3.innerHTML = ` <div class="font-bold text-right">
     ${Arabic.sections.section3.description1}
     </div>
     <div class="font-bold text-right my-5">
      ${Arabic.sections.section3.description1}
     </div>
     <div class="font-bold text-right">
      ${Arabic.sections.section3.description2}
     </div>`
     p4.innerHTML = `<div class=" lg:w-3/12 lg:px-3 ">
     <div class=" flex justify-center">
       <img src="../images/krane.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
      </div>
      <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.sections.section3.subsections[0].title}</div>
      <div class="font-bold">
       <div class=" text-center text-xl font-extrabold">
      في ابو ظبي  Abos مكتب </div>
       <div class=" pl-5 lg:p-0 text-right">
       ${Arabic.sections.section3.subsections[0].description1}
       </div>
       <div class="mt-4 pl-5 lg:p-0 text-right">
       ${Arabic.sections.section3.subsections[0].description2}
       </div>
      </div>
     </div>
     <div class=" lg:w-3/12 lg:px-3  ">
       <div class=" flex justify-center">
         <img src="../images/green worker.jpeg" class="w-60 h-52  rounded-3xl" alt="abos">
        </div>
        <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.sections.section3.subsections[1].title}</div>
        <div class="font-bold  pl-5 lg:p-0 text-right">
        ${Arabic.sections.section3.subsections[1].description}
        </div>
       </div>
       <div class=" lg:w-3/12 lg:px-3 ">
         <div class=" flex justify-center">
           <img src="../images/green_crane.png" class="w-60 h-52  rounded-3xl" alt="abos">
          </div>
          <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">${Arabic.sections.section3.subsections[2].title}</div>
          <div class="font-bold  pl-5 lg:p-0 text-right">
         
          ${Arabic.sections.section3.subsections[2].description}

          </div>
         </div>
         <div class=" lg:w-3/12 lg:px-3 ">
           <div class=" flex justify-center">
             <img src="../images/etihad.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
            </div>
            <div class=" text-3xl font-bold text-center my-2" style="color: #024160;"> ${Arabic.sections.section3.subsections[0].title}</div>
            <div class="font-bold">
            <div class=" text-center text-xl font-extrabold">
            في ابو ظبي  Abos مكتب </div>
             <div class=" pl-5 lg:p-0 text-right">
             ${Arabic.sections.section3.subsections[0].description1}

             </div>
             <div class="mt-4  pl-5 lg:p-0 text-right">
             ${Arabic.sections.section3.subsections[0].description2}
             </div>
            </div>
           </div>`
  } else {
      btnTranslate.style.transform = "translateX(0rem)";
      translateslide.style.transform = "translateX(0rem)";

      // Update content for English
      profileslide.innerText = profile.innerText = English.navLinks.companyProfile;
      about.innerText = Aboutslide.innerText = English.navLinks.aboutUs;
      inspections.innerText = Inspectionsslide.innerText =  English.navLinks.inspectionsAndCertifications;
      training.innerText = Trainingslide.innerText =  English.navLinks.training;
      approval.innerText = Approvalslide.innerText =  English.navLinks.approval;
      gallery.innerText = Galleryslide.innerText = English.navLinks.gallery;
      contact.innerText = Contactslide.innerText = English.navLinks.contactUs;
      p1.innerHTML =` <span class="  font-extrabold ">${English.sections.section1.heading }</span>`+ English.sections.section1.description;
      t1p1.innerText = "Company";
      t2p1.innerText ="Profile"
      p2.innerHTML = `<span class="font-extrabold ">ABoS’s</span>main core businesses are in the following items
      <ul class=" list-decimal pl-6">
        <li>Inspection, testing and examination of lifting appliances and lifting gears.</li>
        <li>Inspection, testing and examination of Earth moving machinery, Industrial</li>
        <li>Examination the competency of the above mentioned equipment and machines operators and conducting safe
          use of the equipment training courses for them.</li>
        <li>Conducting safety & Vocational training courses.</li>
      </ul>
      <span class=" font-extrabold ">ABoS’s</span> is doing consultation on Quality Management Systems,
      Environmental Management System and Safety Management System training & Consultancy.`
      t1p2.innerText = 'Main';
      t2p2.innerText = ' Business ';
      t3p2.innerText = ' Interest';
      p3h.innerText = English.sections.section3.heading;
      p3.innerHTML = ` <div class="font-bold">
      <span class="font-extrabold">ABoS</span>
     ${English.sections.section3.description1}
     </div>
     <div class="font-bold  my-5">
      <span class="font-extrabold">ABoS</span>
      ${English.sections.section3.description1}
     </div>
     <div class="font-bold ">
      <span class="font-extrabold">ABoS</span>
      ${English.sections.section3.description2}
     </div>`

     p4.innerHTML = `<div class=" lg:w-3/12 lg:px-3 ">
     <div class=" flex justify-center">
       <img src="../images/krane.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
      </div>
      <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">Office facilities</div>
      <div class="font-bold">
       <div class=" text-center font-extrabold">
         ABOS’s Abu Dhabi office 
       </div>
       <div class=" pl-5 lg:p-0">
         located in the heart of the city & the operations will be handled at Mussafah offices to serve the clients at anytime during the business
          hours. The communication
           between the departments and personals are established through phone, e-mails, & verbal conversations.
       </div>
       <div class="mt-4 pl-5 lg:p-0">
         All the Certificates and reports are generated by the engineers to avoid delays & errors to ensure the trust of the customer
       </div>
      </div>
     </div>
     <div class=" lg:w-3/12 lg:px-3  ">
       <div class=" flex justify-center">
         <img src="../images/green worker.jpeg" class="w-60 h-52  rounded-3xl" alt="abos">
        </div>
        <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">Work Experience</div>
        <div class="font-bold  pl-5 lg:p-0">
           We ABoS work with various prestigious projects with well reputed companies in UAE such as ADNATCO, NMDC, SMG, IMCC group (GPC, IMAC, GSME, CIC, ADCE), GS Engineering, Hyundai, Galfar Engineering, AL Sahraa. We can listed various projects which we handled by us on request
         </div>
       </div>
       <div class=" lg:w-3/12 lg:px-3 ">
         <div class=" flex justify-center">
           <img src="../images/green_crane.png" class="w-60 h-52  rounded-3xl" alt="abos">
          </div>
          <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">Quality & HSE</div>
          <div class="font-bold  pl-5 lg:p-0">
         
             ABoS is committed with High level of standardization with Quality & HSE. Our Company is certified by LEEA & ENAS for our inspection 
             activities as per iso17020:2012 & our EHSMS system is recently certified by RINA Services for ISO14001:2004: ISO 18001:2007.
           
          </div>
         </div>
         <div class=" lg:w-3/12 lg:px-3 ">
           <div class=" flex justify-center">
             <img src="../images/etihad.jpeg" class="w-60 h-52 rounded-3xl" alt="abos">
            </div>
            <div class=" text-3xl font-bold text-center my-2" style="color: #024160;">Office facilities</div>
            <div class="font-bold">
             <div class=" font-extrabold text-center">
               ABOS’s Abu Dhabi office 
             </div>
             <div class=" pl-5 lg:p-0">
               located in the heart of the city & the operations will be handled at Mussafah offices to serve the clients at anytime during the business
                hours. The communication
                 between the departments and personals are established through phone, e-mails, & verbal conversations.
             </div>
             <div class="mt-4  pl-5 lg:p-0">
               All the Certificates and reports are generated by the engineers to avoid delays & errors to ensure the trust of the customer
             </div>
            </div>
           </div>`
  }
}

