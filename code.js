/**
 * https://github.com/patrickhaley/google-sheets-row-insert-formula
 * 
 * Google Apps Script function that automatically inserts specific formulas
 * into Google Sheets when a new row is added to the 'Sheet1' sheet.
 *
 * @param {Object} e - The event object representing the structural change.
 *                     Automatically passed when a change event is detected.
 */

function onChange(e) {
  // Access the active sheet where the change event occurred
  var sheet = e.source.getActiveSheet();

  // Check if the active sheet's name is 'Sheet1' and the type of change is a row insertion
  if (sheet.getName() == "Sheet1" && e.changeType === "INSERT_ROW") {
    // Determine the row number where the change occurred
    var rowNumber = e.source.getActiveRange().getRow();

    // Set a formula in column G (7th column) of the newly added row
    // This formula queries data from the 'Sheet2' sheet based on column B's value in the current row
    sheet
      .getRange(rowNumber, 7)
      .setValue(
        '=ARRAYFORMULA(IFERROR(QUERY(Sheet2!C:G, "SELECT C WHERE G = \'" & B' + rowNumber + ' & "\' LIMIT 1"), ""))'
      );

    // Set a similar formula in column H (8th column) of the newly added row
    // This formula queries a different data set from the 'Sheet2' sheet, also based on column B's value
    sheet
      .getRange(rowNumber, 8)
      .setValue(
        '=ARRAYFORMULA(IFERROR(QUERY(Sheet2!F:G, "SELECT F WHERE G = \'" & B' + rowNumber + ' & "\' LIMIT 1"), ""))'
      );
  }
}