//AMBIL DATA DARI JSON
$.getJSON("./assets/js/video.json", (data) => {
  let content1 = data.content1;
  let content2 = data.content2;
  let formInput1 = data.form1;
  let formInput2 = data.form2;

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

  //ISI FORM INPUT KIRI
  $.each(formInput1, function (i, data) {
    $("#form-input1").append(`
      <div class="form-group">
        <label for="${data.identitas}">
          <h6>${data.judul} <div style="color: red; display: inline">*</div></h6>
        </label>
        <input type="text" class="form-control" id="${data.identitas}" name="${data.identitas}" />
      </div>
    `);
  });

  //ISI FORM INPUT KANAN
  $.each(formInput2, function (i, data) {
    $("#form-input2").append(`
      <div class="form-group">
        <label for="${data.identitas}">
          <h6>${data.judul} <div style="color: red; display: inline">${data.lambang}</div></h6>
        </label>
        <input type="${data.type}" class="${data.kelas}" id="${data.identitas}" name="${data.identitas}" />
      </div>
    `);
  });
});
