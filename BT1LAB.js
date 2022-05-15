"use strict";
var _html = '';
for (var i = 1; i < 2; i++) {
    _html += `<tr>`;
    _html += '<tr>HỌ VÀ TÊN</tr>';
    _html += '<td>Ngô Vũ Thành Lộc';
    _html += '<tr>TUỔI</tr>';
    _html += '<td>19</td>';
    _html += '<tr>GMAIL</tr>';
    _html += '<td>loczngo@gmail.com</td>';
    _html += '<tr>Sở Thích</tr>';
    _html += '<td>None</td>';
    _html += '<tr>Giới Tính</tr>';
    _html += '<td>Nam</td> ';
    _html += `</tr>`;
}
var tbody = document.getElementById('tbody');
tbody.innerHTML = _html;
