var countSubjectTerm1 = 0;
var countSubjectTerm2 = 0;
var countAll = 0;
var countGradeTerm1 = 0;
var countGradeTerm2 = 0;
var grade1 = 0;
var grade2 = 0;
var grade3 = 0;
var text = 'เกรดที่ได้ :'
var space = " ";

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#submit').disable = true;
    
    document.querySelector('#submit').onclick = function(){
        var listterm1 = document.querySelector('#subject-term1');
        var listterm2 = document.querySelector('#subject-term2');
        var subject = document.querySelector('#subject-name');
        var term = document.querySelector('#subject-term');
        var grade = document.querySelector('#grade');
        var texthtml = text;

        //Create new subject
        var subjectlist = document.createElement('li');
        var list = document.createElement('span');
        list.innerHTML = subject.value + " " + texthtml + " " + grade.value;

        if(term.value == 1 && subject.value != ''){
            if(grade.value == 'A'){
                countGradeTerm1 = countGradeTerm1 + 4;
            }
            if(grade.value == 'B+'){
                countGradeTerm1 = countGradeTerm1 + 3.5;
            }
            if(grade.value == 'B'){
                countGradeTerm1 = countGradeTerm1 + 3;
            }
            if(grade.value == 'C+'){
                countGradeTerm1 = countGradeTerm1 + 2.5;
            }
            if(grade.value == 'C'){
                countGradeTerm1 = countGradeTerm1 + 2;
            }
            if(grade.value == 'D+'){
                countGradeTerm1 = countGradeTerm1 + 1.5;
            }
            if(grade.value == 'D'){
                countGradeTerm1 = countGradeTerm1 + 1;
            }
            if(grade.value == 'F'){
                countGradeTerm1 = countGradeTerm1 + 0;
            }
            subjectlist.append(list);

            listterm1.append(subjectlist);
            subject.value = '';
            countSubjectTerm1++;
            countAll++;
            return false;
        }else if(term.value == 2 && subject.value != ''){
            if(grade.value == 'A'){
                countGradeTerm2 = countGradeTerm2 + 4;
            }
            if(grade.value == 'B+'){
                countGradeTerm2 = countGradeTerm2 + 3.5;
            }
            if(grade.value == 'B'){
                countGradeTerm2 = countGradeTerm2 + 3;
            }
            if(grade.value == 'C+'){
                countGradeTerm2 = countGradeTerm2 + 2.5;
            }
            if(grade.value == 'C'){
                countGradeTerm2 = countGradeTerm2 + 2;
            }
            if(grade.value == 'D+'){
                countGradeTerm2 = countGradeTerm2 + 1.5;
            }
            if(grade.value == 'D'){
                countGradeTerm2 = countGradeTerm2 + 1;
            }
            if(grade.value == 'F'){
                countGradeTerm2 = countGradeTerm2 + 0;
            }
            subjectlist.append(list);
            
            listterm2.append(subjectlist);
            subject.value = '';
            countSubjectTerm2++;
            countAll++;
            return false;
        }else{
            alert('Please insert your subject.');
            return false;
        }
    }

    document.querySelector('#reset').onclick = function(){
        countSubjectTerm1 = 0;
        countSubjectTerm2 = 0;
        countGradeTerm1 = 0;
        countGradeTerm2 = 0;
        countAll = 0;
        subjectlist.removeChild(subjectlist);
    }
    
    document.querySelector('#cal-grade').onclick = function(){
        
        grade1 = countGradeTerm1 / countSubjectTerm1;
        grade2 = countGradeTerm2 / countSubjectTerm2;
        grade3 = (countGradeTerm1 + countGradeTerm2) / countAll;
        if(countSubjectTerm1 != 0){
            document.querySelector('#label-1').innerHTML = grade1;
        }
        if(countSubjectTerm2 != 0){
            document.querySelector('#label-2').innerHTML = grade2;
        }
        if(countAll != 0){
            document.querySelector('#label-3').innerHTML = grade3;
        }
        if(countSubjectTerm1 === 0 && countSubjectTerm2 === 0){
            alert('Please insert your subject');
            return false;
        }
        
        return false;
    }
    
});