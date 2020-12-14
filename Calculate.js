document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#submit-subject').disable = true;
    document.querySelector('#submit-term').disable = true;
    document.querySelector('#submit-grade').disable = true;

    document.querySelector('#submit-subject').onclick = function(){
        var subjectnamelist = document.querySelector('#subject-name-list');
        var subjectname = document.querySelector('#subject-name');
        var submitsubject = document.querySelector('#submit-subject');

        //Create new subject
        var cresubjectnamelist = document.createElement('li');
        var cresubject = document.createElement('span');
        cresubject.innerHTML = subjectname.value;

        //Create delete button
        var deleteButtonSubject = document.createElement('button');
        deleteButtonSubject.innerHTML = '\u2713';
        deleteButtonSubject.onclick = function(){
            subjectnamelist.removeChild(cresubjectnamelist);
        } 

        if(subjectname.value.length !== 0){
            //Append Subject to li
            cresubjectnamelist.append(cresubject);
            cresubjectnamelist.append(deleteButtonSubject);

            //Append Subject to li
            subjectnamelist.append(cresubjectnamelist);

            //Reset input
            subjectname.value = '';
            submitsubject.disable = true;
            return false;
        }
        else{
            alert('Please insert your subject.');
            return false;
        }
    }

    document.querySelector('#submit-term').onclick = function(){
        var subjecttermlist = document.querySelector('#subject-term-list');
        var subjectterm = document.querySelector('#subject-term');
        var submitterm = document.querySelector('#submit-term');

        //Create new Term
        var cretermlist = document.createElement('li');
        var creterm = document.createElement('span');
        cretermlist.innerHTML = subjectterm.value;

        //Create delete button
        var deleteButtonTerm = document.createElement('button');
        deleteButtonTerm.innerHTML = '\u2713';
        deleteButtonTerm.onclick = function(){
            subjecttermlist.removeChild(cretermlist);
        } 

        if(subjectterm.value === "1" || subjectterm === "2"){
            //Append Term to li
            cretermlist.append(creterm);
            cretermlist.append(deleteButtonTerm);

            //Append Term to ul
            subjecttermlist.append(cretermlist);

            //Reset input
            subjectterm.value = '';
            submitterm.disable = true;
            return false;
        }
        else{
            subjectterm.value = '';
            submitterm.disable = true;
            alert('Please insert your subject term.');
            return false;
        }
    }

    document.querySelector('#submit-grade').onclick = function(){
        var subjectgradelist = document.querySelector('#subject-grade-list');
        var subjectgrade = document.querySelector('#subject-grade');
        var submitgrade = document.querySelector('#submit-grade');

        //Create new Grade
        var cregradelist = document.createElement('li');
        var cregrade = document.createElement('span');
        cregrade.innerHTML = subjectgrade.value;

        //Create delete button
        var deleteButtonGrade = document.createElement('button');
        deleteButtonGrade.innerHTML = '\u2713';
        deleteButtonGrade.onclick = function(){
            subjectgradelist.removeChild(cregradelist);
        } 

        if(subjectgrade.value === "A" || subjectgrade.value === "B+" || subjectgrade.value === "B" || subjectgrade.value === "C+" || subjectgrade.value === "C" || subjectgrade.value === "D+" || subjectgrade.value === "D" || subjectgrade.value === "F"){
            //Append Subject to li
            cregradelist.append(cregrade);
            cregradelist.append(deleteButtonGrade);

            //Append Subject to li
            subjectgradelist.append(cregradelist);

            //Reset input
            subjectgrade.value = '';
            submitgrade.disable = true;
            return false;
        }
        else{
            subjectgrade.value = '';
            submitgrade.disable = true;
            alert('Please insert your subject grade.');
            return false;
        }
    }
});