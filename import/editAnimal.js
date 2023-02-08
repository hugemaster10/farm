Template.editAnimal.events({
    'click .js-editanimal'() {
        let eId = document.querySelector(".editID").value
        let type = document.querySelector('.editanimalType').value
        let legs = document.querySelector('.editanimalLegs').value
        console.info("saving edits", eId)
        farmdb.update(
        {_id:eId},
              {$set:{
               '   type':  type,
               'numLegs':  numLegs                                                            
           }}
        )
        
    }
    
})

  