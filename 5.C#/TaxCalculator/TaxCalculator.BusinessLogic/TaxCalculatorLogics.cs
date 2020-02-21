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
        const double maxExemption = 150000;
        double[] taxRateArray = { 0.05, 0.2, 0.3 };
        double[] minBand = { 250000, 500000, 1000000 };
        double[] maxBand = { 500000, 1000000, double.MaxValue };
        double[] taxAtSlab = { 0, 0, 0 };
        string[] finalTaxAtSlab = new string[3];
        int iterator = 0;
        double remainingAmount = 0, differenceBand = 0;


        /// <summary>
        /// Return the taxable income
        /// </summary>
        /// <param name="salary">User entered salary</param>
        /// <param name="investment">User entered deduction under 80C</param>
        /// <returns>The taxable income</returns>
 
        public double GetGrossTaxIncome(double salary, double investment)
        {
            return (investment < 150000) ? salary - investment : salary - maxExemption;
        }


        /// <summary>
        /// Return the total tax calculated 
        /// </summary>
        /// <param name="grossTaxIncome">Taxable amount calculated</param>
        /// <param name="result">out parameter which stores the tax at each slab</param>
        /// <returns>The total tax calculated and an output parameter containing tax a each slab</returns>
        public double CalculateTax(double grossTaxIncome, out string[] result)
        {
            remainingAmount = grossTaxIncome - 250000;

            while (remainingAmount != 0)
            {
                if (remainingAmount > 0)
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
            return taxAtSlab.Sum();
        }

    }

}
