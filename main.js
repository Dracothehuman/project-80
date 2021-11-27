var array_of_names = [];
function submit(){
    var doop = document.getElementById("names").value;
    array_of_names.push(doop);
    console.log(doop);
    console.log(array_of_names);
    var length_of_array=array_of_names.length;
    console.log(length_of_array);
    document.getElementById("display_name").innerHTML = array_of_names.toString();
}
function Display(){
    var i=array_of_names.join("<br>");
    console.log(array_of_names);
    document.getElementById("displayed").innerHTML = i.toString();
    document.getElementById("sort_button").style.display="block";
}
function sorting(){
    var e = array_of_names.sort();
    var i = e.join("<br>");
    console.log(e);
    document.getElementById("sort").innerHTML = i.toString();
}
function search(){
    var abc = document.getElementById("searched").value;
    var found= 0;
    var g;
    for(g=0;g<array_of_names.length;g++){
        if(abc==array_of_names[g]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML = "name found " + found +" times.";
    console.log(found);
}