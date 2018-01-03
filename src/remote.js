/** -----------------------------------------------------------------------------------------------
 * remote.js
 */

function remote(oper, value){
  var xhr = new XMLHttpRequest;
  var url = location.protocol + "//" + location.host + "//";

  remote = function (oper, value) {
    xhr.open("GET", url, false);
    xhr.setRequestHeader("oper", oper);
    xhr.setRequestHeader("value", encodeURIComponent(value));
    xhr.send();
  }
  return remote(oper, value);
};
