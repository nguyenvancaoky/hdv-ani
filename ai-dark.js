function dl() {
  hide_wallpaper_engine();
  hide_faq();
  $("#card-title").text("Download");
  $("#pills-download").addClass("active");
  $("#download-content").addClass("show active");
}
function hide_download() {
  $("#pills-download").removeClass("active");
  $("#download-content").removeClass("show active");
}
function wallpaper_engine() {
  hide_download();
  hide_faq();
  $("#card-title").text("How To Use This Wallpaper");
  $("#pills-wallpaper_engine").addClass("active");
  $("#we-content").addClass("show active");
}
function hide_wallpaper_engine() {
  $("#pills-wallpaper_engine").removeClass("active");
  $("#we-content").removeClass("show active");
}
function faq() {
  hide_wallpaper_engine();
  hide_download();
  $("#card-title").text("What is Wallpaper Engine?");
  $("#pills-faq").addClass("active");
  $("#faq-content").addClass("show active");
}
function hide_faq() {
  $("#pills-faq").removeClass("active");
  $("#faq-content").removeClass("show active");
}




<div class="col-sm-12">
  <h5 class="mt-4">Basic Pills</h5>
  <hr>
  <ul class="nav nav-pills mb-3" id="pills-tab">
    <li class="nav-item">
      <a class="nav-link active" id="pills-download" href="#download">Download</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-wallpaper_engine" href="#wallpaper_engine">What is Wallpaper Engine?</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-faq" href="#faq">Faq</a>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="download-content">
      <p class="mb-0">DL</p>
    </div>
    <div class="tab-pane fade" id="we-content">
      <p class="mb-0">WE</p>
    </div>
    <div class="tab-pane fade" id="faq-content">
      <p class="mb-0">Faq</p>
    </div>
  </div>
</div>
