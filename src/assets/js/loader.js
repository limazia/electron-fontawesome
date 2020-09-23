$(document).ready(() => {
  $("#loading").show();
  $("#content, #menu").hide();

  const colorList = ["#007bff", "#28a745",   "#dc3545", "#ffc107", "#17a2b8", "#f8f9fa", "#292B2F"]
  const colorRand = colorList[Math.floor(Math.random() * colorList.length)];

  $("#spinner").append(`
    <div class="spinner-grow" style="width: 3rem; height: 3rem; background: ${colorRand};" role="status">
      <span class="sr-only">Carregando...</span>
    </div>
  `);

  setTimeout(() => {
    $.getJSON("icons/fontawesomee.json")
      .done((result) => {
        $("#inputSearch").append(`
          <input
            type="text"
            name="search"
            id="search"
            class="form-control"
            placeholder="Pesquisar ${result.length} icones"
          >
        `);

        var output = "";

        output += `<table class="table table-bordered table-dark text-center" style="border-radius: 5px;">`;
        //output += `<thead>`;
        //output += `<tr>`;
        //output += `<th>Icone</th>`;
        //output += `<th>Nome</th>`;
        //output += `<th>Código</th>`;
        //output += `</tr>`;
        //output += `</thead>`;
        output += `<tbody>`;

        result.sort().forEach((element) => {
          output += `<tr>`;
          output += `<td class="icon-size">`;
          output += `<i class="fa ${element.name}"></i>`;
          output += `<i class="fa ${element.name} fa-lg" title="fa-lg"></i>`;
          output += `<i class="fa ${element.name} fa-2x" title="fa-2x"></i>`;
          output += `<i class="fa ${element.name} fa-3x" title="fa-3x"></i>`;
          output += `<i class="fa ${element.name} fa-4x" title="fa-4x"></i>`;
          output += `<i class="fa ${element.name} fa-5x" title="fa-5x"></i>`;
          output += `</td>`;
          output += `<td>${element.name}</td>`;
          output += `<td><code>&lt;i class="fa ${element.name}"&gt;&lt;/i&gt;</code></td>`;
          output += `</tr>`;
        });

        output += `</tbody>`;
        output += `</table>`;

        $("#table").append(output);
        $("#menu, #content").show();
        $("#loading").hide();
      })
      .fail(() => {
        $("#content, #menu").show();
        $("#loading").hide();
        $("#error").append(`
          <div class="alert alert-dark">
            <h4 class="alert-heading">Calma aí...</h4>
            <p>Ocorreu um erro ao carregar o conteúdo.</p>
          </div>
        `);
      });
  }, 1500);
});