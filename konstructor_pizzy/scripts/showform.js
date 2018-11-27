function showForm (element_id) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) {
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(element_id);
        //Если css-свойство display не block, то: 
        if (obj.style.display != "block") {
            obj.style.display = "block"; //Показываем элемент
            obj.style.position = this;
        } else obj.style.display = "none"; //Скрываем элемент
    }
}
