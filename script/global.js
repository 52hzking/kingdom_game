function toggle_panel(elm_id){
    if (document.getElementById(elm_id).classList.contains("hide")){
        document.getElementById(elm_id).classList.remove("hide");
    }else{
        document.getElementById(elm_id).classList.add("hide");
    }
}

function update_content(target_elm,_elm){
    document.getElementById(target_elm).innerHTML = _elm.value.replaceAll('\n','<br>')
}