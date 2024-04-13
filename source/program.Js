"use strict";
let flag = 0;
//All departments
//dental dept
const x = document.querySelector(".Dental");
const y = document.querySelector(".dpt-3");
const z = document.querySelector(".cl-btn");
y.addEventListener("click", function () {
  if (flag == 0) {
    x.classList.remove("hidden-dntl");
    // document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.querySelector(".depts").style.opacity = "0.5";
    document.querySelector(".Testimonials").style.opacity = "0.5";
    x.style.opacity = "1";
    flag++;
  }
});
z.addEventListener("click", function () {
  x.classList.add("hidden-dntl");
  // document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".depts").style.opacity = "1";
  document.querySelector(".Testimonials").style.opacity = "1";
  flag--;
});

//neurology dept
const x1 = document.querySelector(".Neurology");
const y1 = document.querySelector(".dpt-1");
const z1 = document.querySelector(".cl-btn-1");
y1.addEventListener("click", function () {
  if (flag == 0) {
    x1.classList.remove("hidden-neu");
    // document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.querySelector(".depts").style.opacity = "0.5";
    document.querySelector(".Testimonials").style.opacity = "0.5";
    x1.style.opacity = "1";
    flag++;
  }
});
z1.addEventListener("click", function () {
  x1.classList.add("hidden-neu");
  // document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".depts").style.opacity = "1";
  document.querySelector(".Testimonials").style.opacity = "1";
  flag--;
});

//surgical dept
const x2 = document.querySelector(".Surgical");
const y2 = document.querySelector(".dpt-2");
const z2 = document.querySelector(".cl-btn-2");
y2.addEventListener("click", function () {
  if (flag == 0) {
    x2.classList.remove("hidden-sur");
    // document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.querySelector(".depts").style.opacity = "0.5";
    document.querySelector(".Testimonials").style.opacity = "0.5";
    x2.style.opacity = "1";
    flag++;
  }
});
z2.addEventListener("click", function () {
  x2.classList.add("hidden-sur");
  // document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".depts").style.opacity = "1";
  document.querySelector(".Testimonials").style.opacity = "1";
  flag--;
});

//opthalmology dept
const x4 = document.querySelector(".Opthalmology");
const y4 = document.querySelector(".dpt-4");
const z4 = document.querySelector(".cl-btn-4");
y4.addEventListener("click", function () {
  if (flag == 0) {
    x4.classList.remove("hidden-opth");
    // document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.querySelector(".depts").style.opacity = "0.5";
    document.querySelector(".Testimonials").style.opacity = "0.5";
    x4.style.opacity = "1";
    flag++;
  }
});
z4.addEventListener("click", function () {
  x4.classList.add("hidden-opth");
  // document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".depts").style.opacity = "1";
  document.querySelector(".Testimonials").style.opacity = "1";
  flag--;
});

//cardiology dept
const x5 = document.querySelector(".Cardiology");
const y5 = document.querySelector(".dpt-5");
const z5 = document.querySelector(".cl-btn-5");
y5.addEventListener("click", function () {
  if (flag == 0) {
    x5.classList.remove("hidden-cardio");
    // document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.2)";
    document.querySelector(".depts").style.opacity = "0.5";
    document.querySelector(".Testimonials").style.opacity = "0.5";
    x5.style.opacity = "1";
    flag++;
  }
});
z5.addEventListener("click", function () {
  x5.classList.add("hidden-cardio");
  // document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".depts").style.opacity = "1";
  document.querySelector(".Testimonials").style.opacity = "1";
  flag--;
});
/////////////// Adding Scroll-feature
const about_dr = document.querySelector(".abt-scroll");
const about_scrollto = document.querySelector(".about-dr");
about_dr.addEventListener("click", function (e) {
  e.preventDefault();
  // about_scrollto.scrollIntoView({ behavior: "smooth" });
  const abtdest = about_scrollto.getBoundingClientRect();
  window.scrollTo({
    left: abtdest.left,
    top: abtdest.top,
    behavior: "smooth",
  });
});

const dept = document.querySelector(".dept-scroll");
const dept_scrollto = document.querySelector(".depts");
dept.addEventListener("click", function (e) {
  e.preventDefault();
  // about_scrollto.scrollIntoView({ behavior: "smooth" });
  const deptdest = dept_scrollto.getBoundingClientRect();
  window.scrollTo({
    left: deptdest.left,
    top: deptdest.top,
    behavior: "smooth",
  });
});

const price = document.querySelector(".prc-scroll");
const prc_scrollto = document.querySelector(".Pricing");
price.addEventListener("click", function (e) {
  e.preventDefault();
  // about_scrollto.scrollIntoView({ behavior: "smooth" });
  const prcdest = prc_scrollto.getBoundingClientRect();
  window.scrollTo({
    left: prcdest.left,
    top: prcdest.top,
    behavior: "smooth",
  });
});

