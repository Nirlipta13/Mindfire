using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("Enter First Operand:");
                String operandOne = Console.ReadLine();
                int operand1 = Int32.Parse(operandOne);
                Console.WriteLine("Enter Second Operand:");
                String operandTwo = Console.ReadLine();
                int operand2 = Int32.Parse(operandTwo);
                Console.WriteLine("1.Addition\n2.Substraction\n3.Multilication\n4.Division\n5.Quit");
                Console.WriteLine("Choose An Option");
                String operatorInput = Console.ReadLine();
                int optionSelected = Int32.Parse(operatorInput);
                var displayOperator = "";
                if (optionSelected == 1)
                {
                    displayOperator = "+";
                }
                else if (optionSelected == 2)
                {
                    displayOperator = "-";
                }
                else if (optionSelected == 3)
                {
                    displayOperator = "*";
                }
                else
                {
                    displayOperator = "/";
                }
                var classInstance = new Calculate();
                var result = classInstance.CalculateFunction(operand1, operand2, optionSelected);
                Console.WriteLine("{0}{1}{2}={3}", operand1, displayOperator, operand2, result);
            }
        }
    }
}
