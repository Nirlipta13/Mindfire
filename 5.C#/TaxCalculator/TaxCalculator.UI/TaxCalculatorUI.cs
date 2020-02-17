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
            double inputSalary = 0, inputInvestment = 0;
            double investmentResult = 0;
            string[] resultSlab = new string[3];
            string finalResultTax;

            TaxCalculatorLogics logicObject = new TaxCalculatorLogics();

            //Input from the user

            Console.WriteLine("WELCOME TO TAX CALCULATOR APPLICATION");
            Console.WriteLine("=====================================");
            Console.WriteLine("=====================================");


            Console.WriteLine("PROVIDE YOUR ANNUAL GROSS INCOME");

            inputSalary = logicObject.checkInput(Console.ReadLine());
            while (inputSalary < 0)
            {
                Console.WriteLine("INVALID INPUT!! TRY AGAIN");
                inputSalary = logicObject.checkInput(Console.ReadLine());

            }

            Console.WriteLine("=====================================");
            Console.WriteLine("PROVIDE YOUR BASIC DEDUCTION-80 C");

            inputInvestment = logicObject.checkInput(Console.ReadLine());
            while (inputInvestment<0)
            {
                Console.WriteLine("INVALID INPUT!! TRY AGAIN");
                inputInvestment = logicObject.checkInput(Console.ReadLine());
            }


            Console.Clear();
            Console.WriteLine("----------------OUTPUT----------------");


            //Call the interface methods for tax calculations

            investmentResult = logicObject.GetGrossTaxIncome(inputSalary, inputInvestment);
            Double taxResult = logicObject.CalculateTax(investmentResult, out resultSlab);
            finalResultTax = taxResult.ToString("0,0", System.Globalization.CultureInfo.CreateSpecificCulture("hi-IN"));
            for (int iterator = 0; iterator < resultSlab.Length; iterator++)
            {
                if (resultSlab[iterator] != null)
                {
                    Console.WriteLine("TAX AT SLAB-{0}:{1}", iterator + 1, resultSlab[iterator]);
                }
            }
            Console.WriteLine("=====================================");
            Console.WriteLine("TOTA TAX AMOUNT:{0}", finalResultTax);
            Console.WriteLine("\nENTER ANY KEY TO QUIT");
            Console.ReadLine();

        }

    }
}

