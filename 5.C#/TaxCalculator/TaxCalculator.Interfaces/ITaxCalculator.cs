using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxCalculator.Interfaces
{
    public interface ITaxCalculator
    {
        double GetGrossTaxIncome(double salary, double investment);
        double CalculateTax(double grossTaxIncome, out string[] result);
        double checkInput(string input);
        bool IsANumber(string input);
    }
}