const blog = document.querySelector(".blog-scroll");
const blog_scrollto = document.querySelector(".D");
blog.addEventListener("click", function (e) {
  e.preventDefault();
  // about_scrollto.scrollIntoView({ behavior: "smooth" });
  const blogdest = blog_scrollto.getBoundingClientRect();
  window.scrollTo({
    left: blogdest.left,
    top: blogdest.top,
    behavior: "smooth",
  });
});

const dr = document.querySelector(".dr-scroll");
const dr_scrollto = document.querySelector(".dr-head");
dr.addEventListener("click", function (e) {
  e.preventDefault();
  const drdest = dr_scrollto.getBoundingClientRect();
  window.scrollTo({
    left: drdest.left,
    top: drdest.top,
    behavior: "smooth",
  });
});

const hosloc = document.querySelector(".loc-head");
const locate = document.querySelector(".loc-scroll");
locate.addEventListener("click", function (e) {
  e.preventDefault();
  const locdest = hosloc.getBoundingClientRect();
  window.scrollTo({
    left: locdest.left,
    top: locdest.top,
    behavior: "smooth",
  });
});
const article = document.querySelector("article");
console.log(article.querySelectorAll(".lx"));
console.log(article.childNodes);

//// for tabbed buttons of doctors
const btn_intern = document.querySelector(".int");
const btn_trainees = document.querySelector(".tr");
const btn_experts = document.querySelector(".exp");
const search_class1 = document.querySelector(".intern");
const search_class2 = document.querySelector(".trainee");
const search_class3 = document.querySelector(".expert");
const close_tab_cmp = document.querySelector(".close-tabbed-comp");
let cnt = 0;
let E = document.querySelector(".E");
// for interns button
btn_intern.addEventListener("click", function () {
  cnt = 1;
  search_class1.classList.remove("hide1");
  btn_intern.style.transform = `translateY(-${30}px)`;
  search_class2.classList.add("hide2");
  search_class3.classList.add("hide3");
  btn_trainees.style.transform = `translateY(-${50}%)`;
  btn_experts.style.transform = `translateY(-${50}%)`;
  close_tab_cmp.classList.remove("hide-ctabcmp");
  E.style.transform = `translateY(${150}%)`;
});

// for trainees button
btn_trainees.addEventListener("click", function () {
  cnt = 2;
  search_class2.classList.remove("hide2");
  btn_trainees.style.transform = `translateY(-${30}px)`;
  search_class1.classList.add("hide1");
  search_class3.classList.add("hide3");
  btn_intern.style.transform = `translateY(-${50}%)`;
  btn_experts.style.transform = `translateY(-${50}%)`;
  close_tab_cmp.classList.remove("hide-ctabcmp");
  E.style.transform = `translateY(${150}%)`;
});

// for trainees button
btn_experts.addEventListener("click", function () {
  cnt = 3;
  search_class3.classList.remove("hide3");
  btn_experts.style.transform = `translateY(-${30}px)`;
  search_class1.classList.add("hide1");
  search_class2.classList.add("hide2");
  btn_trainees.style.transform = `translateY(-${50}%)`;
  btn_intern.style.transform = `translateY(-${50}%)`;
  close_tab_cmp.classList.remove("hide-ctabcmp");
  E.style.transform = `translateY(${150}%)`;
});

close_tab_cmp.addEventListener("click", function () {
  search_class1.classList.add("hide1");
  search_class2.classList.add("hide2");
  search_class3.classList.add("hide3");
  if (cnt == 1) {
    btn_intern.style.transform = `translateY(-${50}%)`;
  } else if (cnt == 2) {
    btn_trainees.style.transform = `translateY(-${50}%)`;
  } else {
    btn_experts.style.transform = `translateY(-${50}%)`;
  }
  close_tab_cmp.classList.add("hide-ctabcmp");
  E.style.transform = `translateY(${0}%)`;
});
//// Observer-interface API
// const up = document.querySelector(".disp-api");
// const dpts = document.querySelector(".depts");
// const disp_api = function (entries) {
//   const [c] = entries;
//   console.log(c);
//   if (c.isIntersecting) {
//     up.classList.add("upper");
//   } else {
//     up.classList.remove("upper");
//   }
// };
// const obsoptions = {
//   root: null,
//   threshold: 0.1,
//   rootMargin: 20,
// };
// const observer = new IntersectionObserver(disp_api, obsoptions);
// observer.observe(about_scrollto);

