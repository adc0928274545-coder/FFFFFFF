
// ==============================
// Future Path v2
// ==============================

const splash = document.getElementById("splash");
const home = document.getElementById("home");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");

const text =
"แอปนี้สามารถแสดงเส้นทางในอนาคตของคุณได้";

let index = 0;

// ==============================
// เปิดแอป
// ==============================

window.onload = function(){

    setTimeout(typeWriter,1200);

}

// ==============================
// พิมพ์ข้อความ
// ==============================

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

    else{

        startBtn.style.opacity="1";
        startBtn.style.pointerEvents="auto";

    }

}

// ==============================
// ไปหน้ากรอกข้อมูล
// ==============================

function showHome(){

    splash.classList.add("hidden");

    home.classList.remove("hidden");

    home.classList.add("fadeIn");

}

// ==============================
// เริ่มวิเคราะห์
// ==============================

function startScan(){

    const name=document.getElementById("fullname").value;
    const birth=document.getElementById("birthday").value;

    if(name=="" || birth==""){

        alert("กรุณากรอกข้อมูลให้ครบ");

        return;

    }

    home.classList.add("hidden");

    loading.classList.remove("hidden");

    loading.classList.add("fadeIn");

    let p=0;

    progressBar.style.width="0%";

    const timer=setInterval(()=>{

        p++;

        percent.innerHTML=p+"%";

        progressBar.style.width=p+"%";

        if(p>=100){

            clearInterval(timer);

            setTimeout(()=>{

                loading.classList.add("hidden");

                result.classList.remove("hidden");

                result.classList.add("fadeIn");

            },500);

        }

    },35);

}

// ==============================
// ดูเส้นทาง
// ==============================

function viewPath(num){

    result.classList.add("hidden");

    if(num===1){

        path1.classList.remove("hidden");
        path1.classList.add("fadeIn");

    }

    else{

        path2.classList.remove("hidden");
        path2.classList.add("fadeIn");

    }

}

// ==============================
// กลับ
// ==============================

function backResult(){

    path1.classList.add("hidden");

    path2.classList.add("hidden");

    result.classList.remove("hidden");

    result.classList.add("fadeIn");

}

// ==============================
// เลือกเส้นทาง
// ==============================

function choosePath(num){

    const ok=confirm(
    "เมื่อเลือกเส้นทางแล้ว จะไม่สามารถย้อนกลับได้\n\nยืนยันหรือไม่ ?");

    if(!ok){

        return;

    }

    alert("คุณเลือกเส้นทางที่ "+num);

}