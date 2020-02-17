using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Interfaces;

namespace TaxCalculator.BusinessLogic
{
    public class TaxCalculatorLogics : ITaxCalculator
    {

        public double checkInput(string input)
        {
            while (!IsANumber(input))
            {
                input = Console.ReadLine();
            }
            return double.Parse(input);
        }
        public bool IsANumber(string input)
        {
            try
            {
                double.Parse(input);
                return true;
            }
            catch (Exception)
            {
                Console.WriteLine("INVALID INPUT!! TRY AGAIN");
               
                return false;
            }

        }
        //Function to get the Gross Taxable Amount
        public double GetGrossTaxIncome(double salary, double investment)
        {
            double maxExemption = 150000;
            double grossTaxIncome = (investment < 150000) ? salary - investment : salary - maxExemption;
            return grossTaxIncome;
            
        }


        //Function to calculate tax and display slab wise
        public double CalculateTax(double grossTaxIncome, out string[] result)
        {
            double[] taxRateArray = { 0.05, 0.2, 0.3 };
            double[] minBand = { 250000, 500000, 1000000 };
            double[] maxBand = { 500000, 1000000, double.MaxValue };
            double[] taxAtSlab = { 0, 0, 0 };
            string[] finalTaxAtSlab = new string[3];
            int iterator = 0;
            double remainingAmount = 0, differenceBand = 0;
            remainingAmount = grossTaxIncome - 250000;

            while (remainingAmount != 0)
            {
                if (remainingAmount > 0 )
                {
                    differenceBand = Math.Min(maxBand[iterator] - minBand[iterator], remainingAmount);
                    taxAtSlab[iterator] = differenceBand * taxRateArray[iterator];
                    finalTaxAtSlab[iterator] = taxAtSlab[iterator].ToString("#,#.##", System.Globalization.CultureInfo.CreateSpecificCulture("hi-IN"));
                    remainingAmount = remainingAmount - differenceBand;
                    iterator += 1;
                }
                else
                {
                    for (iterator = 0; iterator < 3; iterator++)
                    {
                        taxAtSlab[iterator] = 0;
                    }
                    break;
                }
            }
            result = finalTaxAtSlab;
            Console.WriteLine("=====================================");
            return taxAtSlab.Sum();
        }

    }


}
