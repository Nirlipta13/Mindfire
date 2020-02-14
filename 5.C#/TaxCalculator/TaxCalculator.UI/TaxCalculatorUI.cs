using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.BusinessLogic;
using TaxCalculator.Interfaces;


namespace TaxCalculator.UI
{
    public class TaxCalculatorUI
    {
        static void Main(string[] args)
        {
            string inputStrSalary, inputStrInvestment;
            double minNum = 0, maxNum = 999999999999, inputSalary = 0, inputInvestment = 0, value;
            double investmentResult = 0;

            //Input from the user
   
                    Console.WriteLine("WELCOME TO TAX CALCULATOR APPLICATION");
                    Console.WriteLine("=====================================");
                    Console.WriteLine("=====================================");

                    bool validateSal = false;
                    while (validateSal==false)
                    {
                        try
                        {
                            Console.WriteLine("PROVIDE YOUR ANNUAL GROSS INCOME");
                            Console.WriteLine("=====================================");
                            inputStrSalary = Console.ReadLine();
                            if (double.TryParse(inputStrSalary, out value) && value > minNum && value <= maxNum)
                            {
                                inputSalary = value;
                                validateSal = true;
                            }
                           
                        }
                        catch (ArgumentNullException e)
                        { 
                            Console.WriteLine("NULL INPUT!! TryAgain ");                          
                        }
                        catch (FormatException e)
                        {                           
                            Console.WriteLine("NOT A NUMBER!! TryAgain");                          
                        }
                        
                    }


                    bool validateInvest = false;
                    while (validateInvest == false)
                    {
                        try
                        {
                            Console.WriteLine("PROVIDE YOUR BASIC DEDUCTION-80 C");
                            Console.WriteLine("=====================================");
                            inputStrInvestment = Console.ReadLine();
                            if (double.TryParse(inputStrInvestment, out value) && value > minNum && value <= inputSalary)
                            {
                                inputInvestment = value;
                                validateInvest = true;
                            }
                        }
                        catch (ArgumentNullException e)
                        {
                            Console.WriteLine("NULL INPUT!! TryAgain ");
                        }
                        catch (FormatException e)
                        {
                            Console.WriteLine("NOT A NUMBER!! TryAgain");
                        }

                    }

                    Console.WriteLine("-------------------------------------");
                    Console.WriteLine("OUTPUT");
                    Console.WriteLine("-------------------------------------");


                    //Call the interface methods for tax calculations
                    TaxCalculatorLogics logicObject = new TaxCalculatorLogics();
                    investmentResult = logicObject.GetGrossTaxIncome(inputSalary, inputInvestment);
                    logicObject.CalculateTax(investmentResult);
                    Console.ReadKey();
    
            
        }

    }
}
