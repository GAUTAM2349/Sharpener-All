
const deleteExpense = async (event,id) => {

    // event.preventDefault();

  try{
    console.log("\n\n\n"+ id+"\n\n\n")
    await axios.delete( `http://localhost:3010/expense/delete-expense/${id}` );
    console.log("\n\n\n DELETED SUCCESSFULLY \n\n");
    

  }catch(error){

    console.log(error);
    
  }
    
}