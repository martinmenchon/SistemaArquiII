define(["jquery"], function ($) {

    var
        generateHead = function (head) {
            var headRow = "<tr>";
            for (var i = 0; i < head.length; i++)
                headRow += "<th>" + head[i] + "</th>";

            return headRow + "</tr>";
        },
        generateRow = function (arr) {
            var row = "<tr>";
            if(arr.length == 0) {
                row += "<td>" + "-" + "</td>";
            } else {
              var res = "";
              for (var i = 0; i < arr.length; i++)
                res += arr[i] + ", ";

              res = res.slice(0, -2);
              row += "<td>" + res + "</td>";
            }
            return row + "</tr>";
        },

        getBodyTable = function (id) {
            return $(id).children()[0];
        };


    function UiManager(ciclesTbId, plannedId, choosedId) {
        this.ciclesTableId = ciclesTbId;
        this.plannedTableId = plannedId;
        this.choosedTableId = choosedId;
    }

    var getRobAsArray = function (iterations) {
        var columns = [];
        for (var i = 0; i < iterations * 2; i++) {
            columns[i] = (i % 2 == 0) ? "I" : "S";
        }

        return columns;
    }

    UiManager.prototype.constructTables = function () {
        $(getBodyTable(this.ciclesTableId)).html(generateHead(["Ciclos"]));
        $(getBodyTable(this.plannedTableId)).html(generateHead(["Planificables"]));
        $(getBodyTable(this.choosedTableId)).html(generateHead(["Elegidas"]));

        $('tbody tr th').addClass("processor-table-header");
    }

    var getState = function (index, object) {
        var counter = 0;
        for (o in object) {
            if (counter == index)
                return object[o];
            counter++;
        }
        return null;
    }

    UiManager.prototype.addRows = function (cicle, planned, choosed) {
        $(getBodyTable(this.ciclesTableId)).append(generateRow([cicle]));

        $(getBodyTable(this.plannedTableId)).append(
            generateRow(planned)
        );

        $(getBodyTable(this.choosedTableId)).append(
            generateRow(choosed)
        );
    }

     UiManager.prototype.deleteLastRow = function () {
        var table = document.getElementById("cycle-counter-table");
        var rowCount = table.rows.length;
        table.deleteRow(rowCount -1);

        table = document.getElementById("planned-table");
        rowCount = table.rows.length;
        table.deleteRow(rowCount -1);

        table = document.getElementById("choosed-table");
        rowCount = table.rows.length;
        table.deleteRow(rowCount -1);
    }


    return UiManager;
});
