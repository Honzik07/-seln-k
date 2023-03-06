function removeLastNumber(input) {
    // získání tabulky
    var table = document.getElementById("myTable");

    // získání řádku, ve kterém se nachází vstup
    var row = input.parentNode.parentNode;

    // získání seznamu buněk v řádku
    var cells = row.getElementsByTagName("td");

    // iterace přes každou buňku kromě poslední
    for (var i = 0; i < cells.length - 1; i++) {
        var cell = cells[i];
        var text = cell.textContent.trim();

        // odstranění posledního čísla
        var lastComma = text.lastIndexOf(",");
        if (lastComma >= 0) {
            text = text.substring(0, lastComma);
            cell.textContent = text.trim();
        }
    }

    // přidání další řádky, pokud je poslední řádek prázdný
    var lastRow = table.rows[table.rows.length - 1];
    var lastInput = lastRow.getElementsByTagName("input")[0];
    if (lastInput.value.trim() !== "") {
        var newRow = table.insertRow();
        var newCell = newRow.insertCell();
        newCell.innerHTML = '<input type="number" onblur="removeLastNumber(this)"/>';
    }
}