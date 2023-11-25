$(document).ready(() => {
    jQuery.get("input.txt", function (txt) {
        var rows = txt.split(/\r?\n|\r/).slice(1);
        rows.forEach(e => {
            var row = e.split(",");
            var html = `
            <div class="w3-col l3 m6 w3-margin-bottom">
                <div class="img" style="background-image: url(images/` + row[2].trim() + `);"></div>
                <h3>` + row[4].trim() + ` ` + row[3].trim() + `</h3>
                <p class="w3-opacity">Available ` + row[5].trim() + `</p>
                <p class= >Range from Rs ` + row[6].trim() + `</p>
                <p>Contact Specialists <b>` + row[1].trim() + `</b> for more details</p>
                <p name="mobile"><i class="fa-solid fa-phone"></i> ` + row[7].trim() + `</p>
                <p name="mail"><i class="fa-solid fa-envelope"></i> ` + row[8].trim() + `</p>
                <p><button class="w3-button w3-light-grey w3-block pet-contact-button" data-breed="` + row[3].trim() + `">Contact</button></p>
            </div>
            `;
            $(".w3-row-padding.w3-grayscale").append(html);
        });
        $(".pet-contact-button").click(e => {
            var clkBtn = e.target;
            var breed = $(clkBtn).data("breed");
            $(".form #breed").attr("value", breed);
            $(".form-container").css("transform", "translateY(0)");
            $(".form-container").css("opacity", "1");
        });
        $(".form-close-btn").click(e => {
            $(".form #breed").attr("value", "");
            $(".form-container").css("transform", "translateY(-100%)");
            $(".form-container").css("opacity", "0");
        });
    });

});

function btnClicked(e) {
    console.log(e);
}

function menu() {
    var menu = $("div.w3-right")[0];
    if ($(menu).css("display") == "block")
        $(menu).css("display", "none");
    else
        $(menu).css("display", "block");
}