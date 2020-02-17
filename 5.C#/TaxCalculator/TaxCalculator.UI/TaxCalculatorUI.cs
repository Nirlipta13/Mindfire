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
            double inputSalary = 0, inputInvestment = 0, minNum = 0, maxNum = double.MaxValue, value = 0;
            double investmentResult = 0;
            string[] resultSlab = new string[3];
            string finalResultTax, inputStrSalary, inputStrInvestment;


            TaxCalculatorLogics logicObject = new TaxCalculatorLogics();

            //Input from the user
            Console.WriteLine("*****WELCOME TO TAX CALCULATOR APPLICATION*****");
            Console.WriteLine("=================================================");

            Console.WriteLine("\nPROVIDE YOUR ANNUAL GROSS INCOME");
            bool isValid = true;
            while (isValid)
            {
                inputStrSalary = Console.ReadLine();
                if (double.TryParse(inputStrSalary, out value) && value >= minNum && value <= maxNum)
                {
                    inputSalary = value;
                    isValid = false;
                }
                else
                {
                    Console.WriteLine("WRONG INPUT!! RE-ENTER ANNUAL GROSS SALARY");
                    isValid = true;
                }
            }

            isValid = true;

            Console.WriteLine("\nPROVIDE YOUR BASIC DEDUCTION UNDER 80 C");
            while (isValid)
            {
                inputStrInvestment = Console.ReadLine();
                if (double.TryParse(inputStrInvestment, out value) && value >= minNum && value <= maxNum && value <= inputSalary)
                {
                    inputInvestment = value;
                    isValid = false;
                }
                else
                {
                    Console.WriteLine("WRONG INPUT!! RE-ENTER DEDUCTION VALUE");
                    isValid = true;
                }
            }

            Console.Clear();
            Console.WriteLine("\nUSER ENTERED GROSS INCOME : {0}", inputSalary);
            Console.WriteLine("USER ENTERED INVESTMENT : {0}", inputInvestment);
            Console.WriteLine("=================================================");
            Console.WriteLine("\n\n---------------------OUTPUT---------------------");


            //Call the interface methods for tax calculations
            investmentResult = logicObject.GetGrossTaxIncome(inputSalary, inputInvestment);
            Double taxResult = logicObject.CalculateTax(investmentResult, out resultSlab);
            finalResultTax = taxResult.ToString("0,0", System.Globalization.CultureInfo.CreateSpecificCulture("hi-IN"));
            Console.WriteLine("=================================================");
            for (int iterator = 0; iterator < resultSlab.Length; iterator++)
            {
                if (resultSlab[iterator] != null)
                {
                    Console.WriteLine("TAX AT SLAB-{0}:\t{1}", iterator + 1, resultSlab[iterator]);
                }
            }
            Console.WriteLine("=================================================");
            Console.WriteLine("TOTAL TAX AMOUNT:{0}", finalResultTax);
            Console.WriteLine("\nENTER ANY KEY TO EXIT");
            Console.ReadLine();
        }


    }
}

