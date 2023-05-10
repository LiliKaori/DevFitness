function openForm(form){
   let doc = document.getElementById(form)
    doc.style.display="flex"   
}

function back(form){
    let doc = document.getElementById(form)
     doc.style.display="none"   
 }

 function submit(input, descriptionInput){
    let doc = document.getElementsByTagName(input)
    let text = document.getElementById(descriptionInput)
    if(doc[0].value==='' || doc[1].value==='' || text.value===''){
        return alert('Preencha todos os campos')
    }

    return alert('Obrigada por interagir conosco!')
 }