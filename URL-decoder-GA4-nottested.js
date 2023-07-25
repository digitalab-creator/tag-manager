function getRelativePath() {
  var url = decodeURIComponent(window.location.href);
  var domain = window.location.protocol + "//" + window.location.host;
  var relativePath = url.replace(domain, "");
  return relativePath;
}
