Template.viewAnimals.helpers({
    animals() {
        return farmdb.find()
    }
})

Template.viewAnimals.events({
    'click .js-edit'(){
        console.warn("Your are editing",this)
        document.querySelector(".editID").value=this._id
        document.querySelector(".editanimalType").value = this.type
        document.querySelector(".editanimalLegs").value =this.numlegs
        $('#editModal').modal('show')
     
    }
    
    
})