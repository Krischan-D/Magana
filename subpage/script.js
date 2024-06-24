const adminBtn = document.getElementById("toAdmin");
const technicianBtn = document.getElementById("toTechnician");
const clientBtn = document.getElementById("toClient");


adminBtn.onclick = function (){
    window.location.href = "admin.html";
}

technicianBtn.onclick = function (){
    window.location.href = "technician.html";
}

clientBtn.onclick = function (){
    window.location.href = "client.html";
}