

var studentinfo = {
    name: 'Ngo Vu Thanh Loc',
    age: 19,
    gmail: 'loczngo@gmail.com',
    hobby: 'none',
    sex: 'nam'
}
var _html = ''


for(var i=1;i<2;i++){
    _html += `<tr>`
    _html += '<tr>HỌ VÀ TÊN</tr>'
    _html += `<td>${studentinfo.name}`
    _html += '<tr>TUỔI</tr>'
    _html += `<td>${studentinfo.age}`
    _html += '<tr>GMAIL</tr>'
    _html += `<td>${studentinfo.gmail}`
    _html += '<tr>Sở Thích</tr>'
    _html += `<td>${studentinfo.hobby}`
    _html += '<tr>Giới Tính</tr>'
    _html += `<td>${studentinfo.sex}`
    _html += `</tr>`
} 
var tbody = document.getElementById('tbody') as HTMLElement
tbody.innerHTML = _html