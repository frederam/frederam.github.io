const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const ROWS = 10;
const COLUMNS = 5;
const FIRST_CHAR_CODE = 65;

const range = (length) => Array.from({ length }, (_, i) => i);

const getColumnLetter = i => String.fromCharCode(i + FIRST_CHAR_CODE);

const renderSpreadSheet = () => {
  const $table = $("table");
  const $thead = $("thead");
  const $tbody = $("tbody");

  const headerHTML = `<tr>
            <th></th>
            ${range(COLUMNS)
              .map((i) => `<th>${getColumnLetter(i)}</th>`)
              .join("")}
        </tr>`;

  $thead.innerHTML = headerHTML;

  const bodyHTML = range(ROWS)
    .map((row) => {
      return `<tr>
            <td>${row + 1}</td>
            ${range(COLUMNS)
              .map(
                (column) => `
                <td data-x="${column}" data-y="${row}" >
                    <span></span>
                    <input type="text" value="" />
                </td>`
              )
              .join("")}
        </tr>`;
    })
    .join("");

  $tbody.innerHTML = bodyHTML;
};

renderSpreadSheet();