//// Implementing slider
const btnprev = document.querySelector(".btn-back");
const btnforw = document.querySelector(".btn-forw");
const imgbox = document.querySelector(".image-box");
const imgs = document.querySelector(".images");
const img1 = document.querySelector(".image-1");
const img3 = document.querySelector(".image-3");
const img4 = document.querySelector(".image-4");
const img5 = document.querySelector(".image-5");
let ptr = 0;
btnprev.style.opacity = "0.5";
img5.style.opacity = "0";
img3.style.opacity = "0";
img4.style.opacity = "0";
img1.style.opacity = "1";
btnforw.addEventListener("click", function (e) {
  if (ptr < 3) {
    if (ptr == 0) {
      e.preventDefault();
      img3.style.opacity = "1";
      img1.style.opacity = "0";
      btnprev.style.opacity = "1";
    } else if (ptr == 1) {
      e.preventDefault();
      img3.style.opacity = "0";
      img4.style.opacity = "1";
    } else if (ptr == 2) {
      img4.style.opacity = "0";
      img5.style.opacity = "1";
      btnforw.style.opacity = "0.5";
    }
    ptr++;
  }
});

btnprev.addEventListener("click", function () {
  if (ptr > 0) {
    if (ptr == 3) {
      img5.style.opacity = "0";
      img4.style.opacity = "1";
      btnforw.style.opacity = "1";
    } else if (ptr == 2) {
      img4.style.opacity = "0";
      img3.style.opacity = "1";
    } else if (ptr == 1) {
      img3.style.opacity = "0";
      img1.style.opacity = "1";
      btnprev.style.opacity = "0.5";
    }
    ptr--;
  }
});

/// Contact info-display
let con = document.querySelector(".contact-disp");
let topcol = document.querySelector(".top");
con.addEventListener("click", function () {
  topcol.style.backgroundColor = "rgb(255,255,0)";
});

let appointment_btn = document.querySelector(".appnt-btn");
let appointment_form = document.querySelector(".apnmt");
let upper_part = document.querySelector(".all-three");
let all = document.querySelector("body");
appointment_btn.addEventListener("click", function () {
  appointment_form.classList.remove("hide-form");
  upper_part.style.opacity = 0.3;
});

let cl_btn = document.querySelector(".close-btn");
cl_btn.addEventListener("click", function () {
  appointment_form.classList.add("hide-form");
  upper_part.style.opacity = 1;
});

//// Form Validation

let date_apmnt = document.querySelector("#date-sel");
let doc_apmnt = document.querySelector("#doc-sel");
let submit_btn = document.querySelector(".submit-form");
let sub_msg = document.querySelector(".submission-msg");
////
let doc_sel = document.getElementById("doc-sel");
let comb1 = document.querySelector(".comb1");
let date_sel = document.getElementById("date-sel");
let comb2 = document.querySelector(".comb2");
let ph = document.getElementById("phone");
let comb3 = document.querySelector(".comb3");
let age = document.getElementById("age");
let comb4 = document.querySelector(".comb4");
let mail = document.getElementById("mail-id");
let comb5 = document.querySelector(".comb5");
let names = document.getElementById("first-name");
let comb6 = document.querySelector(".comb6");
let formelement = document.querySelector(".apmnt-form");
submit_btn.addEventListener("click", function (e) {
  comb1.textContent = "";
  comb2.textContent = "";
  comb3.textContent = "";
  comb4.textContent = "";
  comb5.textContent = "";
  comb6.textContent = "";
  ////name-field
  if (names.value === "") {
    e.preventDefault();
    comb6.textContent = "Required Field☝️";
    return false;
  }
  ////mail-field
  if (mail.value === "") {
    e.preventDefault();
    comb5.textContent = "Required Field☝️";
    return false;
  } else if (!mail.value.includes("@")) {
    e.preventDefault();
    comb5.textContent = "Enter Valid Mail-Id⚠️";
    return false;
  }
  ////age-field
  if (age.value == "") {
    e.preventDefault();
    comb4.textContent = "Required Field☝️";
    return false;
  }
  ////ph-field
  if (ph.value === "") {
    e.preventDefault();
    comb3.textContent = "Required Field☝️";
    return false;
  } else if (!/^\d+$/.test(ph.value) || !(ph.value.length == 10)) {
    e.preventDefault();
    comb3.textContent = "Enter Valid Phone Number⚠️";
    return false;
  }
  ////date-field
  if (date_sel.value == "") {
    e.preventDefault();
    comb2.textContent = "Required Field☝️";
    return false;
  }
  ////doc-field
  if (doc_sel.value == "") {
    e.preventDefault();
    comb1.textContent = "Required Field☝️";
    return false;
  }
  e.preventDefault();
  appointment_form.classList.add("hide-form");
  sub_msg.innerHTML = `<h3>Appointment Confirmed!✅</h3>
  <p>
    Your appointment for ${date_apmnt.value}<br />
    has been confirmed with ${doc_apmnt.value}.
  </p>
  <p>
    For more details check your mail account<br />entered during form
    submission.
  </p>
  <p class="OK" onclick="location.reload();">OK</p>`;
  sub_msg.classList.remove("hide-sub-msg");
});

// Including Map
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function () {
      // const { latitude } = position.coords;
      // const { longitude } = position.coords;
      const coords = [28.617045, 77.2961029];
      const map = L.map("map").setView(coords, 16);

      L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("Cannot fetch location");
    }
  );
}
