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
        //Function to get the Gross Taxable Amount
        public double GetGrossTaxIncome(double salary, double investment)
        {
            double maxExemption = 150000;
            double grossTaxIncome = (investment < 150000) ? salary-investment : salary-maxExemption;
            return grossTaxIncome;
        }


        //Function to calculate tax and display slab wise
        public void CalculateTax(double grossTaxIncome)
        {
            double[] taxRateArray = {0.05, 0.2, 0.3 };
            double[] minBand = {250000,500000,1000000};
            double[] maxBand={500000,1000000,double.MaxValue};
            int iterator = 0;
            double totalTax = 0, remainingAmount = 0, differenceBand = 0, taxAtSlab = 0;
            remainingAmount = grossTaxIncome - 250000;
            string finalTaxAmount,finalTaxAtSlab;

            while (remainingAmount != 0 )
            {
                if (remainingAmount > 0)
                {
                    differenceBand = Math.Min(maxBand[iterator] - minBand[iterator], remainingAmount);
                    taxAtSlab = differenceBand * taxRateArray[iterator];
                    finalTaxAtSlab = taxAtSlab.ToString("#,#.##", System.Globalization.CultureInfo.CreateSpecificCulture("hi-IN"));
                    Console.WriteLine("TAX AT SLAB-{0}=Rs.{1}", iterator + 1, finalTaxAtSlab);
                    remainingAmount = remainingAmount - differenceBand;
                    totalTax += taxAtSlab;
                    iterator += 1;
                }
                else
                {
                    totalTax = 0;
                    break;
                }
            }
            Console.WriteLine("=====================================");
            finalTaxAmount = totalTax.ToString("0,0", System.Globalization.CultureInfo.CreateSpecificCulture("hi-IN"));
            Console.WriteLine("TOTAL TAX AMOUNT=Rs.{0}", finalTaxAmount);
        }
       
    }


}
