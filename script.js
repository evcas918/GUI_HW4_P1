$(document).ready(function () {
    $("#table-form").validate({
        rules: {
            startRow: { required: true, number: true },
            endRow: { required: true, number: true },
            startCol: { required: true, number: true },
            endCol: { required: true, number: true }
        },
        messages: {
            startRow: "Please enter a valid start row.",
            endRow: "Please enter a valid end row.",
            startCol: "Please enter a valid start column.",
            endCol: "Please enter a valid end column."
        },
        submitHandler: function () {
            const sr = parseInt($("#start-row").val());
            const er = parseInt($("#end-row").val());
            const sc = parseInt($("#start-col").val());
            const ec = parseInt($("#end-col").val());

            if (sr > er || sc > ec) {
                alert("Start values must be less than or equal to end values.");
                return;
            }

            let table = "<table border='1'><tbody><tr><th></th>";
            for (let col = sc; col <= ec; col++) {
                table += `<th>${col}</th>`;
            }
            table += "</tr>";

            for (let row = sr; row <= er; row++) {
                table += `<tr><th>${row}</th>`;
                for (let col = sc; col <= ec; col++) {
                    table += `<td>${row * col}</td>`;
                }
                table += "</tr>";
            }

            table += "</tbody></table>";
            $("#table-container").html(table);
        }
    });
});
