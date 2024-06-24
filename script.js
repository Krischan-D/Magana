const adminBtn = document.getElementById("toAdmin");
const technicianBtn = document.getElementById("toTechnician");
const clientBtn = document.getElementById("toClient");


adminBtn.onclick = function (){
    window.location.href = "subpage/admin.html";
}

technicianBtn.onclick = function (){
    window.location.href = "subpage/technician.html";
}

clientBtn.onclick = function (){
    window.location.href = "subpage/client.html";
}