name_of_the_student=[];
function submit(){
    var display_student_array=[];

    for(var j=1; j<=4; j++){
        var student_name=document.getElementById("name_of_the_student_" + j).value;
        console.log(student_name);
        name_of_the_student.push(student_name);
                
            }
            console.log(name_of_the_student);
            var length_store=name_of_the_student.length;
            console.log(length_store);
            
            for(var k=0; k< length_store; k++){
        display_student_array.push("<h4> name- "+ name_of_the_student[k]+"</h4>");
        console.log(display_student_array);
        
            
        
        }
        document.getElementById("display_name_with_commas").innerHTML=display_student_array;
        var remove_comma=display_student_array.join(" ");
        console.log(remove_comma);
        document.getElementById("display_name_without_commas").innerHTML=remove_comma;
        
        document.getElementById("submit_button").style.display="none";
        document.getElementById("sort_button").style.display="inline-block";
        
        }

function sorting(){
name_of_the_student.sort();
console.log(name_of_the_student);
var display_sorting_name=[];
var length_store=name_of_the_student.length;
    console.log(length_store);
    
    for(var k=0; k< length_store; k++){
        display_sorting_name.push("<h4> name- "+ name_of_the_student[k]+"</h4>");
console.log(display_sorting_name);

    

}
document.getElementById("display_name_with_commas").innerHTML=display_sorting_name;
var remove_comma=display_sorting_name.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+ name_of_the_student+"</h1>";
}













