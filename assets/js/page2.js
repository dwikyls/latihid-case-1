//AMBIL DATA DARI JSON
$.getJSON("./assets/js/video.json", (data) => {
  let content1 = data.content1;
  let content2 = data.content2;

  //KONTEN CARD PERTAMA
  $.each(content1, function (i, data) {
    $("#content1").append(`
    <div class="col-lg-3 ${data.align} textcenter mb-5 pt-3">
    <div class="w-25 rounded-circle p-3 justify-content-md-center img-thumbnail shadow mxauto">
      <img src="./assets/icon/${data.icon}" class="img-fluid"/>
    </div>
    <div class=" justify-content-md-center">
    <h5 class="card-title">${data.judul}</h5>
    <p class="card-text">${data.deskripsi}</p>
    </div>
  </div>
      `);
  });

  //KONTEN CARD KEDUA
  $.each(content2, function (i, data) {
    $("#content2").append(`
    <div class="card p-2 pt-4 text-center m-4">
    <img src="./assets/icon/${data.icon}" class="rounded mx-auto w-25 img-fluid">
    <div class="card-body">
      <h5 class="card-title">${data.judul}</h5>
      <p class="card-text" style="font-size: 13px;">
        ${data.deskripsi}
      </p>
    </div>
  </div>
      `);
  });
});
