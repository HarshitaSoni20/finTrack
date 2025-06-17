import { getUserAccounts } from "@/actions/dashboard"; // Assuming this path
import { defaultCategories } from "@/data/categories"; // Assuming this path
import React from "react"; // React is imported but might not be strictly needed in a Server Component unless using hooks
import AddTransactionForm from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";



const AddTransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();

  const editId = searchParams?.edit;
  
  console.log(editId);

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title mb-8 font-semibold">{editId?"Edit":"ADD"} Transaction</h1>
  
      
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
         editMode={!!editId}
        initialData={initialData}
       
      /> 
    </div>
  );
};

export default AddTransactionPage;
