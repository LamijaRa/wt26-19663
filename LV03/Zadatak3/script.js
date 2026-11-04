function tablicaMnozenja(n) {
  document.write("<table>");

  // prvi red: zaglavlja kolona
  document.write("<tr><th>X</th>");
  for (let j = 1; j <= n; j++) {
    document.write("<th>" + j + "</th>");
  }
  document.write("</tr>");

  // ostali redovi
  for (let i = 1; i <= n; i++) {
    // parni redovi dobijaju klasu "paran" (žućkasta boja)
    if (i % 2 === 0) {
      document.write('<tr class="paran">');
    } else {
      document.write("<tr>");
    }

    document.write("<th>" + i + "</th>"); // zaglavlje reda
    for (let j = 1; j <= n; j++) {
      document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
  }

  document.write("</table>");
}

tablicaMnozenja(10);