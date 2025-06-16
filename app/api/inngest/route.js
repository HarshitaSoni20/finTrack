import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlerts, generateMonthlyReports } from "@/lib/inngest/functions";
import { serve } from "inngest/next"; 
import { triggerRecurringTransactions } from "@/lib/inngest/functions";
import { processRecurringTransaction } from "@/lib/inngest/functions";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [checkBudgetAlerts, triggerRecurringTransactions, processRecurringTransaction, generateMonthlyReports],
});
